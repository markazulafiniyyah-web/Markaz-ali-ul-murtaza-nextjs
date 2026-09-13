import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { I18N } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/localized-metadata";

export async function generateMetadata():Promise<Metadata>{
 return localizedMetadata("en","home",I18N.en.t,true);
}
export default function Page(){return <HomePage language="en"/>}
