import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import LetsTalkArea from "../../common/LetsTalkArea";
import TestimonialArea from "../../common/TestimonialArea";
import WhyChooseUsArea from "../../common/WhyChooseUsArea";
import AboutArea from "../Home/AboutArea";
import InsideStoryArea from "./InsideStoryArea";
import LatesNewsArea from "./LatesNewsArea";
import { useTranslation } from "react-i18next";
import Layout from "../../App";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Breadcrumb pageName={t("breadCrumbs.aboutUs")} />
        <InsideStoryArea />
        <AboutArea />
        <TestimonialArea />
        <WhyChooseUsArea black="black" lable="" />
        <LatesNewsArea />
        <LetsTalkArea />
      </Layout>
    </>
  );
}

export default AboutPage;
