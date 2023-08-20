import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../components/Admin/Product";
import { getProducts, DeleteProduct } from "../../../actions/productactions";
import ModalAddProduct from "../../../components/Modals/ModalAddProduct";
import ModalEditPredict from "../../../components/Modals/ModalEditPredict";

export default function ProductS() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.productreducer?.data?.data;
  });
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = (id) => {
    dispatch(DeleteProduct(id));
  };
  const handleEdit = (id, inidata) => {
    setId(() => id);
    setInitialData(() => inidata);
    setshowEditModal(() => true);
  };

  return (
    <>
      <ModalAddProduct
        showModal={showAddModal}
        setShowModal={setShowAddModal}
      />
      <ModalEditPredict
        showModal={showEditModal}
        setShowModal={setshowEditModal}
        initialData={initialData}
        id={id}
      />
      <div className="container h-100 w-100 py-5">
        <div className="row d-flex p-5 h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between">
              <h3 className="display-6 mb-4 text-black">Products </h3>
              <button
                className="btn btn-success mb-4"
                style={{ fontSize: "15px" }}
                onClick={() => {
                  setShowAddModal(true);
                }}
              >
                +Add
              </button>
            </div>
            {!data?.length ? (
              <p>No products added</p>
            ) : (
              <table className="table table-hover table-responsive fs-md-3 fs-4">
                <thead>
                  <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col">Image</th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((ele, index) => {
                    return (
                      <Product
                        index={index}
                        product={ele}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                      />
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
