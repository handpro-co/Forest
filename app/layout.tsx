"use client";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AI from "./(routes)/AI/page";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";
import {
  isAcc,
  isAccLetter,
  isAccLeading,
  isAccCursor,
  isAccLink,
  isInvert,
  isMute,
} from "./components/hook/accessibility";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const [screenColor] = useAtom(isInvert);
  const [screenAcc] = useAtom(isAcc);
  const [isLeading] = useAtom(isAccLeading);
  const [isLetter] = useAtom(isAccLetter);
  const [isCursor] = useAtom(isAccCursor);
  const [isLink] = useAtom(isAccLink);
  const [mute, setMute] = useAtom(isMute);
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.textDecoration = isLink ? "underline" : "none";
    });
    const main = document.getElementById("main");
    if (main) {
      main.style.lineHeight = isLeading ? "2.5" : "normal";
      main.style.letterSpacing = isLetter ? "2px" : "normal";
      main.style.filter = screenColor ? "invert(90%)" : "invert(0)";
      main.style.fontSize = screenAcc ? "20px" : "16px";
      document.body.style.cursor = isCursor
        ? `url(/assets/Cursor.svg) 16 16, auto`
        : "auto";
    }
  }, [screenAcc, isLeading, isLetter, isCursor, isLink, screenColor]);

  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center mx-auto ">
        <Navigation />
        <AI />
        <button
          onClick={() => {
            setMute(!mute);
          }}
          className="fixed flex items-center justify-center   h-[40px] w-[40px]  left-[50px] bottom-[50px] bg-black/40  rounded-full duration-100 hover:scale-110 z-[200]"
        >
          {mute ? (
            <GiSoundOn className="text-white text-[40px]" />
          ) : (
            <GiSoundOff className="text-white text-[40px]" />
          )}
        </button>
        <div
          id="main"
          className="z-[99] w-full mt-[70px] flex flex-col items-center gap-[100px] lg:gap-[150px] "
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
