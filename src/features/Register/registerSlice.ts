import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string | null;
  email: string | null;
  password: string | null;
  isSuccess: boolean;
}

type TPayload = {
  username: string;
  email: string;
  password: string;
  isSuccess: boolean;
};

const initialState = {
  username: "",
  email: "",
  password: "",
  isSuccess: false,
} as UserState;

const registerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<TPayload>) => {
      return action.payload;
    },
  },
});

export const { register } = registerSlice.actions;
export const userReducer = registerSlice.reducer;
