type Option = {
  optionId: number;
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
        { optionId: 1, name: "Агентлагын бүтэц" },
        { optionId: 2, name: "Эрхэм зорилго" },
        { optionId: 3, name: "Даргын мэдчилгээ" },
      ],
    },
    {
      id: 2,
      title: "Мэдээлэл",
      options: [
        { optionId: 1, name: "Видео мэдзэ" },
        { optionId: 2, name: "Фото мадзз" },
        { optionId: 3, name: "Арга хэмжаа" },
        { optionId: 4, name: "Цахим сэтгуул, судалгааны тайлан" },
        { optionId: 5, name: "Сэтгэл ханамжийн судалгаа" },
      ],
    },
    {
      id: 3,
      title: "Хууль, эрх зүй",
      options: [
        { optionId: 1, name: "Монгол улсын хууль" },
        { optionId: 2, name: "Улсын Их Хурлын тогтоол, шийдвэр" },
        { optionId: 3, name: "Засгийн Газрын тогтоол, шийдвэр" },
        { optionId: 4, name: "Сайдын тушаал шийдвэр" },
        { optionId: 5, name: "Даргын тушаал шийдвэр" },
        { optionId: 6, name: "Дотоод журам" },
        { optionId: 7, name: "Стандарт" },
        { optionId: 8, name: "Төрийн болон албаны нууц" },
        { optionId: 9, name: "Хуулийн төсөл санал авах" },
        { optionId: 10, name: "Байгалийн нөөц ашиглах" },
      ],
    },
    {
      id: 4,
      title: "Ил тод",
      options: [
        { optionId: 1, name: "Төсөв, санхүүгийн ил тод байдал" },
        { optionId: 2, name: "Хүний нөөцийн ил тод байдал" },
        { optionId: 3, name: "Үйл ажиллагааны ил тод байдал" },
        { optionId: 4, name: "Тендер, худалдан авах ажиллагаа" },
        { optionId: 5, name: "Хяналт шинжилгээ үнэлгээ" },
        { optionId: 6, name: "Өргөдөл" },
        { optionId: 7, name: "Гомдол" },
        { optionId: 8, name: "Авлигын эсрэг үйл ажиллагаа" },
        { optionId: 9, name: "Төсөл, хөтөлбөр" },
        { optionId: 10, name: "Бусад" },
      ],
    },
    {
      id: 5,
      title: "Үйлчилгээ",
      options: [
        { optionId: 1, name: "QR үүсгэгч програм" },
        { optionId: 2, name: "Ойн мэдээллийн сан" },
        { optionId: 3, name: "Хилийн бүс, зурваст нэвтрэх зөвшөөрөл" },
        { optionId: 4, name: "eForest Ойн зөвшөөрлийн систем" },
        { optionId: 5, name: "Тусгай зөвшөөрлийн систем" },
        { optionId: 6, name: "Тусгай зөвшөөрөл" },
        { optionId: 7, name: "Тарьц суулгацын нөөц" },
      ],
    },
  ];
  return data;
};

export default navigationOptionsData;