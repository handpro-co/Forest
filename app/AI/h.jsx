"use client";

import { createRef, useRef, useState, useEffect } from "react";
import Mic from "../_components/Mic";

export default function AIChatbot() {
  const videos = ["001.mov", "002.mov", "003.mov", "004.mov", "005.mov"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef(videos.map(() => createRef()));

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        const currentVideo = videoRefs.current[currentIndex].current;
        if (currentVideo) {
          if (!isPlaying) {
            currentVideo.play();
            setIsPlaying(true);
          } else {
            currentVideo.pause();
            setIsPlaying(false);
          }
        }
      } else if (event.key.toLowerCase() === "r") {
        setCurrentIndex(0);
        setIsPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentIndex, isPlaying]);

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="w-full h-full relative">
      <img src="forest-bg.jpg" alt="bg" />
      <div className="w-full bottom-0 absolute h-full">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={videoRefs.current[index]}
            src={video}
            className={`absolute w-full bottom-0 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            onEnded={handleVideoEnd}
            preload="auto"
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-1/3">
        <Mic />
      </div>
    </div>
  );
}
