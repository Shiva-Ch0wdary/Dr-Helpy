import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
  UPDATE_USER,
} from "../constants/actionTypes";
const initialState = {
  loginin: false,
  errors: null,
  id: "",
  fname: "",
  lname: "",
  phno: "",
  email: "",
  admin: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        loginin: true,
        id: action.payload.id,
        fname: action.payload.fname,
        lname: action.payload.lname,
        phno: action.payload.phno,
        email: action.payload.email,
        errors: null,
        admin: action.payload.admin,
      };
    case SIGNUP:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        loginin: true,
        id: action.payload.id,
        fname: action.payload.fname,
        lname: action.payload.lname,
        phno: action.payload.phno,
        email: action.payload.email,
        errors: null,
        admin: action.payload.admin,
      };
    case LOGOUT:
      localStorage.removeItem("profile");
      return {
        ...state,
        loginin: false,
        id: "",
        fname: "",
        lname: "",
        phno: "",
        email: "",
        errors: null,
        admin: false,
      };
    case UPDATE_USER:
      const old_user = JSON.parse(localStorage.getItem("profile"));
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...old_user, ...action.payload })
      );
      return {
        ...state,
        loginin: true,
        fname: action.payload.fname,
        lname: action.payload.lname,
        phno: action.payload.phno,
        errors: null,
      };
    case ERROR:
      return { ...state, error: action.error };
    default:
      if (localStorage.getItem("profile") === null) return state;
      else
        return {
          ...state,
          loginin: true,
          id: JSON.parse(localStorage.getItem("profile")).id,
          fname: JSON.parse(localStorage.getItem("profile")).fname,
          lname: JSON.parse(localStorage.getItem("profile")).lname,
          phno: JSON.parse(localStorage.getItem("profile")).phno,
          email: JSON.parse(localStorage.getItem("profile")).email,
          errors: null,
          admin: JSON.parse(localStorage.getItem("profile")).admin,
        };
  }
}
