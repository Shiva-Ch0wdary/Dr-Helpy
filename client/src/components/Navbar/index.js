import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/authactions";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ styles }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logout(navigate));
  };
  const cartdata = useSelector((state) => state.cartreducer.data);
  return (
    <header className={styles.header}>
      <div className={styles["header-1"]}>
        <Link to="#" className={styles.logo}>
          {" "}
          <i className="fa fa-heartbeat"></i> Dr. Helpy
        </Link>

        <div className={styles.icons}>
          <div id={styles["search-btn"]} className="fas fa-search"></div>

          <Link to="#" className=""></Link>
          <Link to="/cartlist" className="bi bi-cart3">
            <span id={styles["cartno"]}>{cartdata.length}</span>
          </Link>
          <div className={styles.dropdown} style={{ display: "inline" }}>
            <Link
              to="#"
              className="bi bi-person-circle"
              id={styles.toggleclick}
            ></Link>
            <div className={styles["dropdown-content"]}>
              <Link to="/myaccount">My Acount</Link>
              <Link to="" onClick={handleClick}>
                Logout
              </Link>
              <Link to="/orders">My Orders</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["header-2"]}>
        <nav className={styles["navbar"]}>
          <NavLink
            className={({ isActive }) => (isActive ? styles["active"] : "")}
            to="/home"
          >
            home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles["active"] : "")}
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles["active"] : "")}
            to="/doctor"
          >
            doctors
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles["active"] : "")}
            to="/product"
          >
            products
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles["active"] : "")}
            to="/disease"
          >
            disease
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
