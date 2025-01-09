import ArrowRigth from "../icons/ArrowRigth";
import QRIcon from "./ServiceIconPNG/qrIcon.png";
import Shield from "./ServiceIconPNG/plusShield.png";
import correctShield from "./ServiceIconPNG/correctShield.png";
import Ud from "./ServiceIconPNG/feather.png";
const Service: React.FC = () => {
  return (
    <div className="mt-[84px] w-full">
      <div className="w-full py-[64px] px-[24px] rounded-[24px] bg-[#081103]">
        <div className="text-[#FCFFF5] text-[26px]  font-700 text-center">
          Үзүүлэх үйлчилгээ
        </div>
        <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-[64px] mt-6">
          {/* First Service Block */}
          <div className="w-full flex flex-col p-[8px] gap-[8px] group cursor-pointer">
            <div className="w-full relative flex ">
              <div className="w-[70%]  bg-[#3A4135] flex items-center px-[16px] py-[12px] flex gap-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[4px] transition-all duration-1000 ease-in-out group-hover:w-full">
                <img src={QRIcon.src} alt="QR Code Icon" />
                <div className="text-[#fff]">QR үүсгэгч</div>
              </div>
              <div className="w-[56px] h-[56px] rounded-[50%] bg-[#3A4135] absolute right-0 flex items-center justify-center">
                <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex items-center justify-center group-hover:bg-[#14B75F]">
                  <ArrowRigth color={"#000"} />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#3A4135] p-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[#FCFFF5]">
              QR код ашиглан ойн нөхөн сэргээлт, хамгаалалт, ойн бүртгэл, эсвэл
              төслүүдийн талаархи мэдээллийг хүлээн авч, хэрэглэгчдэд хялбар
              байдлаар ойн сан болон ой хамгааллын талаар мэдээлэл авах
              боломжтой.
            </div>
          </div>

          {/* Second Service Block */}
          <div className="w-full ">
            <div className="w-full flex flex-col p-[8px] gap-[8px] group cursor-pointer">
              <div className="w-full relative flex ">
                <div className="w-[70%]  bg-[#3A4135] flex items-center px-[16px] py-[12px] flex gap-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[4px] transition-all duration-1000 ease-in-out group-hover:w-full">
                  <img src={correctShield.src} alt="QR Code Icon" />
                  <div className="text-[#fff]">
                    Хилийн бүс зурваст нэвтрэх зөвшөөрөл
                  </div>
                </div>
                <div className="w-[56px] h-[56px] rounded-[50%] bg-[#3A4135] absolute right-0 flex items-center justify-center">
                  <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex items-center justify-center group-hover:bg-[#14B75F]">
                    <ArrowRigth color={"#000"} />
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#3A4135] p-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[#FCFFF5]">
                Зөвшөөрөл олгогдохдоо тухайн бүсийн байгаль орчны хамгаалалт,
                аюулгүй байдлыг хангах журамд нийцэх ёстой. Зөвшөөрлийн хүрээнд
                зорчих зам, хугацаа, зорилго, болон тусгай нөхцөлийг тусгаж
                өгнө.
              </div>
            </div>
          </div>

          {/* Third Service Block */}
          <div className="w-full flex flex-col p-[8px] gap-[8px] group cursor-pointer">
            <div className="w-full relative flex">
              <div className="w-[70%]  bg-[#3A4135] flex items-center px-[16px] py-[12px] flex gap-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[4px] transition-all duration-1000 ease-in-out group-hover:w-full">
                <img src={Shield.src} alt="QR Code Icon" />
                <div className="text-[#fff]">Тусгай зөвшөөрөлийн систем</div>
              </div>
              <div className="w-[56px] h-[56px] rounded-[50%] bg-[#3A4135] absolute right-0 flex items-center justify-center">
                <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex items-center justify-center group-hover:bg-[#14B75F]">
                  <ArrowRigth color={"#000"} />
                </div>
              </div>
            </div>
            <div className="w-full bg-[#3A4135] p-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[#FCFFF5]">
              Аж ахуйн нэгж, иргэдийн хувьд зохих журмын дагуу хүсэлт гарган,
              шаардлагатай баримт бичиг бүрдүүлж, зөвшөөрөл авахад хялбарчилна.
            </div>
          </div>

          {/* Fourth Service Block */}
          <div className="w-full ">
            <div className="w-full flex flex-col p-[8px] gap-[8px] group cursor-pointer">
              <div className="w-full relative flex">
                <div className="w-[70%]  bg-[#3A4135] flex items-center px-[16px] py-[12px] flex gap-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[4px] transition-all duration-1000 ease-in-out group-hover:w-full">
                  <img src={Ud.src} alt="QR Code Icon" />
                  <div className="text-[#fff]">
                    E-forest Ойн зөвшөөрлийн систем
                  </div>
                </div>
                <div className="w-[56px] h-[56px] rounded-[50%] bg-[#3A4135] absolute right-0 flex items-center justify-center">
                  <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex items-center justify-center group-hover:bg-[#14B75F]">
                    <ArrowRigth color={"#000"} />
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#3A4135] p-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[#FCFFF5]">
                Зөвшөөрөл авах үйл явцыг хялбарчилж, ил тод байдлыг ханган,
                тогтвортой ойн менежментийг дэмжинэ.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
