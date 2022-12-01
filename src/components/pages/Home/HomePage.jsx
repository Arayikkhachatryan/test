import React from "react";
import TestimonialArea from "../../common/TestimonialArea";
import AboutArea from "./AboutArea";
import HeroArea from "./HeroArea";
import LetsTalkArea from "../../common/LetsTalkArea";
import NewsLatterArea from "./NewsLatterArea";
import OurPartnerArea from "./OurPartnerArea";
import PortfolioArea from "./PortfolioArea";
import ServiceArea from "./ServiceArea";
import WhyChooseUsArea from "../../common/WhyChooseUsArea";
import VideoArea from "./VideoArea";
import ServicesArea from "./ServicesArea";
function HomePage() {
  return (
    <>
      <section className="single-course-header">
        <img src="/images/test-img.jpg" alt="test" />
      </section>

      <HeroArea />
      <VideoArea />
      <ServicesArea />
      {/* <OurPartnerArea /> */}

      {/* <ServiceArea />
      <AboutArea black="black" light="dark" />
      <PortfolioArea black="black" />
      <WhyChooseUsArea black="black" lable="" />
      <TestimonialArea />
      <NewsLatterArea black="black" />
      <LetsTalkArea /> */}
    </>
  );
}

export default HomePage;
