"use client"
import React, { useEffect, useState } from 'react'
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


        const [Contact, setContact] = useState([]);

        useEffect(() => {
          const url = `https://test.mashqulquran.com/contact`;
          fetch(url, {
            // headers: {
            //   authorization: `Bearer ${token}`,
            // },
          })
          .then((res) => res.json())
          .then((data) => setContact(data))
          .catch((error) => {
            console.error("Error fetching program data:", error);
          });
        }, []);

        console.log(Contact);


  // EVENT HANDLER FOR DELETE BUTTON
const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing");
      if (proceed) {
        console.log(id);
        const url = `https://test.mashqulquran.com/contact/${id}`;
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
              const remaining = Contact.filter((contact) => contact._id !== id);
              setContact(remaining);
              if (remaining) {
                toast.success("Sabbas: contact Out Koira Disi");
                reset();
              } else {
                toast.error("contact Delete Hoy Nai, Abar..");
              }
            }
          });
      }
};




  return (
    <section className='container'>
      <h1 className="text-center text-5xl py-3">Contact List</h1>
      <div className="grid grid-cols-1 gap-2 px-5 pb-6">

      {Contact.map((contact) => (

         <div className='bg-[#0a1e3b] p-3 mb-3 rounded-lg' key={contact.id}>
            <div className='py-2'>
                <h3>Name : {contact.name}</h3>
                <p>Phone : {contact.phone}</p>
                <p>Subject : {contact.subject}</p>
                <p>Message : {contact.message}</p>
                <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(contact._id)}>Delete Contact</button>
            </div>
         </div>
          ))}      
      </div>
      <ToastContainer />
    </section>
  )
}

export default Page
