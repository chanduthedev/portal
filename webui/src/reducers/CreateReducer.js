const recipeObj = {
  recipeName: "",
  ingredients: [],
  instructions: [],
  recipeImage: "",
};
const CreateReducer = (state = recipeObj, action) => {
  switch (action.type) {
    case "RECIPE_NAME":
      return (state = { ...state, recipeName: action.payload });
    case "ING_NAME_QUANTITY":
      let intialIngredients = state.ingredients;
      intialIngredients = [...intialIngredients, action.payload];
      return (state = { ...state, ingredients: intialIngredients });
    case "STEPNUM_DESC":
      let intialInstructions = state.instructions;
      intialInstructions = [...intialInstructions, action.payload];
      return (state = { ...state, instructions: intialInstructions });

    default:
      return state;
  }
};

export default CreateReducer;
