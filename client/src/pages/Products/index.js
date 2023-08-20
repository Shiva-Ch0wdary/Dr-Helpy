import React, { useEffect } from "react";
import productsStyles from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productactions";
import { addtocart } from "../../actions/cartactions";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Product from "../../components/Products/Product";
export default function Products() {
  const dispatch = useDispatch();
  const productdata = useSelector((state) => state.productreducer?.data?.data);
  const cartdata = useSelector((state) => state.cartreducer.data);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const existsInCart = (id) => {
    return cartdata.filter((item) => item._id === id).length !== 0;
  };

  const handleClick = (item) => {
    dispatch(addtocart(item));
  };

  return (
    <>
      <Navbar styles={productsStyles} />
      <div className={"container d-flex flex-wrap justify-content-center"}>
        {Array.isArray(productdata)
          ? productdata?.map((ele) => {
              return (
                <Product
                  product={ele}
                  productsStyles={productsStyles}
                  existsInCart={existsInCart}
                  handleClick={handleClick}
                />
              );
            })
          : ""}
      </div>
      <Footer styles={productsStyles} />
    </>
  );
}
