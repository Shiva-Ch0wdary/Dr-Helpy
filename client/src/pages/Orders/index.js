import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../../actions/orderactions";
import Order from "../../components/Orders/Order";
import { Link } from "react-router-dom";

export default function Orders() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.authReducer);
  const orderdata = useSelector((state) => state.orderreducer.data);
  useEffect(() => {
    dispatch(fetchOrders(data.email));
  }, []);
  return (
    <section
      className="h-100"
      style={{ backgroundColor: "#eee", minHeight: "100vh" }}
    >
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div>
              <h3 className="fw-normal mb-0 text-black">My Orders</h3>
            </div>
            {orderdata?.length === 0 ? (
              <p>No product</p>
            ) : (
              <>
                {orderdata?.map((ele, index) => {
                  return <Order order={ele} index={index} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>
      <h5 className="fw-bold mt-2">
        <Link to="/home">
          <i className="fas fa-angle-left me-2"></i>Back to home
        </Link>
      </h5>
    </section>
  );
}
