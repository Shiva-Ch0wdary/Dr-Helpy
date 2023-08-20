import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_USERS,
  BLOCK,
  UNBLOCK,
} from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
};

export default function adminreducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case FETCH_ALL_USERS:
      return { ...state, data: action.payload };
    case BLOCK:
      const newStateDataBlock = state.data;
      for (let i = 0; i < newStateDataBlock.length; i++) {
        if (newStateDataBlock[i].id === action.payload) {
          newStateDataBlock[i].allow = false;
        }
      }
      return { data: [...newStateDataBlock], loading: false };
    case UNBLOCK:
      const newStateDataUnBlock = state.data;
      for (let i = 0; i < newStateDataUnBlock.length; i++) {
        if (newStateDataUnBlock[i].id === action.payload) {
          newStateDataUnBlock[i].allow = true;
        }
      }
      return { data: [...newStateDataUnBlock], loading: false };
    default:
      return state;
  }
}
