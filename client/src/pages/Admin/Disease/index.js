import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Disease from "../../../components/Admin/Disease";
import { getDiseases, DeleteDisease } from "../../../actions/diseaseactions";
import ModalAddDisease from "../../../components/Modals/ModalAddDisease";
import ModalEditDisease from "../../../components/Modals/ModalEditDisease";

export default function DiseaseS() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.diseasereducer?.data?.data;
  });
  useEffect(() => {
    dispatch(getDiseases());
  }, []);

  const handleDelete = (id) => {
    dispatch(DeleteDisease(id));
  };
  const handleEdit = (id, inidata) => {
    setId(() => id);
    setInitialData(() => inidata);
    setshowEditModal(() => true);
  };

  return (
    <>
      <ModalAddDisease
        showModal={showAddModal}
        setShowModal={setShowAddModal}
      />
      <ModalEditDisease
        showModal={showEditModal}
        setShowModal={setshowEditModal}
        initialData={initialData}
        id={id}
      />
      <div className="container h-100 w-100 py-5">
        <div className="row d-flex p-5 h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between">
              <h3 className="display-6 mb-4 text-black">Diseases </h3>
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
              <p>No diseases added</p>
            ) : (
              <table className="table table-hover table-responsive fs-md-3 fs-4">
                <thead>
                  <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col">Image</th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((ele, index) => {
                    return (
                      <Disease
                        index={index}
                        disease={ele}
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
