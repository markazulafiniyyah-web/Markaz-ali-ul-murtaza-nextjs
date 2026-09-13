import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DonatePage from "@/components/DonatePage";
import { I18nProvider } from "@/components/I18nProvider";
import { I18N } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/localized-metadata";
import { interfaceDictionary } from "@/lib/ui-language";
type Params=Promise<{lang:string}>;
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const {lang}=await params;if(!I18N[lang])return {robots:{index:false}};const translations=interfaceDictionary(lang);return localizedMetadata(lang,"donate",translations,true)}
export default async function LocalizedDonate({params}:{params:Params}){const {lang}=await params;if(!I18N[lang])notFound();const translations=interfaceDictionary(lang);return <I18nProvider initialLang={lang} translations={translations}><DonatePage language={lang}/></I18nProvider>}
