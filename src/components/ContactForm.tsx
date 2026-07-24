import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const STATICFORMS_URL = "https://api.staticforms.xyz/submit";

export function ContactForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const accessKey = import.meta.env.VITE_STATICFORMS_ACCESS_KEY as
    string | undefined;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!accessKey) {
      setError(
        "Contact form is not configured. Set VITE_STATICFORMS_ACCESS_KEY.",
      );
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("accessKey", accessKey);
    data.set("subject", "Contact from portfolio");
    data.set("replyTo", "@");

    setSubmitting(true);
    try {
      const response = await fetch(STATICFORMS_URL, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      navigate("/success");
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input
          className="form__input"
          id="name"
          name="name"
          type="text"
          placeholder="John Smith"
          required
          autoComplete="name"
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          id="email"
          name="email"
          type="email"
          placeholder="example@example.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form__textarea"
          id="message"
          name="message"
          rows={4}
          placeholder="Hey, how's it going?"
          required
        />
      </div>

      <input
        className="form__honeypot"
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
      />

      {error ? <p className="form__error">{error}</p> : null}

      <div className="form__actions">
        <button
          className="btn btn--primary"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
