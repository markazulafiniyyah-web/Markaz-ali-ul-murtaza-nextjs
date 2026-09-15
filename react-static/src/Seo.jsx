import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_SITE = "https://markazulmurtaza.vercel.app";
const DEFAULT_TITLE = "Online Quran Classes | Markaz Al Murtaza Al Islami";
const DEFAULT_DESCRIPTION = "Learn Quran online in one-to-one Hifz, Nazra and Tajweed classes for kids and adults with flexible guidance from experienced Quran teachers.";

export default function Seo({ seo = {}, language = "en" }) {
  const title = seo.title || DEFAULT_TITLE;
  const description = seo.description || DEFAULT_DESCRIPTION;
  const canonical = seo.canonical || DEFAULT_SITE;
  const image = seo.image || `${DEFAULT_SITE}/images/institute-wide-front.webp`;
  const keywords = seo.keywords || "online Quran classes, online Quran teacher, Hifz classes, Tajweed classes, Nazra Quran";
  const alternates = seo.alternates || [];
  const schema = seo.schema;

  return (
    <Helmet prioritizeSeoTags>
      <html lang={language} dir={seo.rtl ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="_q807GXRP-gCiqkhvucD9BQuZj-JY9z3kDJ0acxWjWE" />
      <link rel="canonical" href={canonical} />
      {alternates.map(({ language: code, href }) => (
        <link rel="alternate" hrefLang={code} href={href} key={`${code}-${href}`} />
      ))}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Markaz Al Murtaza Al Islami & Safia Islamic Institute" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}
