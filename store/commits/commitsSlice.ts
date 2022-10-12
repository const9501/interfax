import {AnyAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {log} from "util";
import {ICommit} from "./types";


interface ICommitsState {
  list: ICommit[],
  status: string,
  error: string | null
}

const initialState:ICommitsState = {
  list: [],
  status: 'idle',
  error: null
}


export const fetchCommits = createAsyncThunk<ICommit[], string>(
  'commits/fetchCommits',
  async function (commitsUrl) {
    const response = await fetch(commitsUrl)
    if (!response.ok) {
      if (response.status === 409) {
        throw new Error('Repository is empty.')
      }
      throw new Error('Error')
    }
    const data = await response.json()
    return data
  }
)

const commitsSlice = createSlice({
  name: 'commits',
  initialState,
  reducers: {
    goToInitialState(state) {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommits.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCommits.rejected, (state, action: AnyAction) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
      .addCase(fetchCommits.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.list = action.payload
      })
  }
})

export default commitsSlice.reducer

export const {goToInitialState} = commitsSlice.actions