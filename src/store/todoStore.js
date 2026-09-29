import { create } from 'zustand';

// Data awal todo (nilai sebelum ada interaksi pengguna)
const INITIAL_TODOS = [
  { id: 1, title: 'Belajar React', user: 'Budi' },
  { id: 2, title: 'Belajar Zustand', user: 'Siti' },
  { id: 3, title: 'Belajar Router', user: 'Budi' },
];

// Daftar user yang bisa dipilih lewat select di Home
export const USERS = ['Budi', 'Siti'];

// create() membuat satu store global.
// Tidak perlu Provider seperti Context — semua komponen bisa memakai hook ini.
export const useTodoStore = create((set) => ({
  todos: INITIAL_TODOS, // seluruh daftar todo
  currentUser: USERS[0], // user yang SEDANG memakai aplikasi
  votes: {}, // { 1: 3, 2: 0 } → id todo: jumlah vote
  todoItem: null, // todo yang diklik di Home, dibaca di Detail

  // Dipakai oleh select di Home. Mengganti user aktif TIDAK menyaring list,
  // hanya mencatat siapa yang sedang memakai aplikasi.
  setCurrentUser: (user) => set({ currentUser: user }),

  // Tambah 1 vote untuk todo tertentu.
  // set((state) => ...) WAJIB bentuk fungsi supaya bisa membaca nilai lama,
  // sama seperti setVotes(prev => ...) pada useState.
  // Kalau ditulis set({ votes: ... }) tanpa state, votes lama akan ketimpa.
  vote: (todoId) =>
    set((state) => ({
      votes: { ...state.votes, [todoId]: (state.votes[todoId] ?? 0) + 1 },
    })),

  // Simpan todo yang diklik supaya bisa dibaca di halaman detail
  selectTodo: (todo) => set({ todoItem: todo }),
}));
