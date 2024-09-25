import React from "react";
import chromo from "../assets/img/crmpro.png";
import bg from "../assets/img/bc.jpg";
import circle from "../assets/img/cycle.png";
import { MdWhatsapp } from "react-icons/md";
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
              <div className="progress"></div>
            </div>
          </div>
          <div className="benefites">
            <h2>Smart Source for making software</h2>
            <p>Connect sales, service, marketing, commerce & IT services</p>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="benefites">
            <h2>Fast Making software to value</h2>
            <p>Ease of Design & implementation at speed with team support</p>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
          <div className="benefites">
            <h2>Better & Flexible</h2>
            <p>Solutions for any type of business or Industry</p>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={chromo} alt="CRM Development" />
        </div>
      </div>
      <div className="containerch">
        <div className="titlech">
          <h1>
            Why Choose <span>Symbosys</span>
          </h1>
        </div>
        <div className="contentch">
          <div className="cardch">
            <div className="iconch">
              <img src="img/rocket.png" alt="Rocket Icon" />
            </div>
            <h2>Fast and Innovative</h2>
            <p>
              We provide innovative solutions and take a quality-centric
              approach to deliver result-oriented business solutions promptly.
              Our services not only enhance workflow processes but also
              guarantee success for your businesses.
            </p>
          </div>
          <div className="cardch">
            <div className="iconch">
              <img src="img/comp.png" alt="Computer Icon" />
            </div>
            <h2>Client Satisfaction</h2>
            <p>
              With our innovative software solutions, we’ve driven significant
              transformations in our customers’ businesses, earning widespread
              recognition for delivering satisfactory results.
            </p>
          </div>
          <div className="cardch">
            <div className="iconch">
              <img src="img/comp.png" alt="Enthusiastic Team" />
            </div>
            <h2>Enthusiastic Team</h2>
            <p>
              Our rich portfolio speaks volumes about our enthusiasm and
              dedication to every project we undertake. Having completed
              numerous projects for large employee-based organizations, we’ve
              garnered remarkable recognition for our commitment to
              quality-standard services.
            </p>
          </div>
        </div>
      </div>
      <div className="project-together-section">
        <div className="container-fluid" style={{ backgroundImage: bg }}>
          <div className="row">
            <div className="col-md-6 text-content">
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
