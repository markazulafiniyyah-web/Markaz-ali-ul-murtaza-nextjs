import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { HADITH_SLUGS } from "@/lib/hadith";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function generateStaticParams() {
  return HADITH_SLUGS.map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!HADITH_SLUGS.includes(slug)) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }
  const file = path.join(process.cwd(), "data", "hadith", `${slug}.json`);
  const contents = await readFile(file, "utf8");
  return new NextResponse(contents, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=31536000, immutable"
    }
  });
}
