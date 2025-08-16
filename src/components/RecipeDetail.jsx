import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-indigo-500 hover:underline">← Back</Link>
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full max-w-xl rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p className="mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p>Step-by-step instructions go here...</p>
    </div>
  );
}
