"use client";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AILink from "./components/AILink";
import AI from "./AI/page";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const [showAI, setShowAI] = useState<boolean>(false);

  const toggleAI = () => {
    setShowAI((prevState) => !prevState);
  };

  const closeAI = (event: React.MouseEvent<HTMLDivElement>) => {
    // Close only if the overlay (not the AI content) is clicked
    if (event.target === event.currentTarget) {
      setShowAI(false);
    }
  };

  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center mx-auto 2xl:w-[80%]">
        <Navigation />

        <AI />

        <div className="z-[99] w-full mt-[80px] px-[20px] flex flex-col gap-[150px] lg:gap-[50px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
