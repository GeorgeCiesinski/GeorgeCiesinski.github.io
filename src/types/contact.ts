/**
 * JSON body for POST `/api/contact` (form fields + honeypot).
 */
export type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
  /** Honeypot — if non-empty, the API returns success and does not send email. */
  note?: string;
};
