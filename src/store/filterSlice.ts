import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  filter: 'All',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectOption(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  }
});

export const { selectOption } = filterSlice.actions;

export default filterSlice.reducer;
