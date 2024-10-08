import React from "react";
import "./callingbtn.css";
import { MdCall, MdWhatsapp } from "react-icons/md";
const CallingBtn = () => {
  return (
    <div className="calling-btn">
      <a href="tel:+919122010150" class="">
        <MdCall size={40} className="text-white" />
      </a>
    </div>
  );
};

export default CallingBtn;
