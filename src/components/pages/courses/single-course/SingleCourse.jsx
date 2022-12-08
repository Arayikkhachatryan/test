import React from "react";
import { useState } from "react";
import CoursesModalForm from "../CoursesModalForm";
import AllCoursesSlider from "../AllCoursesSlider";
import { useRouteMatch } from "react-router-dom";
import HtmlCssCourse from "../all-courses/HtmlCssCourse";
import JsCourse from "../all-courses/JsCourse";
import ReactCourse from "../all-courses/ReactCourse";
import NodeCourse from "../all-courses/NodeCourse";
import QaCourse from "../all-courses/QaCourse";
import UiUxCourse from "../all-courses/UiUxCourse";
import { CONFIG } from "../../../../config";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SingleCourse = () => {
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

  const { path } = useRouteMatch();

  const courseComponent = [
    HtmlCssCourse,
    JsCourse,
    ReactCourse,
    NodeCourse,
    QaCourse,
    UiUxCourse,
  ];

  return (
    <>
      <section className="single-course-header">
        <img src="/images/test-img.jpg" alt="test" />
      </section>
      {CONFIG.allCoursesSilderConfig.map((course, idx) => {
        const CourseComponent = courseComponent[idx];
        if (path === course.link) {
          return <CourseComponent setOpen={setOpen} />;
        }
      })}
      <section className="team">
        <div className="container">
          <div className="team-header">
            <h2>{t("singleCoursePage.trainers.title")}</h2>
            <p>{t("singleCoursePage.trainers.about")}</p>
          </div>
          <div className="team-container">
            <div className="team-container-items">
              {CONFIG.trainersConfig.map((trainer) => (
                <div className="team-container-single-item">
                  <img src={trainer.image} alt="" />
                  <h3>{trainer.name}</h3>
                  <p>{trainer.workplace}</p>
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
    </>
  );
};

export default SingleCourse;
