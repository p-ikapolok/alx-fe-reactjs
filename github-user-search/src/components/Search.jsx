import React, { useState } from 'react';
import { searchUsers } from '../services/githubService'; // Use search API
import '../styles/Search.css'; // ✅ Keep using external CSS

const Search = () => {
  const [form, setForm] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  
  const result = await searchUsers({
  username: form.username,
  location: form.location,
  minRepos: form.minRepos,
 });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      let query = form.username;
      if (form.location) query += `+location:${form.location}`;
      if (form.minRepos) query += `+repos:>=${form.minRepos}`;

      const result = await searchUsers(query);
      setUsers(result.items);
    } catch (err) {
      console.error(err);
      setError("Looks like we can't find the user(s)");
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
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location (optional)"
          />
          <input
            type="number"
            name="minRepos"
            value={form.minRepos}
            onChange={handleChange}
            placeholder="Min Repositories (optional)"
          />
          <button type="submit">Search</button>
        </form>

        {loading && <div className="spinner" />}

        {error && <p style={{ marginTop: '1rem', color: '#f87171' }}>{error}</p>}

        {users.length > 0 && (
          <div className="results-list">
            {users.map((user) => (
              <div key={user.id} className="result-card">
                <img src={user.avatar_url} alt={user.login} />
                <h2>{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3b82f6' }}
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
