"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import podcast from "./Podcast.jpeg";
import title from "./title.png";
import btnPart from "./btn-part.png";
import Link from "next/link";




// Ripple Water Effect .....
// import { useEffect } from "react";
// import $ from "jquery";
// import "jquery.ripples";

const Podcast = () => {
  // Jquery Ripple water effect .............

  // useEffect(() => {
  //   $(".st-ripple-version").ripples({
  //     resolution: 512,
  //     dropRadius: 20,
  //     perturbance: 0.04,
  //   });
  // }, []);

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

  const slicedPodcast = Podcast.slice(-8);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="podcast ">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container px-5">
        <div className="lg:flex justify-center ">
          <div className="bg-[#101624] py-4 ">
            <div className="title">
              <Image src={title} alt="play" />
            </div>
            <div className="podcastButton grid grid-cols-2 gap-3 ms-20 mr-16 py-2">  
            {slicedPodcast.map((podcast) => (
              <div className="bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center" key={podcast._id}>
                {/* <i className="bi bi-play-fill text-3xl ms-3"></i> */}
                <div>
                  <audio ref={audioRef} src="/pod.mp3" />
                    <button onClick={togglePlay}>
                      {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
                <Image src={btnPart} alt="btn" className="part mx-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
            ))}
            </div>
            <div className="flex justify-center my-3">
              <button className=" border-[#6D6E71] border-2 py-1 px-10 text-white rounded-xl ">
                 <Link href="/podcast" target="_blank">See More</Link>
              </button>
            </div>
            <div></div>
          </div>
          <div className="self-center  md:hidden lg:block  ">
            <Image src={podcast} alt="podcast" />
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Podcast;