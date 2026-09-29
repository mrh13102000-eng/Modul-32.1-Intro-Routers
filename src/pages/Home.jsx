import { useNavigate } from 'react-router-dom';
import { useTodoStore, USERS } from '../store/todoStore';
import '../style.css';

function Home() {
  const navigate = useNavigate();

  // useTodoStore((s) => s.nama) = selector.
  // Hanya komponen yang memakai selector ini yang re-render saat nilainya berubah,
  // jadi lebih hemat dibanding Provider Context.
  const todos = useTodoStore((s) => s.todos);
  const votes = useTodoStore((s) => s.votes);
  const currentUser = useTodoStore((s) => s.currentUser);
  const vote = useTodoStore((s) => s.vote);
  const selectTodo = useTodoStore((s) => s.selectTodo);
  const setCurrentUser = useTodoStore((s) => s.setCurrentUser);

  function handleClick(todo) {
    // Simpan todo yang diklik ke store, lalu pindah halaman.
    // Detail membacanya dari store yang sama — tidak fetch ulang.
    selectTodo(todo);
    navigate('/detail');
  }

  function handleVote(event, todoId) {
    // stopPropagation() wajib: tanpa ini, klik tombol Vote ikut memicu
    // onClick baris item dan user ikut terkirim ke halaman detail.
    event.stopPropagation();
    vote(todoId);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>

      <label className="user-label" htmlFor="user-select">
        Sedang dipakai oleh
      </label>
      <select
        id="user-select"
        // value + onChange = controlled input, mengikuti nilai di store
        value={currentUser}
        onChange={(event) => setCurrentUser(event.target.value)}
      >
        {USERS.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>

      {todos.map((todo) => (
        // onClick diletakkan di baris item, bukan di dalam tombol,
        // supaya seluruh baris bisa diklik sesuai soal.
        <div className="todo-item" key={todo.id} onClick={() => handleClick(todo)}>
          <div>
            <p className="todo-title">{todo.title}</p>
            <p className="todo-user">oleh {todo.user}</p>
          </div>

          <div className="vote-section">
            {/* Pakai ?? bukan ||: kalau vote-nya 0, || akan fallback dan
                menampilkan nilai yang salah. */}
            <span className="vote-count">{votes[todo.id] ?? 0}</span>
            <button onClick={(event) => handleVote(event, todo.id)}>Vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
