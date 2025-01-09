import ArrowRigth from "../icons/ArrowRigth";
import photo from "./homePhoto.png";
import HomeeText from "./layout/HomeeText";

const data = [
  {
    title: "220 тэрбум",
    text: "Монголын ойн сангийн нөөц",
  },
  {
    title: "640 сая",
    text: "Ургаа мод m³",
  },
  {
    title: "80 сая",
    text: "2024 онд тарьсан мод",
  },
];

const Homee: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center lg:items-start w-full h-[90vh] bg-cover bg-center rounded-[24px] px-0 md:px-[56px] py-6 md:py-12 md:px-12 gap-[72px] md:gap-12"
      style={{
        backgroundImage: `url(${photo.src})`,
      }}
    >
      <div className="text-center  lg:text-left text-white font-bold text-[32px] md:text-[52px] lg:text-[48px] xl:text-[56px] w-full md:w-2/3 xl:w-2/5 2xl:w-2/5">
        Амьдралын орчинг сайжруулна
      </div>

      {/* Data Section */}
      <div className="w-full flex flex-wrap items-start justify-center mt-6 gap-4 md:mt-8 md:flex-row md:flex-wrap md:justify-start">
        {data.map((item, index) => (
          <HomeeText key={index} title={item.title} text={item.text} />
        ))}
      </div>

      {/* Button Section */}
      <div className="mt-6">
        <button className="bg-[#14B75F] flex items-center justify-center px-6 py-2 rounded-full gap-4 shadow-md hover:bg-[#12a150] transition-all">
          <span className="text-white font-medium text-lg">Үйлчилгээ авах</span>
          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center transform rotate-90">
            <ArrowRigth color="#333" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Homee;
