import React from "react";

export default function Order({ order, index }) {
  let total = 0;
  return (
    <>
      <div className="mb-4 p-4 mt-2" style={{ backgroundColor: "white" }}>
        <h3>Order {index + 1}</h3>
        <h5>
          Date{" "}
          {`${new Date(order.createdAt).getDate()}/${
            new Date(order.createdAt).getMonth() + 1
          }/${new Date(order.createdAt).getFullYear()}`}
          Time{" "}
          {`${new Date(order.createdAt).getHours()}:${
            new Date(order.createdAt).getMinutes() + 1
          }:${new Date(order.createdAt).getSeconds()}`}
        </h5>
        {JSON.parse(order.order)?.map((dataele) => {
          total = total + dataele.price * dataele.quantity;
          return (
            <div className="card rounded-3">
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src={`${dataele.url}`}
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">{dataele.name}</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <input
                      id="form1"
                      disabled
                      min="0"
                      name="quantity"
                      value={`${dataele.quantity}`}
                      type="number"
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">
                      ₹{dataele.price * dataele.quantity}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <h5 className="mt-3">Total: ₹{total}</h5>
      </div>
    </>
  );
}
