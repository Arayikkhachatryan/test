import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ContactForm from "./ContactForm";
import ContactUsArea from "./ContactUsArea";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb pageName={t("breadCrumbs.contactUs")} />
      <div className="contact-area sec-mar">
        <ContactUsArea />
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
