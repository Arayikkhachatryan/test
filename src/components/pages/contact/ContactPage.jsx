import React from "react";
import ContactForm from "./ContactForm";
import ContactUsArea from "./ContactUsArea";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <section className="single-course-header">
        <img src="/images/test-img.jpg" alt="test" />
      </section>
      <section className="contact-area sec-mar">
        <div className="container">
          <ContactUsArea />
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
