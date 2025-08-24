import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("⚠️ All fields are required!");
      return;
    }

    setError("");
    console.log("User Registered (Controlled):", formData);

    alert("✅ User registered successfully (Controlled)!");
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Controlled Registration Form
      </h2>

      {error && (
        <p className="text-red-500 mb-2 font-medium">{error}</p>
      )}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Register
      </button>
    </form>
  );
}
