import React from "react";
import chromo from "../assets/img/crmpro.png";
import bg from "../assets/img/bc.jpg";
import circle from "../assets/img/cycle.png";
import { MdWhatsapp } from "react-icons/md";
import "./benefits.css";
const BenefitsSectionHome = () => {
  return (
    <>
      <div className="containercrm">
        <div className="text-contents">
          <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
            Here are the benefits{" "}
            <span className="highlight" style={{ color: "#8b0000" }}>
              your businesses
            </span>{" "}
            can get from Symbosys.
          </h1>
          <div className="benefites">
            <h2>World Class CRM Services</h2>
            <p>App Development, Software Development, best in class Apps</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="benefites">
            <h2>Smart Source for making software</h2>
            <p>Connect sales, service, marketing, commerce & IT services</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="benefites">
            <h2>Fast Making software to value</h2>
            <p>Ease of Design & implementation at speed with team support</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="benefites">
            <h2>Better & Flexible</h2>
            <p>Solutions for any type of business or Industry</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={chromo} alt="CRM Development" />
        </div>
      </div>

      <style jsx>{`
        .containercrm {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          padding: 30px;
          background: #f5f5f5;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .text-contents {
          flex: 1;
          max-width: 600px;
        }

        .benefites {
          margin-bottom: 20px;
        }

        .benefites h2 {
          font-size: 20px;
          color: #333;
        }

        .benefites p {
          font-size: 16px;
          color: #555;
        }

        .progress-bar {
          background: #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          margin-top: 10px;
          height: 10px;
          width: 100%;
        }

        .progress {
          height: 100%;
          background-color: #8b0000;
          transition: width 0.5s ease-in-out;
        }

        .highlight {
          font-weight: bold;
          transition: color 0.5s ease;
        }

        .highlight:hover {
          color: #ff6347;
        }

        .image {
          flex: 1;
          text-align: center;
        }

        .image img {
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .containercrm {
            flex-direction: column;
          }

          .text-contents {
            margin-bottom: 30px;
          }
        }
      `}</style>

      <div className="containerch my-5">
        <div className="titlech">
          <h1>
            Why Choose <span>Symbosys</span>
          </h1>
        </div>
        <div className="contentch">
          <div className="cardch wow fadeInUp" data-wow-delay=".3s">
            <div className="iconch">
              <img src="img/rocket.png" alt="Rocket Icon" />
            </div>
            <h2>Fast and Innovative</h2>
            <p>
              We provide innovative solutions and take a quality-centric
              approach to deliver result-oriented business solutions promptly.
              Our services enhance workflow processes and guarantee success for
              your business.
            </p>
          </div>
          <div className="cardch wow fadeInUp" data-wow-delay=".5s">
            <div className="iconch">
              <img src="img/comp.png" alt="Computer Icon" />
            </div>
            <h2>Client Satisfaction</h2>
            <p>
              Our software solutions have transformed businesses, earning
              recognition for delivering high client satisfaction and
              significant results.
            </p>
          </div>
          <div className="cardch wow fadeInUp" data-wow-delay=".7s">
            <div className="iconch">
              <img src="img/team.png" alt="Enthusiastic Team" />
            </div>
            <h2>Enthusiastic Team</h2>
            <p>
              Our portfolio highlights our team's dedication to delivering
              top-notch services. With numerous completed projects, we’re known
              for maintaining high-quality standards.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .containerch {
          padding: 40px 20px;
          background-color: #f9f9f9;
          text-align: center;
        }

        .titlech h1 {
          font-size: 32px;
          color: #333;
          margin-bottom: 40px;
        }

        .titlech span {
          color: #8b0000;
          font-weight: bold;
        }

        .contentch {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 20px;
        }

        .cardch {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          padding: 30px;
          max-width: 350px;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }

        .cardch:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
        }

        .iconch img {
          width: 50px;
          margin-bottom: 20px;
        }

        .cardch h2 {
          font-size: 24px;
          color: #333;
          margin-bottom: 15px;
        }

        .cardch p {
          color: #555;
          font-size: 16px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contentch {
            flex-direction: column;
            align-items: center;
          }

          .cardch {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>

      <div className="project-together-section">
        <div className="container-fluid" style={{ backgroundImage: bg }}>
          <div className="row">
            <div className="col-md-6 text-content mt-1">
              <h1>Let's Build Your Project Together</h1>
              <h2>
                Collaborate with our team of experts to bring your vision to
                life.
              </h2>
              <p>
                At Symbosys Technologies, we believe in the power of
                collaboration. Our team of experts is dedicated to bringing your
                vision to life by working closely with you to understand your
                unique needs and business objectives. Whether you have a clear
                vision or need guidance in shaping your ideas, we're here to
                help. Our experienced software developers, website developers,
                graphic designers, and project managers are committed to
                delivering custom solutions that not only meet but exceed your
                expectations. From ideation to development and deployment, we'll
                be with you every step of the way, ensuring your project's
                success. We value your input and will continuously incorporate
                your feedback to ensure the final product aligns perfectly with
                your goals. Let's work together to build your project and bring
                your vision to reality.
              </p>
            </div>
            <div className="col-md-6 media-content">
              <div className="image">
                <img
                  src={circle}
                  alt="Cycle Image"
                  height="130px"
                  width="400px"
                  style={{ marginTop: "30px" }}
                />
              </div>
              <br />
              <iframe
                width="300"
                height="215"
                src="https://www.youtube.com/embed/DoNe5V0SbsE?si=BNyoVNDxxN0auoCo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default BenefitsSectionHome;
