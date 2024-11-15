import "./globals.css";
import Navigation from "./components/Navigation";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col items-center ">
        <Navigation />
        <div className="mt-[80px] px-[20px]">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
