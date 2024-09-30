import React, { useEffect, useState } from "react";
import aboutImage from "../assets/img/aboutnew.png";
import missionImage from "../assets/img/mission.png";
import visionImage from "../assets/img/vision.png";
import coreValuesImage from "../assets/img/core-values.webp";
import "./about.css";
import axios from "axios";
const About = () => {
  const [data, setData] = useState({});
  console.log("about data", data);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/about`
        );
        const aboutData = response.data?.data[0];
        if (aboutData) {
          setData(aboutData);
          // setAboutId(aboutData._id);
        }
      } catch (err) {
        console.error("Error fetching About: ", err);
      }
    };
    fetchAbout();
  }, []);
  return (
    <>
      <div className="container-fluid" style={{ backgroundImage: `url('')` }}>
        <div className="content-section">
          <h2>About Symbosys Software Services Pvt. Ltd.</h2>
          <p
            style={{
              fontSize: "14px",
              textAlign: "justify",
              lineHeight: "2rem",
            }}
          >
            {data.main_about}
          </p>
          <img
            src={aboutImage}
            alt="Illustration"
            height="300px"
            width="400px"
            className="img-fluid"
          />
        </div>
      </div>
      <div
        className="container-fluid py-5 my-5"
        style={{ background: "linear-gradient(0deg, #e39ba8, transparent)" }}
      >
        <div className="container pt-5">
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".3s"
            >
              <div className="h-100 position-relative">
                <img
                  src={missionImage}
                  className="img-fluid w-75 rounded"
                  alt="Mission"
                  height="300px"
                  width="400px"
                  style={{ marginBottom: "15%" }}
                />
                <div
                  className="position-absolute w-75"
                  style={{ top: "25%", left: "25%" }}
                >
                  <img src="#" className="img-fluid w-100 rounded" alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".5s"
            >
              <h1 className="mb-4 text-danger">Our Mission:</h1>
              <p
                style={{
                  lineHeight: "2rem",
                  fontSize: "14px",
                  textAlign: "justify",
                }}
              >
                {data.mission}
              </p>
              {/* <p
                className="mb-4"
                style={{ lineHeight: "2rem", fontSize: "18px" }}
              >
                We, here at Symbosys, ensure the sharing of all software
                knowledge widely and deliver high-quality software solutions in
                effectively meeting real-life challenges. We aim to become the
                prime global software solutions provider for education, travel,
                and e-commerce. Our main focus is on creating tailor-made
                software applications that fully satisfy the needs of our
                clients, leaving them the most content and delighted.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* Vision Section */}
        <div className="custom-section ">
          <div className="text-content">
            <h2 style={{ color: "red" }} className="vision-title">
              Our Vision:
            </h2>
            <p
              style={{
                marginBottom: "80px",
                lineHeight: "2rem",
                fontSize: "14px",
                textAlign: "justify",
                fontFamily: "'Hind Siliguri', sans-serif",
              }}
            >
              {data.vision}
            </p>
          </div>
          <div className="image-content">
            <img
              src={visionImage}
              alt="Illustration of software services"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div
          className="container-fluid py-5 my-5"
          style={{ background: "linear-gradient(0deg, #e39ba8, transparent)" }}
        >
          <div className="container pt-5">
            <div className="row g-5">
              <div
                className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div className="h-100 position-relative">
                  <img
                    src={coreValuesImage}
                    className="img-fluid w-75 rounded"
                    alt="Core Values"
                    height="300px"
                    width="400px"
                    style={{ marginBottom: "15%" }}
                  />
                  <div
                    className="position-absolute w-75"
                    style={{ top: "25%", left: "25%" }}
                  >
                    <img src="#" className="img-fluid w-100 rounded" alt="" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay=".5s"
              >
                <h1 className="mb-4 text-danger">Core Value</h1>
                <p
                  style={{
                    fontSize: "14px",
                    textAlign: "justify",
                    lineHeight: "2rem",
                  }}
                >
                  {data.core_value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
