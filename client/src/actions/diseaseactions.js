import {
  FETCH_ALL_DISEASELIST,
  FETCH_DISEASELIST_BY_ID,
  START_LOADING,
  END_LOADING,
  ERROR,
  ADD_DISEASE,
  DELETE_DISEASE,
  UPDATE_DISEASE,
  UPDATE_DISEASE_IMAGE,
} from "../constants/actionTypes";
import {
  fetchDiseaseLists,
  fetchDiseaseListsById,
  adddisease,
  deletedisease,
  updatediseaseimg,
  updatedisease,
} from "../api";
import { toast } from "react-toastify";

export const getDiseases = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data = await fetchDiseaseLists();
    dispatch({ type: FETCH_ALL_DISEASELIST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getDiseasesById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data = await fetchDiseaseListsById(id);
    dispatch({ type: FETCH_DISEASELIST_BY_ID, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateDiseaseImage = (id, formData) => async (dispatch) => {
  try {
    const d = await updatediseaseimg(id, formData);
    dispatch({ type: UPDATE_DISEASE_IMAGE, payload: d.data });
    toast.success("Image Updated 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};

export const updateDiseaseDetails = (id, formData) => async (dispatch) => {
  try {
    const d = await updatedisease(id, formData);
    dispatch({ type: UPDATE_DISEASE, payload: d.data });
    toast.success("Details Updated 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};

export const AddDisease = (formData) => async (dispatch) => {
  try {
    const d = await adddisease(formData);
    dispatch({ type: ADD_DISEASE, payload: d.data });
    toast.success("New Disease Added 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};

export const DeleteDisease = (id) => async (dispatch) => {
  try {
    const d = await deletedisease(id);
    dispatch({ type: DELETE_DISEASE, payload: id });
    toast.success("Disease Deleted 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};
