"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import ProgramList from "./program/page";
import { redirect } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"

const Page = () => {
  
  // useEffect(() => {
  //   function getToken() {
  //     return localStorage.getItem("accessToken");
  //   }
  //   const token = getToken();
  //   console.log(token);
  
  //   if (!token) {
  //     redirect("/admin/signin");
  //   }
  // })

  

  return (
    <section className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Admin Panel</h4>
          <h2 className="st-section-heading-subtitle">Admin Panel</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="grid grid-cols-3 gap-2 px-5">
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
            Program Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="/admin/program" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Program List
            </p>
          </Link>
          <Link href="/applyProgram" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Add Program
            </p>
          </Link>
        </div>
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
            Blog Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="admin/blogpost/bloglist" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Blog List
            </p>
          </Link>
          <Link href="/admin/blogpost/addpost" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Add Blog
            </p>
          </Link>
        </div>
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
            Lecture Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="/admin/lecture/lecturelist" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Lecture List
            </p>
          </Link>
          <Link href="/admin/lecture/addlecture" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Add Lecture
            </p>
          </Link>
        </div>
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
            Event Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="/admin/event/eventlist" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Event List
            </p>
          </Link>
          <Link href="/admin/event/addevent" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Add Event
            </p>
          </Link>
        </div>
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
            Consultancy Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="/admin/consultancy/consultancylist" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Consultancy List
            </p>
          </Link>
          <Link href="/consultancy" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Add Consultancy
            </p>
          </Link>
        </div>
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
            Contact Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="/admin/contacts/contactlist" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Contact List
            </p>
          </Link>
          <Link href="/admin/contacts/addcontact" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Add Contact
            </p>
          </Link>
        </div>
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
           Podcast Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="/admin/podcast/podcastlist" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
            Podcast List
            </p>
          </Link>
          <Link href="/admin/podcast/addpodcast" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Add Podcast
            </p>
          </Link>
        </div>
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
             Gallery Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="/admin/gallery/gallerylist" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
            Gallery List
            </p>
          </Link>
          <Link href="/admin/gallery/addgallery" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Add Gallery
            </p>
          </Link>
        </div>
        <div className="bg-[#0a1e3b] p-3 mx-5 my-2 rounded-lg">
          <p className="text-center text-xl font-normal text-slate-200">
             Book Length
          </p>
          <h4 className="text-[#fec544] text-center text-5xl">30</h4>
          <Link href="/admin/book/booklist" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
              Book List
            </p>
          </Link>
          <Link href="/admin/book/addbook" target="_blank">
            <p className="bg-[#fec544] py-2 px-1 rounded-lg text-gray-900 text-center text-xl font-medium">
               Add Book
            </p>
          </Link>
        </div>
      </div>

      {/* Menu List--------------------------- */}

      <ProgramList></ProgramList>

    </section>
  );
};

export default Page;


