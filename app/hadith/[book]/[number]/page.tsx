import { redirect } from "next/navigation";
export default async function LegacyHadithRoute({params}:{params:Promise<{book:string;number:string}>}){const {book,number}=await params;redirect(`/en/hadith/${book}/${number}`)}
