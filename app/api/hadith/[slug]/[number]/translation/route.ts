import { NextRequest, NextResponse } from "next/server";
import { getHadith } from "@/lib/hadith-repository";
import { getTranslation } from "@/lib/translation-server";
import { HADITH_TRANSLATION_LANGUAGES } from "@/lib/hadith";

export const runtime="nodejs";
export const dynamic="force-dynamic";

export async function GET(request:NextRequest,{params}:{params:Promise<{slug:string;number:string}>}){
 const {slug,number:raw}=await params;
 const number=Number(raw);
 const language=request.nextUrl.searchParams.get("lang")||"en";
 if(!(HADITH_TRANSLATION_LANGUAGES as readonly string[]).includes(language))return NextResponse.json({error:"Unsupported Hadith translation language"},{status:400});
 if(!Number.isInteger(number))return NextResponse.json({error:"Invalid Hadith number"},{status:400});
 const record=await getHadith(slug,number);
 if(!record)return NextResponse.json({error:"Hadith not found"},{status:404});
 const result=await getTranslation(record.hadith.id,record.hadith.english.text,language);
 return NextResponse.json({...result,language},{headers:{"cache-control":result.provider==="fallback"?"no-store":"public, s-maxage=31536000, immutable"}});
}
