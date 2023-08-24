"use client";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharīahForm from "./SharīahForm";
import FamilyForm from "./FamilyForm";

const Consultancy = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs">
      <ul className="list-none flex  gap-3 bg-[#101624] border-[#000] rounded-3xl py-2 px-3">
        <li className="border border-[#000] rounded-2xl py-1 px-3  text-center">
          <button onClick={() => handleTabClick(1)}>
            Sharīah Prescription
          </button>
        </li>
        <li className="border border-[#000] rounded-2xl py-1 px-3  text-center">
          <button onClick={() => handleTabClick(2)}> Family Consultancy</button>
        </li>
      </ul>
      {/* Shariyah Prescription from  */}
      <div className={activeTab === 1 ? "tab-content-active" : "tab-content"}>
        <h3>Sharīah Prescription</h3>
        <p>
          Sharīah Prescription sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <SharīahForm></SharīahForm>
      </div>

      {/* Family Consultancy from  */}
      <div className={activeTab === 2 ? "tab-content-active" : "tab-content"}>
        <h3>Family Consultancy</h3>
        <p>
          Family Consultancy sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <FamilyForm></FamilyForm>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Consultancy;
