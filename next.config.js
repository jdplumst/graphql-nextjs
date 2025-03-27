/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  async headers() {
    return Promise.resolve([
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Netlify-CDN-Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ]);
  },

  // Ensure proper handling of Next.js pages
  output: "standalone",
  poweredByHeader: false,
};

export default config;
