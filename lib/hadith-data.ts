import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import { HADITH_BOOKS, type HadithData } from "./hadith";

export const getHadithBookData = cache(async (slug: string): Promise<HadithData | null> => {
  if (!HADITH_BOOKS.some((book) => book.slug === slug)) return null;
  const file = path.join(process.cwd(), "data", "hadith", `${slug}.json`);
  return JSON.parse(await readFile(file, "utf8")) as HadithData;
});
