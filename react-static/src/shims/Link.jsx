import React from "react";
import { sitePath } from "@/lib/site-path";

export default function Link({href, children, ...props}) {
  const target = typeof href === "string" ? href : href?.pathname || "/";
  return <a href={sitePath(target)} {...props}>{children}</a>;
}
