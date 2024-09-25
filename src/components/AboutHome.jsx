import React from "react";
import cone from "../assets/img/C_1.png";
import aboutt2 from "../assets/img/aboutt2.png";
const AboutHome = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="custom-sectiones row">
          <div className="text-contentes col-md-6">
            <h2 style={{ color: "orangered" }}>
              Symbosys Technologies: THE BEST SOFTWARE COMPANY IN Jharkhand
            </h2>
            <h4 style={{ fontSize: "30px" }}>
              ISO 9001: 2015 Certified IT Company
            </h4>
            <hr
              style={{
                width: "160px",
                height: "10px",
                backgroundColor: "hsl(0, 83%, 47%)",
                border: "none",
              }}
            />
            <p>
              Introducing Symbosys Technologies Pvt. Ltd. – the beacon of
              innovation in Ranchi's dynamic IT landscape. As an ISO powerhouse,
              we design custom software, develop captivating e-commerce
              platforms, and create seamless mobile applications. A decade's
              worth of expertise pushes us further than others do by merging
              cutting-edge technology with limitless creativity. Come and be
              part of an odyssey where excellence knows no bounds. Welcome to
              SYMBOSYS — where dreams take a digital form.
            </p>
            <a
              href="about.html"
              className="read-moress"
              style={{ marginBottom: "10px" }}
            >
              Read more
            </a>
          </div>
          <div className="image-contentes col-md-6">
            <img src={cone} alt="Illustration of software services" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="custom-sections row">
          <div className="image-contents col-md-6">
            <img
              src={aboutt2}
              alt="Illustration of software services"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-contents col-md-6">
            <h2>
              Elevating your digital presence with{" "}
              <span style={{ color: "orange" }}>Expert Software Services</span>
            </h2>
            <p>
              Transform Your Business with Expert Software Solutions. Our
              advanced software solutions are designed to streamline operations
              and improve customer service for businesses to thrive. Utilizing
              our technology, companies can achieve unparalleled service quality
              and significant growth, strengthening their market leadership.
            </p>
            <p>
              Discover our suite of highly interactive and customer-engaging
              software offerings, including:
            </p>
            <ul>
              <li>ERP Systems</li>
              <li>CRM Software</li>
              <li>School Management Systems</li>
              <li>Hotel Management Software</li>
              <li>Custom Software Development</li>
            </ul>
            <p>
              Join us at Symbosys, where every solution is a testament to our
              commitment to your success.
            </p>
            <a
              href="Software-Development.html"
              className="read-more"
              style={{
                display: "inline-block",
                backgroundColor: "orangered",
                color: "white",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
