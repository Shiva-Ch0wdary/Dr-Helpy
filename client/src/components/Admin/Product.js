import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductImage } from "../../actions/productactions";

export default function Product({ index, product, handleDelete, handleEdit }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.name === "new_img_upload") {
      dispatch(
        updateProductImage(product._id, { new_img_upload: e.target.files[0] })
      );
    }
  };

  return (
    <tr>
      <th scope="row" className="align-middle">
        {index + 1}
      </th>
      <td className="align-middle">
        <img src={`${product.url}`} width="100px" height="100px" />
      </td>
      <td className="align-middle">
        <button
          className="block"
          style={{
            background: "none",
            position: "relative",
            pointer: "cursor",
          }}
        >
          <i className="fas fa-upload" style={{ pointer: "cursor" }}>
            <input
              type="file"
              name="new_img_upload"
              onChange={handleChange}
              style={{
                opacity: 0,
                width: "13px",
                position: "absolute",
                cursor: "pointer",
                left: 0,
                top: 0,
                zIndex: 1,
              }}
            />
          </i>
        </button>
      </td>
      <td className="align-middle">{product.name}</td>
      <td style={{ textTransform: "none" }} className="align-middle">
        ₹{product.price}
      </td>
      <td className="align-middle">
        <button
          className="block"
          style={{ color: "red" }}
          onClick={() => handleDelete(product._id)}
        >
          <i class="fa-sharp fa-solid fa-trash"></i>
        </button>
      </td>
      <td className="align-middle">
        <i
          className="fas fa-pen"
          onClick={() => {
            handleEdit(product._id, {
              name: product.name,
              desc: product.desc,
              price: product.price,
              rating: product.rating,
            });
          }}
        ></i>
      </td>
    </tr>
  );
}
