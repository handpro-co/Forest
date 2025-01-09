import AnimateLogos from "./components/AnimateLogos";
import Service from "./components/Service";
import News from "./components/News";
import Homee from "./components/Homee";
const Home: React.FC = () => {
  return (
    <>
      <Homee />
      <div className="flex flex-col gap-[50px] w-[90%]">
        <AnimateLogos />
        <Service />
        <News />
      </div>
    </>
  );
};
export default Home;
