"use client";
import React, { useEffect, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import Image from "next/image";

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
    <div>
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
    </div>
  );
};

export default Lecture;
