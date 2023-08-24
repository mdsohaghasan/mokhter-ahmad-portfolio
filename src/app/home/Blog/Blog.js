"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import quran from "./quran.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import $ from "jquery";

const Blog = () => {
  useEffect(() => {
    $(".st-slider").each(function () {
      // Slick Variable
      var $ts = $(this).find(".slick-container");
      var $slickActive = $(this).find(".slick-wrapper");
      var $sliderNumber = $(this).siblings(".slider-number");

      // Auto Play
      var autoPlayVar = parseInt($ts.attr("data-autoplay"), 10);
      // Auto Play Time Out
      var autoplaySpdVar = 3000;
      if (autoPlayVar > 1) {
        autoplaySpdVar = autoPlayVar;
        autoPlayVar = 1;
      }
      // Slide Change Speed
      var speedVar = parseInt($ts.attr("data-speed"), 10);
      // Slider Loop
      var loopVar = Boolean(parseInt($ts.attr("data-loop"), 10));
      // Slider Center
      var centerVar = Boolean(parseInt($ts.attr("data-center"), 10));
      // Pagination
      var paginaiton = $(this).children().hasClass("pagination");
      // Slide Per View
      var slidesPerView = $ts.attr("data-slides-per-view");
      if (slidesPerView == 1) {
        slidesPerView = 1;
      }
      if (slidesPerView == "responsive") {
        var slidesPerView = parseInt($ts.attr("data-add-slides"), 10);
        var lgPoint = parseInt($ts.attr("data-lg-slides"), 10);
        var mdPoint = parseInt($ts.attr("data-md-slides"), 10);
        var smPoint = parseInt($ts.attr("data-sm-slides"), 10);
        var xsPoing = parseInt($ts.attr("data-xs-slides"), 10);
      }
      // Fade Slider
      var fadeVar = parseInt($($ts).attr("data-fade-slide"));
      fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

      // Slick Active Code
      $slickActive.slick({
        infinite: true,
        autoplay: autoPlayVar,
        dots: paginaiton,
        centerPadding: "0",
        speed: speedVar,
        infinite: loopVar,
        autoplaySpeed: autoplaySpdVar,
        centerMode: centerVar,
        fade: fadeVar,
        prevArrow: $(this).find(".slick-arrow-left"),
        nextArrow: $(this).find(".slick-arrow-right"),
        appendDots: $(this).find(".pagination"),
        slidesToShow: slidesPerView,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: lgPoint,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: mdPoint,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: smPoint,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: xsPoing,
            },
          },
        ],
      });
    });
  }, []);

  /*--------------------------------------------------------------
  10. Slick Slider
--------------------------------------------------------------*/

  return (
    <div>
      {/* <!-- Start Blog Seciton --> */}
      <section id="blog">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">BLOG</h4>
            <h2 className="st-section-heading-subtitle">LATEST NEWS</h2>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>

        {/* <!-- Latest News Container --> */}

        <div className="container">
          <div className="st-slider st-style2">
            <div
              className="slick-container"
              data-autoplay="0"
              data-loop="1"
              data-speed="600"
              data-center="0"
              data-slides-per-view="responsive"
              data-xs-slides="1"
              data-sm-slides="2"
              data-md-slides="3"
              data-lg-slides="3"
              data-add-slides="3"
            >
              <div className="slick-wrapper">
                <div className="slick-slide-in">
                  <div className="st-post-single st-style1">
                    <a
                      href="blog-details.html"
                      className="st-post-thumb st-zoom"
                    >
                      <Image src={quran} className="st-zoom-in" alt="blog1" />
                    </a>
                    <div className="st-post-info">
                      <div className="st-post-date">
                        By:
                        <a href="blog-details.html" className="st-post-author">
                          Admin
                        </a>
                        <span className="st-post-date-divider">|</span>
                        <span className="st-post-publish-date">27-09-2020</span>
                      </div>
                      <h4 className="st-post-title">
                        <a href="blog-details.html">
                          What are the latest trends in Graphic design according
                          to you?
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- .slick-slide-in --> */}
                <div className="slick-slide-in">
                  <div className="st-post-single st-style1">
                    <a
                      href="blog-details.html"
                      className="st-post-thumb st-zoom"
                    >
                      <Image src={quran} className="st-zoom-in" alt="blog1" />
                    </a>
                    <div className="st-post-info">
                      <div className="st-post-date">
                        By:
                        <a href="#" className="st-post-author">
                          Admin
                        </a>
                        <span className="st-post-date-divider">|</span>
                        <span className="st-post-publish-date">27-09-2020</span>
                      </div>
                      <h4 className="st-post-title">
                        <a href="blog-details.html">
                          What do you think makes someone a good designer?
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- .slick-slide-in --> */}
                <div className="slick-slide-in">
                  <div className="st-post-single st-style1">
                    <a
                      href="blog-details.html"
                      className="st-post-thumb st-zoom"
                    >
                      <Image src={quran} className="st-zoom-in" alt="blog1" />
                    </a>
                    <div className="st-post-info">
                      <div className="st-post-date">
                        By:
                        <a href="#" className="st-post-author">
                          Admin
                        </a>
                        <span className="st-post-date-divider">|</span>
                        <span className="st-post-publish-date">27-09-2020</span>
                      </div>
                      <h4 className="st-post-title">
                        <a href="blog-details.html">
                          Were there any mistakes you’ve made as a designer
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- .slick-slide-in --> */}
                <div className="slick-slide-in">
                  <div className="st-post-single st-style1">
                    <a
                      href="blog-details.html"
                      className="st-post-thumb st-zoom"
                    >
                      <Image src={quran} className="st-zoom-in" alt="blog1" />
                    </a>
                    <div className="st-post-info">
                      <div className="st-post-date">
                        By:
                        <a href="#" className="st-post-author">
                          Admin
                        </a>
                        <span className="st-post-date-divider">|</span>
                        <span className="st-post-publish-date">27-09-2020</span>
                      </div>
                      <h4 className="st-post-title">
                        <a href="blog-details.html">
                          What are the latest trends in Graphic design according
                          to you?
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- .slick-slide-in --> */}
                <div className="slick-slide-in">
                  <div className="st-post-single st-style1">
                    <a
                      href="blog-details.html"
                      className="st-post-thumb st-zoom"
                    >
                      <Image src={quran} className="st-zoom-in" alt="blog1" />
                    </a>
                    <div className="st-post-info">
                      <div className="st-post-date">
                        By:
                        <a href="#" className="st-post-author">
                          Admin
                        </a>
                        <span className="st-post-date-divider">|</span>
                        <span className="st-post-publish-date">27-09-2020</span>
                      </div>
                      <h4 className="st-post-title">
                        <a href="blog-details.html">
                          What do you think makes someone a good designer?
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- .slick-slide-in --> */}
                <div className="slick-slide-in">
                  <div className="st-post-single st-style1">
                    <a
                      href="blog-details.html"
                      className="st-post-thumb st-zoom"
                    >
                      <Image src={quran} className="st-zoom-in" alt="blog1" />
                    </a>
                    <div className="st-post-info">
                      <div className="st-post-date">
                        By:
                        <a href="#" className="st-post-author">
                          Admin
                        </a>
                        <span className="st-post-date-divider">|</span>
                        <span className="st-post-publish-date">27-09-2020</span>
                      </div>
                      <h4 className="st-post-title">
                        <a href="blog-details.html">
                          Were there any mistakes you’ve made as a designer
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!-- .slick-slide-in --> */}
              </div>
            </div>
            {/* <!-- .slick-container --> */}
            <div className="pagination st-style1 st-flex st-hidden"></div>
            {/* <!-- If dont need Pagination then add className .st-hidden --> */}
          </div>
          {/* <!-- .st-slider --> */}
        </div>
        {/* <div className="st-height-b95 st-height-lg-b75 "></div> */}
      </section>
      {/* <!-- End Blog Seciton --> */}
    </div>
  );
};

export default Blog;
