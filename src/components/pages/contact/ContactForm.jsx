/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="contact-form">
                <h3>{t("contactUs.haveAnyQuestions")}</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="post"
                >
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder={t("contactUsForm.name")}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        name="email"
                        placeholder={t("contactUsForm.email")}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" name="subject" placeholder={t("contactUsForm.subject")} />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        cols={30}
                        rows={10}
                        placeholder={t("contactUsForm.message")}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <input type="submit" value={t("contactUsForm.submit")} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="google-map">
                <iframe
                  src="https://maps.google.com/maps?q=40.181118,%2044.523028&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
