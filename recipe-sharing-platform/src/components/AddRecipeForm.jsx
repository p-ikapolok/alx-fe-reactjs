import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please list at least 2 ingredients (comma-separated)";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.substring(0, 60) + "...",
      image: "https://via.placeholder.com/300x200",
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: steps.split("\n"),
    };

    console.log("✅ New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Add New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <label className="block font-semibold mb-2 md:mb-0 md:w-1/3">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:w-2/3 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
        </div>
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        {/* Ingredients */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-4">
          <label className="block font-semibold mb-2 md:mb-0 md:w-1/3">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full md:w-2/3 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            placeholder="Enter ingredients separated by commas"
            rows="3"
          ></textarea>
        </div>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}

        {/* Preparation Steps */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-4">
          <label className="block font-semibold mb-2 md:mb-0 md:w-1/3">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full md:w-2/3 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            placeholder="Write each step on a new line"
            rows="5"
          ></textarea>
        </div>
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
