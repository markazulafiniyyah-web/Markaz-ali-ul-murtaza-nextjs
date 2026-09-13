"use client";
import { Footer, Header } from "./SiteChrome";
import { useI18n } from "./I18nProvider";
import { QARI_AHMED_AZIZI_PHONE, QARI_AHMED_AZIZI_TEL, QARI_AHMED_AZIZI_WHATSAPP } from "@/lib/contact";

export default function PortfolioPage({language="en"}:{language?:string}){
 const {t}=useI18n();
 return <><Header dark active="portfolio" forcedLanguage={language}/><main>
  <section className="portfolio-hero"><div><p className="kicker gold">{t("pf_kicker")}</p><h1>{t("pf_title")}</h1><p>{t("pf_sub")}</p></div></section>
  <section className="portfolio-list">
   <article className="teacher-profile">
    <div className="teacher-photo"><img src="/images/qari-azizi-thumb.jpg" alt="Qari Ahmed Azizi"/></div>
    <div className="teacher-details"><p className="kicker">{t("head_role")}</p><h2>Qari Ahmed Azizi</h2><ul className="teacher-facts"><li>{t("pf_ahmed_markaz")}</li><li>{t("pf_ahmed_mudir")}</li><li>{t("pf_ahmed_reciter")}</li></ul><div className="teacher-actions"><a className="btn btn-primary" href={QARI_AHMED_AZIZI_WHATSAPP} target="_blank" rel="noopener">WhatsApp</a><a className="btn btn-ghost" href={QARI_AHMED_AZIZI_TEL}>{t("call_label")} · <span dir="ltr">{QARI_AHMED_AZIZI_PHONE}</span></a><a className="link-more" href="https://www.facebook.com/watch/?v=939381090526629" target="_blank" rel="noopener">{t("watch_fb")}</a></div></div>
   </article>
   <article className="teacher-profile flip">
    <div className="teacher-photo"><img src="/images/qari-abdurrahman-thumb.jpg" alt="Qari Abdur Rahman Al Afin"/></div>
    <div className="teacher-details"><p className="kicker">{t("qari_role")}</p><h2>Qari Abdur Rahman Al Afin</h2><ul className="teacher-facts"><li>{t("pf_rahman_instructor")}</li><li>{t("pf_rahman_reciter")}</li></ul><div className="teacher-actions"><a className="btn btn-primary" href="https://wa.me/923168724692" target="_blank" rel="noopener">WhatsApp</a><a className="btn btn-ghost" href="tel:+923168724692">{t("call_label")} · <span dir="ltr">+92 316 8724692</span></a><a className="link-more" href="https://www.youtube.com/watch?v=sFiDyMgbhJ4" target="_blank" rel="noopener">{t("watch_yt")}</a></div></div>
   </article>
  </section>
 </main><Footer forcedLanguage={language}/></>;
}
