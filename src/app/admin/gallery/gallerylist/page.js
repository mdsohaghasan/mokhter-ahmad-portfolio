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

// EVENT HANDLER FOR DELETE BUTTON

const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing book");
      if (proceed) {
        console.log(id);
        const url = `https://test.mashqulquran.com/gallery/${id}`;
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
              const remaining = Gallery.filter((gallery) => gallery._id !== id);
              setGallery(remaining);
              if (remaining) {
                toast.success("Sabbas: gallery Out Koira Disi");
                reset();
              } else {
                toast.error("gallery Delete Hoy Nai, Abar..");
              }
            }
          });
      }
};


  return (
    <section className="container">
      <h1 className="text-center text-5xl py-3">Gallery List</h1>
      <div className="grid grid-cols-2 gap-1 px-1 pb-5">
        {Gallery.map((gallery) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={gallery.id}>
            <Image src={gallery.url} alt="blog thumbnail" width={500} height={500} />
            <div className="py-2">
              <h5 className="text-xl">{gallery.caption}</h5>
              <button className="px-3 py-2 my-3 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(gallery._id)}>Delete Gallery</button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;

