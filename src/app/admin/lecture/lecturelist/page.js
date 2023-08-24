"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

  const [Lecture, setLecture] = useState([]);

  useEffect(() => {
    const url = `https://test.mashqulquran.com/lecture`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => setLecture(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  console.log(Lecture);

  const { reset } = useForm();

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("are you sure deleteing");
    if (proceed) {
      console.log(id);
      const url = `https://test.mashqulquran.com/lecture/${id}`;
      fetch(url, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log(data);
            const remaining = Lecture.filter((lecture) => lecture._id !== id);
            setLecture(remaining);
            if (remaining) {
              toast.success("Sabbas: lecture Out Koira Disi");
              reset();
            } else {
              toast.error("lecture Delete Hoy Nai, Abar..");
            }
          }
        });
    }
  };

  // const Lecture = [
  //  {
  //     id: 1,
  //     url: "https://youtu.be/XhE9KHkMDgk",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     category: "Islamic bayan",
  //     date: "12-12-2022",
  //   },
  //   {
  //     id: 2,
  //     url: "https://youtu.be/8E5IwQ2whpg",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     category: "Islamic bayan",
  //     date: "12-12-2022",
  //   },
  //   {
  //     id: 3,
  //     url: "https://youtu.be/9wH1Mcgw0Rs",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     category: "Islamic bayan",
  //     date: "12-12-2022",
  //   },

  // ];

  return (
    <section className="container">
      <h1 className="text-center text-5xl py-3">Lecture List</h1>
      <div className="grid grid-cols-3 gap-1 px-1 pb-5">
        {Lecture.map((lecture) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={lecture.id}>
            <Plyr
              source={{
                type: "video",
                sources: [{ src: lecture.url, provider: "youtube" }],
              }}
            />
            {/* <Image src={lecture.url} alt="blog thumbnail" /> */}
            <div className="py-2">
              <p> Title : {lecture.title}</p>
              <p> Category : {lecture.category}</p>
              <p> Date : {lecture.date}</p>
            </div>
            <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(lecture._id)}>Delete Lecture</button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;
