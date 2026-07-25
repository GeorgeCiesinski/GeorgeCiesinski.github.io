/**
 * Vite + Vitest configuration for the portfolio app.
 */

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitest: node env; suite may be empty until tests are added.
  test: {
    environment: "node",
    passWithNoTests: true,
  },
});
