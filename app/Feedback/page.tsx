import FeedBackImage from "./components/photos/FeedBackPhoto.png";
import ArrowRigth from "../icons/ArrowRigth";
const FeedBack: React.FC = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-60% h-full flex justify-center items-center">
        <div className="w-[60%] h-auto flex flex-col gap-[53px] ">
          <div className="flex flex-col gap-[16px] ">
            <div className="flex items-center gap-[16px] cursor-pointer">
              <div className=" w-[50px] h-[50px] bg-[#ECEBE3] flex justify-center items-center rounded-[50%] transform rotate-180">
                <ArrowRigth color="#333333" />
              </div>
              <div className="text-[#666666] font-500 text-[16px] leading-[18.83px]">
                Буцах
              </div>
            </div>
            <div className="font-700 text-[26px] leading-[33px] text-[#333333]">
              Хэрэглэгчийн сэтгэл ханамжийн судалгаа
            </div>
          </div>
          <div className="flex flex-col gap-[64px]">
            <div className="flex flex-col gap-[16px]">
              <div className="font-500 leading-[20px] text-[16px] text-[#333333]">
                Ойн газрын үйл ажиллагаанд хэр сэтгэл ханамжтай байдаг вэ ?
              </div>
              <div className="flex justify-between items-center"></div>
              <div></div>
            </div>
            <div>feedback</div>
          </div>
        </div>
      </div>
      <div className="w-40%">
        <img src={FeedBackImage.src} alt="" />
      </div>
    </div>
  );
};
export default FeedBack;
