"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = async ({ params }) => {

  

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }


  const { program_details } = params;
  console.log(program_details);

  // const [Program, setProgram] = useState([]);

  const response = await fetch(`https://test.mashqulquran.com/program/${program_details}`);
  const res = await response.json();
  console.log(res);



// EVENT HANDLER FOR DELETE BUTTON

// const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing");
      if (proceed) {
        console.log(id);
        const url = `https://test.mashqulquran.com/program/${id}`;
        fetch(url, {
          method: "DELETE",
          // headers: {
          //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          // },
        })
          .then((res) => res.json())
          .then((data) => {
           
            console.log(data);
            if (data) {
              toast.success("Sabbas: Program Out Koira Disi");
              // reset();
            } else {
              toast.error("Program Delete Hoy Nai, Abar..");
            }
            // if (data.deletedCount > 0) {
            //   console.log(data);
            //   const remaining = res.filter((program) => program._id !== id);
            //   setProgram(remaining);
            // }

          });
      }
};
 

// Program Status 
const confirm = true


  return (
    <section className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Program Details</h4>
          <h2 className="st-section-heading-subtitle">Program </h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="my-8 bg-[#0a1e3b] px-5 py-5 rounded-lg">
        <table className="w-full text-xl text-left text-slate-800  ">
          <tbody className="">
            <tr className=" font-normal text-slate-300  rounded-lg ">
              <th className="px-3 py-3">Program Status </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">
                  {confirm ? 
               ( <span className="px-3 py-2 bg-green-300 rounded-lg text-slate-800">Confirm</span>) 
                 : 
               ( <span className="px-3 py-2 bg-orange-300 rounded-lg text-slate-800">Pending</span> ) 
              }
             </td>  
               <td><button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(program_details)}>Delete Program</button></td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg ">
              <th className="px-3 py-3">Program Title </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.programTitle}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Program Proposed Date </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.programDate}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Lecture Time</th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.lectureTime}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Topic of the Lecture </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3"> {res.lectureTopic}</td>
            </tr>

            <tr className="font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Program Applicants Name </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.applicants}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Program Applicants Mobile Number </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.applicantsNumber}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Program Google Map Link </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.googleMap}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Program Place Name / Road </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.placeName}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Post Office Of Program </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.postOffice}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Upazila Of Program</th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.upazila}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">District Of Program </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.district}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Name of the venue </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.venue}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Venue Distance from District</th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.venueDistance}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Other Guests Name of the Program </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.guestsName}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Collection </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.collection}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Presidents Name</th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.presidentsName}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Presidents Mobile Number </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.presidentsNumber}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Number of Volunteers </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.volunteersNumber}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Permission of program </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.permissionCriteria}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Total Number of Program </th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.totalProgram}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Last Program Date</th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.lastDate}</td>
            </tr>

            <tr className=" font-normal text-slate-300  rounded-lg">
              <th className="px-3 py-3">Guests of tha Last Program</th>
              <td className="px-3 py-3">:</td>
              <td className="px-3 py-3">{res.lastProgramGguests}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;

// id Number
// date
// Applicant's Name
// mobile Number
// Proposed dates of the programme
// Address -----
// Place -- Road,
// Post Office
// Upazila
// district
// Name of the venue
// Distance from district
// Program Fund Source
// Other guests of the program
// Lecture Time from 8:30 PM to 10:30 PM
// Topic of the lecture
// Collection
// President's Name
// President's Number
// number of volunteers
// Permission of program

// total number of program
// Last Program Date
// guests of tha Last Program
