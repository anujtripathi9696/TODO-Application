// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// Configure the Redux store with the todo reducer
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Save the state to local storage whenever it changes
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});

export default store;
