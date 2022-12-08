import React from "react";
import ContactForm from "./ContactForm";
import ContactUsArea from "./ContactUsArea";
import { useTranslation } from "react-i18next";
import Layout from "../../App";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <section className="single-course-header">
          <img src="/images/test-img.jpg" alt="test" />
        </section>
        <section className="contact-area sec-mar">
          <div className="container">
            <ContactUsArea />
            <ContactForm />
          </div>
        </section>
      </Layout>
    </>
  );
}

export default ContactPage;
