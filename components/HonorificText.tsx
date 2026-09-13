import { BASE_BRAND, BRAND_NAMES } from "@/lib/i18n";

export function HonorificText({text,language}:{text:string;language:string}){
 const full=BRAND_NAMES[language]||BRAND_NAMES.en;
 const base=BASE_BRAND[language]||BASE_BRAND.en;
 let honorific="";
 const open=Math.max(full.indexOf("("),full.indexOf("（"));
 if(open>=0){
  const close=Math.max(full.indexOf(")",open),full.indexOf("）",open));
  honorific=full.slice(open,close>=open?close+1:undefined);
 }else if(full.startsWith(base)) honorific=full.slice(base.length).trim();
 const at=honorific?text.indexOf(honorific):-1;
 if(at<0)return <>{text}</>;
 return <>{text.slice(0,at)}<span className="brand-honorific">{honorific}</span>{text.slice(at+honorific.length)}</>;
}
