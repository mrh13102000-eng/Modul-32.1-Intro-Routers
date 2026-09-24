import { atom } from 'recoil';

export const todoListAtom = atom({
  key: 'todoList',
  default: [
    { id: 1, title: "Belajar React", user: "Budi" },
    { id: 2, title: "Belajar Redux", user: "Siti" },
    { id: 3, title: "Belajar Router", user: "Budi" },
  ],
  // ↑ daftar todo (nilai awal)
});

export const todoItemAtom = atom({
  key: 'todoItem',
  default: null,
  // ↑ todo yang sedang diklik/dipilih (null = belum ada)
});

export const voteAtom = atom({
  key: 'vote',
  default: {},
  // ↑ { 1: 3, 2: 0 } → id todo: jumlah vote
});