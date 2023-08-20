import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import diseaseStyles from "./disease.module.css";
import { getDiseasesById } from "../../actions/diseaseactions";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Styles from "../Home/home.module.css";

export default function DiseaseInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.diseasereducer?.data?.data);
  useEffect(() => {
    dispatch(getDiseasesById(id));
  }, []);
  return (
    <>
      <Navbar styles={Styles} />
      <div
        id={diseaseStyles["cont"]}
        style={{ padding: "20px 30px", lineHeight: "200%" }}
      >
        <p className={diseaseStyles["main"]}>
          <strong>{data && data.name}</strong>
        </p>

        {data && <img className={diseaseStyles["img"]} src={`${data.url}`} />}
        <p>
          <strong>Symptoms</strong>
        </p>
        <ul>
          {data &&
            data?.symptoms?.split(".")?.map((ele) => {
              if (ele.length !== 0) return <li>{ele}</li>;
            })}
        </ul>
        <p>
          <strong>Medicines and cure</strong>
        </p>
        <ol>
          {data &&
            data?.cure?.split(".")?.map((ele) => {
              if (ele.length !== 0) return <li>{ele}</li>;
            })}
        </ol>

        <hr className={diseaseStyles["design"]} />
      </div>
      <Footer styles={Styles} />
    </>
  );
}
