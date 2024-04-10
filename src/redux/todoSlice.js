// todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for todos
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.name !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.name === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
