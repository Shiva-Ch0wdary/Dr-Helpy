import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_PRODUCTLIST,
  FETCH_PRODUCTLIST_BY_ID,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ERROR,
  UPDATE_PRODUCT_IMAGE,
  UPDATE_PRODUCT,
} from "../constants/actionTypes";
import {
  fetchProductLists,
  fetchProductListsById,
  addproduct,
  deleteproduct,
  updateproductimg,
  updateproduct,
} from "../api/index";
import { toast } from "react-toastify";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data = await fetchProductLists();
    dispatch({ type: FETCH_ALL_PRODUCTLIST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data = await fetchProductListsById(id);
    dispatch({ type: FETCH_PRODUCTLIST_BY_ID, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateProductImage = (id, formData) => async (dispatch) => {
  try {
    const d = await updateproductimg(id, formData);
    dispatch({ type: UPDATE_PRODUCT_IMAGE, payload: d.data });
    toast.success("Image Updated 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};

export const updateProductDetails = (id, formData) => async (dispatch) => {
  try {
    const d = await updateproduct(id, formData);
    dispatch({ type: UPDATE_PRODUCT, payload: d.data });
    toast.success("Details Updated 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};

export const AddProduct = (formData) => async (dispatch) => {
  try {
    const d = await addproduct(formData);
    dispatch({ type: ADD_PRODUCT, payload: d.data });
    toast.success("Product Added 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};

export const DeleteProduct = (id) => async (dispatch) => {
  try {
    await deleteproduct(id);
    dispatch({ type: DELETE_PRODUCT, payload: id });
    toast.success("Product Deleted 😊");
  } catch (error) {
    dispatch({ type: ERROR, error });
    toast.error("Failed!");
    console.log(error);
  }
};
