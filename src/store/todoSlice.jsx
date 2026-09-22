import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      { id: 1, title: "Belajar React", user: "Budi" },
      { id: 2, title: "Belajar Redux", user: "Siti" },
      { id: 3, title: "Belajar Router", user: "Budi" },
    ],
    selectedTodo: null,
  },
  reducers: {
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
      // ↑ simpan todo yang dipilih
    }
  }
});

export const { setSelectedTodo } = todoSlice.actions;
export default todoSlice.reducer;