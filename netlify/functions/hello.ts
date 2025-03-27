import type { Config, Context } from "@netlify/functions";

// eslint-disable-next-line @typescript-eslint/require-await
export default async function handler(_req: Request, _context: Context) {
  return new Response("Hello, world!");
}

export const config: Config = {
  path: "/api/hello",
};
