import type { Metadata } from "next";
import TermsPage from "@/components/TermsPage";

export const metadata:Metadata={
 title:"Terms, Policies & Key Terminology",
 description:"Read the terms of use, learning-service policies, privacy expectations, donation guidance and key Quran-education terminology for Markaz Al Murtaza Al Islami & Safia Islamic Institute.",
 alternates:{canonical:"/terms"},
 openGraph:{title:"Terms, Policies & Key Terminology",description:"Clear terms and policy highlights for students, families, teachers, donors and website visitors.",url:"/terms",type:"website"},
 twitter:{card:"summary",title:"Terms, Policies & Key Terminology",description:"Clear terms and policy highlights for students, families, teachers, donors and website visitors."}
};
export default function Page(){return <TermsPage/>}
