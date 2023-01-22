import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { api } from "../../../../api/api";
import { DataContext } from "../../../../context/DataContext";
import Loader from "../../../common/Loader";
import CoursesModalForm from "../CoursesModalForm";

const CoruseDescription = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const params = useParams();
  const { isLoading, setIsLoading, coursDesc, setCoursDesc } =
    useContext(DataContext);

  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const course = await api.get(`/courses/${params._id}`);
        setCoursDesc(course.data);
      } catch (error) {
        console.log(error, "errorrrrerr");
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  // useEffect(() => {
  //   console.log(asd);
  // }, [asd]);

  return (
    <section className="single-course">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="single-course-wrapper">
            <div className="single-course-intro">
              <p>{coursDesc.course_description}</p>

              <div className="single-course-cmn-btn">
                <button onClick={() => setOpen((prev) => !prev)}>
                  {t("register")}
                </button>
              </div>
            </div>
            <div className="single-course-img">
              <img
                src={`https://innova-api.onrender.com/api/courses/upload/${coursDesc.course_image}`}
                alt=""
              />
            </div>
          </div>
        </div>
      )}

      <CoursesModalForm open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default CoruseDescription;
