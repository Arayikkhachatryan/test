import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { api } from "../../../../api/api";
import { DataContext } from "../../../../context/DataContext";

const CoruseDescription = ({ setOpen }) => {
  const [asd, setAsd] = useState([]);
  const { t } = useTranslation();
  const params = useParams();
  const { setIsLoading } = useContext(DataContext);

  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const course = await api.get(`/courses/${params._id}`);
        setAsd(course.data);
      } catch (error) {
        console.log(error, "errorrrrerr");
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  useEffect(() => {
    console.log(asd);
  }, [asd]);

  return (
    <section className="single-course">
      <div className="container">
        <div className="single-course-wrapper">
          <div className="single-course-intro">
            <p>{asd.course_description}</p>

            <div className="single-course-cmn-btn">
              <button onClick={() => setOpen((prev) => !prev)}>
                {t("register")}
              </button>
            </div>
          </div>
          <div className="single-course-img">
            <img
              src={`https://innova-api.onrender.com/api/courses/upload/${asd.course_image}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoruseDescription;
