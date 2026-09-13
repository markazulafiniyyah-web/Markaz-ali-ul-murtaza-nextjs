import { HADITH_LANGUAGES } from "@/lib/hadith";
import { requestOrigin } from "@/lib/request-origin";
export const dynamic="force-dynamic";
export function GET(request:Request){const base=requestOrigin(request);const maps=["pages.xml",...HADITH_LANGUAGES.flatMap(lang=>[`${lang}-hadith-1.xml`,`${lang}-hadith-2.xml`])];const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${maps.map(file=>`<sitemap><loc>${base}/sitemaps/${file}</loc></sitemap>`).join("")}</sitemapindex>`;return new Response(xml,{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, s-maxage=3600, stale-while-revalidate=86400","vary":"host, x-forwarded-host, x-forwarded-proto"}})}
