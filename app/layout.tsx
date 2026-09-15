import "./globals.css";
import "@fontsource/amiri-quran/400.css";
import "@fontsource/noto-naskh-arabic/400.css";
import "@fontsource/noto-naskh-arabic/700.css";
import "@fontsource/noto-nastaliq-urdu/400.css";
import "@fontsource/noto-nastaliq-urdu/700.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { I18nProvider } from "@/components/I18nProvider";

const SITE_NAME="Markaz Al Murtaza Al Islami & Safia Islamic Institute";
const SITE_URL="https://markazulmurtaza.vercel.app";
export const metadata:Metadata={
 metadataBase:new URL(SITE_URL),
 applicationName:SITE_NAME,
 title:"Online Quran Classes | Markaz Al Murtaza Al Islami",
 description:"Learn Qur'an online with one-to-one Hifz, Nazra and Tajweed classes taught by experienced Qaris for children and adults worldwide.",
 keywords:["Markaz Al Murtaza Al Islami","Safia Islamic Institute","مرکز المرتضٰی الاسلامی","صفیہ اسلامک انسٹیٹیوٹ","online Quran teacher","online Quran classes","learn Quran online","online Quran academy","online Hifz and Tajweed institute","Hifz with Tajweed online","Quran tutor online","one to one Quran classes","Quran institute online","Hifz teacher online","online Hifz classes","Nazra Quran classes online","online Tajweed teacher","Tajweed classes online","Quran classes for kids","Quran classes for adults","Noorani Qaida online","Jamia Riaz ul Jannah","Masjid Riaz ul Jannah","Riaz ul Jannah Lahore","Qari Ahmed Azizi","Quran teacher Lahore","Quran institute Lahore"],
 openGraph:{siteName:SITE_NAME,type:"website",url:SITE_URL},
 icons:{icon:[{url:"/favicon.ico",type:"image/x-icon",sizes:"48x48"},{url:"/icon.svg",type:"image/svg+xml",sizes:"any"}],shortcut:"/favicon.ico",apple:"/apple-icon.png"},
 verification:{google:"jEj58WOo1-4SvtQ5wwg3d-L3JJWoKwlYkrIDHbEidkE"}
};
const websiteSchema={"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":`${SITE_URL}/#website`,url:SITE_URL,name:SITE_NAME,alternateName:"مرکز المرتضٰی الاسلامی و صفیہ اسلامک انسٹیٹیوٹ",publisher:{"@id":`${SITE_URL}/#organization`}},{"@type":"EducationalOrganization","@id":`${SITE_URL}/#organization`,name:SITE_NAME,alternateName:"مرکز المرتضٰی الاسلامی و صفیہ اسلامک انسٹیٹیوٹ",url:SITE_URL,logo:`${SITE_URL}/icon.svg`} ]};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en" dir="ltr" suppressHydrationWarning><body><I18nProvider>{children}</I18nProvider><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteSchema)}}/></body></html>}
