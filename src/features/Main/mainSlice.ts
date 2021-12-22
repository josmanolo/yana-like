import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import "moment/locale/es";

type TPayload = {
  message: string;
  sender: string;
};

interface BotMsgInitial {
  message: string;
  sender: string;
  firstDate?: string;
}

const date = moment().locale("es").format("ddd DD [de] MMMM [-] h:mma");

const botMessage: BotMsgInitial = {
  message: "Hola Humano ¿Cómo estás?",
  sender: "bot",
  firstDate: date,
};

const initialState = [botMessage];

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<TPayload>) => {
      state.push(action.payload);
    },
    addBotMessage: (state) => {
      state.push({ message: "Hola Humano ¿Cómo estás?", sender: "bot" });
    },
  },
});

export const { addMessage, addBotMessage } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
