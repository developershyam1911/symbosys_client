import React from "react";
import { useParams } from "react-router-dom";

const SingleServices = () => {
  const { slug } = useParams();
  return (
    <div>
      <div className="text-center my-3">
        <h2>This page is under Progress</h2>
      </div>
      <p className="text-center my-3">{slug}</p>
    </div>
  );
};

export default SingleServices;
