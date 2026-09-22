import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../store/voteSlice';
import { Link } from 'react-router-dom';
import '../style.css';

function Detail() {
  const selectedTodo = useSelector(state => state.todo.selectedTodo);
  const votes = useSelector(state => state.vote.votes);
  const dispatch = useDispatch();

  if (!selectedTodo) return (
    <div className="container">
      <p>Tidak ada todo dipilih!</p>
      <Link className="back-link" to="/">Kembali</Link>
    </div>
  );

  return (
    <div className="container">
      <h1>Detail Todo</h1>
      <div className="detail-card">
        <p>Judul: <span>{selectedTodo.title}</span></p>
        <p>User: <span>{selectedTodo.user}</span></p>
        <p>Vote: <span>{votes[selectedTodo.id] || 0}</span></p>
        <button
          onClick={() => dispatch(addVote(selectedTodo.id))}
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