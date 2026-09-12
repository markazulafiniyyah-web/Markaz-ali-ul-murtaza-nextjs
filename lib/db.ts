import postgres from "postgres";

const url = process.env.DATABASE_URL;
export const db = url ? postgres(url, { prepare: false, max: 10, idle_timeout: 20 }) : null;
