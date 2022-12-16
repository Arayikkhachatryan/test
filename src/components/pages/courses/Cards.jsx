import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CONFIG } from "../../../config";
import { ReactComponent as HtmlIcon } from "../../../assets/images/html-icon.svg";
import { ReactComponent as CssIcon } from "../../../assets/images/css-icon.svg";
import { ReactComponent as JsIcon } from "../../../assets/images/js-icon.svg";
import { ReactComponent as ReactIcon } from "../../../assets/images/react-icon.svg";
import { ReactComponent as NodeJsIcon } from "../../../assets/images/node-js-icon.svg";
import { ReactComponent as QaIcon } from "../../../assets/images/qa-icon.svg";
import { ReactComponent as UiUxIcon } from "../../../assets/images/ui-ux-icon.svg";

const Cards = ({ open, setOpen }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { t } = useTranslation();
  const icons = [JsIcon, ReactIcon, NodeJsIcon, QaIcon, UiUxIcon];

  return (
    <section className="courses-cards">
      <div className="courses-cards-wrapper">
        <div className="courses-cards-header">
          <img src="./images/test-img.jpg" alt="" />
        </div>
        <div className="courses-cards-body">
          <div className="courses-cards-body-bg">
            <img src="/images/background_circuts.png" alt="bg" />
          </div>
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
                <Link
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
                </Link>
                {CONFIG.coursesCardsConfig.map((item, idx) => {
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
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
