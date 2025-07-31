import { useState } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const FilterPanel = () => {
  const [ingredientInput, setIngredientInput] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const setFilters = useRecipeStore(state => state.setFilters);
  const filters = useRecipeStore(state => state.filters);

  const handleAddIngredient = () => {
    if (ingredientInput && !filters.ingredients.includes(ingredientInput)) {
      setFilters({
        ...filters,
        ingredients: [...filters.ingredients, ingredientInput]
      });
      setIngredientInput('');
    }
  };

  const handleRemoveIngredient = (ing) => {
    setFilters({
      ...filters,
      ingredients: filters.ingredients.filter(i => i !== ing)
    });
  };

  const handleTimeChange = (e) => {
    setFilters({
      ...filters,
      maxTime: e.target.value ? Number(e.target.value) : null
    });
  };

  return (
    <div className="filter-panel">
      <div>
        <h4>Filter by Ingredients:</h4>
        <input
          value={ingredientInput}
          onChange={(e) => setIngredientInput(e.target.value)}
          placeholder="Add ingredient"
        />
        <button onClick={handleAddIngredient}>Add</button>
        <div>
          {filters.ingredients.map(ing => (
            <span key={ing} className="ingredient-tag">
              {ing}
              <button onClick={() => handleRemoveIngredient(ing)}>×</button>
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4>Maximum Cooking Time (mins):</h4>
        <input
          type="number"
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}
          onBlur={handleTimeChange}
          placeholder="No limit"
        />
      </div>
    </div>
  );
};

export default FilterPanel;