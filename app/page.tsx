import AnimateLogos from "./components/AnimateLogos";
import Service from "./components/Service";
import News from "./components/News";
import Homee from "./components/Homee";
import SkeletonLoaderCategory from "./components/skeleton/skeletonLoaderCategory";
const Home: React.FC = () => {
  return (
    <>
      <Homee />
      <AnimateLogos />
      <Service />
      <News />
    </>
  );
};
export default Home;
