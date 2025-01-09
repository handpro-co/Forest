import Skeleton from "react-loading-skeleton";
const SkeletonLoaderNewsBox = () => {
  return (
    <div className="w-full flex flex-col rounded-[20px] p-2 flex gap-5">
      <Skeleton
        containerClassName="w-full h-[170px] 2xl:h-[200px] 2xl:h-[300px]"
        borderRadius={20}
        count={1}
        height={"100%"}
      />

      <div className="w-full flex flex-col gap-4">
        <Skeleton borderRadius={12} containerClassName="w-1/3" />
        <div className="flex gap-2">
          <Skeleton borderRadius={12} containerClassName="w-[85%]" count={3} />
          <div className="w-[32px] h-[32px] flex mt-2 items-center">
            <Skeleton borderRadius={"50%"} width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonLoaderNewsBox;
