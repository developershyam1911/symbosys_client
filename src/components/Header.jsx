import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/newlog.png";
import newGif from "../assets/img/new.gif";
const Header = () => {
  // State containing the dropdown menu items
  const [menuItems] = useState([
    { path: "/webDesign", label: "Website Designing & Development" },
    { path: "/seo", label: "SEO Optimization" },
    { path: "/video", label: "Video Animation" },
    { path: "/domain", label: "Domain & Hosting" },
    { path: "/digital", label: "Digital Marketing" },
    { path: "/mobile", label: "Mobile App Development" },
    { path: "/software", label: "Software Development" },
    {
      path: "/companyregis",
      label: "Company Registration and E-Filing",
      isNew: true,
    },
    {
      path: "/trademark",
      label: "Trade Mark and ISO Certification",
      isNew: true,
    },
    { path: "/buisnesscons", label: "Business Consultancy", isNew: true },
    { path: "/ecommerce", label: "Ecommerce" },
    { path: "/graphics", label: "Graphics Designing" },
  ]);

  // Placeholder for the newGif image source
  const newGif = "path_to_new.gif";
  return (
    <>
      {/* <div
        id="spinner"
        className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div> */}
      <div
        className="container-fluid"
        style={{
          background:
            "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
        }}
      >
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0 d-flex justify-content-between align-items-center">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" width="300" height="80" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                <Link
                  to="/"
                  className="nav-item nav-link active"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="nav-item nav-link"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="nav-item nav-link"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Blog
                </Link>
                <Link
                  to="/products"
                  className="nav-item nav-link"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Products
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Services
                  </Link>
                  <div className="dropdown-menu">
                    {menuItems.map((item, index) => (
                      <Link
                        to={`/services${item.path}`}
                        className="dropdown-item"
                        key={index}
                      >
                        {item.label}
                        {item.isNew && (
                          <img
                            src={newGif}
                            alt="New GIF Icon"
                            style={{ marginLeft: "5px" }}
                          />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/career"
                  className="nav-item nav-link"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Career
                </Link>
                <Link
                  to="/contact"
                  className="nav-item nav-link"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
