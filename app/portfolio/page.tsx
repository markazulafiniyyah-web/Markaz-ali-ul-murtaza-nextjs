import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";
import { I18N } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/localized-metadata";

export async function generateMetadata():Promise<Metadata>{return localizedMetadata("en","portfolio",I18N.en.t,true)}
export default function Page(){return <PortfolioPage language="en"/>}
