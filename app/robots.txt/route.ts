import { requestOrigin } from "@/lib/request-origin";
export const dynamic="force-dynamic";
export function GET(request:Request){const base=requestOrigin(request);return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,{headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, s-maxage=3600","vary":"host, x-forwarded-host, x-forwarded-proto"}})}
