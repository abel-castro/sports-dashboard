import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    include: ["app/**/*.(spec|test).(ts|tsx)"],
    globals: true,
    environment: "jsdom",
    exclude: ["node_modules/", "dist/", "tests/"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "tests/",
        ".next/",
        "next-env.d.ts",
        "apollo-client.ts",
        "*.config.ts",
        "*.config.mjs",
        "**/layout.tsx",
      ],
    },
  },
});
