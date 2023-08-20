import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../actions/productactions";
import { Rating } from "react-simple-star-rating";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import productsStyles from "./products.module.css";
import { fetchreview } from "../../actions/reviewaction";
import { addReview } from "../../api";
import { addtocart } from "../../actions/cartactions";
import { toast } from "react-toastify";

export default function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const initialState = {
    rating: "",
    description: "",
  };
  const data = useSelector((state) => state.productreducer?.data?.data);
  const reviewdata = useSelector((state) => state.reviewreducer.data);
  const cartdata = useSelector((state) => state.cartreducer.data);
  const authdata = useSelector((state) => state.authReducer);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(initialState);
  const [refetch, setRefetch] = useState(true);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getProductsById(id));
  }, []);

  useEffect(() => {
    dispatch(fetchreview(id));
  }, [refetch]);

  const handleSubmit = async () => {
    try {
      await addReview({
        ...form,
        productid: id,
        name: authdata.fname + " " + authdata.lname,
      });
      toast.success("Review Added 😊");
    } catch (error) {
      toast.error("Failed!");
    } finally {
      setRefetch(!refetch);
      setShowModal(false);
    }
  };

  const handleClick = (item) => {
    dispatch(addtocart(item));
  };

  const existsInCart = (id) => {
    return cartdata.filter((item) => item._id === id).length !== 0;
  };

  return (
    <>
      <Navbar styles={productsStyles} />
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
                  type="number"
                  name="rating"
                  value={form.rating}
                  max={5}
                  min={0}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
                <label>Rating</label>
              </div>
              <div className="md-form mb-5">
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  className="form-control validate"
                />
                <label>Description</label>
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
      <section className={`${productsStyles.container_sproducts} my-5 pt-5`}>
        {data && (
          <div className="row mt-5">
            <div className="col-lg-5 col-md-6 col-6">
              <img
                className=""
                src={`${data.url}`}
                id={productsStyles.MainImg}
                style={{ height: "200px", width: "200px" }}
                alt=""
              />
            </div>

            <div className="col-lg-6 col-md-6 col-6 d-flex flex-column justify-content-center">
              <h3>{data.name}</h3>

              <div className={productsStyles.price}>
                M.R.P. : <span>₹{data.price}</span>
              </div>
              <button
                type="button"
                className={`btn btn-danger
                 btn-lg ${productsStyles["addcart"]}`}
                disabled={existsInCart(data._id)}
                style={{
                  opacity: `${existsInCart(data._id) && "0.5"}`,
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleClick(data);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </section>
      <section className={productsStyles["product-description"]}>
        <div>
          <h2>Product Description</h2>
        </div>

        {data && (
          <div className={productsStyles.product_dic}>
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
          </div>
        )}
      </section>
      <section>
        <div>
          <h2>
            Product Reviews{" "}
            <i
              className="fa-solid fa-circle-plus"
              onClick={() => {
                setShowModal(true);
              }}
            ></i>
          </h2>
        </div>
        {Array.isArray(reviewdata) &&
          reviewdata?.map((review) => {
            return (
              <div className={productsStyles["product-review"]}>
                <h4>
                  <img
                    src="/images/usericon.jpg"
                    className={productsStyles["usericon"]}
                  />
                  {review.name}
                </h4>
                <Rating
                  initialValue={review.rating}
                  size={20}
                  allowHover={false}
                  disableFillHover={true}
                  readonly={review.rating}
                />
                <p style={{ textTransform: "none", fontSize: "11px" }}>
                  {review.description}
                </p>
              </div>
            );
          })}
      </section>
      <Footer styles={productsStyles} />
    </>
  );
}
