import React, { useState } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../../../context/DataContext";
import { BASE_URL } from "../../../../enum";
import { v4 as uuidv4 } from "uuid";
import CoursesModalForm from "../CoursesModalForm";
import Loader from "../../../common/Loader";
import { useEffect } from "react";
import { getTrainersData } from "../../../../api/api";

const TrainerSection = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const { isLoading, getTrainers, setIsLoading, setGetTrainers } =
    useContext(DataContext);

  useEffect(() => {
    async function getPageData() {
      setIsLoading(true);
      try {
        const trainer = await getTrainersData();
        setGetTrainers(trainer.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getPageData();
  }, []);

  return (
    <section className="team">
      {isLoading ? (
        <Loader />
      ) : (
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
      )}

      <CoursesModalForm open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default TrainerSection;
