import React, { useState } from "react";
import mobilehome from "../assets/img/mobilehome.png";
import websitehome from "../assets/img/websitehome.png";
import DigitalHome from "../assets/img/DigitalHome.png";
import VideoAnimation from "../assets/img/VideoAnimation.png";
import iconbc from "../assets/img/iconbc.png";
import Domain from "../assets/img/domainHome.png";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const [slides] = useState([
    {
      img: mobilehome,
      title: "Mobile App Development",
      description:
        "Mobile App Development: We offer mobile app development services, crafting intuitive, user-friendly apps for iOS and Android platforms. Our expertise includes custom app design, performance optimisation, and seamless integration with existing systems. Enhance your business reach with our innovative, high-quality mobile solutions.",
    },
    {
      img: websitehome,
      title: "Web Development",
      description:
        "Website Designing And Development: We specialise in website design and development, creating visually stunning, responsive websites tailored to your business needs. Our services include custom coding, SEO optimization, and e-commerce integration to enhance online visibility and user experience. Partner with us for a professional, engaging digital presence.",
    },
    {
      img: DigitalHome,
      title: "Digital Marketing",
      description:
        "Digital Marketing: Our digital marketing services drive online growth through targeted strategies. We specialise in SEO, social media marketing, content marketing, and PPC campaigns. You can boost your online presence and reach your target audience effectively with our comprehensive digital marketing solutions.",
    },
    {
      img: DigitalHome,
      title: "Graphics Designing",
      description:
        "Graphic Designing: Our graphic design services deliver visually compelling and brand-consistent designs. We specialise in logo design, marketing materials, and social media graphics. Enhance your brand's identity and engage your audience with our creative, professional design solutions.",
    },
    {
      img: Domain,
      title: "Domain & Hosting",
      description:
        "Domain and Hosting: We provide reliable domain registration and web hosting services to ensure your website is always accessible and secure. Our offerings include domain management, SSL certificates, and 24/7 support. Trust us to keep your site running smoothly with our robust, high-performance hosting solutions.",
    },
    {
      img: VideoAnimation,
      title: "Video & Animation",
      description:
        "Video and Animation: Our video and animation services create engaging, high-quality visual content that captivates your audience. We specialize in explainer videos, promotional videos, and animated graphics. Enhance your brand’s storytelling and drive engagement with our professional video and animation solutions.",
    },
  ]);
  const [counters] = useState([
    {
      value: 99,
      description: "Success in getting happy customers",
    },
    {
      value: 25,
      description: "Thousands of successful business",
    },
    {
      value: 120,
      description: "Total clients who love HighTech",
    },
    {
      value: 5,
      description: "Stars reviews given by satisfied clients",
    },
  ]);
  const sliders = [
    { img: iconbc, text: "Graphic Designing" },
    { img: iconbc, text: "Mobile App Development" },
    { img: iconbc, text: "Website Development" },
    { img: iconbc, text: "Search Engine Optimization" },
    { img: iconbc, text: "Software Development" },
    { img: iconbc, text: "Software Training" },
    { img: iconbc, text: "Domain & Hosting" },
    { img: iconbc, text: "Digital Marketing" },
    { img: iconbc, text: "Ecommerce Website" },
  ];
  return (
    <>
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video-bg">
          <source
            src="https://res.cloudinary.com/dipdehhvk/video/upload/v1722834715/InShot_20240804_222037956_i6ntmt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Swiper Slider on top of the video */}
      <div className="slider-content">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          //   autoplay={{ delay: 3000 }} // Autoplay with delay
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {slides?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="carousel-item">
                  <div className="content-overlay">
                    <div className="photo">
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{ width: "400px", height: "440px" }}
                      />
                    </div>
                    <div className="text-content">
                      <h1
                        style={{
                          color: "white", // Changed to white for better visibility
                          fontSize: "50px",
                          fontFamily: "Impact",
                        }}
                      >
                        {item.title}
                      </h1>
                      <p style={{ color: "white" }}>{item.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "lightblue", color: "black" }}
      >
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => (
              <div
                className="col-lg-3 wow fadeIn"
                data-wow-delay={`${index * 0.2}s`}
                key={index}
              >
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary">{counter.value}</h1>
                  <h5 className="text-white mt-1">{counter.description}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="warning-notice">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-12 col-md-2 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "#cc0108" }}
            >
              <button
                className="btn-block mt-2"
                style={{
                  backgroundColor: "#cc0108",
                  color: "white",
                  border: "none",
                  fontSize: "18px",
                }}
              >
                Services
              </button>
            </div>
            <div
              className="col-12 col-md-10 d-flex align-items-center"
              style={{ backgroundColor: "#cc0108", color: "#f5c413" }}
            >
              <div className="scrolling-text">
                <marquee>
                  <p
                    style={{
                      marginBottom: "5px",
                      fontWeight: "600",
                      paddingTop: "12px",
                      color: "#e0e0e0",
                      textAlign: "center",
                      fontSize: "15px",
                    }}
                  >
                    "Website Designing and Development, Mobile App Development,
                    School Management, Hotel Management Software, SEO, SEM,
                    Digital Marketing, Graphic Designing, Company Registration,
                    GST, E-Filing, ERP, CRM, etc"
                  </p>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="sliders">
          <div className="slide-tracks">
            {sliders.map((slide, index) => (
              <div key={index} className="slides">
                <img src={slide.img} alt="Icon" />
                <div className="slide-content">
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
