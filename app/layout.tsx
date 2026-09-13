import "./globals.css";
import "@fontsource/amiri-quran/400.css";
import "@fontsource/noto-naskh-arabic/400.css";
import "@fontsource/noto-naskh-arabic/700.css";
import "@fontsource/noto-nastaliq-urdu/400.css";
import "@fontsource/noto-nastaliq-urdu/700.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { I18nProvider } from "@/components/I18nProvider";
export const metadata:Metadata={metadataBase:new URL("https://markazulmurtaza.vercel.app"),title:"Markaz ul Murtaza (may Allah be pleased with him) — Online Qur'anic Institute",description:"One-to-one online Qur'an classes in Hifz, Nazra and Tajweed.",icons:{icon:"/images/hero-art.svg"},verification:{google:"jEj58WOo1-4SvtQ5wwg3d-L3JJWoKwlYkrIDHbEidkE"}};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en" dir="ltr" suppressHydrationWarning><body><I18nProvider>{children}</I18nProvider></body></html>}
