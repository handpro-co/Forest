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
} from "./components/hook/accessibility";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const [showAI, setShowAI] = useState<boolean>(false);

  const [screenAcc, setScreenAcc] = useAtom(isAcc);
  const [isLeading, setIsLeading] = useAtom(isAccLeading);
  const [isLetter, setIsLetter] = useAtom(isAccLetter);
  const [isCursor, setIsCursor] = useAtom(isAccCursor);
  const [isLink, setIsLink] = useAtom(isAccLink);

  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.textDecoration = isLink ? "underline" : "none";
    });

    document.body.style.fontSize = screenAcc ? "20px" : "16px";
    document.body.style.lineHeight = isLeading ? "2.5" : "normal";
    document.body.style.letterSpacing = isLetter ? "2px" : "normal";
    document.body.style.cursor = isCursor
      ? `url(/assets/Cursor.svg) 16 16, auto`
      : "auto";
  }, [screenAcc, isLeading, isLetter, isCursor, isLink]);

  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center mx-auto 2xl:w-[80%]">
        <Navigation />
        <AI />
        <div className="z-[99] w-full mt-[80px] px-[20px] flex flex-col items-center gap-[150px] lg:gap-[50px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
