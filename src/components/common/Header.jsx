/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useReducer, memo } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { languageFlags } from "../../enum";
import { CONFIG } from "../../config";
import { v4 as uuidv4 } from "uuid";

/*---------Using reducer mange the active or inactive menu----------*/
// const initialState = { activeMenu: "" };

// function reducer(state, action) {
//   switch (action.type) {
//     case "homeOne":
//       return { activeMenu: "homeOne" };
//     case "service":
//       return { activeMenu: "service" };
//     case "projects":
//       return { activeMenu: "projects" };
//     case "blogs":
//       return { activeMenu: "blogs" };
//     default:
//       throw new Error();
//   }
// }

function Header() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [headerColor, setHeaderColor] = useState(true);
  const [openFlag, setOpenFlag] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      // We add pageYOffset for compatibility with IE.
      if (window.scrollY >= 100 || window.pageYOffset >= 100) {
        document.getElementsByTagName("header")[0].classList.add("inverted");
        setHeaderColor(true);
      } else {
        document.getElementsByTagName("header")[0].classList.remove("inverted");
        setHeaderColor(false);
      }
    };
  }, []);

  // Sticky Menu Area
  // useEffect(() => {
  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // });

  // const isSticky = (e) => {
  //   const header = document.querySelector(".position_top");
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 200
  //     ? header.classList.add("sticky")
  //     : header.classList.remove("sticky");
  // };

  /*----for single sidebar event use one state-------*/
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };

  //  scroll top event
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className="position_top">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center header-flex">
              <div className="col col-sm-3 col-md-3 col-lg-3 col-xl-2">
                <div className="logo">
                  <Link onClick={scrollTop} to={"/"}>
                    {headerColor ? (
                      <img
                        src={process.env.PUBLIC_URL + "/images/logo.png"}
                        alt=""
                      />
                    ) : (
                      <img
                        src={process.env.PUBLIC_URL + "/images/logo-black.png"}
                        alt=""
                      />
                    )}
                  </Link>
                </div>
              </div>
              <div className="col col-sm-5 col-md-6 col-lg-6 col-xl-8 text-end">
                <nav
                  className={sidebar === 1 ? "main-nav slidenav" : "main-nav"}
                >
                  <div className="mobile-menu-logo">
                    <Link onClick={scrollTop} to={"/"}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/logo.png"}
                        alt=""
                      />
                    </Link>
                  </div>
                  <ul className={sidebar === 1 ? "sidenav-ul" : null}>
                    {CONFIG.headerConfig.map((title) => (
                      <li key={uuidv4()}>
                        <NavLink
                          className={
                            !headerColor ? "header-title" : "inverted-title"
                          }
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}${title.link}`}
                        >
                          {t(title.name)}
                        </NavLink>
                      </li>
                    ))}
                    {/* <li className="has-child active" onClick={() => dispatch({type: 'homeOne'})}>
                    <Link to={"#"} className={state.activeMenu ==='homeOne'?'active':''}>{t("home")}</Link>
                    <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu ==='homeOne'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <Link onClick={scrollTop} to={"/"} className={state.activeMenu ==='homeOne'?'active':''}>
                          Home 01
                        </Link>
                      </li>
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/home2`}
                        >
                          Home 02
                        </NavLink>
                      </li>
                    </ul>
                  </li> */}
                    {/* <li>
                    <NavLink
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/about`}
                    >
                      {t("header.aboutUs")}
                    </NavLink>
                  </li>
                  <li
                    className="has-child"
                    onClick={() => dispatch({ type: "service" })}
                  >
                    <NavLink
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service`}
                    >
                      {t("header.services")}
                    </NavLink>
                    </li> */}
                    {/* <i className="bi bi-chevron-down" /> */}
                    {/* <ul
                      className={
                        state.activeMenu === "service"
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/service`}
                        >
                          Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/service-details`}
                        >
                          Service Details
                        </NavLink>
                      </li>
                    </ul> */}
                    {/* </li>
                  <li
                    className="has-child"
                    onClick={() => dispatch({ type: "projects" })}
                  >
                    <NavLink
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/project`}
                    >
                      {t("header.projects")}
                    </NavLink> */}
                    {/* <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu === "projects"
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/project`}
                        >
                          Project
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/project-details`}
                        >
                          Project Details
                        </NavLink>
                      </li>
                    </ul> */}
                    {/* </li>
                  <li
                    className="has-child"
                    onClick={() => dispatch({ type: "blogs" })}
                  >
                    <Link to={"#"}>{t("header.courses")}</Link> */}
                    {/* <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu ==='blogs'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog`}
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-standard`}
                        >
                          Blog standard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/blog-details`}
                        >
                          Blog Details
                        </NavLink>
                      </li> */}
                    {/* </ul> */}
                    {/* </li> */}
                    {/* <li className="has-child" onClick={() => dispatch({type: 'pages'})}>
                    <Link to={"#"}>Pages</Link>
                    <i className="bi bi-chevron-down" />
                    <ul
                      className={
                        state.activeMenu ==='pages'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }
                    >
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/commingsoon`}
                        >
                          Comming soon
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={scrollTop}
                          to={`${process.env.PUBLIC_URL}/error`}
                        >
                          Error 404
                        </NavLink>
                      </li>
                    </ul>
                  </li> */}
                    {/* <li>
                    <NavLink
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/contact`}
                    >
                      {t("header.contactUs")}
                    </NavLink>
                </li> */}
                    <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-end header-end">
                      <div className="get-quate">
                        <div
                          className={
                            !openFlag
                              ? "selected-lng"
                              : "selected-lng open-flag"
                          }
                          onClick={() => setOpenFlag((prev) => !prev)}
                        >
                          {languageFlags.map((selected) => (
                            <>
                              {i18n.language === selected.locale ? (
                                <img
                                  src={selected.src}
                                  alt=""
                                  className="flag-img"
                                />
                              ) : null}
                            </>
                          ))}
                        </div>
                        <div
                          className={
                            !openFlag ? "lng-flags" : "lng-flags open-flag"
                          }
                        >
                          {languageFlags.map((flag) => (
                            <>
                              {openFlag && i18n.language !== flag.locale && (
                                <button
                                  onClick={() => changeLanguage(flag.locale)}
                                  className="flag-btn"
                                  key={uuidv4()}
                                >
                                  <img
                                    onClick={() => setOpenFlag((prev) => !prev)}
                                    src={flag.src}
                                    alt={flag.alt}
                                    className="flag-img"
                                  />
                                </button>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ul>
                </nav>
                <div className="mobile-menu">
                  <div
                    onClick={showSidebar}
                    className={
                      sidebar === 1 ? "cross-btn h-active" : "cross-btn"
                    }
                  >
                    <span className="cross-top" />
                    <span className="cross-middle" />
                    <span className="cross-bottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(Header);
