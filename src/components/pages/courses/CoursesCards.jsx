import React, { useState } from "react";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { MdOutlineDesignServices } from "react-icons/md";
import { ReactComponent as QaIcon } from "../../../assets/images/qa-icon.svg";
import { CONFIG } from "../../../config";
import { useTranslation } from "react-i18next";
import CoursesModalForm from "./CoursesModalForm";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function CoursesCards() {
  const [open, setOpen] = useState(false);

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

  const icons = [
    SiJavascript,
    SiReact,
    SiNodedotjs,
    QaIcon,
    MdOutlineDesignServices,
  ];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const { t } = useTranslation();
  return (
    <>
      <section className="service-area sec-pad courses-cards">
        <div className="courses-cards-img">
          <img src="./images/test-img.jpg" alt="" />
          <div className="courses-header">
            <h2>{t("coursesPage.title")}</h2>
            <h4>{t("coursesPage.title1")}</h4>
          </div>
        </div>

        <div className="container">
          <div className="row g-4 cards">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="courses-cards-title">
                <div className="cmn-btn">
                  <button onClick={() => setOpen((prev) => !prev)}>
                    {t("register")}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-8">
              <div className="row g-4">
                <Link
                  onClick={scrollTop}
                  to="/courses/html-css-course"
                  className="col-sm-6 col-md-6 col-lg-6 col-xl-6 flip-card"
                >
                  <div className="single-service">
                    <div className="single-service-front">
                      <div className="service-icon-card">
                        <div className="service-icon">
                          <i>
                            <AiFillHtml5 className="html-icon" />
                          </i>
                        </div>
                        <div className="service-icon">
                          <i>
                            <DiCss3 className="css-icon" />
                          </i>
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
                      className="col-sm-6 col-md-6 col-lg-6 col-xl-6 flip-card"
                    >
                      <div className="single-service">
                        <div className="single-service-front">
                          <div className="service-icon-card">
                            <div className="service-icon">
                              <i>
                                <Icon className={item.className} />
                              </i>
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

              {/* <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 flip-card">
                  <div className="single-service">
                    <div className="single-service-front">
                      <div className="service-icon-card">
                        <div className="service-icon">
                          <i>
                            <SiJavascript className="js-icon" />
                          </i>
                        </div>
                      </div>

                      <div className="service-content">
                        <h4>JavaScript</h4>
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
                </div> */}
              {/* <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 flip-card">
                  <div className="single-service">
                    <div className="single-service-front">
                      <div className="service-icon-card">
                        <div className="service-icon">
                          <i>
                            <SiReact className="react-icon" />
                          </i>
                        </div>
                      </div>
                      <div className="service-content">
                        <h4>React JS</h4>
                      </div>
                    </div>
                    <div className="single-service-back">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum qui excepturi beatae omnis dolorum et. Omnis
                        ipsum, autem, totam, sed reiciendis perferendis neque
                        quis numquam dolores quos explicabo debitis quidem.
                      </p>
                    </div>
                  </div>
                </div> */}
              {/* <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 flip-card">
                  <div className="single-service">
                    <div className="single-service-front">
                      <div className="service-icon-card">
                        <div className="service-icon">
                          <i>
                            <SiNodedotjs className="node-icon" />
                          </i>
                        </div>
                      </div>
                      <div className="service-content">
                        <h4>Node JS</h4>
                      </div>
                    </div>
                    <div className="single-service-back">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et, aut? Iusto sed, expedita quam iste reprehenderit
                        laborum nisi tenetur quisquam quibusdam harum, velit
                        dolorum consequuntur repellat doloribus? Cupiditate,
                        ipsam minima.
                      </p>
                    </div>
                  </div>
                </div> */}
              {/* <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 flip-card">
                <div className="single-service">
                  <div className="single-service-front">
                    <div className="service-icon-card">
                      <div className="service-icon">
                        <i>
                          <QaIcon />
                       
                        </i>
                      </div>
                    </div>
                    <div className="service-content">
                      <h4>Quality Assurance</h4>
                    </div>
                  </div>
                  <div className="single-service-back">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et, aut? Iusto sed, expedita quam iste reprehenderit
                      laborum nisi tenetur quisquam quibusdam harum, velit
                      dolorum consequuntur repellat doloribus? Cupiditate, ipsam
                      minima.
                    </p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 flip-card">
                <div className="single-service">
                  <div className="single-service-front">
                    <div className="service-icon-card">
                      <div className="service-icon">
                        <i>
                          <MdOutlineDesignServices className="ui-ux-icon" />
                        
                        </i>
                      </div>
                    </div>
                    <div className="service-content">
                      <h4>UI/UX Design</h4>
                    </div>
                  </div>
                  <div className="single-service-back">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et, aut? Iusto sed, expedita quam iste reprehenderit
                      laborum nisi tenetur quisquam quibusdam harum, velit
                      dolorum consequuntur repellat doloribus? Cupiditate, ipsam
                      minima.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <CoursesModalForm open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default CoursesCards;
