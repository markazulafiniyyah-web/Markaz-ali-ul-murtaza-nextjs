const configuredBase = import.meta.env.BASE_URL || "/";
export const BASE_PATH = configuredBase === "/" ? "" : configuredBase.replace(/\/$/, "");

export function sitePath(path: string): string {
  if (!path || path.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(path)) return path;
  if (!path.startsWith("/")) return path;
  if (BASE_PATH && (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`))) return path;
  return `${BASE_PATH}${path}` || "/";
}
