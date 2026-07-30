/**
 * Vite + Vitest configuration for the portfolio app.
 */

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitest: Node environment for serverless API unit tests (e.g. api/contact.test.ts).
  test: {
    environment: "node",
    passWithNoTests: true,
  },
});
