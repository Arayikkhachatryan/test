import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as SingleUiUxIcon } from "../../../../assets/images/ui-ux-icon.svg";

const UiUxCourse = ({ setOpen }) => {
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
            <SingleUiUxIcon className="single-course-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxCourse;
