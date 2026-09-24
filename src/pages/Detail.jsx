import { useRecoilState, useRecoilValue } from 'recoil';
// ↑ baca atom todoItem (todo yang dipilih di Home)
// ↑ baca + tulis atom vote (counter yang sama dengan Home)

import { todoItemAtom, voteAtom } from '../store/atoms';
import { Link } from 'react-router-dom';
import '../style.css';

function Detail() {
  const selectedTodo = useRecoilValue(todoItemAtom);
  const [votes, setVotes] = useRecoilState(voteAtom);

  if (!selectedTodo) return (
    <div className="container">
      <p>Tidak ada todo dipilih!</p>
      <Link className="back-link" to="/">Kembali</Link>
    </div>
  );

  function handleVote() {
    // ↑ tambah 1 vote (update atom yang sama dengan Home)
    setVotes(prev => ({
      ...prev,
      [selectedTodo.id]: (prev[selectedTodo.id] || 0) + 1,
    }));
  }

  return (
    <div className="container">
      <h1>Detail Todo</h1>
      <div className="detail-card">
        <p>Judul: <span>{selectedTodo.title}</span></p>
        <p>User: <span>{selectedTodo.user}</span></p>
        <p>Vote: <span>{votes[selectedTodo.id] || 0}</span></p>
        <button
          onClick={handleVote}
          style={{ marginTop: '10px' }}
        >
          Vote
        </button>
      </div>
      <Link className="back-link" to="/">Kembali</Link>
    </div>
  );
}

export default Detail;