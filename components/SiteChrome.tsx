"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "./I18nProvider";

export function Logo(){return <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden><rect width="64" height="64" rx="14" fill="#01411C"/><path d="M42 12a20 20 0 1 0 10.5 37A22 22 0 1 1 42 12z" fill="#f0c75e"/><circle cx="45" cy="20" r="3" fill="#f0c75e"/></svg>}
export function Header({dark=false,active=""}:{dark?:boolean;active?:string}){
 const {t,lang,setLang,languages,order}=useI18n(); const [menu,setMenu]=useState(false),[picker,setPicker]=useState(false),[q,setQ]=useState(""),[scrolled,setScrolled]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(scrollY>8);addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
 const links=[["/#programs",t("nav_programs")],["/#qurras",t("nav_qurras")],["/hadith",t("nav_hadith")],["/#features",t("nav_about")],["/#faq",t("nav_faq")],["/#contact",t("nav_contact")]];
 return <><header className={`nav ${dark?"nav-dark":""} ${scrolled?"scrolled":""}`}><div className="nav-inner">
  <Link href="/" className="brand"><Logo/><span className="brand-name">{t("hero_title")}</span></Link>
  <nav className="nav-links">{links.map(([h,l])=><Link key={h} href={h} style={active&&h.includes(active)?{color:"var(--gold)",fontWeight:600}:undefined}>{l}</Link>)}</nav>
  <div className="nav-actions"><Link href="/donate" className="btn btn-gold btn-small">{t("nav_donate")}</Link><button className="lang-btn" onClick={()=>setPicker(!picker)}>◎ <span>{languages[lang].name}</span></button><Link href="/#enroll" className="btn btn-primary btn-small">{t("nav_enroll")}</Link><button className={`hamburger ${menu?"open":""}`} onClick={()=>setMenu(!menu)} aria-label="Menu"><span/><span/></button></div>
 </div></header>
 <div className={`mobile-menu ${menu?"open":""}`}>{links.map(([h,l])=><Link key={h} href={h} onClick={()=>setMenu(false)}>{l}</Link>)}<Link href="/donate">{t("nav_donate")}</Link><Link className="btn btn-primary" href="/#enroll">{t("nav_enroll")}</Link></div>
 <div className={`lang-panel ${picker?"open":""}`}><div className="lang-panel-head"><h3>{t("lang_title")}</h3><button className="lang-close" onClick={()=>setPicker(false)}>×</button></div><input className="lang-search" value={q} onChange={e=>setQ(e.target.value)} placeholder={t("lang_search")}/><div className="lang-grid">{order.filter(c=>(languages[c].name+languages[c].en+languages[c].region).toLowerCase().includes(q.toLowerCase())).map(c=><button key={c} className={`lang-item ${c===lang?"active":""}`} onClick={()=>{setLang(c);setPicker(false)}}><span className="lang-flag">{languages[c].flag}</span><span className="lang-names"><span className="lang-native">{languages[c].name}</span><span className="lang-en">{languages[c].en} · {languages[c].region}</span></span>{c===lang&&<span className="lang-check">✓</span>}</button>)}</div></div>
 </>;
}
export function Footer(){const {t}=useI18n();return <footer className="footer" id="contact"><div className="footer-grid"><div className="footer-brand"><Link href="/" className="brand"><Logo/><span className="brand-name">{t("hero_title")}</span></Link><p>{t("ft_about")}</p></div><nav><h4>{t("ft_programs")}</h4>{[1,2,3,4].map(x=><Link key={x} href="/#programs">{t(`p${x}_title`)}</Link>)}</nav><nav><h4>{t("ft_links")}</h4><Link href="/donate">{t("nav_donate")}</Link><Link href="/hadith">{t("nav_hadith")}</Link><Link href="/#qurras">{t("nav_qurras")}</Link><Link href="/#faq">{t("nav_faq")}</Link></nav><div><h4>{t("ft_contact")}</h4><a href="mailto:info@markazalimurtaza.com">info@markazalimurtaza.com</a><a href="https://wa.me/923014592661">WhatsApp: +92 301 4592661</a><p className="footer-addr">{t("ft_addr")}</p></div></div><div className="footer-bottom"><p>{t("ft_rights").replace("{year}",String(new Date().getFullYear()))}</p></div></footer>}
