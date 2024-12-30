import Skeleton from "react-loading-skeleton";
import SkeletonLoaderNewsBox from "./skeletonLoaderNewsBox";
const SkeletonLoader = () => {
  return (
    <>
      <Skeleton height={"50vh"} width="100%" borderRadius={16} />

      <div className="w-full lg:w-[65%] mt-[50px] flex flex-col gap-[64px]">
        <div className="flex flex-col gap-[24px]">
          <div className="border-t-[1px] border-[#94D1B0] border-dashed" />

          <div className="flex justify-between items-end">
            <div className="flex items-center gap-[8px]">
              <Skeleton width={100} height={20} />

              <div className="flex flex-col gap-[2px] justify-center items-center">
                <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
                <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
                <span className="w-[2px] h-[2px] bg-[#14B75F] rounded-[50%]" />
              </div>
              {/* Static Text Skeleton */}
              <span className="flex items-center text-[#14B75F] text-[14px] font-500">
                Агентлагын мэдээ
              </span>
            </div>

            <div className="flex gap-[12px]">
              {/* Social Media and Print Skeletons */}
              <div className="flex gap-[8px]">
                <Skeleton circle={true} width={24} height={24} />
                <Skeleton width={50} height={20} />
              </div>
              <div className="flex gap-[8px]">
                <Skeleton circle={true} width={24} height={24} />
                <Skeleton width={50} height={20} />
              </div>
            </div>
          </div>

          <Skeleton width={300} height={40} />
        </div>

        <div className="w-full">
          <Skeleton count={10} height={16} />
        </div>
      </div>

      <div className="mt-[200px] flex flex-col gap-6">
        <Skeleton count={1} height={26} width={"300px"} />
        <div className="grid grid-cols-4 gap-[32px] ">
          <SkeletonLoaderNewsBox />
          <SkeletonLoaderNewsBox />
          <SkeletonLoaderNewsBox />
        </div>
      </div>
    </>
  );
};
export default SkeletonLoader;
