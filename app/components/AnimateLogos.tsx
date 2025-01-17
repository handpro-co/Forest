"use client";
import { useEffect, useState } from "react";
import getAnimateBannerData from "./data/animate_banner_data";

type Imgs = {
  id: number;
  img: string;
};

const AnimateLogos: React.FC = () => {
  const [imgs, setImgs] = useState<Imgs[]>([]);

  useEffect(() => {
    const data = getAnimateBannerData();
    setImgs(data);
  }, []);

  return (
    <div className=" w-full mt-[50px]  h-[84px]">
      <div className="text-[26px] font-semibold mb-[30px] text-[#333333] text-center">
        Хамтрагч байгууллагууд
      </div>
      <div className="overflow-hidden w-full h-[84px]">
        <div className="flex  animate-scroll-reverse h-full gap-[20px]">
          {[...imgs, ...imgs].concat(imgs).map((image, index) => (
            <img
              key={`${image.id}-${index}`}
              src={image.img}
              alt="Partner Logo"
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimateLogos;
