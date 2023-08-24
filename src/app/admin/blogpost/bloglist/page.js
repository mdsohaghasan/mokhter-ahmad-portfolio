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

  // const Blog = [
  //  {
  //     id: 1,
  //     url: "https://images.unsplash.com/photo-1691394790591-b1ce2093b045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
  //     author: "mokhter ahmad",
  //     date: "12-12-2022",
  //   },
  //   {
  //     id: 2,
  //     url: "https://images.unsplash.com/photo-1691394790591-b1ce2093b045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
  //     author: "mokhter ahmad",
  //     date: "12-12-2022",
  //   },
  //   {
  //     id: 3,
  //     url: "https://images.unsplash.com/photo-1691394790591-b1ce2093b045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
  //     author: "mokhter ahmad",
  //     date: "12-12-2022",
  //   },
  //   {
  //     id: 4,
  //     url: "https://images.unsplash.com/photo-1691394790591-b1ce2093b045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
  //     author: "mokhter ahmad",
  //     date: "12-12-2022",
  //   },
  // ];

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

