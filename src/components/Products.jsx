import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      style={{ background: "#ADD8E6" }}
    >
      <div className="container">
        <div className="text-center">
          <h2>Our Products</h2>
        </div>
        <div className="row">
          {data?.map((product, index) => (
            <div className="col-md-3" key={index}>
              <div className="service-item">
                <Link
                  to={`/products/${product.slug}`}
                  className="nav-item nav-link"
                >
                  <h4>{product.name}</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
