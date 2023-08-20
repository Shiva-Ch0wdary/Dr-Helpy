import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Diseases from "./pages/Diseases";
import DiseaseInfo from "./pages/Diseases/diseaseInfo";
import ProductInfo from "./pages/Products/productInfo";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import MyAccount from "./pages/MyAccount";
import CartList from "./pages/CartList";
import Admin from "./pages/Admin";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import Doctors from "./pages/Doctors";
import Dashboard from "./pages/Admin/Dashboard";
import ProductS from "./pages/Admin/Product";
import Users from "./pages/Admin/Users";
import DiseaseS from "./pages/Admin/Disease";
import DoctorRegister from "./pages/DoctorRegister";
import DoctorS from "./pages/Admin/Doctor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loginin, admin } = useSelector((state) => state.authReducer);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!loginin ? <Landing /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!loginin ? <Signup /> : <Navigate to="/home" />}
        />
        <Route
          path="/registration"
          element={!loginin ? <DoctorRegister /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={!loginin ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={loginin ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/about"
          element={loginin ? <About /> : <Navigate to="/" />}
        />
        <Route
          path="/product"
          element={loginin ? <Products /> : <Navigate to="/" />}
        />
        <Route
          path="/product/:id"
          element={loginin ? <ProductInfo /> : <Navigate to="/" />}
        />
        <Route
          path="/disease"
          element={loginin ? <Diseases /> : <Navigate to="/" />}
        />
        <Route
          path="/disease/:id"
          element={loginin ? <DiseaseInfo /> : <Navigate to="/" />}
        />
        <Route
          path="/myaccount"
          element={loginin ? <MyAccount /> : <Navigate to="/" />}
        />
        <Route
          path="/cartlist"
          element={loginin ? <CartList /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={loginin && admin ? <Admin /> : <Navigate to="/home" />}
        >
          <Route path="" element={<Navigate to="users" replace />} />
          <Route path="product" element={<ProductS />} />
          <Route path="users" element={<Users />} />
          <Route path="disease" element={<DiseaseS />} />
          <Route path="doctor" element={<DoctorS />} />
        </Route>
        <Route
          path="/orders"
          element={loginin ? <Orders /> : <Navigate to="/" />}
        />
        <Route
          path="/doctor"
          element={loginin ? <Doctors /> : <Navigate to="/" />}
        />
        <Route
          path="success"
          element={loginin ? <Success /> : <Navigate to="/home" />}
        />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
