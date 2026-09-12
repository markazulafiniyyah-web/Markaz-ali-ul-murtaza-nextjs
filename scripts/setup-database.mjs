import postgres from "postgres";
import { readFile } from "node:fs/promises";
if(!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
const sql=postgres(process.env.DATABASE_URL,{prepare:false});
await sql.unsafe(await readFile(new URL("../database/schema.sql",import.meta.url),"utf8"));
await sql.end(); console.log("Database schema ready");
