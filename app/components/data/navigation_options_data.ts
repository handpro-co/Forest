type Option = {
  optionId: string | number;
  name: string;
};

type MockData = {
  id: number;
  title: {
    mn: string; // Mongolian title
    en: string; // English title
  };
  options: Option[];
};

const navigationOptionsData = (): MockData[] => {
  const data = [
    {
      id: 1,
      title: {
        mn: "Ойн газар",
        en: "Forest agency",
      },
      options: [
        {
          optionId: "https://forest.gov.mn/website/page.aspx?mm_id=3&id=6",
          name: "Агентлагын бүтэц",
        },
        {
          optionId: "https://forest.gov.mn/website/page.aspx?mm_id=4&id=1",
          name: "Эрхэм зорилго",
        },
        {
          optionId: "https://forest.gov.mn/website/page.aspx?mm_id=5&id=5",
          name: "Даргын мэдчилгээ",
        },
      ],
    },
    {
      id: 2,
      title: {
        mn: "Мэдээлэл",
        en: "Information",
      },
      options: [
        { optionId: "allNews?id=1014", name: "Видео мэдээ" },
        { optionId: "allNews?id=1013", name: "Фото мэдээ" },
        { optionId: "allNews?id=1", name: "Энгийн мэдээ" },
        { optionId: "allNews?id=2022", name: "Арга хэмжээ" },
        {
          optionId: "allNews?id=2018",
          name: "Цахим сэтгүүл, судалгааны тайлан",
        },
        { optionId: "allNews?id=2039", name: "Сэтгэл ханамжийн судалгаа" },
      ],
    },
    {
      id: 3,
      title: {
        mn: "Хууль, эрх зүй",
        en: "Legal document",
      },
      options: [
        {
          optionId: "https://forest.gov.mn/website/page.aspx?mm_id=1026&id=11",
          name: "Монгол улсын хууль",
        },
        {
          optionId:
            "https://legalinfo.mn/mn/law?page=law&cate=28&active=1&page=1&sort=enacteddate&page=1",
          name: "Улсын Их Хурлын тогтоол, шийдвэр",
        },
        {
          optionId: "allNews?id=1010",
          name: "Засгийн Газрын тогтоол, шийдвэр",
        },
        { optionId: "allNews?id=1011", name: "Сайдын тушаал шийдвэр" },
        { optionId: "allNews?id=1012", name: "Даргын тушаал шийдвэр" },
        {
          optionId: "https://forest.gov.mn/website/page.aspx?mm_id=1059&id=3",
          name: "Дотоод журам",
        },
        { optionId: "allNews?id=1020", name: "Стандарт" },
        // { optionId: "/", name: "Төрийн болон албаны нууц" },
        { optionId: "allNews?id=2030", name: "Хуулийн төсөл санал авах" },
        {
          optionId: "https://forest.gov.mn/website/peanut_law.aspx",
          name: "Байгалийн нөөц ашиглах",
        },
      ],
    },
    {
      id: 4,
      title: {
        mn: "Ил тод байдал",
        en: "Transparency",
      },
      options: [
        {
          optionId: "allNews?id=2025",
          name: "Төсөв, санхүүгийн ил тод байдал",
        },
        // { optionId: "/", name: "Хүний нөөцийн ил тод байдал" },
        // { optionId: "/", name: "Үйл ажиллагааны ил тод байдал" },
        // { optionId: "/", name: "Тендер, худалдан авах ажиллагаа" },
        // { optionId: "/", name: "Хяналт шинжилгээ үнэлгээ" },
        // { optionId: "/", name: "Өргөдөл" },
        // { optionId: "/", name: "Гомдол" },
        { optionId: "allNews?id=2020", name: "Авлигын эсрэг үйл ажиллагаа" },
        { optionId: "allNews?id=2028", name: "Төсөл, хөтөлбөр" },
        // { optionId: "/", name: "Бусад" },
      ],
    },
    {
      id: 5,
      title: {
        mn: "Үйлчилгээ",
        en: "Service",
      },
      options: [
        {
          optionId: "https://forest.gov.mn/website/QR_creater.aspx",
          name: "QR үүсгэгч програм",
        },
        // { optionId: "/", name: "Ойн мэдээллийн сан" },
        {
          optionId:
            "https://e-mongolia.mn/service/samar-jims-emiin-urgamal-tuukh-mod-beltgekh-oin-tseverlegee-khiikh-zorilgoor-khiliin-bus-zurvast-nevrekh-zuvshuurul",
          name: "Хилийн бүс, зурваст нэвтрэх зөвшөөрөл",
        },
        {
          optionId: "https://forest.terbummod.mn/",
          name: "eForest Ойн зөвшөөрлийн систем",
        },
        {
          optionId: "https://license.met.gov.mn/login",
          name: "Тусгай зөвшөөрлийн систем",
        },
        // { optionId: "/", name: "Тусгай зөвшөөрөл" },
        { optionId: "allNews?id=2040", name: "Тарьц суулгацын нөөц" },
      ],
    },
  ];
  return data;
};

export default navigationOptionsData;
