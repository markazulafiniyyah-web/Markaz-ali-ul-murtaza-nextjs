import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioPage from "@/components/PortfolioPage";
import { I18nProvider } from "@/components/I18nProvider";
import { I18N } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/localized-metadata";
import { interfaceDictionary } from "@/lib/ui-language";
type Params=Promise<{lang:string}>;
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const {lang}=await params;if(!I18N[lang])return {robots:{index:false}};return localizedMetadata(lang,"portfolio",interfaceDictionary(lang),true)}
export default async function LocalizedPortfolio({params}:{params:Params}){const {lang}=await params;if(!I18N[lang])notFound();const translations=interfaceDictionary(lang);return <I18nProvider initialLang={lang} translations={translations}><PortfolioPage language={lang}/></I18nProvider>}
