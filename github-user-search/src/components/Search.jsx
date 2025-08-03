import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import '../styles/Search.css'; // ✅ Import external CSS

const Search = () => {
  const [form, setForm] = useState({ username: '' });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const result = await fetchUserData(form.username);
      setUser(result);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <h1>GitHub User Search</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter GitHub username"
          />
          <button type="submit">Search</button>
        </form>

        {loading && <div className="spinner" />}

        {error && <p style={{ marginTop: '1rem', color: '#f87171' }}>{error}</p>}

        {user && (
          <div className="result-card">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
