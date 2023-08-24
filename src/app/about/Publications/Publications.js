"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PubImg from "./publication.png";
import nasihah from "./nasihah.jpg";
import "./Publications.css";

const Publications = () => {

  const [Book, setBook] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/book`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setBook(data))
    .catch((error) => {
      console.error("Error fetching program data:", error);
    });
  }, []);

  console.log(Book);



  return (
    <section>
      <div className="container">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">Publications</h4>
            <h2 className="st-section-heading-subtitle">Publications </h2>
          </div>
          <div className="st-height-b50 st-height-lg-b50"></div>

          <div className="lg:flex gap-3">
            <div className="lg:basis-1/2 bg-[#101624]">
            {Book.map((book) => (
              <div className="flex px-4 pt-4 pb-2 mb-2" key={book._id}>
                <div className="thumbnail basis-1/5">
                  <Image src={book.url} alt="quran" className="rounded-lg bookimg" width={100} height={200}></Image>
                </div>
                <div className="title basis-3/5">
                  <h3 className="text-2xl	px-3 mt-2 mb-0">
                    {book.title}
                  </h3>
                  <div className="px-3 ">
                    <span>by {book.author}</span>
                  </div>
                </div>
              </div>
            ))}
            </div>
            <div className="lg:basis-1/2	">
              <Image src={PubImg} alt="Publications" />
            </div>
          </div>
          
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </div>
    </section>
  );
};

export default Publications;
