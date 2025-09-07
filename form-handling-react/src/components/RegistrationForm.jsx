import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}                   {/* ✅ controlled */}
          onChange={(e) => setUsername(e.target.value)}  {/* ✅ updates state */}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}                      {/* ✅ controlled */}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}                   {/* ✅ controlled */}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
