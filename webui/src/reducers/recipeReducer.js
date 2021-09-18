const recipeObj = {
  recipeName: "",
  ingredients: [],
  instructions: [],
  recipeImage: "",
};
const recipeReducer = (state = recipeObj, action) => {
  switch (action.type) {
    case "RECIPE_TITLE":
      return (state = { ...state, title: action.payload });
    case "INGREDIENT":
      let intialIngredients = state.ingredients;
      intialIngredients = [...intialIngredients, action.payload];
      return (state = { ...state, ingredients: intialIngredients });
    case "INSTRUCTION":
      let intialInstructions = state.instructions;
      intialInstructions = [...intialInstructions, action.payload];
      return (state = { ...state, instructions: intialInstructions });
    case "IMAGE":
      return (state = { ...state, image: action.payload });

    default:
      return state;
  }
};

export default recipeReducer;
