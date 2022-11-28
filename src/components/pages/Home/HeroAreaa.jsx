import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
// install Swiper modules
function HeroAreaa() {
  const HeroSlider = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: "true",
    clickable: true,
    autoplay: true,
    effect: "fade",
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true,
    },
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { t } = useTranslation();

  return (
    <>
      <section className="hero-area">
        <div className="swiper hero-slider">
          <Swiper
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            {...HeroSlider}
            loop={true}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/swiper/hero_slider_1.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          {/* <h2>Creative</h2> */}
                          <h1>{t("heroPageSlider.title")}</h1>
                          <h1>00:00:00</h1>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/courses`}
                            className="about-btn"
                          >
                            {t("heroPageSlider.forMore")}
                          </Link>
                          {/* <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link> */}
                          {/* <div className="slider-num">
                            <span>01</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/swiper/hero_slider_2.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          {/* <h2>Creative</h2> */}
                          <h1>{t("heroPageSlider.title")}</h1>
                          <h1>00:00:00</h1>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/courses`}
                            className="about-btn"
                          >
                            {t("heroPageSlider.forMore")}
                          </Link>
                          {/* <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link> */}
                          {/* <div className="slider-num">
                            <span>02</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="hero-content-wrapper">
                      <div className="hero-content-wrap">
                        <div className="hero-content-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/swiper/hero_slider_3.jpg"
                            }
                            alt="images"
                          />
                        </div>
                        <div className="hero-content">
                          {/* <h2>Creative</h2> */}
                          <h1>{t("heroPageSlider.title")}</h1>
                          <h1>00:00:00</h1>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/courses  `}
                            className="about-btn"
                          >
                            {t("heroPageSlider.forMore")}
                          </Link>
                          {/* <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/project-details`}
                            className="work-btn"
                          >
                            How we work
                          </Link> */}
                          {/* <div className="slider-num">
                            <span>03</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination" />
        </div>
        <div className="social-media">
          <ul className="social-list">
            <li>
              <a rel="noopener noreferrer" href="https://www.facebook.com/">
                Facebook
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.instagram.com/">
                instagram
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.linkedin.com/">
                Linked in
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HeroAreaa;
