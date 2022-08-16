const inistate = {
  product: [
  
  ],
};

const ProductReducer = (state = inistate, actions) => {
  switch (actions.type) {
    case "Add_To_Products":
      return {...state,product:actions.payload};
    default:
      return state;
  }
};
export default ProductReducer;
