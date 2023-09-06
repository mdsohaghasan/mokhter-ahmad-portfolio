"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import BlogDetails from "./BlogDetails";


const Page = async ({ params }) => {
 
  const { blog_details } = params;
  console.log(blog_details);


    
  // const [Blog, setBlog] = useState([]);

  // useEffect(() => {
  //   const url = `https://test.mashqulquran.com/blog/${blog_details}`;
  //   fetch(url, {
  //     // headers: {
  //     //   authorization: `Bearer ${token}`,
  //     // },
  //   })
  //   .then((res) => res.json())
  //   .then((data) => setBlog(data))
  //   .catch((error) => {
  //     console.error("Error fetching program data:", error);
  //   });
  // }, []);
  // console.log(Blog);
   

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


        <BlogDetails param={blog_details}></BlogDetails>

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
