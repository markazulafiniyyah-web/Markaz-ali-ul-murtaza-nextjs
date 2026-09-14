import "./globals.css";
import "@fontsource/amiri-quran/400.css";
import "@fontsource/noto-naskh-arabic/400.css";
import "@fontsource/noto-naskh-arabic/700.css";
import "@fontsource/noto-nastaliq-urdu/400.css";
import "@fontsource/noto-nastaliq-urdu/700.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { I18nProvider } from "@/components/I18nProvider";
export const metadata:Metadata={metadataBase:new URL("https://markazulmurtaza.vercel.app"),title:"Markaz ul Murtaza (may Allah be pleased with him) — Online Qur'anic Institute",description:"Learn Qur'an online with one-to-one Hifz, Nazra and Tajweed classes taught by experienced Qaris for children and adults worldwide.",keywords:["online Quran teacher","online Quran classes","Quran institute online","Hifz teacher online","online Hifz classes","Nazra Quran classes online","online Tajweed teacher","Tajweed classes online","Quran classes for kids","Quran classes for adults","Noorani Qaida online","learn Quran online"],icons:{icon:[{url:"/favicon.ico",type:"image/x-icon",sizes:"48x48"},{url:"/icon.svg",type:"image/svg+xml",sizes:"any"}],shortcut:"/favicon.ico",apple:"/apple-icon.png"},verification:{google:"jEj58WOo1-4SvtQ5wwg3d-L3JJWoKwlYkrIDHbEidkE"}};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en" dir="ltr" suppressHydrationWarning><body><I18nProvider>{children}</I18nProvider></body></html>}
