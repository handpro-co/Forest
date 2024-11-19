import animateLogo1 from "@/app/LogoAnimatePagesLogos/AnimateLogo1.png";
import animateLogo2 from "@/app/LogoAnimatePagesLogos/AnimateLogo2.png";
import animateLogo3 from "@/app/LogoAnimatePagesLogos/AnimateLogo3.png";
import animateLogo4 from "@/app/LogoAnimatePagesLogos/AnimateLogo4.png";
import animateLogo5 from "@/app/LogoAnimatePagesLogos/AnimateLogo5.png";
import animateLogo6 from "@/app/LogoAnimatePagesLogos/AnimateLogo6.png";
type AnimateBannerDataType = {
  id: number;
  img: string;
};

const animate_banner_data = (): AnimateBannerDataType[] => {
  return [
    {
      id: 1,
      img: animateLogo1.src,
    },
    {
      id: 2,
      img: animateLogo2.src,
    },
    {
      id: 3,
      img: animateLogo3.src,
    },
    {
      id: 4,
      img: animateLogo4.src,
    },
    {
      id: 5,
      img: animateLogo5.src,
    },
    {
      id: 6,
      img: animateLogo6.src,
    },
  ];
};

export default animate_banner_data;
