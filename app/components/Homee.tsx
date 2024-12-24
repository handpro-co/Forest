import ArrowRigth from "../icons/ArrowRigth";
import photo from "./homePhoto.png";
import HomeeText from "./layout/HomeeText";

// Define the data with title and text
const data = [
  {
    title: "220 тэрбум",
    text: "Монголын ойн сангийн нөөц",
  },
  {
    title: "640 сая",
    text: "Ургаа мод m³ ",
  },
  {
    title: "80 сая",
    text: "2024 онд тарьсан мод",
  },
];

const Homee: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center w-full h-[80vh] bg-cover bg-center rounded-[24px] px-[24px] py-[24px] md:py-0 md:px-[56px] md:gap-[96px]  "
      style={{ backgroundImage: `url(${photo.src})` }}
    >
      <div className="flex text-[32px] font-600 font-bold text-[#fff] lg:w-[30%] md:text-[56px]">
        Амьдралын орчинг сайжруулна
      </div>
      <div className="w-auto flex flex-col ">
        <div className=" flex flex-wrap gap-0  md:gap-[32px]">
          {data.map((item, index) => (
            <HomeeText key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
      <div>
        <button className="bg-[#14B75F] flex items-center justify-center pl-[24px] pr-[8px] pt-[8px] pb-[8px] rounded-[32px] flex gap-[12px]">
          <span className="text-[#fff]  font-500 text-[16px]">
            Үйлчилгээ авах
          </span>
          <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex justify-center items-center rotate-90">
            <ArrowRigth color="#333" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Homee;
