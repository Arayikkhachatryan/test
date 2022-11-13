import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import LetsTalkArea from "../../common/LetsTalkArea";
import TestimonialArea from "../../common/TestimonialArea";
import WhyChooseUsArea from "../../common/WhyChooseUsArea";
import AboutArea from "../Home/AboutArea";
import InsideStoryArea from "./InsideStoryArea";
import LatesNewsArea from "./LatesNewsArea";
import { useTranslation } from "react-i18next";


function AboutPage() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { t } = useTranslation();
  
  return (
    <>
      <Breadcrumb pageName={t("breadCrumbs.aboutUs")} />
      <InsideStoryArea />
      <AboutArea />
      <TestimonialArea />
      <WhyChooseUsArea black="black" lable="" />
      <LatesNewsArea />
      <LetsTalkArea />
    </>
  );
}

export default AboutPage;
