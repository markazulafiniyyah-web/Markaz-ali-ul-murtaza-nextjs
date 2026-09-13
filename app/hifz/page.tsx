import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";
import { PROGRAM_PAGES } from "@/lib/program-pages";
const program=PROGRAM_PAGES.hifz;
export const metadata:Metadata={title:program.metaTitle,description:program.metaDescription,keywords:program.keywords,alternates:{canonical:"/hifz"},openGraph:{title:program.metaTitle,description:program.metaDescription,url:"/hifz",type:"website"},twitter:{card:"summary_large_image",title:program.metaTitle,description:program.metaDescription}};
export default function Page(){return <ProgramDetailPage program={program}/>}
