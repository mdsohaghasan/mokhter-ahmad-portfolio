import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const BlogDetails = ({ param }) => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`https://test.mashqulquran.com/blog/${param}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const res = await response.json();
          setBlogData(res);
        } else {
          throw new Error("Response is not valid JSON");
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
  
    fetchBlogData();
  }, [param]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  console.log(blogData)

  return (

        <div className="lg:basis-3/4 " >
          {/* <!-- .slick-slide-in --> */}
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
          {/* <!-- .slick-slide-in --> */}
        </div>

  );
};

export default BlogDetails;




   