interface Props {
  title: string;
  text: string;
}
const HomeeText: React.FC<Props> = ({ title, text }) => {
  return (
    <div className=" border-t-[1px] border-[#14B75F] md:border-[#fff] text-center inline-flex flex-col gap-[16px]">
      <div className="text-[24px] font-600 font-semibold text-[#14B75F] md:text-[#fff] md:text-[36px] ">
        {title}
      </div>
      <div className="text-[#14B75F] md:text-[#fff] font-400 font-regular  text-[18px]">
        {text}
      </div>
    </div>
  );
};
export default HomeeText;
