import { HADITH_LANGUAGES } from "@/lib/hadith";
const BASE="https://markazalimurtaza.com";
export const dynamic="force-static";
export function GET(){const maps=["pages.xml",...HADITH_LANGUAGES.flatMap(lang=>[`${lang}-hadith-1.xml`,`${lang}-hadith-2.xml`])];const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${maps.map(file=>`<sitemap><loc>${BASE}/sitemaps/${file}</loc></sitemap>`).join("")}</sitemapindex>`;return new Response(xml,{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, max-age=86400"}})}
