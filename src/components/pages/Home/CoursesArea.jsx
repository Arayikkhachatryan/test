import React, { useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "../../../context/DataContext";
import { getCardsData } from "../../../api/api";
import Loader from "../../common/Loader";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const CoursesArea = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { isLoading, setIsLoading, getCards, setGetCards, getCourse } =
    useContext(DataContext);

  const filterCourses = useCallback(
    (cardId) => {
      const [course] = getCourse.filter((item) => {
        return item.card_id === cardId;
      });
      return course;
    },
    [getCourse]
  );

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

  return (
    <section className="hero-section">
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                    className="swiper-wrapper"
                  >
                    {getCards.map((el) => {
                      const course = filterCourses(el._id);

                      return (
                        <SwiperSlide className="hero-slide" key={uuidv4()}>
                          <Link
                            to={`courses/${course?._id}`}
                            onClick={scrollTop}
                            className="hero-slide-wrapper"
                          >
                            <img
                              src={`https://innova-api.onrender.com/api/cards/upload/${el.card_image}`}
                              alt="CourseImage"
                              className="hero-slider-icon"
                            />
                            <p>{el.card_name}</p>
                          </Link>
                        </SwiperSlide>
                      );
                    })}

                    <div className="swiper-button-prev hero-sevtion-prev"></div>
                    <div className="swiper-button-next hero-sevtion-next"></div>
                  </Swiper>
                </div>
              </section>
              <div className="hero-section-info">
                <h2>Course Info</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum quasi praesentium eius dolorum officia nisi earum
                  repellendus laboriosam aut alias excepturi magnam, facilis
                  repellat similique quia distinctio pariatur minus veniam.
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
        </>
      )}
    </section>
  );
};

export default CoursesArea;
