import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserList, UnBlockUser, BlockUser } from "../../actions/adminactions";
import User from "../../components/Admin/User";
import { Link, NavLink } from "react-router-dom";
import adminStyle from "./admin.module.css";
import { useNavigate, Outlet } from "react-router-dom";
import { logout } from "../../actions/authactions";

export default function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logout(navigate));
  };
  return (
    <>
      <section
        className="h-100 d-flex flex-row p-0 m-0"
        style={{ minHeight: "100vh" }}
      >
        <div className={`h-100 ${adminStyle.dashboard_options}`}>
          <Link
            to="/"
            style={{
              fontWeight: "bolder",
              fontSize: "2.5rem",
              color: "#444",
              textDecoration: "none",
              display: "block",
            }}
          >
            <i className="fa fa-heartbeat" style={{ color: "red" }}></i> Dr.
            Helpy
          </Link>

          <NavLink
            to="/admin/users"
            className={adminStyle.option_link}
            style={({ isActive }) => {
              return { color: isActive ? "#0a58ca" : "" };
            }}
          >
            <i className="fa-solid fa-user"></i>
            Users
          </NavLink>
          <NavLink
            to="/admin/product"
            className={adminStyle.option_link}
            style={({ isActive }) => {
              return { color: isActive ? "#0a58ca" : "" };
            }}
          >
            <i className="fa fa-cube"></i>
            Products
          </NavLink>
          <NavLink
            to="/admin/disease"
            className={adminStyle.option_link}
            style={({ isActive }) => {
              return { color: isActive ? "#0a58ca" : "" };
            }}
          >
            <i className="fas fa-virus"></i>Diseases
          </NavLink>
          <NavLink
            to="/admin/doctor"
            className={adminStyle.option_link}
            style={({ isActive }) => {
              return { color: isActive ? "#0a58ca" : "" };
            }}
          >
            <i className="fas fa-user-md"></i>Doctor
          </NavLink>
        </div>
        <div
          className="h-100"
          style={{ width: "calc(100% - 230px)", minHeight: "100vh" }}
        >
          <div className={adminStyle.header}>
            <div>Dashboard</div>
            <div className={adminStyle.dropdown} style={{ display: "inline" }}>
              <Link
                to="#"
                className="bi bi-person-circle"
                id={adminStyle.toggleclick}
              ></Link>
              <div className={adminStyle["dropdown-content"]}>
                <Link to="/myaccount">My Acount</Link>
                <Link to="" onClick={handleClick}>
                  Logout
                </Link>
                <Link to="/orders">My Orders</Link>
              </div>
            </div>
          </div>
          <div className={adminStyle.body}>
            {" "}
            <Outlet />{" "}
          </div>
        </div>
      </section>
    </>
  );
}
