import React from "react";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { SwiperSlide, Swiper } from "swiper/react";
import { CONFIG } from "../../../config";
import { ReactComponent as HtmlCssIcon } from "../../../assets/icons/html-css-icon.svg";
import { ReactComponent as JsIcon } from "../../../assets/images/js-icon.svg";
import { ReactComponent as ReactIcon } from "../../../assets/images/react-icon.svg";
import { ReactComponent as NodeJsIcon } from "../../../assets/images/node-js-icon.svg";
import { ReactComponent as QaIcon } from "../../../assets/images/qa-icon.svg";
import { ReactComponent as UiUxIcon } from "../../../assets/images/ui-ux-icon.svg";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const CoursesArea = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const icons = [HtmlCssIcon, JsIcon, ReactIcon, NodeJsIcon, QaIcon, UiUxIcon];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section-wrapper">
          <section className="carousel-3D-swiper-section">
            <div className="carousel-3D-swiper">
              <Swiper
                loop={"true"}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={2.34}
                slideToClickedSlide={"true"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 340,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  el: ".swiper-pagination",
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={{
                  delay: 3000,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1.5,
                  },

                  768: {
                    slidesPerView: 2.34,
                  },
                  992: {
                    slidesPerView: 2.34,
                  },
                  1400: {
                    slidesPerView: 2.34,
                  },
                }}
                class="swiper-wrapper"
              >
                {CONFIG.allCoursesSilderConfig.map((course, idx) => {
                  const Icon = icons[idx];
                  return (
                    <SwiperSlide className="hero-slide">
                      <Link
                        to={course.link}
                        onClick={scrollTop}
                        className="hero-slide-wrapper"
                      >
                        <Icon className="hero-slider-icon" />
                        <p>{course.title}</p>
                      </Link>
                    </SwiperSlide>
                  );
                })}
                <div class="swiper-button-prev hero-sevtion-prev"></div>
                <div class="swiper-button-next hero-sevtion-next"></div>
              </Swiper>
            </div>
          </section>
          <div className="hero-section-info">
            <h2>Course Info</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              quasi praesentium eius dolorum officia nisi earum repellendus
              laboriosam aut alias excepturi magnam, facilis repellat similique
              quia distinctio pariatur minus veniam.
            </p>
            <div className="cmn-btn">
              <Link
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/courses`}
              >
                About more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesArea;
