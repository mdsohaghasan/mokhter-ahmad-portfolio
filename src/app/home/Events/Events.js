"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mokhter from "./mokhter.jpg";
import program1 from "./program1.jpg";
import program2 from "./program2.png";
import program3 from "./program3.jpg";

const Events = () => {
  const [Event, setEvent] = useState([]);

  useEffect(() => {
    const url = `https://test.mashqulquran.com/event`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  console.log(Event);

  // const res = [
  //   // {
  //   //   id: 1,
  //   //   image: mokhter,
  //   //   title: "Lecture Session On Positive Parenting",
  //   //   time: "08:30 PM",
  //   //   date: "12-12-2022",
  //   //   address: "Adv. Tarek Memorial Auditorium, Mymensingh",
  //   // },
  //   {
  //     id: 2,
  //     image: program1,
  //     title: "Live Q&A Program, Sharīah Prescription",
  //     time: "08:30 PM",
  //     date: "20-07-2023",
  //     address: "Social Media Platfrom",
  //   },
  //   {
  //     id: 3,
  //     image: program2,
  //     title: "Jumuah Khutbah",
  //     time: "12:30 PM",
  //     date: "21-07-2023",
  //     address: "Masjid e Bilal Ra. Banasree, Dhaka",
  //   },
  //   {
  //     id: 3,
  //     image: program3,
  //     title: "লেকচার সেশন- হজ্জ পরবর্তী করনীয়",
  //     time: "05:00 PM",
  //     date: "22-07-2023",
  //     address: "কুরআন স্কুল ক্যাম্পাস, ৮/১৬ ব্লক-এ, লালমাটিয়া, ঢাকা ",
  //   },
  // ];

  return (
    <section>
      <div className="container">
        <div className="st-height-b100 st-height-lg-b80"></div>

        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Events</h4>
          <h2 className="st-section-heading-subtitle">Events </h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
        <div className="px-5 lg:px-0">
          <div className="lg:flex  gap-3">
            <div className="bg-[#101624] basis-2/5 relative  ">
              <Image src={mokhter} alt="Mokhtar Ahmad" />

              <div className=" p-3 bg-[#101624] absolute  bottom-0 w-full ">
                <div className="title ">
                  <h3 className="text-xl ps-1.5 m-0">
                    Lecture Session On Positive Parenting
                  </h3>
                  <div className="">
                    <i className="bi bi-geo-alt-fill "></i>
                    <span className="px-2 text-base	">
                      Adv. Tarek Memorial Auditorium, Mymensingh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#101624] basis-3/5">
              {Event.map((event) => (
                <div className="flex p-3" key={event.id}>
                  <div className="date basis-1/5">
                    <h4 className="text-lg text-[#FEC544] m-0">{event.date}</h4>
                    <h6 className="text-lg">{event.time}</h6>
                  </div>
                  <div className="thumbnail basis-1/5">
                    <Image
                      src={event.image}
                      alt="quran"
                      className="rounded-lg"
                      width={200}
                      height={200}
                    ></Image>
                  </div>
                  <div className="title basis-3/5">
                    <h3 className="text-xl	px-3 m-0">{event.title}</h3>
                    <div className="px-3 ">
                      <i className="bi bi-broadcast"></i>
                      <span className="px-2">{event.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="st-height-b100 st-height-lg-b80"></div>
      </div>
    </section>
  );
};

export default Events;
