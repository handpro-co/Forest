"use client";
import "./globals.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AI from "./AI/page";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import {
  isAcc,
  isAccLetter,
  isAccLeading,
  isAccCursor,
  isAccLink,
  isInvert,
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
    // main.style.cursor = isCursor ? "pointer" : "auto";vb
    // document.body.style.lineHeight = isLeading ? "2.5" : "normal";
    // document.body.style.letterSpacing = isLetter ? "2px" : "normal";
  }, [screenAcc, isLeading, isLetter, isCursor, isLink, screenColor]);

  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center mx-auto 2xl:w-[80%]">
        <Navigation />
        <AI />
        <div
          id="main"
          className="z-[99] w-full mt-[80px] px-[20px] flex flex-col items-center gap-[150px] lg:gap-[50px]"
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
