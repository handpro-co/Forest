import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center mx-auto 2xl:w-[80%] ">
        <Navigation />
        <div className="w-full mt-[80px] px-[20px] flex flex-col gap-[150px] lg:gap-[50px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
