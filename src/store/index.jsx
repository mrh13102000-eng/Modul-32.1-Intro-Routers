import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import voteReducer from './voteSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    vote: voteReducer,
  }
});

export default store;