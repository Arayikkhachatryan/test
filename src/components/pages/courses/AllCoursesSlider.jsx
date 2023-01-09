import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { CONFIG } from "../../../config";
import { ReactComponent as QaIcon } from "../../../assets/images/qa-icon.svg";
import { ReactComponent as HtmlCssIcon } from "../../../assets/icons/html-css-icon.svg";
import { ReactComponent as JsIcon } from "../../../assets/images/js-icon.svg";
import { ReactComponent as ReactIcon } from "../../../assets/images/react-icon.svg";
import { ReactComponent as NodeJsIcon } from "../../../assets/images/node-js-icon.svg";
import { ReactComponent as UiUxIcon } from "../../../assets/images/ui-ux-icon.svg";
import { v4 as uuidv4 } from "uuid";
import CoursesModalForm from "./CoursesModalForm";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Autoplay]);

function AllCoursesSlider(props) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [open]);

  const icons = [HtmlCssIcon, JsIcon, ReactIcon, NodeJsIcon, QaIcon, UiUxIcon];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const { url } = useRouteMatch();

  const allCourses = {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 0,
      },

      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 1400px
      1400: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  };

  return (
    <section className="all-courses-slider">
      <div className="courses-introduction">
        <h2>{t("singleCoursePage.slider.title")}</h2>
        <h4>{t("singleCoursePage.slider.about")}</h4>
      </div>
      <SRLWrapper>
        <div className="portfolio-area sec-mar-top all-courses-area">
          <div className="swiper portfolio-slider single-course-slider">
            <Swiper
              {...allCourses}
              pagination={{
                type: "bullets",
                clickable: true,
                // el: ".swiper-pagination",
              }}
              className="swiper-wrapper"
            >
              {CONFIG.allCoursesSilderConfig.map((item, idx) => {
                const Icon = icons[idx];
                if (url !== item.link) {
                  return (
                    <SwiperSlide className="swiper-slide" key={uuidv4()}>
                      <div className="single-course-card">
                        <Link
                          to={item.link}
                          onClick={scrollTop}
                          className="single-course-card-content"
                        >
                          <Icon className={item.className} />
                          <div className="single-course-card-title">
                            <span>{item.title}</span>
                            <h4>Դասնթաց</h4>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}

              {/* <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-2.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>UI Kit</span>
                    <h4>E-Shop Ecommerce</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-2.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-3.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>Software</span>
                    <h4>Desktop Mockup</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-3.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-4.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>Graphic</span>
                    <h4>Art Deco Cocktails</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-4.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-5.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>App</span>
                    <h4>Mobile Crypto Wallet</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-5.jpg"
                        }
                      >
                        <img
                          alt="images"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/portfolio/search-2.svg"
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-portfolio">
                  <div className="portfolio-data">
                    <a href="#s">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-3.jpg"
                        }
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="portfolio-inner">
                    <span>Template</span>
                    <h4>Creative Agency</h4>
                    <div className="portfolio-hover">
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/project-details`}
                        className="case-btn"
                      >
                        Case Study
                      </Link>
                      <a
                        data-lightbox="image1"
                        href={
                          process.env.PUBLIC_URL +
                          "/images/portfolio/portfolio-3.jpg"
                        }
                      >
                        <i className="fas fa-search" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
            <div className="swiper-pagination" />
            {/* <div className="swiper-button-next" />
            <div className="swiper-button-prev" /> */}
          </div>
        </div>
      </SRLWrapper>
      <div className="single-course-cmn-btn">
        <button onClick={() => setOpen((prev) => !prev)}>
          {t("register")}
        </button>
      </div>
      <CoursesModalForm open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default AllCoursesSlider;
