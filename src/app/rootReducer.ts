import { combineReducers } from "@reduxjs/toolkit";
import { chatReducer } from "../features/Main/mainSlice";
import { userReducer } from "../features/Register/registerSlice";

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer