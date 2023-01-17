import React, { Fragment, useContext } from "react";
import { useState } from "react";
import CoursesModalForm from "../CoursesModalForm";
import AllCoursesSlider from "../AllCoursesSlider";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../../App";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "../../../../context/DataContext";
import {
  getCardsData,
  getCourseData,
  getTrainersData,
} from "../../../../api/api";
import { BASE_URL } from "../../../../enum";
import CoruseDescription from "./CoruseDescription";

const SingleCourse = () => {
  const [open, setOpen] = useState(false);
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
        // history.push("/about");
        console.log(error, "errorrrrerr");
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  return (
    <>
      <Layout>
        <section className="single-course-header">
          <img src="/images/test-img.jpg" alt="test" />
        </section>
        <CoruseDescription />

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
