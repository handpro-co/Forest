import Link from "next/link";

const AILink: React.FC = () => {
  return (
    // <Link href={"./AI"}>
      <div className=" fixed bottom-[5%] right-[5%] w-[50px] h-[50px] rounded-full transform duration-300 hover:w-[55px] hover:h-[55px] cursor-pointer z-[1000000]">
        <img
          src="/iconAI.png"
          alt="AI Icon"
          className="w-full h-full rounded-full animate-spin-slow"
        />
      </div>
    // </Link>
  );
};

export default AILink;
