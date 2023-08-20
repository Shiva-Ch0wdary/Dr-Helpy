import {
  FETCH_ALL_DISEASELIST,
  FETCH_DISEASELIST_BY_ID,
  START_LOADING,
  END_LOADING,
  ADD_DISEASE,
  DELETE_DISEASE,
  UPDATE_DISEASE,
  UPDATE_DISEASE_IMAGE,
} from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
};

export default function diseasereducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case FETCH_ALL_DISEASELIST:
      return { ...state, data: action.payload };
    case FETCH_DISEASELIST_BY_ID:
      return { ...state, data: action.payload };
    case ADD_DISEASE:
      return {
        ...state,
        data: { data: [action.payload, ...state.data?.data] },
      };
    case UPDATE_DISEASE_IMAGE:
      return {
        ...state,
        data: {
          data: [
            action.payload,
            ...state.data?.data.filter(
              (disease) => disease._id !== action.payload._id
            ),
          ],
        },
      };
    case UPDATE_DISEASE:
      return {
        ...state,
        data: {
          data: [
            action.payload,
            ...state.data?.data.filter(
              (disease) => disease._id !== action.payload._id
            ),
          ],
        },
      };
    case DELETE_DISEASE:
      return {
        ...state,
        data: {
          data: state.data?.data.filter(
            (disease) => disease._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}
