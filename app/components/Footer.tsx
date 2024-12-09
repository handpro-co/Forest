import Logo from "./layout/Logo";

const Footer: React.FC = () => {
  return (
    <div className="w-full   flex flex-col items-center gap-[64px] pt-[48px] px-[24px] pb-[24px] mt-[50px]">
      <div className="w-full border-b-[1px] border-[#ECEBE3]" />
      <div className="w-full flex justify-between py-[24px]  flex-col lg:flex-row gap-[64px] md:gap-[20px]">
        <div className="w-auto flex flex-col gap-[40px]">
          <Logo />
          <div className="flex flex-col gap-[20px]">
            <div className="text-[32px] font-semibold leading-[38.18px] text-[#333333]">
              Тэрбум мод
            </div>
            <div className="text-[32px] font-semibold leading-[38.18px] text-[#14B75F]">
              Таны тарих нэг модноос эхэлнэ.
            </div>
          </div>
        </div>
        <div className="flex gap-[64px] md:gap-[10%] flex-col md:flex-row w-[100%] lg:w-[50%] ">
          <div className="flex flex-col gap-[24px] w-full text-center lg:w-[45%] lg:text-left">
            <div className="px-[6px] font-semibold leading-[19.34px] text-[#333333]">
              Үйлчилгээ
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="p-[6px] text-[#666666] font-normal leading-[18.56px]  hover:text-[#14B75F] cursor-pointer">
                QR үүсгэгч
              </div>
              <div className="p-[6px] text-[#666666] font-normal leading-[18.56px] hover:text-[#14B75F] cursor-pointer">
                Хилийн бүс зурваст нэвтрэх зөвшөөрөл
              </div>
              <div className="p-[6px] text-[#666666] font-normal leading-[18.56px] hover:text-[#14B75F] cursor-pointer">
                Тусгай зөвшөөрлийн систем
              </div>
              <div className="p-[6px] text-[#666666] font-normal leading-[18.56px]  hover:text-[#14B75F] cursor-pointer">
                E-forest Ойг зөвшөөрлийн систем
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-full text-center lg:text-left lg:w-[45%]">
            <div className="px-[6px] font-semibold leading-[19.34px] text-[#333333]">
              Холбоо барих
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="p-[6px] text-[#666666] font-normal leading-[18.56px] hover:text-[#14B75F] cursor-pointer">
                Төрийн өмчийн II байр, Чингүнжавын гудамж, Баянгол дүүрэг, 2-р
                хороо
              </div>
              <div className="p-[6px] text-[#666666] font-normal leading-[18.56px] hover:text-[#14B75F] cursor-pointer">
                +976 7711 1180
              </div>
              <div className="p-[6px] text-[#666666] font-normal leading-[18.56px] hover:text-[#14B75F] cursor-pointer">
                info@forest.gov.mn
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[12px] leading-[12.78px] text-[#333333]">
        Засгийн газрын хэрэгжүүлэгч агентлаг Ойн газар. Бүх эрх хуулиар
        хамгаалагдсан. 2024 он.
      </div>
    </div>
  );
};

export default Footer;
