import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as SingleJsIcon } from "../../../../assets/icons/single-course-js.svg";

const JsCourse = ({ setOpen }) => {
  const { t } = useTranslation();
  return (
    <section className="single-course">
      <div className="container">
        <div className="single-course-wrapper">
          <div className="single-course-intro">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              natus accusantium sed provident recusandae asperiores placeat
              quisquam exercitationem libero et doloribus, quibusdam vitae
              voluptates necessitatibus veritatis eius, animi non iusto!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              natus accusantium sed provident recusandae asperiores placeat
              quisquam exercitationem libero et doloribus, quibusdam vitae
              voluptates necessitatibus veritatis eius, animi non iusto!
            </p>
            <div className="single-course-cmn-btn">
              <button onClick={() => setOpen((prev) => !prev)}>
                {t("register")}
              </button>
            </div>
          </div>
          <div className="single-course-img">
            <SingleJsIcon className="single-course-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JsCourse;
