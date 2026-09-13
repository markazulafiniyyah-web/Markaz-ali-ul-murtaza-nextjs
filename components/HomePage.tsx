"use client";
import { Footer, Header } from "./SiteChrome";
import ExactHomeContent from "./ExactHomeContent";
export default function HomePage({language="en"}:{language?:string}){return <><Header forcedLanguage={language}/><ExactHomeContent/><Footer forcedLanguage={language}/></>}
