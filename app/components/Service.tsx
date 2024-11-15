import ArrowRigth from "../icons/ArrowRigth";
import QRIcon from "../ServiceIconPNG/qrIcon.png";

const Service: React.FC = () => {
  return (
    <div className="mt-[84px] w-full max-w-[1440px] h-[60vh]">
      <div className="w-full py-[64px] px-[24px] rounded-[24px] bg-[#081103]">
        <div className="text-[#FCFFF5] text-[26px] leading-[31.43px] font-700 text-center">
          Үзүүлэх үйлчилгээ
        </div>
        <div className="w-full flex flex-wrap gap-[64px] mt-6">
          <div className="flex flex flex-wrap">
            {/* First Service Block */}
            <div className="w-[50%] border-r-[1px] border-[#3A4135]  ">
              <div className="w-[90%] flex flex-col p-[8px] gap-[8px] group cursor-pointer">
                <div className="w-full relative flex ">
                  <div className="w-[70%] h-[56px] bg-[#3A4135] flex items-center px-[16px] py-[12px] flex gap-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[4px]  transition-all duration-1000 ease-in-out group-hover:w-full">
                    <img src={QRIcon.src} alt="QR Code Icon" />
                    <div className="text-[#fff]">QR үүсгэгч</div>
                  </div>
                  <div className="w-[56px] h-[56px] rounded-[50%] bg-[#3A4135] absolute right-0 flex items-center justify-center ">
                    <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex items-center justify-center group-hover:bg-[#14B75F]">
                      <ArrowRigth color={"#000"} />
                    </div>
                  </div>
                </div>
                <div className="w-full bg-[#3A4135] p-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[#FCFFF5]">
                  QR код ашиглан ойн нөхөн сэргээлт, хамгаалалт, ойн бүртгэл,
                  эсвэл төслүүдийн талаархи мэдээллийг хүлээн авч, хэрэглэгчдэд
                  хялбар байдлаар ойн сан болон ой хамгааллын талаар мэдээлэл
                  авах боломжтой.
                </div>
              </div>
            </div>
            {/* Second Service Block */}
            <div className="w-[50%] flex justify-end ">
              <div className="w-[90%] flex flex-col p-[8px] gap-[8px] group cursor-pointer">
                <div className="w-full relative flex ">
                  <div className="w-[70%] h-[56px] bg-[#3A4135] flex items-center px-[16px] py-[12px] flex gap-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[4px]  transition-all duration-1000 ease-in-out group-hover:w-full">
                    <img src={QRIcon.src} alt="QR Code Icon" />
                    <div className="text-[#fff]">QR үүсгэгч</div>
                  </div>
                  <div className="w-[56px] h-[56px] rounded-[50%] bg-[#3A4135] absolute right-0 flex items-center justify-center ">
                    <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex items-center justify-center group-hover:bg-[#14B75F]">
                      <ArrowRigth color={"#000"} />
                    </div>
                  </div>
                </div>
                <div className="w-full bg-[#3A4135] p-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[#FCFFF5]">
                  QR код ашиглан ойн нөхөн сэргээлт, хамгаалалт, ойн бүртгэл,
                  эсвэл төслүүдийн талаархи мэдээллийг хүлээн авч, хэрэглэгчдэд
                  хялбар байдлаар ойн сан болон ой хамгааллын талаар мэдээлэл
                  авах боломжтой.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t-[1px] border-[#3A4135]" />
          <div className="flex flex flex-wrap">
            {/* Third Service Block */}
            <div className="w-[50%] border-r-[1px] border-[#3A4135]  ">
              <div className="w-[90%] flex flex-col p-[8px] gap-[8px] group cursor-pointer">
                <div className="w-full relative flex ">
                  <div className="w-[70%] h-[56px] bg-[#3A4135] flex items-center px-[16px] py-[12px] flex gap-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[4px]  transition-all duration-1000 ease-in-out group-hover:w-full">
                    <img src={QRIcon.src} alt="QR Code Icon" />
                    <div className="text-[#fff]">QR үүсгэгч</div>
                  </div>
                  <div className="w-[56px] h-[56px] rounded-[50%] bg-[#3A4135] absolute right-0 flex items-center justify-center ">
                    <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex items-center justify-center group-hover:bg-[#14B75F]">
                      <ArrowRigth color={"#000"} />
                    </div>
                  </div>
                </div>
                <div className="w-full bg-[#3A4135] p-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[#FCFFF5]">
                  QR код ашиглан ойн нөхөн сэргээлт, хамгаалалт, ойн бүртгэл,
                  эсвэл төслүүдийн талаархи мэдээллийг хүлээн авч, хэрэглэгчдэд
                  хялбар байдлаар ойн сан болон ой хамгааллын талаар мэдээлэл
                  авах боломжтой.
                </div>
              </div>
            </div>
            {/* Fourth Service Block */}
            <div className="w-[50%] flex justify-end ">
              <div className="w-[90%] flex flex-col p-[8px] gap-[8px] group cursor-pointer">
                <div className="w-full relative flex ">
                  <div className="w-[70%] h-[56px] bg-[#3A4135] flex items-center px-[16px] py-[12px] flex gap-[16px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[4px]  transition-all duration-1000 ease-in-out group-hover:w-full">
                    <img src={QRIcon.src} alt="QR Code Icon" />
                    <div className="text-[#fff]">QR үүсгэгч</div>
                  </div>
                  <div className="w-[56px] h-[56px] rounded-[50%] bg-[#3A4135] absolute right-0 flex items-center justify-center ">
                    <div className="w-[32px] h-[32px] bg-[#fff] rounded-[50%] flex items-center justify-center group-hover:bg-[#14B75F]">
                      <ArrowRigth color={"#000"} />
                    </div>
                  </div>
                </div>
                <div className="w-full bg-[#3A4135] p-[16px] rounded-tl-[4px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] text-[#FCFFF5]">
                  QR код ашиглан ойн нөхөн сэргээлт, хамгаалалт, ойн бүртгэл,
                  эсвэл төслүүдийн талаархи мэдээллийг хүлээн авч, хэрэглэгчдэд
                  хялбар байдлаар ойн сан болон ой хамгааллын талаар мэдээлэл
                  авах боломжтой.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
