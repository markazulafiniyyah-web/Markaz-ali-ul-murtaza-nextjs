import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { I18nProvider } from "@/components/I18nProvider";
export const metadata:Metadata={metadataBase:new URL("https://markazalimurtaza.com"),title:"Markaz Ali ul Murtaza — Online Qur'anic Institute",description:"One-to-one online Qur'an classes in Hifz, Tajweed, Qira'at, Tarjuma and Tafseer.",icons:{icon:"/images/hero-art.svg"}};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en" dir="ltr" suppressHydrationWarning><body><I18nProvider>{children}</I18nProvider></body></html>}
