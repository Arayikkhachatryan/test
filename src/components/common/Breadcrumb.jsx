import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Breadcrumb(props) {
  const { t } = useTranslation();

  return (
    <>
      <section className="breadcrumbs">
        <div className="background">
          <img
            src="./images/footer-bg.png"
            alt="footer bg"
            className="background-img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h1>{props.pageName}</h1>
                <span>
                  <Link to={"/"}>{t("breadCrumbs.home")}</Link>
                  <i>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/icons/breadcrumb-arrow.svg"
                      }
                      alt="images"
                    />
                  </i>
                  {props.pageName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Breadcrumb;
