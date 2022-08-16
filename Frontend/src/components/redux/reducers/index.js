import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
import TotalPriceReducer from "./TotalPriceReducer";
const allreducers = combineReducers({
  CartReducer: CartReducer,
  ProductReducer: ProductReducer,
  TotalPriceReducer: TotalPriceReducer,
});
export default allreducers;
