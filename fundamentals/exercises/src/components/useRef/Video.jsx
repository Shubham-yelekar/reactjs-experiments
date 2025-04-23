import React, { useRef } from "react";

// import videoFile from "../../assets/videoplayback (2).mp4";

const Video = () => {
  const videoRef = useRef(null);

  function enter() {
    videoRef.current.play();
  }

  function leave() {
    videoRef.current.pause();
  }

  return (
    <div>
      <video
        ref={videoRef}
        onMouseEnter={enter}
        onMouseLeave={leave}
        loop
        muted
        playsInline
        width="400"
        height="300"
      >
        <source src="videoplayback.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Video;
