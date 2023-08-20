import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddDisease } from "../../actions/diseaseactions";

export default function ModalAddDisease({ showModal, setShowModal }) {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.name === "img_upload") {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddDisease(form));
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
            <h4 className="modal-title w-100 font-weight-bold">Add Product</h4>
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
                <label>Disease Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
              </div>

              <div className="md-form mb-5">
                <label>Disease Symptoms</label>
                <input
                  type="text"
                  name="symptoms"
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
              </div>
              <div className="md-form mb-5">
                <label>Disease Cure</label>
                <input
                  type="text"
                  name="cure"
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
              </div>
              <div className="md-form mb-5">
                <label>Disease Image</label>
                <input
                  type="file"
                  name="img_upload"
                  accept="image/*"
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
