import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import reposReducer from "./repos/reposSlice";
import commitsReducer from "./commits/commitsSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    repos: reposReducer,
    commits: commitsReducer
  }

})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch