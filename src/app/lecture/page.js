import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lecture from "./Lecture/Lecture";

const lecture = () => {
  return (
    <div className="py-8">
      {/* start Title */}
      <div className="container ">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">lecture</h4>
          <h2 className="st-section-heading-subtitle">lecture</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      {/* End Title */}
      <div className="container px-24">
        <p className="text-center py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <div className="container lg:px-24 md:px-24 sm:px-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 ">
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Lectures
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Halaqah
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Hajj&Omrah
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Mahfil
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #JummaKhutba
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Podcast
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Seminer
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Nasihah
            </span>
          </div>
        </div>
      </div>

      <Lecture></Lecture>

      <div className="container lg:px-32">
        <div className="py-3 px-6 bg-slate-800 flex items-center justify-between rounded-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="st-hero-btn">
            <Link
              href="/applyProgram"
              className="st-btn st-style1 st-color1 st-smooth-move"
            >
              Apply Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lecture;
