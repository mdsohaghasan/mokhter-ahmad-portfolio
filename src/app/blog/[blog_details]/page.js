"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import quran from "./quran.jpg";
import Link from "next/link";


const Page = async ({ params }) => {
 
  const { blog_details } = params;
  console.log(blog_details);

  const response = await fetch(`https://test.mashqulquran.com/blog/${blog_details}`);
  const res = await response.json();
  console.log(res);
    

   

  // const Blog = [
  //   {
  //     id: 1,
  //     title: "Exploring the Essence of Islamic Spirituality: Insights and Reflections",
  //     url: quran,
  //     author: "mokhter ahmad",
  //     date: "12-12-2022",
  //   },
  // ];

  // console.log(Blog);

// const [{ title, url, author, date }] = Blog;

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
        <div className="lg:basis-3/4 " key={res.id}>
          {/* <!-- .slick-slide-in --> */}
          <div className="slick-slide-in">
            <div className="st-post-single st-style1">
              <div  className="st-post-thumb st-zoom">
                <Image src={res.url} className="st-zoom-in" alt="blog1" width={100} height={100} />
              </div>
              <div className="st-post-info">
                <div className="st-post-date">
                  By:
                  <span className="st-post-author">
                  {res.author}
                  </span>
                  <span className="st-post-date-divider">|</span>
                  <span className="st-post-publish-date">{res.date}</span>
                  <span className="st-post-date-divider">|</span>
                  <span className="st-post-publish-date">{res.category}</span>
                </div>
                <h3 className="st-post-title">{res.title}</h3>
                <h5 className="py-5">{res.des}</h5>

              </div>
            </div>
          </div>
          {/* <!-- .slick-slide-in --> */}
        </div>

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
  );
};

export default Page;
