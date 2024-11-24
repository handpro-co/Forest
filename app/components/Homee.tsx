import photo from "./homePhoto.png";

const Homee: React.FC = () => {
  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center rounded-[24px]"
      style={{ backgroundImage: `url(${photo.src})` }}
    ></div>
  );
};

export default Homee;
