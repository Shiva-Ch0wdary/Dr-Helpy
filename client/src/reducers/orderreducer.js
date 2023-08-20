import { FETCH_ALL_ORDERS } from "../constants/actionTypes";
const initialState = {
  data: [],
};

export default function orderreducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ORDERS:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
}
