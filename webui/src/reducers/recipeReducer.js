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
      if (action.payload.name && action.payload.amount) {
        intialIngredients = [...intialIngredients, action.payload];
        return (state = { ...state, ingredients: intialIngredients });
      } else {
        return state;
      }
    case "INSTRUCTION":
      let intialInstructions = state.instructions;
      let stepNo = state.instructions.length;
      if (action.payload) {
        let instruction = { stepNo: stepNo + 1, stepDesc: action.payload };
        intialInstructions = [...intialInstructions, instruction];
        return (state = { ...state, instructions: intialInstructions });
      } else {
        return state;
      }
    case "IMAGE":
      return (state = { ...state, image: action.payload });

    default:
      return state;
  }
};

export default recipeReducer;
