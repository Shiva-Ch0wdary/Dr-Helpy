import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { payall } from "../../actions/cartactions";
import { useNavigate } from "react-router-dom";
import successStyles from "./success.module.css";

export default function Success() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartdata = useSelector((state) => state.cartreducer.data);
  const data = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(payall(cartdata, data.email));
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 1500);
    return () => clearInterval(timeout);
  }, []);

  return (
    <div id={successStyles["success"]}>
      <div className={successStyles["card"]}>
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className={successStyles["checkmark"]}>✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
      </div>
    </div>
  );
}
