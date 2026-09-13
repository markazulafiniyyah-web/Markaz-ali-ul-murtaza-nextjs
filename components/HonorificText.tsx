import { BRAND_NAMES } from "@/lib/i18n";

export function HonorificText({text,language}:{text:string;language:string}){
 const full=BRAND_NAMES[language]||BRAND_NAMES.en;
 const parenthetical=full.match(/[（(][^）)]*[）)]/u)?.[0];
 const arabic=full.match(/رض[يىی]\s+(?:الله|اللہ)\s+عنه/u)?.[0];
 const honorific=parenthetical||arabic||"";
 const at=honorific?text.indexOf(honorific):-1;
 if(at<0)return <>{text}</>;
 return <>{text.slice(0,at)}<span className="brand-honorific">{honorific}</span>{text.slice(at+honorific.length)}</>;
}
