"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import getBlogDetails from "./BlogDetails";



const Page = async ({ params }) => {
 
  const { title, des, category, date, author, url } = await getBlogDetails(params.blog_details);  

  console.log(title, des, category, date, author, url)

  return (
    <section id="blog">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">BLOG</h4>
          <h2 className="st-section-heading-subtitle">LATEST BLOG</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="lg:flex container gap-8">


      <div className="lg:basis-3/4 " >
          
          <div className="slick-slide-in" >
            <div className="st-post-single st-style1">
              <div  className="st-post-thumb st-zoom">
                <Image src={url} className="st-zoom-in" alt="blog1" width={100} height={100} />
              </div>
              <div className="st-post-info">
                <div className="st-post-date">
                  By:
                  <span className="st-post-author">
                  {author}
                  </span>
                  <span className="st-post-date-divider">|</span>
                  <span className="st-post-publish-date">{date}</span>
                  <span className="st-post-date-divider">|</span>
                  <span className="st-post-publish-date">{category}</span>
                </div>
                <h3 className="st-post-title">{title}</h3>
                <h5 className="py-5">{des}</h5>
              </div>
            </div>
          </div>
          
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
