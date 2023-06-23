import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
  todos: TTodo[],
};

export type TTodo = {
  text: string,
  id: string,
  done: boolean,
};

const initialState: TTodos = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TTodo>) {
      if(state.todos.length < 100) {
        state.todos.push(action.payload);
      } else {
        return;
      };
    },
    complete(state, action: PayloadAction<TTodo>) {
      const completed = state.todos.find((item) => item.id === action.payload.id);
      if(completed) {
        completed.done = !action.payload.done;
      }
    },
    editTodo(state, action: PayloadAction<TTodo>) {
      const editedTodo = state.todos.find((item) => item.id === action.payload.id);
      if(editedTodo) {
        editedTodo.text = action.payload.text;
      }
    },
  }
});

export const { addTodo, complete, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
