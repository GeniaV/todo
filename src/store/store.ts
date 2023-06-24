import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    data: todosReducer,
    filter: filterReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
