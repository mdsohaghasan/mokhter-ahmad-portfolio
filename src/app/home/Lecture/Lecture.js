"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const Lecture = () => {

    const [Lecture, setLecture] = useState([]);

    useEffect(() => {
      const url = `https://test.mashqulquran.com/lecture`;
      fetch(url, {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => res.json())
      .then((data) => setLecture(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
    }, []);
  
    console.log(Lecture);

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

     {/* ------------- */}

     <div className="container lg:px-24 lg:py-8  md:px-24 md:py-8  px-24 py-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-3">
        {Lecture.map((lecture) => (
          <div className="border border-[#000]   bg-slate-800" key={lecture._id}>
            <Plyr
              source={{
                type: "video",
                sources: [{ src: lecture.url, provider: "youtube" }],
              }}
            />
          </div>
           ))}
        </div>
      </div>
     {/* ------------- */}

      
    </div>
  );
};

export default Lecture;
