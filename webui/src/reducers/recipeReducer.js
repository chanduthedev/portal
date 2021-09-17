const recipeObj = {
  recipeName: "",
  ingredients: [],
  instructions: [],
  recipeImage: "",
};
const recipeReducer = (state = recipeObj, action) => {
  switch (action.type) {
    case "RECIPE_NAME":
      return (state = { ...state, recipeName: action.payload });
    case "INGRADIENT":
      let intialIngredients = state.ingredients;
      intialIngredients = [...intialIngredients, action.payload];
      return (state = { ...state, ingredients: intialIngredients });
    case "INSTRUCTION":
      let intialInstructions = state.instructions;
      intialInstructions = [...intialInstructions, action.payload];
      return (state = { ...state, instructions: intialInstructions });
    case "IMAGE":
      return (state = { ...state, recipeImage: action.payload });

    default:
      return state;
  }
};

export default recipeReducer;
