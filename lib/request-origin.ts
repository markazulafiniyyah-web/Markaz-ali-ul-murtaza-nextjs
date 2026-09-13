/** Resolve the public origin seen by the browser/proxy without hard-coding a domain. */
export function requestOrigin(request: Request) {
  return originFromHeaders(request.headers, new URL(request.url).protocol);
}

export function originFromHeaders(headers: Headers, fallbackProtocol = "https:") {
  const forwardedHost = headers.get("x-forwarded-host")?.split(",")[0].trim();
  const host = forwardedHost || headers.get("host")?.trim();
  const forwardedProtocol = headers.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProtocol || fallbackProtocol.replace(":", "") || "https";
  if (!host || !/^[a-z0-9.:[\]-]+$/i.test(host)) return "https://markazalimurtaza.com";
  return `${protocol}://${host}`;
}
