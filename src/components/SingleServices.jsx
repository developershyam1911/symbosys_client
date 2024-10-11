import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallingBtn from "./CallingBtn";
import "./singleservice.css";
const SingleServices = () => {
  const { slug } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const getSingleProduct = async () => {
      if (!slug) return;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/service/${slug}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response);
        setData(response.data.data);
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    getSingleProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="skeleton-img"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <img
              src={data.image}
              alt={data.title} // Use alt attribute for accessibility
              className="img-fluid rounded"
              style={{ height: "300px", width: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-12">
            <h1 className="mt-3">{data.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: data.description }}
              style={{ textAlign: "justify" }}
            />
            <CallingBtn /> {/* Assuming this is a button for calling */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleServices;
