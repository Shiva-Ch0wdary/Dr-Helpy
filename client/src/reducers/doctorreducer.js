import {
  START_LOADING,
  END_LOADING,
  FETCH_DOCTOR,
  APPROVE,
  DELETE_DOCTOR,
} from "../constants/actionTypes";

const initialState = {
  data1: [],
  data2: [],
  loading: false,
};

export default function doctorreducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case FETCH_DOCTOR:
      return {
        ...state,
        data1: action.payload.app_doctors,
        data2: action.payload.unapp_doctors,
      };
    case APPROVE:
      return {
        ...state,
        data1: { data: [action.payload, ...state.data1?.data] },
        data2: {
          data: state.data2?.data.filter(
            (doctor) => doctor._id !== action.payload._id
          ),
        },
      };
    case DELETE_DOCTOR:
      return {
        ...state,
        data1: {
          data: state.data1?.data.filter(
            (doctor) => doctor._id !== action.payload._id
          ),
        },
        data2: {
          data: state.data2?.data.filter(
            (doctor) => doctor._id !== action.payload._id
          ),
        },
      };
    default:
      return state;
  }
}
