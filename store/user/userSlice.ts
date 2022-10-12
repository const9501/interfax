import {AnyAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "./types";


interface IUserState {
  profile: IUser | null
  status: string
  error: string | null
}

const initialState: IUserState = {
  profile: null,
  status: 'idle',
  error: null
}


export const fetchUser = createAsyncThunk<IUser, string>(
  'user/fetchUser',
  async function (login) {
    const response = await fetch(`https://api.github.com/users/${login}`)
    if (!response.ok) {
      throw new Error('Something\'s wrong, try again')
    }
    const data = await response.json()
    return data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUser.rejected, (state, action: AnyAction) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.profile = action.payload
      })
  }
})

export default userSlice.reducer