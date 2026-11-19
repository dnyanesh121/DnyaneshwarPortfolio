import { NextResponse } from "next/server";
import { dbName, getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200);
  const subject = clean(payload.subject, 200);
  const message = clean(payload.message, 5000);

  if (!name || !EMAIL_RE.test(email) || !message) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name, email and message." },
      { status: 400 },
    );
  }

  const record = {
    name,
    email,
    subject: subject || "Portfolio enquiry",
    message,
    createdAt: new Date(),
  };

  const clientPromise = getMongoClient();

  if (!clientPromise) {
    // Demo mode: no database configured. The UI still gets a successful response.
    return NextResponse.json({
      ok: true,
      stored: false,
      note: "Message received. Add MONGODB_URI to persist messages.",
    });
  }

  try {
    const client = await clientPromise;
    await client.db(dbName).collection("messages").insertOne(record);
    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    console.error("Contact form database error:", error);
    return NextResponse.json(
      { ok: false, error: "Could not save your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
