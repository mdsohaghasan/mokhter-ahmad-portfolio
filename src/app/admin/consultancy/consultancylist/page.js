"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page =  () => {


  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  

  // if (!token) {
  //   redirect("/admin/signin");
  // }

        const [Consultancy, setConsultancy] = useState([]);

        useEffect(() => {
          const url = `https://test.mashqulquran.com/consultancy`;
          fetch(url, {
            // headers: {
            //   authorization: `Bearer ${token}`,
            // },
          })
          .then((res) => res.json())
          .then((data) => setConsultancy(data))
          .catch((error) => {
            console.error("Error fetching program data:", error);
          });
        }, []);

        console.log(Consultancy);


        // Consultancy HANDLER FOR DELETE BUTTON
        const {  reset,  } = useForm();

        const handleDelete = (id) => {
          console.log(id);
              const proceed = window.confirm("are you sure deleteing");
              if (proceed) {
                console.log(id);
                const url = `https://test.mashqulquran.com/consultancy/${id}`;
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
                      const remaining = Consultancy.filter((consultancy) => consultancy._id !== id);
                      setConsultancy(remaining);
                      if (remaining) {
                        toast.success("Sabbas: Consultancy Out Koira Disi");
                        reset();
                      } else {
                        toast.error("Consultancy Delete Hoy Nai, Abar..");
                      }
                    }
                  });
              }
        };


  return (
    <section className='container'>
      <h1 className="text-center text-5xl py-3">Consultancy List</h1>
      <div className="grid grid-cols-1 gap-2 px-5 pb-6">

      {Consultancy.map((consultancy) => (

         <div className='bg-[#0a1e3b] p-3 mb-3 rounded-lg' key={consultancy.id}>
            <div className='py-2'>
                <h3>{consultancy.category}</h3>
                <p>Name : {consultancy.name}</p>
                <p>Phone : {consultancy.phone}</p>
                <p>Email : {consultancy.email}</p>
                <p>Subject : {consultancy.subject}</p>
                <p>Message : {consultancy.message}</p>
                <button className="bg-[#fec544] py-2 px-3  rounded-lg text-gray-900 text-center text-xl font-medium" onClick={() => handleDelete(consultancy._id)}>Delete Consultancy</button>
            </div>
         </div>
          ))}
      </div>
      <ToastContainer />
    </section>
  )
}

export default Page
