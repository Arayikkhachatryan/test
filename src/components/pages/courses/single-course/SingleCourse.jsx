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
import TrainerSection from "./TrainerSection";

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

        <CoruseDescription open={open} onClose={() => setOpen(false)} />
        <TrainerSection open={open} onClose={() => setOpen(false)} />
        <AllCoursesSlider open={open} onClose={() => setOpen(false)} />
        <CoursesModalForm open={open} onClose={() => setOpen(false)} />
      </Layout>
    </>
  );
};

export default SingleCourse;
