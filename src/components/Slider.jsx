import React, { useEffect, useState } from "react";
import mobilehome from "../assets/img/mobilehome.png";
import websitehome from "../assets/img/websitehome.png";
import DigitalHome from "../assets/img/DigitalHome.png";
import VideoAnimation from "../assets/img/VideoAnimation.png";
import iconbc from "../assets/img/iconbc.png";
import Domain from "../assets/img/domainHome.png";
import "swiper/css";
import { Pagination, Autoplay, Zoom, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./benefits.css";
import axios from "axios";
import { Link } from "react-router-dom";
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
      description: "Happy customers",
    },
    {
      value: 25,
      description: "Thousands of successful business",
    },
    {
      value: 95,
      description: "Total clients who love HighTech",
    },
    {
      value: 52,
      description: "Stars rated by happy customers",
    },
  ]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProductList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/service`
      );
      setData(response.data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("Failed to fetch product list.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);
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
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          zoom={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay, Zoom, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="carousel-item">
                  <div className="content-overlay col-md-8">
                    <div className="photo">
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{ width: "400px", height: "440px" }}
                      />
                    </div>
                    <div className="text-content">
                      <h1
                        className="custom-text-heading"
                        style={{
                          color: "white",
                          fontSize: "50px",
                          fontFamily: "arial",
                        }}
                      >
                        {item.title}
                      </h1>
                      <p
                        style={{
                          color: "white",
                          // backgroundColor: "red",
                          padding: "0 40px",
                        }}
                      >
                        {item.description}
                      </p>
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
        style={{
          background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)", // Gradient background
          color: "black",
        }}
      >
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay={`${index * 0.2}s`}
                key={index}
                style={{
                  marginBottom: "20px",
                  transition: "transform 0.3s ease-in-out", // Smooth hover transition
                }}
              >
                <div
                  className="d-flex flex-column align-items-center counter p-3"
                  style={{
                    backgroundColor: "#fff", // White background for counter box
                    borderRadius: "10px", // Rounded corners
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                    padding: "20px", // Padding for content spacing
                    transition: "box-shadow 0.3s ease-in-out",
                  }}
                >
                  {/* Counter Value */}
                  <h1
                    className="text-primary"
                    style={{
                      fontSize: "36px", // Larger font size for desktop
                      color: "#007bff", // Primary color
                    }}
                  >
                    {counter.value}
                  </h1>

                  {/* Counter Description */}
                  <h5
                    className="text-dark mt-1 text-center counter-description"
                    style={{
                      fontSize: "18px", // Adjust font size for responsiveness
                    }}
                  >
                    {counter.description}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add hover effects and custom styles */}
        <style jsx>{`
          .counter:hover {
            transform: translateY(-10px); /* Lift on hover */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Deepen shadow on hover */
          }

          @media (max-width: 768px) {
            /* Adjust for tablets */
            .counter h1 {
              font-size: 30px; /* Smaller font for tablet */
            }
            .counter h5 {
              font-size: 16px;
            }
          }

          @media (max-width: 576px) {
            /* Adjust for mobile */
            .counter h1 {
              font-size: 24px; /* Even smaller font for mobile */
            }
            .counter h5 {
              font-size: 14px;
            }
          }
        `}</style>
      </div>

      <section className="offer-notice">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            {/* Left side button with fade-in animation */}
            <div
              className="col-12 col-md-2 d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft" // Fade-in animation
              style={{
                background: "linear-gradient(45deg, #ff416c, #ff4b2b)", // Gradient background
                padding: "10px",
              }}
            >
              <button
                className="btn-block offer-button"
                style={{
                  background: "linear-gradient(45deg, #ff416c, #ff4b2b)", // Matching gradient
                  color: "white",
                  border: "none",
                  fontSize: "18px", // Button size for mobile
                  fontWeight: "700", // Bold for emphasis
                  width: "100%",
                  padding: "10px 20px", // Bigger button
                  borderRadius: "30px", // Rounded corners
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow for depth
                  transition: "0.3s ease", // Smooth transition for hover
                }}
              >
                Limited Offers
              </button>
            </div>

            {/* Right side scrolling text with animation */}
            <div
              className="col-12 col-md-10 d-flex align-items-center animate__animated animate__fadeInRight" // Fade-in from right animation
              style={{
                background: "linear-gradient(45deg, #0f2027, #203a43, #2c5364)", // Dark gradient for contrast
                color: "#f5c413",
              }}
            >
              <div className="scrolling-text w-100">
                <marquee
                  behavior="scroll"
                  direction="left"
                  scrollamount="5" // Adjust scroll speed
                >
                  <p
                    style={{
                      marginBottom: "5px",
                      fontWeight: "bold", // Bold text
                      padding: "12px",
                      color: "#ffffff", // White for readability
                      textAlign: "center",
                      fontSize: "16px", // Larger font size
                      letterSpacing: "1px", // Spacing for readability
                    }}
                  >
                    <span style={{ color: "#f5c413" }}>Exclusive Offer: </span>
                    Website Designing & Development, Mobile App Development,
                    School Management, Hotel Management Software, SEO, SEM,
                    Digital Marketing, Graphic Designing, Company Registration,
                    GST, E-Filing, ERP, CRM, and more!
                  </p>
                </marquee>
              </div>
            </div>
          </div>
        </div>

        {/* Add styles for hover, animations, and keyframes */}
        <style jsx>{`
          /* Add animations for buttons */
          .offer-button {
            animation: fadeInUp 1s ease-in-out; /* Animate on load */
          }

          .offer-button:hover {
            background: linear-gradient(
              45deg,
              #ff6f61,
              #ff9068
            ); /* Lighter gradient on hover */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            transform: translateY(-2px); /* Lift button on hover */
            transition: transform 0.2s ease-in-out, background 0.3s ease-in-out;
          }

          /* Keyframes for fade-in effect */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Button and text fade-in animations */
          .animate__fadeInLeft {
            animation: fadeInLeft 1.5s;
          }

          .animate__fadeInRight {
            animation: fadeInRight 1.5s;
          }

          /* Add fade-in-left and fade-in-right keyframes */
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="sliders">
          <div className="slide-tracks">
            {data.map((slide, index) => (
              <div key={index} className="mt-2">
                <Link to={`/services/${slide.slug}`}>
                  <div className="slide-card">
                    <center>
                      {" "}
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="slide-image"
                      />
                    </center>
                    <div className="slide-content">
                      <p className="slide-title">{slide.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CSS for improved design and responsiveness */}
        <style jsx>{`
          /* Basic styles for sliders */
          .sliders {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            padding: 20px 0;
          }

          .slide-tracks {
            display: flex;
            flex-wrap: nowrap;
            gap: 20px;
            transition: transform 0.5s ease;
          }

          .slides {
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          /* Card-like structure */
          .slide-card {
            background: #ffffff;
            border-radius: 15px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            width: 250px;
            height: 250px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
          }

          .slide-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
          }

          /* Image styles for the card */
          .slide-image {
            width: 150px;
            // height: 50%;
            object-fit: cover;
          }

          /* Text content inside the card */
          .slide-content {
            padding: 15px;
            display: flex;
            border-top: 1px solid #ff416c;
            justify-content: center;
            align-items: center;
            background: #fafafa;
          }

          .slide-title {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            color: #333;
            transition: color 0.3s;
          }

          .slide-card:hover .slide-title {
            color: #ff416c;
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .slide-card {
              width: 200px;
              height: 200px;
            }

            .slide-title {
              font-size: 16px;
            }

            .slide-image {
              height: 55%;
            }
          }

          /* Tablet responsiveness */
          @media (max-width: 1024px) {
            .slide-card {
              width: 220px;
              height: 200px;
            }

            .slide-title {
              font-size: 17px;
            }

            .slide-image {
              height: 58%;
              padding: 10px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Slider;
