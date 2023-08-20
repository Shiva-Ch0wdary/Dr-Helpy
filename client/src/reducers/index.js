import { combineReducers } from "redux";
import productreducer from "./productreducer";
import diseasereducer from "./diseasereducer";
import authReducer from "./authreducer";
import cartreducer from "./cartreducer";
import adminreducer from "./adminreducer";
import orderreducer from "./orderreducer";
import reviewreducer from "./reviewreducer";
import doctorreducer from "./doctorreducer";

export default combineReducers({
  productreducer,
  diseasereducer,
  authReducer,
  cartreducer,
  adminreducer,
  orderreducer,
  reviewreducer,
  doctorreducer,
});
