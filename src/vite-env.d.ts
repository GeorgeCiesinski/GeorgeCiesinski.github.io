/**
 * Vite client type extensions for this project.
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** StaticForms access key (see `.env.example`). */
  readonly VITE_STATICFORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
