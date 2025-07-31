import { useState } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [formData, setFormData] = useState(recipe);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Recipe title"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;