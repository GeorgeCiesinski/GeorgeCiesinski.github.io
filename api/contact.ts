import { type ContactRequest } from '../src/types/contact';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.EMAIL_ADDRESS;

type ContactApiRequest = {
  method?: string;
  body?: ContactRequest | string;
}

type ContactApiResponse = {
  status: (code: number) => ContactApiResponse;
  json: (body: unknown) => ContactApiResponse;
}

function validateEmail(email:string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function escapeHtml(value: string): string{
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default async function handler(req: ContactApiRequest, res: ContactApiResponse) {
  let body: ContactRequest;
  try {
    const raw = req.body;
    body = typeof raw === "string" ? JSON.parse(raw) : (raw ?? {});
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body'});
  }

  const { name, email, message, note } = body;

  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  if (note) {
    return res.status(200).json({answer: 'Message sent successfully'});
  }

  if (!email || !validateEmail(email)) {
    return res.status(400).json({error: 'Invalid email structure'});
  }

  if (!name?.trim()) {
    return res.status(400).json({error: 'Name is empty'});
  }

  if (!message?.trim()) {
    return res.status(400).json({error: 'Message is empty'});
  }

  if (!myEmail) {
    return res.status(500).json({error: 'Configuration problem on server'});
  }

  const htmlContent = 
    `Name: ${escapeHtml(name)}<br>` +
    `Email: ${escapeHtml(email)}<br>` +
    `Message: ${escapeHtml(message)}`;  

  try {
    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: myEmail,
      replyTo: email,
      subject: `Contact from portfolio — ${name}`,
      html: htmlContent,
    });

    if (response.error) {
      console.error("Resend error:", response.error);
      return res.status(500).json({error: 'Failed to send message'});
    }
    return res.status(200).json({answer: 'Message sent successfully'});
  } catch(error) {
    console.error("Contact handler error:", error);
    return res.status(500).json({error: 'Unknown error'});
  }
}
