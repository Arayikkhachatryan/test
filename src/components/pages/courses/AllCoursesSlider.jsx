import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { v4 as uuidv4 } from "uuid";
import CoursesModalForm from "./CoursesModalForm";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { api, getCardsData } from "../../../api/api";
import { useCallback } from "react";
import Loader from "../../common/Loader";

SwiperCore.use([Navigation, Autoplay]);

function AllCoursesSlider(props) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const params = useParams()
  const {
    isLoading,
    setIsLoading,
    getCards,
    setGetCards,
    getCourse,
    setCoursDesc,
  } = useContext(DataContext);
  
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

  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const { data } = await getCardsData();
        setGetCards(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  const filterCourses = useCallback(
    (cardId) => {
      const [course] = getCourse.filter((item) => {
        return item.card_id === cardId;
      });
      return course;
    },
    [getCourse]
  );

  const scrollTop = async (courseId) => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    try {
      const course = await api.get(`/courses/${courseId}`);
      setCoursDesc(course.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                  {getCards.map((el) => {
                    const course = filterCourses(el._id);
                    if (params._id !== course?._id) {
                      return (
                        <SwiperSlide className="swiper-slide" key={uuidv4()}>
                          <div className="single-course-card">
                            <Link
                              to={`${course?._id}`}
                              onClick={() => {
                                scrollTop(course?._id);
                              }}
                              className="single-course-card-content"
                            >
                              <img
                                src={`https://innova-api.onrender.com/api/cards/upload/${el.card_image}`}
                                alt="CourseImage"
                              />
                              <div className="single-course-card-title">
                                <span>{el.card_name}</span>
                                <h4>Դասնթաց</h4>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    }
                  })}
                  {/* {CONFIG.allCoursesSilderConfig.map((item, idx) => {
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
              })} */}
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
        </>
      )}

      <CoursesModalForm open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default AllCoursesSlider;
