import { FETCH_ALL_REVIEWS } from "../constants/actionTypes";
import { fetchReview } from "../api";

export const fetchreview = (id) => async (dispatch) => {
  try {
    const { data } = await fetchReview(id);
    dispatch({ type: FETCH_ALL_REVIEWS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
