"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProgramList from "./program/page";
import { redirect } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"
import axios from 'axios';

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

  const [Program, setProgram] = useState([]);
  const [Consultancy, setConsultancy] = useState([]);
  const [Event, setEvent] = useState([]);
  const [Lecture, setLecture] = useState([]);
  const [Blog, setBlog] = useState([]);
  const [Contact, setContact] = useState([]);
  const [Podcast, setPodcast] = useState([]);
  const [Gallery, setGallery] = useState([]);
  const [Book, setBook] = useState([]);


  const fetchdata =  () => {
  const getProgram =  'https://test.mashqulquran.com/program'
  const getConsultancy =  'https://test.mashqulquran.com/consultancy'
  const getEvent =  'https://test.mashqulquran.com/event'
  const getLecture =  'https://test.mashqulquran.com/lecture'
  const getBlog =  'https://test.mashqulquran.com/blog'
  const getContact =  'https://test.mashqulquran.com/contact'
  const getPodcast =  'https://test.mashqulquran.com/podcast'
  const getGallery =  'https://test.mashqulquran.com/gallery'
  const getBook =  'https://test.mashqulquran.com/book'

  const apiProgram = axios.get(getProgram)
  const apiConsultancy = axios.get(getConsultancy)
  const apiEvent = axios.get(getEvent)
  const apiLecture = axios.get(getLecture)
  const apiBlog = axios.get(getBlog)
  const apiContact = axios.get(getContact)
  const apiPodcast = axios.get(getPodcast)
  const apiGallery = axios.get(getGallery)
  const apiBook = axios.get(getBook)

  axios.all([apiProgram, apiConsultancy, apiEvent, apiLecture, apiBlog, apiContact, apiPodcast, apiGallery, apiBook]).then(
    axios.spread((...alldata ) => {
      const program = alldata[0].data.length
      const consultancy = alldata[1].data.length
      const event = alldata[2].data.length
      const lecture = alldata[3].data.length
      const blog = alldata[4].data.length
      const contact = alldata[5].data.length
      const podcast = alldata[6].data.length
      const gallery = alldata[7].data.length
      const book = alldata[8].data.length

      setProgram(program)
      setConsultancy(consultancy)
      setEvent(event)
      setLecture(lecture)
      setBlog(blog)
      setContact(contact)
      setPodcast(podcast)
      setGallery(gallery)
      setBook(book)
    })
  ) }

  useEffect(() => {
     fetchdata();
  }, [])


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
          <h4 className="text-[#fec544] text-center text-5xl">{Program}</h4>
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
          <h4 className="text-[#fec544] text-center text-5xl">{Blog}</h4>
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
          <h4 className="text-[#fec544] text-center text-5xl">{Lecture}</h4>
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
          <h4 className="text-[#fec544] text-center text-5xl">{Event}</h4>
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
          <h4 className="text-[#fec544] text-center text-5xl">{Consultancy}</h4>
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
          <h4 className="text-[#fec544] text-center text-5xl">{Contact}</h4>
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
          <h4 className="text-[#fec544] text-center text-5xl">{Podcast}</h4>
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
          <h4 className="text-[#fec544] text-center text-5xl">{Gallery}</h4>
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
          <h4 className="text-[#fec544] text-center text-5xl">{Book}</h4>
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


