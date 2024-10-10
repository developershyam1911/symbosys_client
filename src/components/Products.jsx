import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pro from "../assets/img/pro.png";
const products = [
  { title: "E-commerce Website", link: "E-Commerce-Website" },
  { title: "Informative Website", link: "Informative-Website" },
  { title: "Blogs & News Website", link: "Blog-News-Website" },
  { title: "NGO & Non-profit Websites", link: "NGO-Website" },
  { title: "Educational Websites", link: "Educational-Website" },
  { title: "Social Media Websites", link: "Social-Media-Website" },
  { title: "Business Website", link: "Business-Website" },
  { title: "Personal Websites", link: "Personal-Website" },
  {
    title: "School Management Software",
    link: "School-Management-Software",
  },
  {
    title: "College Management Software",
    link: "College-Management-Software",
  },
  {
    title: "Hospital Management Software",
    link: "Hospital-Management-Software",
  },
  {
    title: "Hotel Management Software",
    link: "Hotel-Management-Software",
  },
  {
    title: "Restaurant Management Software",
    link: "Restaurant-Management-Software",
  },
  {
    title: "Library Management Software",
    link: "Library-Management-Software",
  },
  {
    title: "Real Estate Management Software",
    link: "Real-Estate-Management-Software",
  },
  {
    title: "Transport Management Software",
    link: "Transport-Management-Software",
  },
  {
    title: "Inventory Management Software",
    link: "Inventory-Management-Software",
  },
  {
    title: "Construction Management Software",
    link: "Construction-Management-Software",
  },
  { title: "Custom ERP Management Software", link: "Custom-ERP-Software" },
  { title: "Gaming App Development", link: "Gaming-App-Development" },
  {
    title: "Social Media App Development",
    link: "Social-Media-App-Development",
  },
  {
    title: "E-Commerce App Development",
    link: "E-Commerce-App-Development",
  },
  { title: "Dating App Development", link: "Dating-App-Development" },
  { title: "Fitness App Development", link: "Fitness-App-Development" },
  {
    title: "Entertainment App Development",
    link: "Entertainment-App-Development",
  },
  { title: "Finance App Development", link: "Finance-App-Development" },
  { title: "Business App Development", link: "Business-App-Development" },
];

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProductList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/product`
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
  return (
    <div
      className="container-fluid industry-services"
      style={{ background: "linear-gradient(135deg, #ADD8E6, #00BFFF)" }} // Gradient background
    >
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Products</h2>
        </div>
        <div className="row">
          {data?.map((product, index) => (
            <div className="col-md-3 col-sm-6 col-12" key={index}>
              <div className="service-item">
                <Link
                  to={`/products/${product.slug}`}
                  className="nav-item nav-link"
                >
                  <div className="product-card">
                    <img
                      src={pro}
                      alt=""
                      style={{ height: "120px", width: "120px" }}
                    />
                    <h4 className="product-name">{product.name}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for the new design */}
      <style jsx>{`
        /* Section title styling */
        .section-title {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 40px;
          position: relative;
        }

        /* Row styling for responsive layout */
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        /* Product card design */
        .product-card {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          cursor: pointer;
          border: 1px solid #ddd;
          background-image: linear-gradient(135deg, #f0f8ff, #e0ffff);
        }

        /* Hover animation */
        .product-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        }

        /* Product name styling */
        .product-name {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          transition: color 0.3s;
        }

        .product-card:hover .product-name {
          color: #00bfff;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .product-card {
            height: 180px;
            padding: 15px;
          }

          .product-name {
            font-size: 18px;
          }

          .section-title {
            font-size: 28px;
          }
        }

        @media (max-width: 576px) {
          .product-card {
            height: 160px;
          }

          .product-name {
            font-size: 16px;
          }

          .section-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
