// src/features/todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
   name: "todos",
   initialState: { list: [] },
   reducers: {
      addTodo: (state, action) => {
         state.list.push(action.payload);
      },

      completeTodo: (state, action) => {
         const todo = state.list.find((todo) => todo.id === action.payload);
         if (todo) todo.isCompleted = !todo.isCompleted;
      },

      deleteTodo: (state, action) => {
         state.list = state.list.filter((todo) => todo.id !== action.payload);
      },
   },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
