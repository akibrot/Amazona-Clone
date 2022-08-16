export const Add_To_Products = (payload) => {
  return {
    type: "Add_To_Products",
    payload: payload,
  };
};

export const Add_To_Cart = (payload) => {
  return {
    type: "Add_To_Cart",
    payload: payload,
  };
};

export const ADD_Price = (payload) => {
  return {
    type: "ADD_Price",
    payload: payload,
  };
};
export const REMOVE_Price = (payload) => {
  return {
    type: "REMOVE_Price",
    payload: payload,
  };
};
export const Remove_From_Cart = (payload) => {
  return {
    type: "Remove_From_Cart",
    payload: payload,
  };
};
