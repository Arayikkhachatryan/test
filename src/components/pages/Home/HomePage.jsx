import React from "react";
import TestimonialArea from "../../common/TestimonialArea";
import AboutArea from "./AboutArea";
import CoursesArea from "./CoursesArea";
import LetsTalkArea from "../../common/LetsTalkArea";
import NewsLatterArea from "./NewsLatterArea";
import OurPartnerArea from "./OurPartnerArea";
import PortfolioArea from "./PortfolioArea";
import ServiceArea from "./ServiceArea";
import WhyChooseUsArea from "../../common/WhyChooseUsArea";
import VideoArea from "./VideoArea";
import ServicesArea from "./ServicesArea";
import FirstVideo from "../../../assets/video2.mp4";
function HomePage() {
  return (
    <>
      <section className="single-course-header">
        <img src="/images/test-img.jpg" alt="test" />
      </section>

      <AboutArea />
      <section className="video-div">
        <video
          className="main-video"
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
        >
          <source src={FirstVideo} type="video/mp4" />
        </video>
      </section>
      <CoursesArea />
      <VideoArea />
      <ServicesArea />
      {/* <OurPartnerArea /> */}

      {/* <ServiceArea />
      
      <PortfolioArea black="black" />
      <WhyChooseUsArea black="black" lable="" />
      <TestimonialArea />
      <NewsLatterArea black="black" />
      <LetsTalkArea /> */}
    </>
  );
}

export default HomePage;
