import ArrowRigth from "../../icons/ArrowRigth";
import Image from "next/image";

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ image, date, title }) => {
  function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  const formattedTitle = capitalizeFirstLetter(title);

  return (
    <div className="flex flex-col gap-[25px] p-[8px] rounded-[20px] cursor-pointer hover:bg-[#ECEBE3]">
      <Image
        src={image}
        className="rounded-[16px] object-cover"
        alt={formattedTitle || "News image"}
        width={640}
        height={360}
        sizes="(max-width: 768px) 100vw, 320px"
        unoptimized
      />
      <div className="gap-[16px] flex flex-col pb-[12px] pl-[8px]">
        <div className="text-[#666] text-[14px]">{date}</div>
        <div className="flex gap-[12px] items-center justify-between">
          <div className="text-[#333] break-words max-w-[85%] overflow-hidden">
            <div className="line-clamp-3">{formattedTitle}</div>
          </div>
          <div className="min-w-[32px] min-h-[32px] bg-[#DEFF94] rounded-[50%] flex justify-center items-center">
            <ArrowRigth color="#333" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
