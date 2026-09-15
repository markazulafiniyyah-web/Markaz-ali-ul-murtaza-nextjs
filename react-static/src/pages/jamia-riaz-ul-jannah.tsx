import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "@/components/SiteChrome";
import { QARI_AHMED_AZIZI_PHONE, QARI_AHMED_AZIZI_TEL, QARI_AHMED_AZIZI_WHATSAPP } from "@/lib/contact";
import { sitePath } from "@/lib/site-path";

const title="Jamia Riaz-ul-Jannah Lahore | Qari Ahmed Azizi";
const description="Learn about Qari Ahmed Azizi, Mudir (Principal) of Jamia Riaz-ul-Jannah in Allama Iqbal Town, Lahore, and his online Hifz, Nazra and Tajweed institute.";
export const metadata:Metadata={
 title,description,
 keywords:["Jamia Riaz ul Jannah","Jamia Riaz-ul-Jannah Lahore","Masjid Riaz ul Jannah","Masjid Riazul Jannah","Riaz ul Jannat mosque","Riaz ul Jannah Allama Iqbal Town","Qari Ahmed Azizi","Qari Ahmad Azizi","Quran teacher Lahore","Quran institute Lahore","online Quran institute Pakistan","Nazra teacher Lahore","Tajweed teacher Lahore","Hifz teacher Lahore"],
 alternates:{canonical:"/jamia-riaz-ul-jannah"},
 openGraph:{title,description,url:"/jamia-riaz-ul-jannah",type:"profile",images:[{url:"/images/qari-azizi-thumb.jpg",alt:"Qari Ahmed Azizi"}]},
 twitter:{card:"summary_large_image",title,description,images:["/images/qari-azizi-thumb.jpg"]}
};
export default function Page(){
 const schema={"@context":"https://schema.org","@type":"Person",name:"Qari Ahmed Azizi",jobTitle:"Mudir (Principal)",affiliation:{"@type":"EducationalOrganization",name:"Jamia Riaz-ul-Jannah",address:{"@type":"PostalAddress",streetAddress:"Allama Iqbal Town",addressLocality:"Lahore",addressRegion:"Punjab",addressCountry:"PK"}},worksFor:{"@type":"EducationalOrganization",name:"Markaz Al Murtaza Al Islami & Safia Islamic Institute",url:"https://markazulmurtaza.vercel.app"}};
 return <><Header dark/><main><section className="jamia-hero"><div><p className="kicker gold">Qur'an teaching leadership in Lahore</p><h1>Qari Ahmed Azizi and Jamia Riaz-ul-Jannah</h1><p>Allama Iqbal Town, Lahore, Pakistan</p></div></section><section className="jamia-content"><div className="jamia-photo"><img src={sitePath("/images/qari-azizi-thumb.jpg")} alt="Qari Ahmed Azizi, Mudir of Jamia Riaz-ul-Jannah"/></div><article><p className="kicker">Mudir · Principal</p><h2>Qari Ahmed Azizi</h2><p>Qari Ahmed Azizi serves as Mudir (Principal) of <strong>Jamia Riaz-ul-Jannah</strong> in Allama Iqbal Town, Lahore. He is also Head of Markaz Al Murtaza Al Islami & Safia Islamic Institute, an online Qur'anic institute offering personal instruction in Hifz, Nazra and Tajweed.</p><p>This page provides the relevant institute and teacher information for people searching online for Jamia Riaz-ul-Jannah, Masjid Riaz-ul-Jannah, a Qur'an teacher in Lahore, or an online Qur'an institute in Pakistan.</p><div className="teacher-actions"><a className="btn btn-primary" href={QARI_AHMED_AZIZI_WHATSAPP} target="_blank" rel="noopener">Contact on WhatsApp</a><a className="btn btn-ghost" href={QARI_AHMED_AZIZI_TEL}>Call · <span dir="ltr">{QARI_AHMED_AZIZI_PHONE}</span></a><Link className="link-more" href={sitePath("/portfolio")}>View teacher portfolio</Link></div><h3>Online Qur'an programs</h3><div className="jamia-programs"><Link href={sitePath("/hifz")}><strong>Hifz</strong><span>Personal Qur'an memorization and revision</span></Link><Link href={sitePath("/tajweed")}><strong>Tajweed</strong><span>Makharij, rules and corrected recitation</span></Link><Link href={sitePath("/nazra")}><strong>Nazra</strong><span>Foundational and fluent Qur'an reading</span></Link></div></article></section><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></main><Footer/></>;
}
