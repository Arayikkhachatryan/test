import React from "react";
import Video from "../../../assets/video.mp4";

const VideoArea = () => {
  return (
    <section className="video-div">
      <video
        className="main-video"
        autoPlay={true}
        muted={true}
        loop={true}
        preload="auto"
      >
        <source src={Video} type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoArea;
