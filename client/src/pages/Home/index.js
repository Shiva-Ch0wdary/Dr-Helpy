import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productactions";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  homeSectionImageList,
  iconSectionList,
  consultations,
} from "../../constants/home";
import homeStyles from "./home.module.css";
import CarouselSlider from "react-carousel-slider";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Navbar styles={homeStyles} />
      <section className={homeStyles["home"]} id={homeStyles["home"]}>
        <div className={homeStyles["row"]}>
          <div className={homeStyles["content"]}>
            <h3>Buy Medicines from here</h3>
            <p>Get best quality medicines from us at reasonable prices.</p>
            <Link to="/product" className={homeStyles["btn"]}>
              Buy now
            </Link>
          </div>

          <div
            className={`${homeStyles["swiper"]} ${homeStyles["image-slider"]}`}
          >
            <div className={`${homeStyles["swiper-wrapper"]}`}>
              <CarouselSlider
                slideItems={homeSectionImageList}
                sliderBoxStyle={{
                  height: "29rem",
                  width: "40rem",
                  padding: 0,
                  background: "transparent",
                  overflowY: "hidden",
                }}
                manner={{ autoSliding: { interval: "2.6s" } }}
                itemsStyle={{
                  padding: "0px",
                  margin: "0px 0px",
                  height: "100%",
                  width: "100%",
                }}
                buttonSetting={{
                  placeOn: "middle-inside",

                  style: {
                    left: {
                      margin: "0px 0px 0px 5px",
                    },
                    right: {
                      margin: "0px 0px 0px 5px",
                    },
                  },
                }}
              />
            </div>
            <img
              src="images/stand.png"
              className={homeStyles["stand"]}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={homeStyles["icons-container"]}>
        {iconSectionList?.map((ele) => {
          return (
            <div className={homeStyles["icons"]}>
              <i className={`fas ${ele.class}`}></i>
              <div className={homeStyles["content"]}>
                <Link to="#" style={{ textDecoration: "none" }}>
                  <h3>{ele.h3}</h3>
                </Link>
                <p>{ele.p}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section id={homeStyles["consultation"]}>
        <h1 className={homeStyles["heading1"]}>
          <span> Consult top doctors online for any health concern </span>
        </h1>
        <p>
          {" "}
          Private online consultations with verified doctors in all specialists
        </p>
        <div className={homeStyles["consult-container"]}>
          {consultations?.map((ele) => {
            return (
              <div className={homeStyles["box"]}>
                <div className={homeStyles["image"]}>
                  <Link to="/doctor">
                    {" "}
                    <img src={ele.src} />{" "}
                  </Link>
                </div>
                <div className={homeStyles["text"]}>{ele.text}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section className={homeStyles["deal"]}>
        <div className={homeStyles["content"]}>
          <h3>deal of the day</h3>
          <h1>Get a Appointment With World Best Doctor</h1>
          <p>
            You are in safe hands, choose the experts and get consulation online
          </p>
          <Link to="/doctor" className={homeStyles["btn"]}>
            Get Now
          </Link>
        </div>

        <div className="image">
          <img src="images/doctor_img.png" alt="" />
        </div>
      </section>
      <Footer styles={homeStyles} />
    </>
  );
}
