import { createSlice } from '@reduxjs/toolkit';

const voteSlice = createSlice({
  name: 'vote',
  initialState: {
    votes: {}
    // ↑ { 1: 3, 2: 0 } → id todo: jumlah vote
  },
  reducers: {
    addVote: (state, action) => {
      const todoId = action.payload;
      // ↑ terima id todo yang di-vote

      state.votes[todoId] = (state.votes[todoId] || 0) + 1;
      // ↑ tambah 1 vote untuk todo itu
    }
  }
});

export const { addVote } = voteSlice.actions;
export default voteSlice.reducer;