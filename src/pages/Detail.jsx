import { Link } from 'react-router-dom';
import { useTodoStore } from '../store/todoStore';
import '../style.css';

function Detail() {
  // Semua hook HARUS dipanggil sebelum return apa pun (aturan rules-of-hooks).
  const todoItem = useTodoStore((s) => s.todoItem);
  const votes = useTodoStore((s) => s.votes);
  const currentUser = useTodoStore((s) => s.currentUser);
  const vote = useTodoStore((s) => s.vote);

  // Todo diambil dari store yang sama dengan Home, bukan dari URL atau API.
  // Kalau halaman di-refresh, store di-reset sehingga todoItem jadi null.
  if (!todoItem) {
    return (
      <div className="container">
        <p>Tidak ada todo dipilih!</p>
        <Link className="back-link" to="/">
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Detail Todo</h1>

      <div className="detail-card">
        <p>
          Judul: <span>{todoItem.title}</span>
        </p>
        <p>
          Ditugaskan ke: <span>{todoItem.user}</span>
        </p>
        <p>
          Vote: <span>{votes[todoItem.id] ?? 0}</span>
        </p>
        <p>
          Sedang dipakai oleh: <span>{currentUser}</span>
        </p>

        {/* Action vote yang sama dengan di Home, jadi counter langsung sinkron
            tanpa perlu kirim data apa pun antar halaman. */}
        <button onClick={() => vote(todoItem.id)}>Vote</button>
      </div>

      <Link className="back-link" to="/">
        Kembali
      </Link>
    </div>
  );
}

export default Detail;
