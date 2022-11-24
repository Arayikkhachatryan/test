import React from "react";
import { useTranslation } from "react-i18next";

function ContactUsArea() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <div className="title black">
              <h2>{t("contactUs.moreQuestion")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4 contact-us-card">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-geo-alt" />
              </div>
              <h4>{t("contactUs.location")}</h4>
              <a
                href="https://www.google.com/maps/place/40%C2%B010'52.0%22N+44%C2%B031'22.9%22E/@40.181118,44.523028,17z/data=!4m5!3m4!1s0x0:0xcbacf9f80d3e660e!8m2!3d40.181118!4d44.523028?hl=ru-RU"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("address")}
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4 contact-us-card">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-telephone" />
              </div>
              <h4>{t("contactUs.phone")}</h4>
              <a href="tel:37493787855">+374 93 78 78 55</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4 contact-us-card">
            <div className="office-info">
              <div className="icon">
                <i className="bi bi-envelope" />
              </div>
              <h4>{t("contactUs.email")}</h4>
              <a href="mailto:innovaitschool@gmail.com">
                innovaitschool@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsArea;
