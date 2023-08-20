import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import myaccountStyles from "./myaccount.module.css";
import { Link } from "react-router-dom";
import { updateuser } from "../../actions/authactions";
export default function MyAccount() {
  const data = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const initialState = {
    fname: data.fname,
    lname: data.lname,
    phno: data.phno,
  };
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(updateuser(data.id, form));
    setShowModal(false);
  };

  return (
    <>
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
              <h4 className="modal-title w-100 font-weight-bold">Edit</h4>
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
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <input
                  type="text"
                  name="fname"
                  value={form.fname}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
                <label>Your first name</label>
              </div>
              <div className="md-form mb-5">
                <input
                  type="text"
                  name="lname"
                  value={form.lname}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
                <label>Your second name</label>
              </div>
              <div className="md-form mb-5">
                <input
                  type="number"
                  name="phno"
                  value={form.phno}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
                <label>Phone no.</label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default waves-effect waves-light"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id={myaccountStyles.myaccount}>
        <div className={myaccountStyles["main-content"]}>
          <div
            className={`${myaccountStyles["container"]} ${myaccountStyles["mt-7"]}`}
          >
            <h2 className={myaccountStyles["mb-5"]}>My Account</h2>
            <div className={myaccountStyles["row"]}>
              <div
                className={`${myaccountStyles["col-xl-8"]} ${myaccountStyles["m-auto"]} ${myaccountStyles["order-xl-1"]}`}
              >
                <div
                  className={`${myaccountStyles["card"]} ${myaccountStyles["bg-secondary"]} ${myaccountStyles["shadow"]}`}
                >
                  <div
                    className={`${myaccountStyles["card-header"]} ${myaccountStyles["bg-white"]} ${myaccountStyles["border-0"]}`}
                  >
                    <div
                      className={`${myaccountStyles["row"]} ${myaccountStyles["align-items-center"]}`}
                    >
                      <div
                        id={myaccountStyles["edit"]}
                        className={myaccountStyles["col-12"]}
                      >
                        <h3 className={myaccountStyles["mb-0"]}>My account </h3>
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setShowModal(true);
                          }}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={myaccountStyles["card-body"]}>
                    <h6
                      className={`${myaccountStyles["heading-small"]} ${myaccountStyles["text-muted"]} ${myaccountStyles["mb-4"]}`}
                    >
                      User information
                    </h6>
                    <div className={myaccountStyles["pl-lg-4"]}>
                      <div className={myaccountStyles["row"]}>
                        <div className={myaccountStyles["col-lg-6"]}>
                          <div
                            className={`${myaccountStyles["form-group"]} ${myaccountStyles["focused"]}`}
                          >
                            <label
                              className={myaccountStyles["form-control-label"]}
                              forHtml="input-username"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              id={myaccountStyles["input-username"]}
                              className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                              placeholder="Username"
                              value={data.fname + " " + data.lname}
                              style={{ backgroundColor: "white" }}
                              disabled
                            />
                          </div>
                        </div>
                        <div className={myaccountStyles["col-lg-6"]}>
                          <div className={myaccountStyles["form-group"]}>
                            <label
                              className={myaccountStyles["form-control-label"]}
                              forHtml="input-email"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id={myaccountStyles["input-email"]}
                              className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                              style={{
                                textTransform: "none",
                                backgroundColor: "white",
                              }}
                              value={data.email}
                              placeholder="jesse@example.com"
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className={myaccountStyles["row"]}>
                        <div className={myaccountStyles["col-lg-6"]}>
                          <div
                            className={`${myaccountStyles["form-group"]} ${myaccountStyles["focused"]}`}
                          >
                            <label
                              className={myaccountStyles["form-control-label"]}
                              forHtml="input-first-name"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              id={myaccountStyles["input-first-name"]}
                              className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                              placeholder="First name"
                              value={data.fname}
                              style={{ backgroundColor: "white" }}
                              disabled
                            />
                          </div>
                        </div>
                        <div className={myaccountStyles["col-lg-6"]}>
                          <div
                            className={`${myaccountStyles["form-group"]} ${myaccountStyles["focused"]}`}
                          >
                            <label
                              className={myaccountStyles["form-control-label"]}
                              forHtml="input-last-name"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id={myaccountStyles["input-last-name"]}
                              className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                              placeholder="Last name"
                              value={data.lname}
                              style={{ backgroundColor: "white" }}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className={myaccountStyles["row"]}>
                        <div className={myaccountStyles["col-lg-6"]}>
                          <div
                            className={`${myaccountStyles["form-group"]} ${myaccountStyles["focused"]}`}
                          >
                            <label
                              className={myaccountStyles["form-control-label"]}
                              forHtml="input-first-name"
                            >
                              Phone no
                            </label>
                            <input
                              type="text"
                              id={myaccountStyles["input-first-name"]}
                              className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                              placeholder="First name"
                              value={data.phno}
                              style={{ backgroundColor: "white" }}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                </div>
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
    </>
  );
}
