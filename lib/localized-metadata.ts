import type { Metadata } from "next";
import { headers } from "next/headers";
import { LANG_ORDER, BRAND_NAMES } from "./i18n";
import { originFromHeaders } from "./request-origin";

type Section="home"|"donate"|"hadith"|"portfolio";
export async function localizedMetadata(language:string,section:Section,dictionary:Record<string,string>,complete=true):Promise<Metadata>{
 const origin=originFromHeaders(await headers());const suffix=section==="home"?"":`/${section}`;const path=`/${language}${suffix}`;
 const sectionTitle=section==="donate"?dictionary.dn_title:dictionary.pf_title;
 const title=section==="home"?(dictionary.meta_title||BRAND_NAMES[language]):`${sectionTitle} — ${BRAND_NAMES[language]}`;
 const description=section==="home"?dictionary.meta_desc:section==="donate"?dictionary.dn_sub:section==="hadith"?dictionary.lib_sub:dictionary.pf_sub;
 const languages=Object.fromEntries([...LANG_ORDER.map(code=>[code,`${origin}/${code}${suffix}`]),["x-default",`${origin}/en${suffix}`]]);
 const url=`${origin}${path}`,image=`${origin}/images/hero-art.svg`;
 return {title,description,robots:{index:complete,follow:true},alternates:{canonical:url,languages},openGraph:{type:"website",title,description,url,siteName:BRAND_NAMES[language],locale:language,images:[{url:image,width:1200,height:630,alt:BRAND_NAMES[language]}]},twitter:{card:"summary_large_image",title,description,images:[image]}};
}
