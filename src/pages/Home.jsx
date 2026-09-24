import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// ↑ useRecoilValue = baca atom (seperti useSelector)
// ↑ useRecoilState = baca + tulis atom (mirip useState tapi global)
// ↑ useSetRecoilState = tulis atom (seperti dispatch)

import { todoListAtom, todoItemAtom, voteAtom } from '../store/atoms';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

function Home() {
  const todos = useRecoilValue(todoListAtom);
  // ↑ ambil daftar todo dari atom

  const [votes, setVotes] = useRecoilState(voteAtom);
  // ↑ baca + tulis counter vote dari atom

  const setTodoItem = useSetRecoilState(todoItemAtom);
  // ↑ tulis todo yang dipilih ke atom

  const [user, setUser] = useState('Semua');
  const navigate = useNavigate();

  const filteredTodos = user === 'Semua'
    ? todos
    : todos.filter(todo => todo.user === user);

  function handleClick(todo) {
    setTodoItem(todo); // ← simpan todo yang diklik ke atom
    navigate('/detail');
  }

  function handleVote(todoId) {
    // ↑ tambah 1 vote untuk todo itu (update atom)
    setVotes(prev => ({
      ...prev,
      [todoId]: (prev[todoId] || 0) + 1,
    }));
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
            <button onClick={() => handleVote(todo.id)}>
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