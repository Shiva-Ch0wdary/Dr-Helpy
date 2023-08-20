import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDoctors,
  approveDoctor,
  deleteDoctor,
} from "../../../actions/doctoractions";
import UnApprovedDoctor from "../../../components/Admin/UnApprovedDoctor";
import ApprovedDoctor from "../../../components/Admin/ApprovedDoctor";

export default function DoctorS() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return {
      data1: state.doctorreducer?.data1?.data,
      data2: state.doctorreducer?.data2?.data,
    };
  });

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  const handleApprove = (id) => {
    if (window.confirm("Do you want to approve this doctor") === true) {
      dispatch(approveDoctor(id));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteDoctor(id));
  };

  return (
    <>
      <div className="container h-100 w-100 py-5">
        <div className="row d-flex p-5 h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between">
              <h3 className="display-6 mb-4 text-black">Unapproved Doctors </h3>
            </div>
            {!data?.data2?.length ? (
              <p>No doctors are unapproved</p>
            ) : (
              <table className="table table-hover table-responsive fs-md-3 fs-4">
                <thead>
                  <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">DOR</th>
                    <th scope="col">Registration No.</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data2?.map((ele, index) => {
                    return (
                      <UnApprovedDoctor
                        index={index}
                        doctor={ele}
                        handleApprove={handleApprove}
                        handleDelete={handleDelete}
                      />
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          <div className="col-10">
            <div className="d-flex justify-content-between">
              <h3 className="display-6 mb-4 text-black">Approved Doctors </h3>
            </div>
            {!data?.data1?.length ? (
              <p>No doctors are approved</p>
            ) : (
              <table className="table table-hover table-responsive fs-md-3 fs-4">
                <thead>
                  <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">DOR</th>
                    <th scope="col">Registration No.</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data1?.map((ele, index) => {
                    return (
                      <ApprovedDoctor
                        index={index}
                        doctor={ele}
                        handleDelete={handleDelete}
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
