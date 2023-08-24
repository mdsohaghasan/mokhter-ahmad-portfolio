"use client";
import React from "react";
import Image from "next/image";
import photo from "./mokhter.jpg";
import { useEffect } from "react";

// Ripple Water Effect .....
import $ from "jquery";
// import 'react-jquery-plugin'
// import Ripples from 'react-ripples'
// import "jquery.ripples";

// Particles Depandency .....
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from "next/link";

const Header = () => {
  /*--------------------------------------------------------------
          9. Social Button Hover
        --------------------------------------------------------------*/
  useEffect(() => {
    $(".st-social-btn").hover(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }, []);

  // Jquery Ripple water effect .............
  // useEffect(() => {
  //   $(".st-ripple-version").ripples({
  //     resolution: 512,
  //     dropRadius: 20,
  //     perturbance: 0.04,
  //   });
  // }, []);

 
  /*-----------------------------------------------------------
          particles
        --------------------------------------------------------------*/

  // Your client-side code that uses the document object here

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <section
      id="tsparticles"
      className=" flex  bg-[#070d1b]  relative  lg:h-[850px] sm:h-[300px]  "
    >
      <Particles
        className="bg-image"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727,
              },
            },
            color: {
              value: "#ffffff",
            },
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                // height: "auto",
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.6,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      /> 

      <div className="container ">
        <div className="lg:mt-32  sm:mt-3 ">
          <div className="lg:ml-0 md:ml-10 sm:ml-5">
            <h3 className="lg:text-3xl md:text-3xl	sm:text-3xl font-light text-[#fec544]">Assalamu Alaikum, <br/>I am Professor </h3>
            <h1 className="lg:text-9xl md:text-7xl  sm:text-4xl font-black">
              Mokhter <br /> Ahmad
            </h1>
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl">Public Figure</h2>
            <div className="flex my-6">
              <div className="st-hero-btn">
                <Link
                  href="/about"
                  className="st-btn st-style1 st-color1 st-smooth-move"
                >
                  Get About
                </Link>
              </div>
              <div className="wrapper">
                <div className="icon-wrapper">
                  <Link href="/lecture">
                    <i className="bi bi-play-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Image - Social Link Group --> */}
      <div className="hero-img-right ">
        <Image className="wow fadeInRight " src={photo} alt="Hero" />
        <div className="st-social-group social-media  social-media-mobile  wow fadeInLeft">
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
              <span className="st-icon-name">youtube</span>
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
    </section>
  );
};

export default Header;
