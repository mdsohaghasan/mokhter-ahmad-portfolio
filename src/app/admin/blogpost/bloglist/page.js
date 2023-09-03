"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { revalidateTag } from 'next/cache'

const Page =  () => {

  // function getToken() {
  //   return localStorage.getItem('accessToken');
  // }
  // const token = getToken(); 
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

  
  const [Blog, setBlog] = useState([]);

  useEffect(() => {
    const url = `https://test.mashqulquran.com/blog`;
    fetch(url,  {
      next:{ revalidate: 10 },
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

// EVENT HANDLER FOR DELETE BUTTON

const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing");
      if (proceed) {
        console.log(id);
        const url = `https://test.mashqulquran.com/blog/${id}`;
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
              const remaining = Blog.filter((post) => post._id !== id);
              setBlog(remaining);
              if (remaining) {
                toast.success("Sabbas: Post Out Koira Disi");
                reset();
              } else {
                toast.error("Post Delete Hoy Nai, Abar..");
              }
            }
          });
      }
};

 

  return (
    <section className="container">
      <h1 className="text-center text-5xl py-3">Blog List</h1>
      <div className="grid grid-cols-2 gap-1 px-1 pb-5">
        {Blog.map((post) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={post.id}>
            <Image src={post.url} alt="blog thumbnail" width={500} height={500} />
            <div className="py-2">
              <h3 className="text-xl">{post.title}</h3>
              <p className="text-justify">{post.des}</p>
              <p> Author : {post.author}</p>
              <p> Date : {post.date}</p>
              <button className="px-3 py-2  bg-green-300 rounded-lg text-slate-800"><Link href={`/admin/blogpost/bloglist/${post._id}`} target="_blank">Update Post</Link></button>
              <button className="px-3 py-2 mx-3 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(post._id)}>Delete Post</button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;

