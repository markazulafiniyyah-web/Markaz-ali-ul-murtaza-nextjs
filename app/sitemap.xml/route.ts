const BASE="https://markazalimurtaza.com";
export const dynamic="force-static";
export function GET(){const maps=["pages.xml",...Array.from({length:6},(_,i)=>`hadith-${i+1}.xml`)];const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${maps.map(file=>`<sitemap><loc>${BASE}/sitemaps/${file}</loc></sitemap>`).join("")}</sitemapindex>`;return new Response(xml,{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, max-age=86400"}})}
