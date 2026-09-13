import type { Metadata } from "next";
import DonatePage from "@/components/DonatePage";
import { I18N } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/localized-metadata";

export async function generateMetadata():Promise<Metadata>{
 return localizedMetadata("en","donate",I18N.en.t,true);
}
export default function Page(){return <DonatePage language="en"/>}
