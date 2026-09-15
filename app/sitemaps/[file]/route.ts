import { HADITH_BOOKS, isHadithLanguage } from "@/lib/hadith";
import { LANG_ORDER } from "@/lib/i18n";
import { requestOrigin } from "@/lib/request-origin";
const CHUNK=50000;
export const runtime="nodejs";
export const dynamic="force-dynamic";
function render(urls:string[]){return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${url}</loc></url>`).join("")}</urlset>`}
export async function GET(request:Request,{params}:{params:Promise<{file:string}>}){const base=requestOrigin(request);const {file}=await params;if(file==="pages.xml"){
 const localized=LANG_ORDER.flatMap(lang=>[`${base}/${lang}`,`${base}/${lang}/donate`,`${base}/${lang}/hadith`,`${base}/${lang}/portfolio`]);
 return new Response(render([...localized,`${base}/hifz`,`${base}/nazra`,`${base}/tajweed`,`${base}/online-quran-classes`,`${base}/jamia-riaz-ul-jannah`]),{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, s-maxage=3600, stale-while-revalidate=86400","vary":"host, x-forwarded-host, x-forwarded-proto"}});
}const match=file.match(/^([a-z]{2})-hadith-([12])\.xml$/);if(!match||!isHadithLanguage(match[1]))return new Response("Not found",{status:404});const lang=match[1],start=(Number(match[2])-1)*CHUNK,end=start+CHUNK;let position=0;const urls:string[]=[];for(const book of HADITH_BOOKS){for(let number=1;number<=book.count;number++){if(position>=start&&position<end)urls.push(`${base}/${lang}/hadith/${book.slug}/${number}`);position++;if(position>=end)break}if(position>=end)break}return new Response(render(urls),{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, s-maxage=3600, stale-while-revalidate=86400","vary":"host, x-forwarded-host, x-forwarded-proto"}})}
