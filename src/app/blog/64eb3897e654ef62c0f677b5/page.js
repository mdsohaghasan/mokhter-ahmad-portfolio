"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const PostDetails = () => {

    const [blogData, setBlog] = useState([]);

    useEffect(() => {
      const url = `https://test.mashqulquran.com/blog/64eb3897e654ef62c0f677b5`;
      fetch(url, {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
    }, []);
  
    console.log(blogData);
  
      // AOS Animation .........
      // useEffect(() => {
      //   AOS.init();
      //   AOS.refresh();
      // }, []);

  return (

    <section id="blog">
    <div className="st-height-b100 st-height-lg-b80"></div>
    <div className="">
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title">BLOG</h4>
        <h2 className="st-section-heading-subtitle">LATEST BLOG</h2>
        {/* <p>{params}</p> */}
      </div>
      <div className="st-height-b25 st-height-lg-b25"></div>
    </div>

    <div className="lg:flex container gap-8">


          {/* <!-- .slick-slide-in --> */}
    <div className="lg:basis-3/4 " >
          <div className="slick-slide-in" >
            <div className="st-post-single st-style1">
              <div  className="st-post-thumb st-zoom">
                <Image src={blogData.url} className="st-zoom-in" alt="blog1" width={100} height={100} />
              </div>
              <div className="st-post-info">
                <div className="st-post-date">
                  By:
                  <span className="st-post-author">
                  {blogData.author}
                  </span>
                  <span className="st-post-date-divider">|</span>
                  <span className="st-post-publish-date">{blogData.date}</span>
                  <span className="st-post-date-divider">|</span>
                  <span className="st-post-publish-date">{blogData.category}</span>
                </div>
                <h3 className="st-post-title">{blogData.title}</h3>
                <h5 className="py-5">{blogData.des}</h5>
              </div>
            </div>
          </div>
        </div>
          {/* <!-- .slick-slide-in --> */}

      <div className="lg:basis-1/4  bg-[#070D1B] p-4">
        <div>
          <h2>Categories</h2>
        </div>
        <div>
          <ul className="text-xl">
            <li>
              <Link href="#">Quran & Sunnah</Link>
            </li>
            <li>
              <Link href="#">Self Development</Link>
            </li>
            <li>
              <Link href="#">Islamic Spirituality</Link>
            </li>
            <li>
              <Link href="#">Islamic History</Link>
            </li>
            <li>
              <Link href="#">Islamic Philosophy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="st-height-b100 st-height-lg-b80"></div>
  </section>
    
    // -------------

        

  );
};

export default PostDetails;

