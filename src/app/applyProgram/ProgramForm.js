"use client";
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";


const MAX_STEPS = 3

const ProgramForm = () => {

    const { register, handleSubmit, reset,  watch, formState: { errors, isValid }} = useForm({ mode: "all" });

  const onSubmit = data => {

    const programInfo = {
      
        programTitle: data.programTitle,
        programDate: data.programDate,
        lectureTime: data.lectureTime,
        lectureTopic: data.lectureTopic,
        applicants: data.applicants,
        applicantsNumber: data.applicantsNumber,
        googleMap: data.googleMap,
        placeName: data.placeName,
        postOffice: data.postOffice,
        upazila: data.upazila,
        district: data.district,
        venue: data.venue,
        venueDistance: data.venueDistance,
        guestsName: data.guestsName,
        collection: data.collection,
        presidentsName: data.presidentsName,
        presidentsNumber: data.presidentsNumber,
        volunteersNumber: data.volunteersNumber,
        permissionCriteria: data.permissionCriteria,
        totalProgram: data.totalProgram,
        lastDate: data.lastDate,
        lastProgramGguests: data.lastProgramGguests,

    };
    console.log(programInfo)

    const url = `https://test.mashqulquran.com/addProgram`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(programInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("program er data Paichi", result);
      if (result) {
        toast.success("Sabbas: program add hoise Successfully");
      //   reset();
      } else {
        toast.error("program Add Hoy Nai, Abar..");
      }
    });
};


const [formStep, setFormStep] = useState(0)
const handleStepCompletion = () => {
  isValid && setFormStep(cur => cur + 1)
}


const renderButtons = () => {
   if (formStep > 2) {
      return undefined
   } else if (formStep === 2) {
         return(
            <button
                disabled={!isValid}
                onClick={formStep === 2 ? undefined : handleStepCompletion}
                type={formStep === 2 ? "submit" : "button"}
                className="st-btn st-style1 st-color1 disabled:bg-gray-400">
                Apply Program
              </button>
         )
   } else {
      return(
         <button
             disabled={!isValid}
             onClick={formStep === 3 ? undefined : handleStepCompletion}
             type={formStep === 3 ? "submit" : "button"}
             className="st-btn st-style1 st-color1 disabled:bg-gray-400" >
             Next
           </button>
      )
   }
}

    // AOS Animation .........
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="800">
  
        {formStep < 3 && (
          <div className="h-2 w-full bg-gray-200">
            <div
              style={{ width: `${((formStep + 1) / MAX_STEPS) * 100}%` }}
              className="h-full bg-yellow-400"
            ></div>
          </div>
        )}
        <div className="px-16 py-10">
          {formStep < 3 && (
            <div
              className={`flex ${
                formStep === 0 ? "justify-end" : "justify-between"
              } items-center mb-6 font-medium text-sm`}
            >
              {formStep > 0 && (
                <button
                  onClick={() => setFormStep(cur => cur - 1)}
                  className="flex items-center text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>
              )}
              <p className="">
                Step {formStep + 1} of {MAX_STEPS}
              </p>
            </div>
          )}

         <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="st-contact-form" id="contact-form">
               
               {/* ==========00000000000000======== */}

               {formStep >= 0 && (
              <section className={formStep === 0 ? "block" : "hidden"}>

               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Program Title </label>
                 <input  type="text"{...register("programTitle" , { required: true })} />
                 {errors.programTitle && <p className='text-red ml-3'>program title is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Program Proposed Date </label>
                 <input  type="date"{...register("programDate" , { required: true })} />
                 {errors.programDate && <p className='text-red ml-3'>program date is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Lecture Time</label>
                 <input  type="time"{...register("lectureTime" , { required: true })} />
                 {errors.lectureTime && <p className='text-red ml-3'>lecture time is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Topic of the Lecture</label>
                 <input  type="text"{...register("lectureTopic" , { required: true })} />
                 {errors.lectureTopic && <p className='text-red ml-3'>lecture topic is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Applicants Name</label>
                 <input  type="text"{...register("applicants" , { required: true })} />
                 {errors.applicants && <p className='text-red ml-3'>applicants name is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Applicants Mobile Number</label>
                 <input  type="number"{...register("applicantsNumber" , { required: true })} />
                 {errors.applicantsNumber && <p className='text-red ml-3'>applicants number is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Google Map Link</label>
                 <input  type="text"{...register("googleMap" , { required: true })} />
                 {errors.googleMap && <p className='text-red ml-3'>google map is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Place Name / Road</label>
                 <input  type="text"{...register("placeName" , { required: true })} />
                 {errors.placeName && <p className='text-red ml-3'>place name is required.</p>}
              </div>

              </section>
            )}
              {/* ============1111111111111111============ */}

              {formStep >= 1 && (
              <section className={formStep === 1 ? "block" : "hidden"}>
                     
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Post Office Name</label>
                 <input  type="text"{...register("postOffice" , { required: true })} />
                 {errors.postOffice && <p className='text-red ml-3'>post office is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Upazila Name</label>
                 <input  type="text"{...register("upazila" , { required: true })} />
                 {errors.upazila && <p className='text-red ml-3'>upazila name is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter District Name</label>
                 <input  type="text"{...register("district" , { required: true })} />
                 {errors.district && <p className='text-red ml-3'>district name is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Name of the venue</label>
                 <input  type="text"{...register("venue" , { required: true })} />
                 {errors.venue && <p className='text-red ml-3'>venue name is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Venue Distance from District</label>
                 <input  type="text"{...register("venueDistance" , { required: true })} />
                 {errors.venueDistance && <p className='text-red'>venue distance is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Other Guests Name of the Program</label>
                 <input  type="text"{...register("guestsName" , { required: true })} />
                 {errors.guestsName && <p className='text-red ml-3'>Guests Name is required.</p>}
              </div>
             
               {/* <div className="st-form-field">
                 <label className="ml-3" for=""> Choose Collection Option</label>
                 <input  type="radio"{...register("collection" , { required: true })} />
                 {errors.collection && <p className='text-red'>collection is required.</p>}
              </div> */}
             
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Program Presidents Name </label>
                 <input  type="text"{...register("presidentsName" , { required: true })} />
                 {errors.presidentsName && <p className='text-red ml-3'>presidents Name is required.</p>}
              </div>

              </section>
            )}

              {/* =================222222222222=================== */}

              {formStep >= 2 && (
              <section className={formStep === 2 ? "block" : "hidden"}>

              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Presidents Mobile Number</label>
                 <input  type="text"{...register("presidentsNumber" , { required: true })} />
                 {errors.presidentsNumber && <p className='text-red ml-3'>presidents number is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Number of Volunteers</label>
                 <input  type="text"{...register("volunteersNumber" , { required: true })} />
                 {errors.volunteersNumber && <p className='text-red ml-3'>volunteers number is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Permission Criteria </label>
                 <input  type="text"{...register("permissionCriteria" , { required: true })} />
                 {errors.permissionCriteria && <p className='text-red ml-3'>permission criteria is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Total Number of Program </label>
                 <input  type="text"{...register("totalProgram" , { required: true })} />
                 {errors.totalProgram && <p className='text-red ml-3'>total program is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Last Program Date </label>
                 <input  type="date"{...register("lastDate" , { required: true })} />
                 {errors.lastDate && <p className='text-red ml-3'>last date is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Guests of tha Last Program </label>
                 <input  type="date"{...register("lastProgramGguests" , { required: true })} />
                 {errors.lastProgramGguests && <p className='text-red ml-3'>last program guests is required.</p>}
              </div>     

              </section>
            )}

            
              {/* ==========33333333333333333==============    */}

              {formStep >= 3 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Thank you for submit!
                </h2>
              </section>
            )}

            {/* ================Final========    */}

               {renderButtons()}
          

            </form>

            </div>  
    </div>
  )
}

export default ProgramForm
