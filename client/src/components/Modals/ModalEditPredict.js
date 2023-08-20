import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductDetails } from "../../actions/productactions";

export default function ModalEditPredict({
  showModal,
  setShowModal,
  initialData,
  id,
}) {
  const [form, setForm] = useState(initialData);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductDetails(id, form));
    setShowModal(false);
  };
  return (
    <div
      className="modal fade show"
      id="modalLoginForm"
      tabindex="-1"
      ariaLabelledby="myModalLabel"
      style={{
        display: showModal ? "block" : "none",
        paddingRight: "17px",
        background: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">Edit Product</h4>
            <button
              type="button"
              className="close"
              dataDismiss="modal"
              ariaLabel="Close"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <span ariaHidden="true">X</span>
            </button>
          </div>
          <form enctype="multipart/form-data" onSubmit={handleSubmit}>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={form?.name || initialData?.name}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
              </div>
              <div className="md-form mb-5">
                <label>Product Price</label>
                <input
                  type="number"
                  name="price"
                  value={form?.price || initialData?.price}
                  step=".01"
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
              </div>
              <div className="md-form mb-5">
                <label>Product Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={form?.rating || initialData?.rating}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
              </div>
              <div className="md-form mb-5">
                <label>Product Description</label>
                <input
                  type="text"
                  name="desc"
                  value={form?.desc || initialData?.desc}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default waves-effect waves-light"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
