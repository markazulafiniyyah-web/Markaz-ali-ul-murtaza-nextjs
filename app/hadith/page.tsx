import type { Metadata } from "next";
import HadithPage from "@/components/HadithPage";
import { I18N } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/localized-metadata";

export async function generateMetadata():Promise<Metadata>{
 return localizedMetadata("en","hadith",I18N.en.t,true);
}
export default function Page(){return <HadithPage language="en"/>}
