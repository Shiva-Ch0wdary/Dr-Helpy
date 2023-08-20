import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletecart, inc, desc } from "../../actions/cartactions";
import { payment } from "../../api";
import Cart from "../../components/CartList/Cart";
import { Link } from "react-router-dom";

export default function CartList() {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartreducer.data);
  const handleDelete = (id) => {
    dispatch(deletecart(id));
  };

  const handleInc = (id) => {
    dispatch(inc(id));
  };

  const handleDesc = (id) => {
    dispatch(desc(id));
  };

  const proceedToPay = async () => {
    try {
      const { data } = await payment(cartdata);
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    }
  };
  let total = 0;
  return (
    <section
      className="h-100"
      style={{ backgroundColor: "#eee", minHeight: "100vh" }}
    >
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div>
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>
            {cartdata?.length === 0 ? (
              <p className="fw-small">No product</p>
            ) : (
              cartdata?.map((ele) => {
                total += ele.price * ele.quantity;
                return (
                  <Cart
                    cart={ele}
                    handleInc={handleInc}
                    handleDesc={handleDesc}
                    handleDelete={handleDelete}
                  />
                );
              })
            )}

            <div className="card">
              <div className="card-body">
                <h5 className="fw-bold">Total Amount : ₹{total}</h5>
                <button
                  type="button"
                  className="btn btn-warning btn-block btn-lg"
                  id="payment"
                  disabled={cartdata?.length == 0}
                  onClick={proceedToPay}
                >
                  Proceed to Pay
                </button>
                <h5 className="fw-bold mt-2">
                  <Link to="/home">
                    <i className="fas fa-angle-left me-2"></i>Back to home
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
