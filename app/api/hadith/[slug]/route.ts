import { NextRequest, NextResponse } from "next/server";
import { getBookPage } from "@/lib/hadith-repository";

export const runtime="nodejs";
export const dynamic="force-dynamic";

export async function GET(request:NextRequest,{params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const page=Math.max(1,Number(request.nextUrl.searchParams.get("page"))||1);const limit=Math.min(50,Math.max(1,Number(request.nextUrl.searchParams.get("limit"))||10));const q=(request.nextUrl.searchParams.get("q")||"").slice(0,200);const raw=request.nextUrl.searchParams.get("chapter");const chapter=raw!==null&&raw!==""?Number(raw):undefined;const result=await getBookPage(slug,page,limit,q,chapter);if(!result)return NextResponse.json({error:"Book not found"},{status:404});return NextResponse.json(result,{headers:{"cache-control":q?"public, s-maxage=300, stale-while-revalidate=3600":"public, s-maxage=86400, stale-while-revalidate=604800"}})
}
