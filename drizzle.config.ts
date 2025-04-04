import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: env.DATABASE_URL ?? "hi",
    authToken: env.DATABASE_AUTH_TOKEN ?? "hi",
  },
} satisfies Config;
