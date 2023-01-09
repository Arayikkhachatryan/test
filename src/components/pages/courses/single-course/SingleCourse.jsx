import React, { Fragment, useContext } from "react";
import { useState } from "react";
import CoursesModalForm from "../CoursesModalForm";
import AllCoursesSlider from "../AllCoursesSlider";
import { Redirect, useParams, useRouteMatch } from "react-router-dom";
import HtmlCssCourse from "../all-courses/HtmlCssCourse";
import JsCourse from "../all-courses/JsCourse";
import ReactCourse from "../all-courses/ReactCourse";
import NodeCourse from "../all-courses/NodeCourse";
import QaCourse from "../all-courses/QaCourse";
import UiUxCourse from "../all-courses/UiUxCourse";
import { CONFIG } from "../../../../config";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../../App";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "../../../../context/DataContext";
import {
  api,
  getCardsData,
  getCourseData,
  getTrainersData,
} from "../../../../api/api";
import { BASE_URL } from "../../../../enum";

const SingleCourse = ({ match }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({
    cardId: "",
    courseId: "",
  });
  const { t } = useTranslation();
  const {
    isLoading,
    setIsLoading,
    getCards,
    getCourse,
    setGetCourse,
    setGetCards,
    getTrainers,
    setGetTrainers,
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

  // const courseComponent = [
  //   HtmlCssCourse,
  //   JsCourse,
  //   ReactCourse,
  //   NodeCourse,
  //   QaCourse,
  //   UiUxCourse,
  // ];
  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const data = await getCourseData();
        setGetCourse(data.data);

        const card = await getCardsData();
        setGetCards(card.data);

        const trainer = await getTrainersData();
        setGetTrainers(trainer.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  // useEffect(() => {
  //   console.log(url.slice(9));
  //   console.log(match.params.card_name.replace(/\s/g, ""));
  //   console.log(params);
  // }, []);

  return (
    <>
      <Layout>
        <section className="single-course-header">
          <img src="/images/test-img.jpg" alt="test" />
        </section>

        {/* {getCards.map((item) => {
          console.log(url.slice(9));
          console.log(item.card_name.toLowerCase().replace(/\s/g, ""));
          if (
            url.slice(9) === item.card_name.toLowerCase().replace(/\s/g, "")
          ) {
            return (
              <Fragment key={uuidv4()}>
                <div>{item.card_name}</div>
              </Fragment>
            );
          } else {
            <Redirect to={"/"} />;
          }
        })} */}

        {/* {CONFIG.allCoursesSilderConfig.map((course, idx) => {
          const CourseComponent = courseComponent[idx];
          if (path === course.link) {
            return <CourseComponent setOpen={setOpen} />;
          }
        })} */}
        <section className="team">
          <div className="container">
            <div className="team-header">
              <h2>{t("singleCoursePage.trainers.title")}</h2>
              <p>{t("singleCoursePage.trainers.about")}</p>
            </div>
            <div className="team-container">
              <div className="team-container-items">
                {getTrainers.map((trainer) => (
                  <div className="team-container-single-item" key={uuidv4()}>
                    <img
                      src={`${BASE_URL}/trainers/upload/${trainer.trainer_image}`}
                      alt="TrainerPhoto"
                    />
                    <h3>{trainer.trainer_name}</h3>
                    <p>{trainer.trainer_workplace}</p>
                  </div>
                ))}
                {/* {CONFIG.trainersConfig.map((trainer) => (
                  <div className="team-container-single-item" key={uuidv4()}>
                    <img src={trainer.image} alt="" />
                    <h3>{trainer.name}</h3>
                    <p>{trainer.workplace}</p>
                  </div>
                ))} */}
              </div>
            </div>
            <div className="single-course-cmn-btn">
              <button onClick={() => setOpen((prev) => !prev)}>
                {t("register")}
              </button>
            </div>
          </div>
        </section>
        <AllCoursesSlider open={open} onClose={() => setOpen(false)} />
        <CoursesModalForm open={open} onClose={() => setOpen(false)} />
      </Layout>
    </>
  );
};

export default SingleCourse;
