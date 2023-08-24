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

  
  const [Book, setBook] = useState([]);

  useEffect(() => {
    const url = `https://test.mashqulquran.com/book`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setBook(data))
    .catch((error) => {
      console.error("error fetching program data:", error);
    });
  }, []);

  console.log(Book);

// EVENT HANDLER FOR DELETE BUTTON

const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing book");
      if (proceed) {
        console.log(id);
        const url = `https://test.mashqulquran.com/Book/${id}`;
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
              const remaining = Book.filter((book) => book._id !== id);
              setBook(remaining);
              if (remaining) {
                toast.success("Sabbas: Book Out Koira Disi");
                reset();
              } else {
                toast.error("Book Delete Hoy Nai, Abar..");
              }
            }
          });
      }
};

  // const Book = [
  //  {
  //     id: 1,
  //     url: "https://images.unsplash.com/photo-1691394790591-b1ce2093b045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
  //     author: "mokhter ahmad",
  //   },
  //   {
  //     id: 2,
  //     url: "https://images.unsplash.com/photo-1691394790591-b1ce2093b045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
  //     author: "mokhter ahmad",
  //   },
  //   {
  //     id: 3,
  //     url: "https://images.unsplash.com/photo-1691394790591-b1ce2093b045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
  //     author: "mokhter ahmad",
  //   },
  //   {
  //     id: 4,
  //     url: "https://images.unsplash.com/photo-1691394790591-b1ce2093b045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     title: "The Pillars of Islam: A Comprehensive Guide to the Five Foundations of Faith",
  //     des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
  //     author: "mokhter ahmad",
  //   },
  // ];

  return (
    <section className="container">
      <h1 className="text-center text-5xl py-3">Book List</h1>
      <div className="grid grid-cols-3 gap-1 px-1 pb-5">
        {Book.map((book) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={book.id}>
            <Image src={book.url} alt="blog thumbnail" width={200} height={400} />
            <div className="py-2">
              <h3 className="text-xl">{book.title}</h3>
              <p className="text-justify">{book.des}</p>
              <p> Author : {book.author}</p>
              <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(book._id)}>Delete Book</button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;

