import { useSelector, useDispatch } from 'react-redux';
// ↑ useSelector = ambil data dari store
// ↑ useDispatch = kirim aksi ke store

import { setSelectedTodo } from '../store/todoSlice';
import { addVote } from '../store/voteSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

function Home() {
  const todos = useSelector(state => state.todo.todos);
  const votes = useSelector(state => state.vote.votes);
  // ↑ ambil data dari store

  const dispatch = useDispatch();
  // ↑ untuk kirim aksi ke store

  const [user, setUser] = useState('Semua');
  const navigate = useNavigate();

  const filteredTodos = user === 'Semua'
    ? todos
    : todos.filter(todo => todo.user === user);

  function handleClick(todo) {
    dispatch(setSelectedTodo(todo)); // ← kirim aksi ke store
    navigate('/detail');
  }

  return (
    <div className="container">
      <h1>Todo List</h1>

      <select onChange={(e) => setUser(e.target.value)}>
        <option value="Semua">Semua User</option>
        <option value="Budi">Budi</option>
        <option value="Siti">Siti</option>
      </select>

      {filteredTodos.map(todo => (
        <div className="todo-item" key={todo.id}>
          <div>
            <p className="todo-title">{todo.title}</p>
            <p className="todo-user">{todo.user}</p>
          </div>
          <div className="vote-section">
            <span className="vote-count">{votes[todo.id] || 0}</span>
            <button onClick={() => dispatch(addVote(todo.id))}>
              Vote
            </button>
            <button
              onClick={() => handleClick(todo)}
              style={{ background: '#28a745' }}
            >
              Lihat Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;