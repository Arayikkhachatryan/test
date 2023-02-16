import React, { useContext, useEffect, memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import { getCardsData, getCourseData } from "../../../api/api";
import Loader from "../../common/Loader";
import { v4 as uuidv4 } from "uuid";
import { BASE_URL } from "../../../enum";
import { useCallback } from "react";
import ErrorPage from "../Error/ErrorPage";

const Cards = ({ open, setOpen, match }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { t } = useTranslation();
  // const icons = [JsIcon, ReactIcon, NodeJsIcon, QaIcon, UiUxIcon];
  const {
    isLoading,
    setGetCards,
    setIsLoading,
    getCards,
    getCourse,
    setGetCourse,
  } = useContext(DataContext);

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
        const data = await getCardsData();
        setGetCards(data.data);

        const course = await getCourseData();
        setGetCourse(course.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="courses-cards">
          <div className="courses-cards-wrapper">
            <div className="courses-cards-header">
              <img src="./images/test-img.jpg" alt="" />
            </div>
            <div className="courses-cards-body">
              {/* <div className="courses-cards-body-bg">
                <img src="/images/background_circuts.png" alt="bg" />
              </div> */}
              <div className="container">
                <div className="courses-cards-body-wrapper">
                  <div className="register-button">
                    <div className="cmn-btn">
                      <button onClick={() => setOpen((prev) => !prev)}>
                        {t("register")}
                      </button>
                    </div>
                  </div>
                  <div className="all-courses">
                    {/* <Link
                      onClick={scrollTop}
                      to="/courses/html-css-course"
                      className=" flip-card"
                    >
                      <div className="single-service">
                        <div className="single-service-front">
                          <div className="service-icon-card">
                            <div className="service-icon">
                              <HtmlIcon className="html-icon" />
                            </div>
                            <div className="service-icon">
                              <CssIcon className="css-icon" />
                            </div>
                          </div>
                          <div className="service-content courses-cards-content">
                            <h4>HTML & CSS</h4>
                          </div>
                        </div>
                        <div className="single-service-back">
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Incidunt et pariatur dicta minus quae deleniti
                            sequi. Totam quasi alias voluptates. Rem maiores
                            corporis illum, mollitia molestiae repellat fugiat
                            laudantium voluptatem.
                          </p>
                        </div>
                      </div>
                    </Link> */}
                    {getCards.map((item) => {
                      const course = filterCourses(item._id);

                      return (
                        <Link
                          to={`courses/${course?._id}`}
                          onClick={scrollTop}
                          key={uuidv4()}
                          className=" flip-card"
                        >
                          <div className="single-service">
                            <div className="single-service-front">
                              <div className="service-icon-card">
                                <div className="service-icon">
                                  <img
                                    src={`https://innova-api.onrender.com/api/cards/upload/${item.card_image}`}
                                    alt="a"
                                  />
                                </div>
                              </div>
                              <div className="service-content courses-cards-content">
                                <h4>{item.card_name}</h4>
                              </div>
                            </div>
                            <div className="single-service-back">
                              <p>{item.card_description}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}

                    {/* {CONFIG.coursesCardsConfig.map((item, idx) => {
                const Icon = icons[idx];
                return (
                  <Link
                    to={item.link}
                    onClick={scrollTop}
                    className=" flip-card"
                  >
                    <div className="single-service">
                      <div className="single-service-front">
                        <div className="service-icon-card">
                          <div className="service-icon">
                            <Icon className={item.className} />
                          </div>
                        </div>
                        <div className="service-content courses-cards-content">
                          <h4>{item.title}</h4>
                        </div>
                      </div>
                      <div className="single-service-back">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </Link>
                );
              })} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default memo(Cards);
