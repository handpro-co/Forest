type Option = {
  optionId: string | number;
  name: string;
};

type MockData = {
  id: number;
  title: string;
  options: Option[];
};

const navigationOptionsData = (): MockData[] => {
  const data = [
    {
      id: 1,
      title: "Ойн газар",
      options: [
        { optionId: "/", name: "Агентлагын бүтэц" },
        { optionId: "/", name: "Эрхэм зорилго" },
        { optionId: "/", name: "Даргын мэдчилгээ" },
      ],
    },
    {
      id: 2,
      title: "Мэдээлэл",
      options: [
        { optionId: "VideoNews", name: "Видео мэдзэ" },
        { optionId: "PhotoNews", name: "Фото мэдээ" },
        { optionId: "BasicNews", name: "Энгийн мэдээ" },
        { optionId: "imageOnly", name: "Арга хэмжаа" },
        { optionId: "socialNews", name: "Цахим сэтгүүл, судалгааны тайлан" },
        { optionId: "Feedback", name: "Сэтгэл ханамжийн судалгаа" },
      ],
    },
    {
      id: 3,
      title: "Хууль, эрх зүй",
      options: [
        { optionId: "/", name: "Монгол улсын хууль" },
        { optionId: "/", name: "Улсын Их Хурлын тогтоол, шийдвэр" },
        { optionId: "/", name: "Засгийн Газрын тогтоол, шийдвэр" },
        { optionId: "/", name: "Сайдын тушаал шийдвэр" },
        { optionId: "/", name: "Даргын тушаал шийдвэр" },
        { optionId: "/", name: "Дотоод журам" },
        { optionId: "/", name: "Стандарт" },
        { optionId: "/", name: "Төрийн болон албаны нууц" },
        { optionId: "/", name: "Хуулийн төсөл санал авах" },
        { optionId: "/", name: "Байгалийн нөөц ашиглах" },
      ],
    },
    {
      id: 4,
      title: "Ил тод",
      options: [
        { optionId: "/", name: "Төсөв, санхүүгийн ил тод байдал" },
        { optionId: "/", name: "Хүний нөөцийн ил тод байдал" },
        { optionId: "/", name: "Үйл ажиллагааны ил тод байдал" },
        { optionId: "/", name: "Тендер, худалдан авах ажиллагаа" },
        { optionId: "/", name: "Хяналт шинжилгээ үнэлгээ" },
        { optionId: "/", name: "Өргөдөл" },
        { optionId: "/", name: "Гомдол" },
        { optionId: "/", name: "Авлигын эсрэг үйл ажиллагаа" },
        { optionId: "/", name: "Төсөл, хөтөлбөр" },
        { optionId: "/", name: "Бусад" },
      ],
    },
    {
      id: 5,
      title: "Үйлчилгээ",
      options: [
        { optionId: "/", name: "QR үүсгэгч програм" },
        { optionId: "/", name: "Ойн мэдээллийн сан" },
        { optionId: "/", name: "Хилийн бүс, зурваст нэвтрэх зөвшөөрөл" },
        { optionId: "/", name: "eForest Ойн зөвшөөрлийн систем" },
        { optionId: "/", name: "Тусгай зөвшөөрлийн систем" },
        { optionId: "/", name: "Тусгай зөвшөөрөл" },
        { optionId: "/", name: "Тарьц суулгацын нөөц" },
      ],
    },
  ];
  return data;
};

export default navigationOptionsData;
