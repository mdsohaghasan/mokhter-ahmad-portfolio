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

    const slicedLecture = Lecture.slice(-6);

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
     
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center px-10 lg:px-32 ">
            <span className="border border-white rounded-2xl py-1 px-3 text-center ">
              #Lectures
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center ">
              #Halaqah
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center ">
              #Hajj&Omrah
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center ">
              #Mahfil
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center ">
              #JummaKhutba
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center ">
              #Podcast
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center ">
              #Seminer
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center ">
              #Nasihah
            </span>
          </div>
        </div>
     

     {/* ------------- */}

     <div className="container px-5 py-8 ">
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 lx:grid-cols-3 gap-3">
        {slicedLecture.map((lecture) => (
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
