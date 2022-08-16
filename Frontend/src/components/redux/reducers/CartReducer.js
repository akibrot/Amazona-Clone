const initialState = [];

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Add_To_Cart":
      return [...state, payload];
    case "Remove_From_Cart":
      return state=state.filter((datas)=>datas.id!==payload);

    default:
      return state;
  }
};
export default CartReducer;
