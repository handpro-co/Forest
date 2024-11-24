"use client";

import Lottie from "lottie-react";
import MicOn from "./lotties/mic-on.json";
import MicOff from "./lotties/mic-off.json";
import { useEffect, useState } from "react";

export default function Mic() {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    const toggle = (e) => {
      if (e.key === "m") {
        setIsOn((prev) => !prev);
      }
    };
    window.addEventListener("keydown", toggle);
    return () => {
      window.removeEventListener("keydown", toggle);
    };
  }, []);

  return (
    <Lottie
      onClick={handleToggle}
      animationData={isOn ? MicOn : MicOff}
      loop
      className="cursor-pointer size-48 transition-all"
    />
  );
}
