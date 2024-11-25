interface Props {
  title: string;
  text: string;
}
const HomeeText: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="w-auto border-t-[1px] border-[#fff] text-center flex flex-col gap-[16px]">
      <div className="text-[36px] font-600 font-semiBold text-[#fff]  ">
        {title}
      </div>
      <div className="text-[#fff] font-400 ">{text}</div>
    </div>
  );
};
export default HomeeText;
