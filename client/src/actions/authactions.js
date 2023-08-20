import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
  UPDATE_USER,
} from "../constants/actionTypes";
import { LogIn, LogOut, SignUp, UpdateUser } from "../api/index";
import { toast } from "react-toastify";
export const login = (formData, router) => async (dispatch) => {
  try {
    const { data } = await LogIn(formData);
    dispatch({ type: LOGIN, payload: data });
    toast.success("Successfully Logged In 😊");
    router("/home");
  } catch (error) {
    toast.error("Wrong password or Wrong user");
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await SignUp(formData);
    dispatch({ type: SIGNUP, payload: data });
    toast.success("Successfully Signed Up 😊");
    router("/home");
  } catch (error) {
    toast.error(error.response.data);
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const logout = (router) => async (dispatch) => {
  try {
    const data = await LogOut(
      JSON.parse(localStorage.getItem("profile")).refreshToken
    );
    dispatch({ type: LOGOUT });
    toast.success("Successfully Logged Out 😊");
    router("/login");
  } catch (error) {
    dispatch({ type: LOGOUT });
    console.log(error);
  }
};

export const updateuser = (id, formData) => async (dispatch) => {
  try {
    const { data } = await UpdateUser(id, formData);
    dispatch({ type: UPDATE_USER, payload: data });
    toast.success("Successfully Updated 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};
