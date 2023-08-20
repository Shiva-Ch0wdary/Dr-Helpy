import {
  ADD_TO_CART,
  DELETE_CART,
  DESC,
  INC,
  EMPTY_CART,
} from "../constants/actionTypes";
const initialState = {
  data: [],
};

export default function cartreducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newData_add = [...state.data];
      newData_add.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(newData_add));
      return { ...state, data: newData_add };
    case DELETE_CART:
      const newData_delete = [...state.data].filter(
        (ele) => ele._id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(newData_delete));
      return { ...state, data: newData_delete };
    case INC:
      const newData_inc = [...state.data];
      for (let i = 0; i < newData_inc.length; i++) {
        if (newData_inc[i]._id === action.payload.id) {
          newData_inc[i].quantity += 1;
        }
      }
      localStorage.setItem("cart", JSON.stringify(newData_inc));
      return { ...state, data: newData_inc };
    case DESC:
      const newData_desc = [...state.data];
      for (let i = 0; i < newData_desc.length; i++) {
        if (newData_desc[i]._id === action.payload.id) {
          newData_desc[i].quantity -= 1;
        }
      }
      localStorage.setItem("cart", JSON.stringify(newData_desc));
      return { ...state, data: newData_desc };
    case EMPTY_CART:
      localStorage.removeItem("cart");
      return { data: [] };
    default:
      if (localStorage.getItem("cart") === null) return state;
      else return { ...state, data: JSON.parse(localStorage.getItem("cart")) };
  }
}
