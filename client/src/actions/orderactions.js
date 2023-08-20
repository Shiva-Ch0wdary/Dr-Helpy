import { FETCH_ALL_ORDERS } from "../constants/actionTypes";
import { orders } from "../api";

export const fetchOrders = (email) => async (dispatch) => {
  const { data } = await orders(email);
  dispatch({ type: FETCH_ALL_ORDERS, payload: data });
};
