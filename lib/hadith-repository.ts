import "server-only";
import { db } from "./db";
import { getHadithBookData } from "./hadith-data";
import { HADITH_BOOKS, type Hadith, type HadithChapter } from "./hadith";

export async function getHadith(slug:string, number:number):Promise<{hadith:Hadith;chapter?:HadithChapter}|null>{
 if(db){const rows=await db`SELECT r.id,r.number AS "idInBook",r.chapter_id AS "chapterId",r.arabic,r.english_narrator,r.english_text,c.english AS chapter_english,c.arabic AS chapter_arabic FROM hadith_records r LEFT JOIN hadith_chapters c ON c.book_slug=r.book_slug AND c.chapter_id=r.chapter_id WHERE r.book_slug=${slug} AND r.number=${number} LIMIT 1`;if(!rows.length)return null;const r=rows[0];return {hadith:{id:Number(r.id),idInBook:r.idInBook,chapterId:r.chapterId,arabic:r.arabic,english:{narrator:r.english_narrator,text:r.english_text}},chapter:{id:r.chapterId,english:r.chapter_english||"",arabic:r.chapter_arabic||""}}}
 const data=await getHadithBookData(slug);const hadith=data?.hadiths.find(h=>h.idInBook===number);if(!hadith)return null;return {hadith,chapter:data?.chapters.find(c=>c.id===hadith.chapterId)};
}

export async function getAdjacentHadith(slug:string,number:number){
 if(db){const rows=await db`SELECT number FROM hadith_records WHERE book_slug=${slug} AND number IN ((SELECT max(number) FROM hadith_records WHERE book_slug=${slug} AND number<${number}),(SELECT min(number) FROM hadith_records WHERE book_slug=${slug} AND number>${number})) ORDER BY number`;return {previous:rows.find(r=>r.number<number)?.number??null,next:rows.find(r=>r.number>number)?.number??null}}
 const data=await getHadithBookData(slug);const i=data?.hadiths.findIndex(h=>h.idInBook===number)??-1;return {previous:i>0?data!.hadiths[i-1].idInBook:null,next:i>=0&&i<data!.hadiths.length-1?data!.hadiths[i+1].idInBook:null};
}

export async function getBookPage(slug:string,page:number,limit:number,q="",chapter?:number){
 const book=HADITH_BOOKS.find(b=>b.slug===slug);if(!book)return null;const offset=(page-1)*limit;
 if(db){const pattern=`%${q}%`;const where=q?db`AND (r.english_text ILIKE ${pattern} OR r.english_narrator ILIKE ${pattern} OR r.arabic ILIKE ${pattern})`:db``;const ch=chapter!=null?db`AND r.chapter_id=${chapter}`:db``;const [rows,count,chapters]=await Promise.all([db`SELECT id,number AS "idInBook",chapter_id AS "chapterId",arabic,english_narrator,english_text FROM hadith_records r WHERE book_slug=${slug} ${where} ${ch} ORDER BY number LIMIT ${limit} OFFSET ${offset}`,db`SELECT count(*)::int AS count FROM hadith_records r WHERE book_slug=${slug} ${where} ${ch}`,db`SELECT chapter_id AS id,english,arabic FROM hadith_chapters WHERE book_slug=${slug} ORDER BY chapter_id`]);return {book,chapters,hadiths:rows.map(r=>({id:Number(r.id),idInBook:r.idInBook,chapterId:r.chapterId,arabic:r.arabic,english:{narrator:r.english_narrator,text:r.english_text}})),total:count[0].count,page,pages:Math.max(1,Math.ceil(count[0].count/limit))}}
 const data=await getHadithBookData(slug);if(!data)return null;const f=data.hadiths.filter(h=>(chapter==null||h.chapterId===chapter)&&(!q||h.arabic.includes(q)||(h.english.text+h.english.narrator).toLowerCase().includes(q.toLowerCase())));return {book,chapters:data.chapters,hadiths:f.slice(offset,offset+limit),total:f.length,page,pages:Math.max(1,Math.ceil(f.length/limit))};
}
