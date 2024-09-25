import React, { useState } from "react";
import { BsMap } from "react-icons/bs";

const ContactHome = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to the server)
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      project: "",
      message: "",
    });
  };

  return (
    <div className="container-fluid py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Get In Touch</h5>
          <h1 className="mb-3">Contact for any query</h1>
        </div>
        <div className="contact-detail position-relative p-5">
          <div className="row g-5 mb-5 justify-content-center">
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square bg-danger rounded-circle"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-primary">Address</h4>
                  <a
                    href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h5"
                  >
                    Harmu, Ranchi
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square bg-danger rounded-circle"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fa fa-phone text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-primary">Call Us</h4>
                  <a
                    className="h5"
                    href="tel:+919122010150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 9122010150
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square bg-danger rounded-circle"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fa fa-envelope text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-primary">Email Us</h4>
                  <a
                    className="h5"
                    href="mailto:support@symbosys.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support@symbosys.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
              <div
                className="p-5 h-100 rounded contact-map"
                style={{ backgroundColor: "hsl(0, 79%, 41%)" }}
              >
                <iframe
                  className="rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14650.986249010546!2d85.286949!3d23.3611947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e087e52d3c8d%3A0x2fa40f09c192ed54!2sHarmu%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1724907614345!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
              <div
                className="p-5 rounded contact-form"
                style={{ backgroundColor: "#991515" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control border-0 py-3"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-100 form-control border-0 py-3"
                      rows="6"
                      cols="10"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="text-start">
                    <button
                      className="btn bg-primary text-white py-3 px-5"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
