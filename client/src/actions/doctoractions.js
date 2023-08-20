import {
  fetchApprovedDoctors,
  fetchUnApprovedDoctors,
  approveDoctor as approve,
  deleteDoctor as deleteDoc,
} from "../api";
import {
  START_LOADING,
  END_LOADING,
  FETCH_DOCTOR,
  APPROVE,
  DELETE_DOCTOR,
} from "../constants/actionTypes";
import { toast } from "react-toastify";
export const getDoctors = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const approved_doctors = await fetchApprovedDoctors();
    const unapproved_doctors = await fetchUnApprovedDoctors();
    dispatch({
      type: FETCH_DOCTOR,
      payload: {
        app_doctors: approved_doctors,
        unapp_doctors: unapproved_doctors,
      },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const approveDoctor = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const approved = await approve(id);
    dispatch({ type: APPROVE, payload: approved.data });
    toast.success("Approved 😊");
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    toast.error("Failed!");
  }
};

export const deleteDoctor = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const deleted = await deleteDoc(id);
    dispatch({ type: DELETE_DOCTOR, payload: deleted.data });
    toast.success("Deleted 😊");
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    toast.error("Failed!");
  }
};
