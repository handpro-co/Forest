import BillionTree from "../../ServiceIconPNG/billionTree.png";

interface NewsItem {
  date: string;
  title: string;
  image: string;
  category: string;
}

const newsData: NewsItem[] = [
  // Existing entries
  {
    date: "2024-04-23",
    title:
      "Үйлдэвэрлэлийн зориулалтаар хуш модны самрыг бэлтгэх дуудлага худалдаа 2024",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-22",
    title: "Хүүхдийн эрхийн тухай хууль шинэчлэгдлээ",
    image: BillionTree.src,
    category: "Цахим сэтгүүл, тайлан",
  },
  {
    date: "2024-04-21",
    title:
      "Үйлдэвэрлэлийн зориулалтаар хуш модны самрыг бэлтгэх дуудлага худалдаа 2024",
    image: BillionTree.src,
    category: "Ойн мэдээллийн сан",
  },
  {
    date: "2024-04-20",
    title: "Монгол Улсын аялал жуулчлалын ирээдүй",
    image: BillionTree.src,
    category: "Тусгай зөвшөөрөл",
  },
  {
    date: "2024-04-19",
    title: "Тусгай зөвшөөрлөөр хайгуул хийх шинэ боломжууд",
    image: BillionTree.src,
    category: "Ойн мэдээллийн сан",
  },
  {
    date: "2024-04-18",
    title: "Ойн цэвэрлэгээний ажлын шинэ хөтөлбөр",
    image: BillionTree.src,
    category: "Цахим сэтгүүл, тайлан",
  },
  {
    date: "2024-04-17",
    title: "Мод тарьж, ойг хамгаалах үндэсний хөтөлбөр",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-16",
    title: "Ургамлын хамгааллын хууль батлагдав",
    image: BillionTree.src,
    category: "Ойн мэдээллийн сан",
  },
  {
    date: "2024-04-15",
    title: "Эрүүл ойн сангийн ач холбогдол",
    image: BillionTree.src,
    category: "Тусгай зөвшөөрөл",
  },
  {
    date: "2024-04-14",
    title: "Газар тариалангийн шинэ хөтөлбөр хэрэгжиж эхэллээ",
    image: BillionTree.src,
    category: "Цахим сэтгүүл, тайлан",
  },
  {
    date: "2024-04-13",
    title: "Мод тарьж, хөрс хамгаалах арга замууд",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-12",
    title: "Гадаадын хөрөнгө оруулалт Монголд нэмэгдэж байна",
    image: BillionTree.src,
    category: "Ойн мэдээллийн сан",
  },
  {
    date: "2024-04-11",
    title: "Цахим сэтгүүл, тайлангаа шинэчилсэн нь",
    image: BillionTree.src,
    category: "Цахим сэтгүүл, тайлан",
  },
  {
    date: "2024-04-10",
    title: "Модны аж ахуйг хөгжүүлэх боломжууд",
    image: BillionTree.src,
    category: "Тусгай зөвшөөрөл",
  },
  {
    date: "2024-04-09",
    title: "Монгол ойн байршил, төрхийг хамгаалах эрх зүй",
    image: BillionTree.src,
    category: "Ойн мэдээллийн сан",
  },
  {
    date: "2024-04-08",
    title: "Цаг уурын өөрчлөлт ойн салбарт хэрхэн нөлөөлж байна вэ?",
    image: BillionTree.src,
    category: "Цахим сэтгүүл, тайлан",
  },
  {
    date: "2024-04-07",
    title: "Ногоон эдийн засгийн ирээдүй ба ойн менежмент",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-06",
    title: "Газар нутаг хамгаалах үндэсний хөтөлбөр хэрэгжиж эхэллээ",
    image: BillionTree.src,
    category: "Ойн мэдээллийн сан",
  },
  {
    date: "2024-04-05",
    title: "Биологийн олон янз байдал хамгаалах шинэ хөтөлбөр",
    image: BillionTree.src,
    category: "Тусгай зөвшөөрөл",
  },
  {
    date: "2024-04-04",
    title: "Цахим болон офлайн орчинд зөвшөөрөл авах үе шатууд",
    image: BillionTree.src,
    category: "Цахим сэтгүүл, тайлан",
  },

  // Adding new entries for the "Тарьц суулгацын нөөц" category (30 total)
  {
    date: "2024-04-03",
    title: "Тарьц суулгацын нөөц - шинэ сорилт",
    image: BillionTree.src,
    category: "Тарьц суулгацын нөөц",
  },
  {
    date: "2024-04-02",
    title: "Тарьц суулгацын нөөц - мод тарих аргачлал",
    image: BillionTree.src,
    category: "Тарьц суулгацын нөөц",
  },
  {
    date: "2024-04-01",
    title: "Тарьц суулгацын нөөц - шинжлэх ухааны судалгаа",
    image: BillionTree.src,
    category: "Тарьц суулгацын нөөц",
  },
  // Add similar entries for the "Арга хэмжээ" category (30 total)
  {
    date: "2024-03-30",
    title: "Арга хэмжээ - шинэ хөтөлбөр зарлагдлаа",
    image: BillionTree.src,
    category: "Арга хэмжээ",
  },
  {
    date: "2024-03-29",
    title: "Арга хэмжээ - салбарын тэргүүлэгчид хэлэлцлээ",
    image: BillionTree.src,
    category: "Арга хэмжээ",
  },
  {
    date: "2024-04-23",
    title:
      "Үйлдэвэрлэлийн зориулалтаар хуш модны самрыг бэлтгэх дуудлага худалдаа 2024",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-22",
    title: "Монгол Улсын экологийн төлөв байдал",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-21",
    title: "Тайга ойг хамгаалах стратегийн шинэчлэл",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-20",
    title: "Ногоон эдийн засаг болон ойн менежментийн шинэ хандлагууд",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-19",
    title: "Эрүүл мэндийн салбарт ойн ургамал ашиглах боломж",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-18",
    title: "Монгол ойн шинэчлэл: Үндэсний стратеги",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-17",
    title: "Ой модны хомсдол ба түүнийг шийдвэрлэх арга зам",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-16",
    title: "Ногоон эдийн засаг: Ойн секторын боломж",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-15",
    title: "Эко системийн үйл ажиллагаа ба цаг уурын өөрчлөлт",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-14",
    title: "Ургамлын хамгааллын хуулийг шинэчлэх боломж",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-13",
    title: "Хөвсгөл аймгийн ойн нөхөн сэргээлт",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-12",
    title: "Ногоон бүтээн байгуулалтын санаачилга",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-11",
    title: "Монгол Улсын ой модыг сэргээх шинэ боломж",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-10",
    title: "Цаг уурын өөрчлөлт ба ойн менежмент",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-09",
    title: "Монголын ойн салбарын өнөөгийн байдал",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-08",
    title: "Тэрбум мод тарих үндэсний хөтөлбөр",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-07",
    title: "Ногоон эдийн засгийн хөгжлийн төлөв",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-06",
    title: "Шинэ мод тарих аргачлалууд",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-05",
    title: "Ойн эрдэм шинжилгээний шинэ бүтээл",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-04",
    title: "Тэрбум мод хөтөлбөрийн хэрэгжилт",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-03",
    title: "Монгол Улс дахь мод тарих үйл ажиллагаа",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-02",
    title: "Тусгай зөвшөөрлөөр ойн аж ахуй явуулах боломж",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
  {
    date: "2024-04-01",
    title: "Ойн модны хамгаалалтыг бэхжүүлэх стратеги",
    image: BillionTree.src,
    category: "Мэдээлэл",
  },
];

export default newsData;
