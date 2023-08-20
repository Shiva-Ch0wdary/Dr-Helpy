import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_PRODUCTLIST,
  FETCH_PRODUCTLIST_BY_ID,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_IMAGE,
} from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
};

export default function productreducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case FETCH_ALL_PRODUCTLIST:
      return { ...state, data: action.payload };
    case FETCH_PRODUCTLIST_BY_ID:
      return { ...state, data: action.payload };
    case ADD_PRODUCT:
      return {
        ...state,
        data: { data: [action.payload, ...state.data?.data] },
      };
    case UPDATE_PRODUCT_IMAGE:
      return {
        ...state,
        data: {
          data: [
            action.payload,
            ...state.data?.data.filter(
              (product) => product._id !== action.payload._id
            ),
          ],
        },
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        data: {
          data: [
            action.payload,
            ...state.data?.data.filter(
              (product) => product._id !== action.payload._id
            ),
          ],
        },
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        data: {
          data: state.data?.data.filter(
            (product) => product._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}
