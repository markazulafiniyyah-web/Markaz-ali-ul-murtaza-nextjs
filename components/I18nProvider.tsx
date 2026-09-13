"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { I18N, LANG_ORDER } from "@/lib/i18n";
import { HADITH_FEATURE_TRANSLATIONS, DONATE_FEATURE_TRANSLATIONS } from "@/lib/feature-translations";

type Ctx = { lang:string; setLang:(s:string)=>void; t:(key:string)=>string; languages:typeof I18N; order:string[] };
const Context=createContext<Ctx|null>(null);
const RTL=new Set(["ar","ur","fa","ps","sd","ks"]);
export function I18nProvider({children,initialLang="en"}:{children:React.ReactNode;initialLang?:string}){
 const [lang,setLangState]=useState(initialLang);
 useEffect(()=>{
  const url=new URLSearchParams(location.search).get("lang");
  const pathLang=location.pathname.split("/")[1];
  const saved=localStorage.getItem("ma_lang");
  const browser=navigator.language?.split("-")[0];
  const initial=[I18N[pathLang]?pathLang:null,url,saved,browser,"en"].find(x=>x&&I18N[x])||"en";
  setLangState(initial);
 },[]);
 const setLang=useCallback((code:string)=>{if(!I18N[code])return;setLangState(code);localStorage.setItem("ma_lang",code);const u=new URL(location.href);u.searchParams.set("lang",code);history.replaceState(null,"",u);},[]);
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=RTL.has(lang)?"rtl":"ltr";},[lang]);
 useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));return()=>io.disconnect()},[]);
 const t=useCallback((key:string)=>I18N[lang]?.t[key]??HADITH_FEATURE_TRANSLATIONS[lang]?.[key]??DONATE_FEATURE_TRANSLATIONS[lang]?.[key]??I18N.en.t[key]??key,[lang]);
 const value=useMemo(()=>({lang,setLang,t,languages:I18N,order:LANG_ORDER}),[lang,setLang,t]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useI18n(){const x=useContext(Context);if(!x)throw new Error("I18nProvider missing");return x}
