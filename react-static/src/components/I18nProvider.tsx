"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { I18N, LANG_ORDER } from "@/lib/i18n";
import { DONATE_FEATURE_TRANSLATIONS } from "@/lib/feature-translations";
import { BASE_PATH } from "@/lib/site-path";

type Ctx = { lang:string; setLang:(s:string)=>void; t:(key:string)=>string; languages:typeof I18N; order:string[] };
const Context=createContext<Ctx|null>(null);
const RTL=new Set(["ar","ur","fa","ps","sd","ks"]);
export function I18nProvider({children,initialLang="en",translations}:{children:React.ReactNode;initialLang?:string;translations?:Record<string,string>}){
 const [lang,setLangState]=useState(initialLang);
 useEffect(()=>{
  const url=new URLSearchParams(location.search).get("lang");
  const localPath=BASE_PATH&&location.pathname.startsWith(BASE_PATH)?location.pathname.slice(BASE_PATH.length):location.pathname;
  const pathLang=localPath.split("/")[1];
  const saved=localStorage.getItem("ma_lang");
  const browser=navigator.language?.split("-")[0];
  const initial=[I18N[pathLang]?pathLang:null,url,saved,browser,"en"].find(x=>x&&I18N[x])||"en";
  setLangState(initial);
 },[]);
 const setLang=useCallback((code:string)=>{if(!I18N[code])return;setLangState(code);localStorage.setItem("ma_lang",code);const u=new URL(location.href);u.searchParams.set("lang",code);history.replaceState(null,"",u);},[]);
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=RTL.has(lang)?"rtl":"ltr";},[lang]);
 const t=useCallback((key:string)=>translations?.[key]??I18N[lang]?.t[key]??DONATE_FEATURE_TRANSLATIONS[lang]?.[key]??I18N.en.t[key]??key,[lang,translations]);
 const value=useMemo(()=>({lang,setLang,t,languages:I18N,order:LANG_ORDER}),[lang,setLang,t]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useI18n(){const x=useContext(Context);if(!x)throw new Error("I18nProvider missing");return x}
