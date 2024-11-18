import ArrowRigth from "../../icons/ArrowRigth";

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
};
const NewsCard: React.FC<NewsCardProps> = ({ image, date, title }) => {
  return (
    <div className="flex flex-col gap-[25px] p-[8px] rounded-[20px] cursor-pointer hover:bg-[#ECEBE3] ">
      <img src={image} className="rounded-[16px]" alt="billion tree" />
      <div className="gap-[16px] flex flex-col pb-[12px] pl-[8px]">
        <div className="text-[#666] text-[14px]">{date}</div>
        <div className="flex gap-[12px] items-center justify-between">
          <div className="text-[#333] text-[16px] break-words max-w-[85%]">
            {title}
          </div>
          <div className="w-[32px] h-[32px] bg-[#DEFF94] rounded-[50%] flex justify-center items-center">
            <ArrowRigth color="#333" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
