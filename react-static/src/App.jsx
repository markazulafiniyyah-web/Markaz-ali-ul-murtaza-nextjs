import React from "react";
import { I18nProvider } from "@/components/I18nProvider";
import HomePage from "@/components/HomePage";
import DonatePage from "@/components/DonatePage";
import PortfolioPage from "@/components/PortfolioPage";
import TermsPage from "@/components/TermsPage";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { PROGRAM_PAGES } from "@/lib/program-pages";
import OnlineQuranClasses from "@/pages/online-quran-classes";
import OnlineHifzTajweed from "@/pages/online-hifz-tajweed-institute";
import JamiaRiazUlJannah from "@/pages/jamia-riaz-ul-jannah";
import { BASE_PATH } from "@/lib/site-path";
import Seo from "./Seo";

export const LANGUAGE_CODES = ["en","ar","ur","fa","ps","sd","ks","pa","tr","az","kk","uz","id","ms","bn","hi","ta","so","sw","ha","am","fr","es","de","it","pt","ru","zh","ja","ko"];

export function routeFromPath(pathname = "/") {
  const localPath = BASE_PATH && pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) || "/" : pathname;
  const parts = localPath.split("/").filter(Boolean);
  if (parts.length && LANGUAGE_CODES.includes(parts[0])) parts.shift();
  return parts[0] || "home";
}

export function languageFromPath(pathname = "/") {
  const localPath = BASE_PATH && pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) || "/" : pathname;
  const code = localPath.split("/").filter(Boolean)[0];
  return LANGUAGE_CODES.includes(code) ? code : "en";
}

function Route({ page, language }) {
  if (page === "home") return <HomePage language={language} />;
  if (page === "donate") return <DonatePage language={language} />;
  if (page === "portfolio") return <PortfolioPage language={language} />;
  if (page === "terms") return <TermsPage />;
  if (PROGRAM_PAGES[page]) return <ProgramDetailPage program={PROGRAM_PAGES[page]} />;
  if (page === "online-quran-classes") return <OnlineQuranClasses />;
  if (page === "online-hifz-tajweed-institute") return <OnlineHifzTajweed />;
  if (page === "jamia-riaz-ul-jannah") return <JamiaRiazUlJannah />;
  return <HomePage language={language} />;
}

export default function App({ initialPage = "home", initialLang = "en", seo = {} }) {
  return (
    <>
      <Seo seo={seo} language={initialLang} />
      <I18nProvider initialLang={initialLang}>
        <Route page={initialPage} language={initialLang} />
      </I18nProvider>
    </>
  );
}
