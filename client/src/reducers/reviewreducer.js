import {
  FETCH_ALL_REVIEWS,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
};

export default function reviewreducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case FETCH_ALL_REVIEWS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
