import {AnyAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRepo} from "./types";




interface IReposState {
  list: IRepo[],
  status: string,
  error: string | null
}

const initialState:IReposState = {
  list: [],
  status: 'idle',
  error: null
}


export const fetchRepos = createAsyncThunk<IRepo[], string>(
  'repos/fetchRepos',
  async function (reposUrl) {
    const response = await fetch(reposUrl)
    if (!response.ok) {
      throw new Error('Error')
    }
    const data = await response.json()
    return data
  }
)

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    goToInitialState(state) {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchRepos.rejected, (state, action: AnyAction) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.list = action.payload
      })
  }
})

export default reposSlice.reducer

export const {goToInitialState} = reposSlice.actions