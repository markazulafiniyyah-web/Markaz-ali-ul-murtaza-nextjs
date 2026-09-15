"use client";
import Link from "next/link";
import { Footer, Header } from "./SiteChrome";
import { ENROLL_WHATSAPP_URL } from "@/lib/contact";

type Program={
 slug:"hifz"|"nazra"|"tajweed";
 kicker:string;title:string;arabic:string;intro:string;description:string;
 benefits:string[];audience:string;method:string;
};
export default function ProgramDetailPage({program}:{program:Program}){
 return <><Header dark/><main>
  <section className={`course-hero course-${program.slug}`}><div><p className="kicker gold">{program.kicker}</p><p className="course-ar" lang="ar" dir="rtl">{program.arabic}</p><h1>{program.title}</h1><p className="course-intro">{program.intro}</p><div className="hero-ctas"><a className="btn btn-light" href={ENROLL_WHATSAPP_URL} target="_blank" rel="noopener">Start a free trial</a><Link className="btn btn-outline-light" href="/#programs">View all programs</Link></div></div></section>
  <section className="course-content"><div className="course-main"><p className="kicker">Program overview</p><h2>Learn with personal guidance.</h2><p>{program.description}</p><h3>What you will develop</h3><ul>{program.benefits.map(item=><li key={item}>{item}</li>)}</ul>{program.slug!=="nazra"&&<p className="combined-course-link">Want to combine memorization with accurate recitation? <Link href="/online-hifz-tajweed-institute">Explore our online Hifz and Tajweed institute.</Link></p>}</div><aside className="course-aside"><div><span>Suitable for</span><strong>{program.audience}</strong></div><div><span>Class method</span><strong>{program.method}</strong></div><div><span>Teaching format</span><strong>One-to-one live online classes</strong></div><a className="btn btn-primary" href={ENROLL_WHATSAPP_URL} target="_blank" rel="noopener">Contact the institute</a></aside></section>
 </main><Footer/></>;
}
