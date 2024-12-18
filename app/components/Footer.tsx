import Logo from "./layout/Logo";

const Footer: React.FC = () => {
  return (
    <div className="w-full   flex flex-col items-center gap-[32px] pt-[48px] px-[24px] pb-[24px] mt-[50px]">
      <div className="w-full border-b-[1px] border-dashed border-[#14B75F]" />
      <div className="w-full flex justify-between py-[24px]  flex-col lg:flex-row gap-[64px] md:gap-[20px]">
        <div className="w-auto flex flex-col gap-[40px]">
          <Logo />
          <div className="flex flex-col gap-[20px]">
            <div className="text-[32px] font-semibold  text-[#333333]">
              Амьдралын орчинг сайжруулна
            </div>
            <div className="text-[32px] font-semibold  text-[#14B75F]">
              Ногоон ирээдүйг бүтээцгээе.
            </div>
          </div>
        </div>
        <div className="flex gap-[64px] md:gap-[10%] flex-col md:flex-row w-[100%] lg:w-[50%] ">
          <div className="flex flex-col gap-[24px] w-full text-center lg:w-[45%] lg:text-left">
            <div className="px-[6px] font-semibold  text-[#333333]">
              Үйлчилгээ
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="p-[6px] text-[#666666] font-normal   hover:text-[#14B75F] cursor-pointer">
                QR үүсгэгч
              </div>
              <div className="p-[6px] text-[#666666] font-normal  hover:text-[#14B75F] cursor-pointer">
                Хилийн бүс зурваст нэвтрэх зөвшөөрөл
              </div>
              <div className="p-[6px] text-[#666666] font-normal hover:text-[#14B75F] cursor-pointer">
                Тусгай зөвшөөрлийн систем
              </div>
              <div className="p-[6px] text-[#666666] font-normal   hover:text-[#14B75F] cursor-pointer">
                E-forest Ойг зөвшөөрлийн систем
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-full text-center lg:text-left lg:w-[45%]">
            <div className="px-[6px] font-semibold  text-[#333333]">
              Холбоо барих
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="p-[6px] text-[#666666] font-normal hover:text-[#14B75F] cursor-pointer">
                Төрийн өмчийн II байр, Чингүнжавын гудамж, Баянгол дүүрэг, 2-р
                хороо
              </div>
              <div className="p-[6px] text-[#666666] font-normal  hover:text-[#14B75F] cursor-pointer">
                +976 7711 1180
              </div>
              <div className="p-[6px] text-[#666666] font-normal  hover:text-[#14B75F] cursor-pointer">
                info@forest.gov.mn
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[14px]  text-[#606885]">
        Засгийн газрын хэрэгжүүлэгч агентлаг Ойн газар. Бүх эрх хуулиар
        хамгаалагдсан. 2024 он.
      </div>
    </div>
  );
};

export default Footer;
