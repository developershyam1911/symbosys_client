import React from "react";
import aboutImage from "../assets/img/aboutnew.png";
import missionImage from "../assets/img/mission.png";
import visionImage from "../assets/img/vision.png";
import coreValuesImage from "../assets/img/core-values.webp";
import "./about.css";
const About = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundImage: `url('')` }} // Add the correct background image URL if needed
      >
        <div className="content-section">
          <h2>About Symbosys Software Services Pvt. Ltd.</h2>
          <p style={{ fontSize: "18px", lineHeight: "2rem" }}>
            Symbosys Software Service Pvt. Ltd. is one of the fastest-growing IT
            companies in Ranchi serving 500+ clients throughout Jharkhand and
            other parts of India. We have a team of highly skilled and dedicated
            designers and developers who have years of experience and having the
            capabilities to accomplish projects within a specified deadline. In
            order to understand customer’s requirements from their niche point
            of view, we personally let our developers interact directly with our
            clients and allow them to take their own decision-making approach.
            Being a leading software company in Ranchi, we believe in providing
            quality service to our clients as we know the value of trust and
            expectation they have on us. Nowadays, even small businessmen have
            started accepting the power of digital innovations that vastly
            changing the way of running business. Software, mobile app, and
            websites are the mediums through which they can be a racer of their
            competitive tracks. We specialized in designing and developing
            highly responsive and interactive software, mobile apps, and
            websites that are responsible for refining business processes and
            help to reach the goals effectively.
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
              <p style={{ lineHeight: "2rem", fontSize: "18px" }}>
                Welcome to Symbosys, where innovation meets expertise in the
                realm of Information Technology. We're your go-to IT partner,
                dedicated to delivering top-notch solutions tailored to your
                business needs.
              </p>
              <p
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
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* Vision Section */}
        <div className="custom-section">
          <div className="text-content">
            <h2 style={{ color: "red" }}>Our Vision:</h2>
            <p
              style={{
                marginBottom: "80px",
                lineHeight: "2rem",
                fontSize: "18px",
                fontFamily: "'Hind Siliguri', sans-serif",
              }}
            >
              Our vision is to provide excellent quality in every touch point of
              the client’s relationship, from the first interaction to continued
              product maintenance and support. With a strong team made up of
              very technical experts with years of leading experience in the
              industry, we resolve to continue understanding the needs of our
              clients and exceeding their expectations all the time. What makes
              us different is our strong commitment to not just deliver
              world-class software solutions but also to build true, long-term
              partnerships with our clients. The ultimate objective for our
              company is to be recognized not only for its services but also for
              relationships in excellence.
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
                <p style={{ fontSize: "18px", lineHeight: "2rem" }}>
                  Client-Centric Approach: Our top priority is understanding our
                  clients' unique business perspectives. As a certified software
                  development company, we are committed to designing products
                  that are not only tailored to meet specific requirements but
                  are also intuitive and user-friendly.
                </p>
                <p
                  className="mb-4"
                  style={{ fontSize: "18px", lineHeight: "2rem" }}
                >
                  Innovation: We foster creativity and innovation, continually
                  developing new ideas that enhance product functionality and
                  drive optimal performance.
                  <br />
                  Top Talent: We believe in attracting, supporting, and
                  retaining top talent, ensuring that we consistently deliver
                  exceptional value to our clients through the expertise and
                  dedication of our team.
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
