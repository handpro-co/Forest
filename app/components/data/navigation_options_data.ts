type Option = {
  optionId: number;
  name: string;
};

type MockData = {
  id: number;
  title: string;
  options: Option[];
};

const navigation_options_data = (): MockData[] => {
  return [
    {
      id: 1,
      title: "МЭДЭЭЛЭЛ",
      options: [
        { optionId: 1, name: "Видео мэдзэ" },
        { optionId: 2, name: "Фото мадзз" },
        { optionId: 3, name: "Арга хэмжаа" },
        { optionId: 4, name: "Цахим сэтгуул, судалгааны тайлан" },
        { optionId: 5, name: "Сэтгэл ханамжийн судалгаа" },
      ],
    },
  ];
};

const data = navigation_options_data();
