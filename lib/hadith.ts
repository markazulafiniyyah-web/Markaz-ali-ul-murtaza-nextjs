export type HadithBook = {
  slug: string;
  category: "the9" | "other" | "forties";
  count: number;
  english: string;
  arabic: string;
};

export type HadithChapter = { id: number; arabic: string; english: string };
export type Hadith = {
  id: number;
  idInBook: number;
  chapterId: number;
  arabic: string;
  english: { narrator: string; text: string };
};
export type HadithData = { chapters: HadithChapter[]; hadiths: Hadith[] };

export const HADITH_BOOKS: HadithBook[] = [
  { slug:"bukhari", category:"the9", count:7277, english:"Sahih al-Bukhari", arabic:"صحيح البخاري" },
  { slug:"muslim", category:"the9", count:7459, english:"Sahih Muslim", arabic:"صحيح مسلم" },
  { slug:"abudawud", category:"the9", count:5276, english:"Sunan Abi Dawud", arabic:"سنن أبي داود" },
  { slug:"tirmidhi", category:"the9", count:4053, english:"Jami' at-Tirmidhi", arabic:"جامع الترمذي" },
  { slug:"nasai", category:"the9", count:5768, english:"Sunan an-Nasa'i", arabic:"سنن النسائي" },
  { slug:"ibnmajah", category:"the9", count:4345, english:"Sunan Ibn Majah", arabic:"سنن ابن ماجه" },
  { slug:"malik", category:"the9", count:1985, english:"Muwatta Malik", arabic:"موطأ مالك" },
  { slug:"ahmed", category:"the9", count:1374, english:"Musnad Ahmad", arabic:"مسند أحمد" },
  { slug:"darimi", category:"the9", count:3406, english:"Sunan ad-Darimi", arabic:"سنن الدارمي" },
  { slug:"riyad_assalihin", category:"other", count:1896, english:"Riyad as-Salihin", arabic:"رياض الصالحين" },
  { slug:"mishkat_almasabih", category:"other", count:4428, english:"Mishkat al-Masabih", arabic:"مشكاة المصابيح" },
  { slug:"bulugh_almaram", category:"other", count:1767, english:"Bulugh al-Maram", arabic:"بلوغ المرام" },
  { slug:"aladab_almufrad", category:"other", count:1326, english:"Al-Adab Al-Mufrad", arabic:"الأدب المفرد" },
  { slug:"shamail_muhammadiyah", category:"other", count:402, english:"Shamail al-Muhammadiyah", arabic:"الشمائل المحمدية" },
  { slug:"nawawi40", category:"forties", count:42, english:"Forty Hadith of an-Nawawi", arabic:"الأربعون النووية" },
  { slug:"qudsi40", category:"forties", count:40, english:"Forty Hadith Qudsi", arabic:"الأربعون القدسية" },
  { slug:"shahwaliullah40", category:"forties", count:40, english:"Forty Hadith of Shah Waliullah", arabic:"أربعون شاه ولي الله" }
];
export const HADITH_SLUGS = HADITH_BOOKS.map((book) => book.slug);
