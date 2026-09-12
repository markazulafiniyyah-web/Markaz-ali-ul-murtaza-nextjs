import { HADITH_BOOKS } from "@/lib/hadith";
import { getHadithBookData } from "@/lib/hadith-data";
const BASE="https://markazalimurtaza.com",CHUNK=10000;
export const runtime="nodejs";
export const revalidate=86400;
export function generateStaticParams(){return [{file:"pages.xml"},...Array.from({length:6},(_,i)=>({file:`hadith-${i+1}.xml`}))]}
function render(urls:string[]){return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${url}</loc></url>`).join("")}</urlset>`}
export async function GET(_request:Request,{params}:{params:Promise<{file:string}>}){const {file}=await params;if(file==="pages.xml")return new Response(render([BASE,`${BASE}/hadith`,`${BASE}/donate`]),{headers:{"content-type":"application/xml"}});const match=file.match(/^hadith-(\d+)\.xml$/);if(!match)return new Response("Not found",{status:404});const start=(Number(match[1])-1)*CHUNK,end=start+CHUNK;let position=0;const urls:string[]=[];for(const book of HADITH_BOOKS){const data=await getHadithBookData(book.slug);if(!data)continue;for(const hadith of data.hadiths){if(position>=start&&position<end)urls.push(`${BASE}/hadith/${book.slug}/${hadith.idInBook}`);position++;if(position>=end)break}if(position>=end)break}return new Response(render(urls),{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, max-age=86400"}})}
