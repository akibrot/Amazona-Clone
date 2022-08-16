const initialstate = 0;
const TotalPriceReducer = (state = initialstate, actions) => {
  switch (actions.type) {
    case "ADD_Price":
      return state + actions.payload;
      case "REMOVE_Price":
      return state - actions.payload;
    default:
      return state;
  }
};
export default TotalPriceReducer;
