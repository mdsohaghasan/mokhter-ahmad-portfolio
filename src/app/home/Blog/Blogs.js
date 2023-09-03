"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Blogs = () => {
    
  const [Blog, setBlog] = useState([]);

  useEffect(() => {
    const url = `https://test.mashqulquran.com/blog`;
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

  console.log(Blog);

 const slicedBlogs = Blog.slice(-3);

  return (
    <section className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">BLOG</h4>
          <h2 className="st-section-heading-subtitle">NEWS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
 
      {/* <!-- Latest News Container --> */}
     <div className="px-5 lg:px-0 	">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-3 justify-items-center	">
        {slicedBlogs.map((post) => (
          <div className="w-10/12 " key={post.id}>
            <Link href={`/blog/${post._id}`}>
                <div className="st-post-thumb st-zoom">
                 <Image  src={post.url} alt={post.title} className="st-zoom-in" width={400} height={400}/>
                </div>
              <div className="my-2 ">
                <span>By :</span> <span className="text-[#fec544]">{post.author}</span>
                <span className="px-1">|</span>
                <span className="text-[#fec544]">{post.date}</span>
              </div>
              <h4 className="st-post-title ">{post.title}</h4>
            </Link>
          </div>
        ))}
      </div>
      </div>
      <div className="st-height-b95 st-height-lg-b75 "></div>
    </section>
  );
};

export default Blogs;
