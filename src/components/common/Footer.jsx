import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { t } = useTranslation();

  return (
    <>
      <footer>
        <div className="background-footer">
          <img
            src="./images/footer-bgh.png"
            alt="footer bg"
            className="background-footer-img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link onClick={scrollTop} to={"#"}>
                    <img src="/images/logo-black.png" alt="img" />
                  </Link>
                </div>
                <address>
                  <h4>{t("footer.office")}</h4>
                  <p>{t("address")}</p>
                </address>
                <ul className="social-media-icons">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.twitter.com/"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>

                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.pinterest.com/"
                    >
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>{t("footer.ourServices")}</h4>
                <ul className="footer-menu">
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      Strategy &amp; Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      Web Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      Digital Merketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      App Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service-details`}
                    >
                      App Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>{t("footer.company.title")}</h4>
                <ul className="footer-menu">
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/about`}
                    >
                      {t("footer.company.aboutUs")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/service`}
                    >
                      {t("footer.company.services")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/project`}
                    >
                      {t("footer.company.projects")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/contact`}
                    >
                      {t("footer.company.courses")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>{t("footer.contacts")}</h4>
                <div className="number">
                  <div className="num-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="phone">
                    <a rel="noopener noreferrer" href="tel:37493787855">
                      +374 93 78 78 55
                    </a>
                  </div>
                </div>
                <div className="office-mail">
                  <div className="mail-icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="email">
                    <a rel="noopener noreferrer" href="mailto:info@example.com">
                      innovaitschool@gmail.com
                    </a>
                  </div>
                </div>
                <div className="address">
                  <div className="address-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <p>{t("address")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt">
                  <span>
                    Copyright 2022 <b>Finibus</b> | Design By
                    <a
                      rel="noopener noreferrer"
                      href="https://www.egenslab.com/"
                      target="_blank"
                    >
                      Egens Lab
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      {t("footer.privacyPolicy")}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      {t("footer.termsOfUse")}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      {t("footer.supportPolicy")}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to={"#"}>
                      {t("footer.termsOfService")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="scroll-top opacity">
        <ScrollButton></ScrollButton>
      </div>
    </>
  );
}

export default memo(Footer);

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <i
      className="bi bi-arrow-up"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <span>{t("footer.top")}</span>
    </i>
  );
};
