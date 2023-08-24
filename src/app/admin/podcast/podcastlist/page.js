"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page =  () => {

  // function getToken() {
  //   return localStorage.getItem('accessToken');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

  
  const [Podcast, setPodcast] = useState([]);

  useEffect(() => {
    const url = `https://test.mashqulquran.com/podcast`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setPodcast(data))
    .catch((error) => {
      console.error("Error fetching program data:", error);
    });
  }, []);

  console.log(Podcast);

// EVENT HANDLER FOR DELETE BUTTON

const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing");
      if (proceed) {
        console.log(id);
        const url = `https://test.mashqulquran.com/podcast/${id}`;
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
              const remaining = Podcast.filter((podcast) => podcast._id !== id);
              setPodcast(remaining);
              if (remaining) {
                toast.success("Sabbas: Podcast Out Koira Disi");
                reset();
              } else {
                toast.error("Podcast Delete Hoy Nai, Abar..");
              }
            }
          });
      }
};


  return (
    <section className="container">
      <h1 className="text-center text-5xl py-3">Podcast List</h1>
      <div className="grid grid-cols-2 gap-1 px-1 pb-5">
        {Podcast.map((podcast) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={podcast.id}>
            <Image src={podcast.url} alt="blog thumbnail" width={500} height={500} />
            <div className="py-2">
              <h3 className="text-xl">{podcast.title}</h3>
              <p> Lecturer : {podcast.lecturer}</p>
              <p> Date : {podcast.date}</p>
              <audio controls>
                <source src={podcast.audio} type="audio/ogg" />
                <source src={podcast.audio} type="audio/mpeg" />
              </audio>
              <button className="px-3 py-2  my-3 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(podcast._id)}>Delete podcast</button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;

