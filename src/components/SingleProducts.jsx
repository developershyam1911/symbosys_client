import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProducts = () => {
  const { slug } = useParams();
  const [desc, setDesc] = useState({});
  console.log(desc);

  useEffect(() => {
    const getSingleProduct = async () => {
      if (!slug) return;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/product/${slug}`,
          {
            headers: {
              "Content-Type": "application/json", // Ensure JSON is sent
            },
          }
        );
        console.log("response", response);
        setDesc(response.data.data.description);
      } catch (error) {
        console.error("eerror", error);
      }
    };
    getSingleProduct();
  }, [slug]);
  return (
    <>
      <div className="container my-5 gradient-background">
        <div className="row my-5 ">
          <div
            dangerouslySetInnerHTML={{ __html: desc }}
            style={{ textAlign: "justify" }}
          />
        </div>
      </div>

      <style jsx>{`
        .gradient-background {
          background: linear-gradient(
            45deg,
            #f0f4f8,
            #e3e9ee
          ); /* Light gradient colors */
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
          padding: 20px; /* Add some padding for aesthetics */
          border-radius: 8px; /* Optional: add some border radius */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        // .container {
        //   color: #333; /* Adjust text color for contrast */
        // }
      `}</style>
    </>
  );
};

export default SingleProducts;
