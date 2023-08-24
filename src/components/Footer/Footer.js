import React from "react";
import "./fotter.css";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {

    const contactInfo = {
      name: data.name,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };
    console.log(contactInfo)

    const url = `https://test.mashqulquran.com/addContact`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(contactInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("contact er data Paichi", result);
      if (result) {
        toast.success("Sabbas: contact add hoise Successfully");
        reset();
      } else {
        toast.error("contact Add Hoy Nai, Abar..");
      }
    });
};


  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Get In Touch</h4>
          <h2 className="st-section-heading-subtitle">Get In Touch</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      {/* <!-- Contact Container --> */}

      <div className="footerImage ">
        <div className="container px-5 lg:px-0 ">
          <div className="row pb-10 md:pb-16">
            <div className="col-lg-6 mt-24">
              <div id="st-alert"></div>
              <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="st-contact-form" id="contact-form" >

                  <div className="st-form-field">
                  <input placeholder='Your Name' type="text"{...register("name" , { required: true })} />
                  {errors.name && <p className='text-red'>name is required.</p>}
                  </div>

                  <div className="st-form-field">
                    <input placeholder='Your Mobile Number' type="number"{...register("phone" , { required: true })} />
                    {errors.phone && <p className='text-red'>number is required.</p>}
                  </div>

                  <div className="st-form-field">
                   <input placeholder='Your subject' type="text"{...register("subject" , { required: true })} />
                   {errors.subject && <p className='text-red'>subject is required.</p>}
                  </div>

                  <div className="st-form-field">
                   <textarea  cols="30" rows="10" placeholder='Your message' type="text"{...register("message" , { required: true })} />
                   {errors.message && <p className='text-red'>message is required.</p>}
                  </div>
                <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit" > Send message </button>
              </form>
            </div>
            {/* <div className="st-height-b0 st-height-lg-b30"></div> */}

            <div className="col-lg-6 my-16">
              <div className="st-height-b0 st-height-lg-b40"></div>
              <h3 className="st-contact-title">Contact Info</h3>
              <div className="st-contact-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="st-contact-info-wrap">
                <div className="st-single-contact-info">
                  <i className="bi bi-envelope-fill"></i>
                  <div className="st-single-info-details">
                    <h4>Email</h4>
                    <Link href="#">official@mokhterahmad.info</Link>
                    <Link href="#">contact@mokhterahmad.info</Link>
                  </div>
                </div>
                <div className="st-single-contact-info">
                  <i className="bi bi-telephone-inbound-fill"></i>
                  <div className="st-single-info-details">
                    <h4>Phone</h4>
                    <span>+1 876-369-9009</span>
                    <span>+1 213-519-1786</span>
                  </div>
                </div>
                <div className="st-single-contact-info">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div className="st-single-info-details">
                    <h4>Address</h4>
                    <span>
                      41/1 Safa Gerden Satmasjid Housing, <br />
                      MohammadPur, Dhaka-1207
                    </span>
                  </div>
                </div>
                <div className="st-social-info">
                  <div className="st-social-link">
                    <Link
                      href="https://www.facebook.com/professormokhterahmad"
                      target="_blank"
                      className="st-social-btn active"
                    >
                      <span className="st-social-icon">
                        <i className="bi bi-facebook"></i>
                      </span>
                      <span className="st-icon-name">Facebook</span>
                    </Link>
                    <Link
                      href="https://www.youtube.com/@mokhterahmad"
                      target="_blank"
                      className="st-social-btn"
                    >
                      <span className="st-social-icon">
                        <i className="bi bi-youtube"></i>
                      </span>
                      <span className="st-icon-name">Youtube</span>
                    </Link>
                    <Link
                      href="https://twitter.com/mokhterahmad"
                      target="_blank"
                      className="st-social-btn"
                    >
                      <span className="st-social-icon">
                        <i className="bi bi-twitter"></i>
                      </span>
                      <span className="st-icon-name">Twitter</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/mokhter.ahmad"
                      target="_blank"
                      className="st-social-btn"
                    >
                      <span className="st-social-icon">
                        <i className="bi bi-instagram"></i>
                      </span>
                      <span className="st-icon-name">Instagram</span>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/mokhter-ahmad-b77ba257/?originalSubdomain=bd"
                      target="_blank"
                      className="st-social-btn"
                    >
                      <span className="st-social-icon">
                        <i className="bi bi-linkedin"></i>
                      </span>
                      <span className="st-icon-name">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* footer text -------------------------------  */}
          </div>
        </div>
      </div>
      {/* <div className="st-height-b100 st-height-lg-b80"></div> */}
    </section>
  );
};

export default Footer;
