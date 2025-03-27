import type { Config, Context } from "@netlify/functions";
import { env } from "~/env";

export default function handler(_req: Request, _context: Context) {
  const e = env.NODE_ENV;
  if (e === "development") {
    return new Response("Hello, development!");
  } else if (e === "test") {
    return new Response("Hello, test!");
  } else if (e === "production") {
    return new Response("Hello, production!");
  }
  return new Response("Hello, world!");
}

export const config: Config = {
  path: "/api/hello",
};
