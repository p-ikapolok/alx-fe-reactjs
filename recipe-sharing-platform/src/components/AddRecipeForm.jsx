import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }
    alert("Recipe submitted!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <label className="block mb-2 font-semibold">Title</label>
      <input
        type="text"
        className="w-full border rounded-lg p-2 mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Ingredients</label>
      <textarea
        className="w-full border rounded-lg p-2 mb-4"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Steps</label>
      <textarea
        className="w-full border rounded-lg p-2 mb-4"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />

      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
}
