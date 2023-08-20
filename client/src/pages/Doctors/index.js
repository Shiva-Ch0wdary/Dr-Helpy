import React, { useEffect } from "react";
import doctorStyle from "./doctor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../actions/doctoractions";
import Styles from "../Home/home.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Doctor from "../../components/Doctors/Doctor";

export default function Doctors() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.doctorreducer?.data1?.data);

  useEffect(() => {
    dispatch(getDoctors());
  }, []);
  return (
    <>
      <Navbar styles={Styles} />
      <div id={doctorStyle["doctor"]}>
        <h1>Consult Online Doctors</h1>
        <br />
        <div className={doctorStyle["text"]}>
          <p>
            A Consultation with a trusted doctor for your every medical needs
            Consultation with a trusted doctor for your every medical need
            Consult trusted & experienced General Physicians. We hand pick
            doctors for you to consult online for your specific requirments. Our
            Doctors listen to the patients patiently and prescribe only what is
            required for you and your precious life Online consultations for all
            your health-related concerns from the safety of your home with the
            doctors across all specialities. We came up with online
            consultations for people who couldn't reach the hospital Renowned
            and trusted specialists and super-specialists specific to your
            medical needs, just a click away.
          </p>
        </div>
        <div className={doctorStyle["abc"]}>
          {!data?.length ? (
            <p>No Doctors Available</p>
          ) : (
            data?.map((doctor) => {
              return <Doctor doctor={doctor} doctorStyle={doctorStyle} />;
            })
          )}
        </div>
      </div>
      <Footer styles={Styles} />
    </>
  );
}
