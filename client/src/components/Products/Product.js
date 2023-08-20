import React from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

export default function Product({
  product,
  productsStyles,
  existsInCart,
  handleClick,
}) {
  return (
    <div className="col-xs-12 col-md-4 mx-5">
      <div
        className={`${productsStyles["prod-info-main"]} ${productsStyles["prod-wrap"]} ${productsStyles.clearfix}`}
      >
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className={productsStyles["product-image"]}>
              <img
                src={`${product.url}`}
                className="img-responsive img-fluid "
                style={{ maxHeight: "250px", minHeight: "250px" }}
              />
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className={productsStyles["product-deatil"]}>
              <h5 className={productsStyles["name"]}>
                <Link to={`/product/${product._id}`}>{product.name}</Link>
                <Link to="#" style={{ textDecoration: "none" }}>
                  <span>Medical</span>
                </Link>
              </h5>
              <p className={productsStyles["price-container"]}>
                <span>₹{product.price}</span>
              </p>
              <span className={productsStyles["tag1"]}></span>
            </div>
            <div className={productsStyles["description"]}>
              <p>{product.desc.slice(0, 30)}...</p>
            </div>
            <div
              className={`${productsStyles["product-info"]} ${productsStyles["smart-form"]}`}
            >
              <div className="row">
                <div className="col-md-12">
                  <button
                    type="button"
                    className={`btn ${
                      !existsInCart(product._id) ? "btn-danger" : "btn-default"
                    } btn-lg ${productsStyles["addcart"]}`}
                    disabled={existsInCart(product._id)}
                    style={{
                      color: `${existsInCart(product._id) && "black"}`,
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleClick(product);
                    }}
                  >
                    Add to cart
                  </button>

                  <Link
                    to={`/product/${product._id}`}
                    className="btn btn-info active"
                  >
                    More info
                  </Link>
                </div>
                <div className="col-md-12">
                  <div className={productsStyles["rating"]}>
                    Rating:
                    <Rating
                      initialValue={product.rating}
                      size={20}
                      allowHover={false}
                      disableFillHover={true}
                      readonly={product.rating}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
