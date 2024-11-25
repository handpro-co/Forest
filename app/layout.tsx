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

        {showAI ? null : (
          <div onClick={toggleAI}>
            <AILink />
          </div>
        )}

        {showAI && (
          <div
            className="fixed  top-[50%] left-[50%] w-[80%] h-[100vh]  z-[10000] flex justify-center items-center transform -translate-x-[50%] -translate-y-[50%]"
            onClick={closeAI}
          >
            <div className="relative bg-black/50 w-full h-[80%]  p-[40px] rounded-[24px] shadow-lg overflow-hidden">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-[40px] font-bold text-[white]"
                onClick={() => setShowAI(false)}
              >
                <IoCloseSharp />
              </button>
              {/* AI Component */}
              <AI />
            </div>
          </div>
        )}
        {/* Main Content */}
        <div className="z-[99] w-full mt-[80px] px-[20px] flex flex-col gap-[150px] lg:gap-[50px]">
          {children}
        </div>
        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
