import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, handleInc, handleDesc, handleDelete }) {
  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img src={`${cart.url}`} className="img-fluid rounded-3" alt="" />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{cart.name}</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button
              className={`btn btn-link px-2 ${
                cart.quantity === 0 ? "" : "desc"
              }`}
              disabled={cart.quantity === 0}
              onClick={() => {
                handleDesc(cart._id);
              }}
            >
              <i className="fas fa-minus"></i>
            </button>

            <input
              id="form1"
              disabled
              min="0"
              name="quantity"
              value={cart.quantity}
              type="number"
              className="form-control form-control-sm"
            />

            <button
              className="btn btn-link px-2 inc"
              onClick={() => {
                handleInc(cart._id);
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">₹{cart.price * cart.quantity}</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <Link
              className="text-danger delete"
              onClick={() => {
                handleDelete(cart._id);
              }}
            >
              <i className="fas fa-trash fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
