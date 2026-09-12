import postgres from "postgres";
import { readFile } from "node:fs/promises";
const books=[
["bukhari","the9",7277,"Sahih al-Bukhari","صحيح البخاري"],["muslim","the9",7459,"Sahih Muslim","صحيح مسلم"],["abudawud","the9",5276,"Sunan Abi Dawud","سنن أبي داود"],["tirmidhi","the9",4053,"Jami' at-Tirmidhi","جامع الترمذي"],["nasai","the9",5768,"Sunan an-Nasa'i","سنن النسائي"],["ibnmajah","the9",4345,"Sunan Ibn Majah","سنن ابن ماجه"],["malik","the9",1985,"Muwatta Malik","موطأ مالك"],["ahmed","the9",1374,"Musnad Ahmad","مسند أحمد"],["darimi","the9",3406,"Sunan ad-Darimi","سنن الدارمي"],["riyad_assalihin","other",1896,"Riyad as-Salihin","رياض الصالحين"],["mishkat_almasabih","other",4428,"Mishkat al-Masabih","مشكاة المصابيح"],["bulugh_almaram","other",1767,"Bulugh al-Maram","بلوغ المرام"],["aladab_almufrad","other",1326,"Al-Adab Al-Mufrad","الأدب المفرد"],["shamail_muhammadiyah","other",402,"Shamail al-Muhammadiyah","الشمائل المحمدية"],["nawawi40","forties",42,"Forty Hadith of an-Nawawi","الأربعون النووية"],["qudsi40","forties",40,"Forty Hadith Qudsi","الأربعون القدسية"],["shahwaliullah40","forties",40,"Forty Hadith of Shah Waliullah","أربعون شاه ولي الله"]];
if(!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
const sql=postgres(process.env.DATABASE_URL,{prepare:false,max:4});
for(const [slug,category,count,english,arabic] of books){
 const data=JSON.parse(await readFile(new URL(`../data/hadith/${slug}.json`,import.meta.url),"utf8"));
 await sql`INSERT INTO hadith_books ${sql({slug,category,count,english_name:english,arabic_name:arabic})} ON CONFLICT (slug) DO UPDATE SET count=excluded.count,english_name=excluded.english_name,arabic_name=excluded.arabic_name`;
 const chapters=data.chapters.map(c=>({book_slug:slug,chapter_id:c.id,english:c.english||"",arabic:c.arabic||""}));
 for(let i=0;i<chapters.length;i+=500) await sql`INSERT INTO hadith_chapters ${sql(chapters.slice(i,i+500))} ON CONFLICT (book_slug,chapter_id) DO UPDATE SET english=excluded.english,arabic=excluded.arabic`;
 const records=data.hadiths.map(h=>({id:h.id,book_slug:slug,number:h.idInBook,chapter_id:h.chapterId,arabic:h.arabic||"",english_narrator:h.english?.narrator||"",english_text:h.english?.text||""}));
 for(let i=0;i<records.length;i+=300) await sql`INSERT INTO hadith_records ${sql(records.slice(i,i+300))} ON CONFLICT (id) DO UPDATE SET arabic=excluded.arabic,english_narrator=excluded.english_narrator,english_text=excluded.english_text`;
 console.log(`Imported ${slug}: ${records.length}`);
}
await sql.end();
