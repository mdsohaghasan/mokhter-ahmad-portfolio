"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";




const Portfolio = () => {

  const [Gallery, setGallery] = useState([]);

  useEffect(() => {
    const url = `https://test.mashqulquran.com/gallery`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setGallery(data))
    .catch((error) => {
      console.error("error fetching program data:", error);
    });
  }, []);

  console.log(Gallery);

  return (
    <section id="portfolio">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Gallary</h4>
          <h2 className="st-section-heading-subtitle">Gallary</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row">
        {Gallery.map((gallery) => (
          <div className="col-lg-4 col-md-6" key={gallery.id}>
            <div className="st-portfolio-single st-style1 st-lightgallery">
              <div className="st-portfolio-item">
                <Link
                  href={gallery.url}
                  className="st-portfolio st-zoom st-lightbox-item"
                >
                  <div className="st-portfolio-img st-zoom-in">
                    <Image src={gallery.url} alt="portfolio" width={400} height={400}/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
            ))}

          <div className="col-lg-12 text-center">
            <div className="st-portfolio-btn">
              <Link href="#" className="st-btn st-style1 st-color1">
                Load More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Portfolio;
