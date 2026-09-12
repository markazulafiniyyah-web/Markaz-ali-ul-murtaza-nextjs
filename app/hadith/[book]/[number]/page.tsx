import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HadithTranslation from "@/components/HadithTranslation";
import { Footer, Header } from "@/components/SiteChrome";
import { HADITH_BOOKS } from "@/lib/hadith";
import { getHadithBookData } from "@/lib/hadith-data";

export const revalidate = 86400;
type Params = Promise<{ book: string; number: string }>;

async function resolve(params: Params) {
  const { book: slug, number } = await params;
  const book = HADITH_BOOKS.find(item => item.slug === slug);
  const data = book ? await getHadithBookData(slug) : null;
  const numeric = Number(number);
  const hadith = data?.hadiths.find(item => item.idInBook === numeric);
  const chapter = hadith ? data?.chapters.find(item => item.id === hadith.chapterId) : null;
  return { book, data, hadith, chapter, numeric };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { book, hadith, chapter, numeric } = await resolve(params);
  if (!book || !hadith) return { title: "Hadith not found" };
  const title = `${book.english} ${numeric} — Arabic & English | Markaz ul Murtaza`;
  const description = hadith.english.text.replace(/\s+/g," ").slice(0,155);
  const canonical = `/hadith/${book.slug}/${numeric}`;
  return { title, description, alternates:{canonical}, openGraph:{type:"article",title,description,url:canonical}, twitter:{card:"summary",title,description} };
}

export default async function IndividualHadithPage({ params }: { params: Params }) {
  const { book, data, hadith, chapter, numeric } = await resolve(params);
  if (!book || !data || !hadith) notFound();
  const index = data.hadiths.findIndex(item => item.id === hadith.id);
  const previous = index > 0 ? data.hadiths[index-1] : null;
  const next = index < data.hadiths.length-1 ? data.hadiths[index+1] : null;
  const canonical=`https://markazalimurtaza.com/hadith/${book.slug}/${numeric}`;
  const schema={"@context":"https://schema.org","@type":"Article",headline:`${book.english} ${numeric}`,description:hadith.english.text.slice(0,200),url:canonical,inLanguage:["ar","en"],isPartOf:{"@type":"Book",name:book.english,alternateName:book.arabic},publisher:{"@type":"EducationalOrganization",name:"Markaz ul Murtaza",url:"https://markazalimurtaza.com"},articleBody:`${hadith.arabic}\n\n${hadith.english.text}`};
  return <><Header dark active="hadith"/><main className="seo-hadith-page"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Markaz ul Murtaza</Link><span>›</span><Link href="/hadith">Hadith Library</Link><span>›</span><Link href={`/hadith#book=${book.slug}`}>{book.english}</Link><span>›</span><span>{numeric}</span></nav><article className="seo-hadith"><header><p className="kicker">{chapter?.english||book.english}</p><h1>{book.english} {numeric}</h1><p className="book-ar" lang="ar" dir="rtl">{book.arabic}{chapter?.arabic?` — ${chapter.arabic}`:""}</p></header>{hadith.english.narrator&&<p className="had-narr">{hadith.english.narrator}</p>}<p className="had-ar" lang="ar" dir="rtl">{hadith.arabic}</p><div className="seo-english"><h2>English translation</h2><p>{hadith.english.text}</p></div><HadithTranslation text={hadith.english.text} id={hadith.id}/><nav className="hadith-prev-next">{previous?<Link href={`/hadith/${book.slug}/${previous.idInBook}`}>‹ {book.english} {previous.idInBook}</Link>:<span/>}{next&&<Link href={`/hadith/${book.slug}/${next.idInBook}`}>{book.english} {next.idInBook} ›</Link>}</nav></article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></main><Footer/></>;
}
