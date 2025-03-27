import type { Config, Context } from "@netlify/functions";
import { env } from "~/env";

// eslint-disable-next-line @typescript-eslint/require-await
export default async function handler(_req: Request, _context: Context) {
  const e = env.NODE_ENV;
  console.log(e);
  return new Response("Hello, world!");
}

export const config: Config = {
  path: "/api/hello",
};
