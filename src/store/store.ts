import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

const store = configureStore({
  reducer: todosReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
