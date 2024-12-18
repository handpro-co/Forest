interface Props {
  title: string;
  text: string;
}
const HomeeText: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="w-auto border-t-[1px] border-[#fff] text-center flex flex-col gap-[16px]">
      <div className="text-[24px] font-600 font-semibold text-[#fff] md:text-[32px] ">
        {title}
      </div>
      <div className="text-[#fff] font-400 font-regular  ">{text}</div>
    </div>
  );
};
export default HomeeText;
