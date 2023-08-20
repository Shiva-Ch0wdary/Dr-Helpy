import axios from "axios";
import jwt_decode from "jwt-decode";

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_BASE_URL });
const refreshToken = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/refresh`,
      {
        token: JSON.parse(localStorage.getItem("profile")).refreshToken,
      }
    );
    return {
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
    };
  } catch (err) {
    console.log(err);
  }
};

API.interceptors.request.use(async (req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).accessToken
    }`;
    const currentDate = new Date();
    const decodedToken = jwt_decode(
      JSON.parse(localStorage.getItem("profile")).accessToken
    );
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const data = await refreshToken();
      req.headers["authorization"] = "Bearer " + data.accessToken;
      const newData = JSON.parse(localStorage.getItem("profile"));
      newData.accessToken = data.accessToken;
      newData.refreshToken = data.refreshToken;
      localStorage.setItem("profile", JSON.stringify({ ...newData }));
    } else return req;
  }
  return req;
});

export const fetchProductLists = () => API.get(`/productlist`);
export const fetchDiseaseLists = () => API.get("/disease");
export const fetchUsers = () => API.get("/users");
export const block = (id) => API.post("/block", { id: id });
export const unblock = (id) => API.post("/unblock", { id: id });
export const fetchDiseaseListsById = (id) => API.get(`/disease/${id}`);
export const fetchProductListsById = (id) => API.get(`/productlist/${id}`);
export const LogIn = (formData) => API.post("/login", formData);
export const SignUp = (formData) => API.post("/signup", formData);
export const LogOut = (refreshToken) =>
  API.post("/logout", { token: refreshToken });
export const payment = (order) => API.post("/checkout", { cart: order });
export const confirm = (order, email) =>
  API.post("/confirm", { cart: order, email: email });
export const orders = (email) => API.get(`/orders?email=${email}`);
export const addproduct = (formData) =>
  API.post("/addproduct", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const updateproductimg = (id, formData) =>
  API.put(
    "/updateproductimg",
    { id: id, ...formData },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
export const updateproduct = (id, formData) =>
  API.put(`/updateproduct/${id}`, formData);
export const deleteproduct = (id) =>
  API.delete("/deleteproduct", { data: { id: id } });

export const adddisease = (formData) =>
  API.post("/adddisease", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const updatediseaseimg = (id, formData) =>
  API.put(
    "/updatediseaseimg",
    { id: id, ...formData },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
export const updatedisease = (id, formData) =>
  API.put(`/updatedisease/${id}`, formData);
export const deletedisease = (id) =>
  API.delete("/deletedisease", { data: { id: id } });
export const UpdateUser = (id, formData) =>
  API.put(`/updateuser?id=${id}`, formData);

export const fetchReview = (id) => API.get(`productlist/review/${id}`);
export const addReview = (data) => API.post("productlist/addreview", data);

export const generatesignupotp = (email) => API.post("/otp", { email: email });

export const fetchApprovedDoctors = () => API.get("/doctors/approved");
export const fetchUnApprovedDoctors = () => API.get("/doctors/unapproved");
export const registerDoctor = (formData) =>
  API.post("/doctors/registerdoctor", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const approveDoctor = (id) => API.put("/approve", { id: id });
export const deleteDoctor = (id) =>
  API.delete("/deletedoctor", { data: { id: id } });
