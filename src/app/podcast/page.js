"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Podcast = () => {
  const [Podcast, setPodcast] = useState([]);

  useEffect(() => {
    const url = `https://test.mashqulquran.com/podcast`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => setPodcast(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  console.log(Podcast);

  return (
    <div className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Podcast</h4>
          <h2 className="st-section-heading-subtitle">Podcast</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-1 px-5 pb-5">
        {Podcast.map((podcast) => (
          <div
            className="flex gap-3 p-3 m-3 rounded-lg bg-slate-900"
            key={podcast.id} >
            {/* <div className="">
              <Image
                src={podcast.url}
                alt="podcast thumbnail"
                width={120}
                height={120}
                className="rounded-full" />
            </div> */}
            <div className="w-full">
              <h3 className="text-xl">{podcast.title}</h3>
              <p> {podcast.lecturer}</p>
               <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={podcast.audio}></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
