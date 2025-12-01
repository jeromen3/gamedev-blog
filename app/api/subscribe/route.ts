// app/api/subscribe/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { ok: false, error: "Email is required." },
        { status: 400 }
      );
    }

    // very basic email check
    const trimmed = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;
    if (!apiKey) {
      console.error("Missing BUTTONDOWN_API_KEY env var");
      return NextResponse.json(
        { ok: false, error: "Server misconfigured." },
        { status: 500 }
      );
    }

    // Buttondown subscribe endpoint
    const resp = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: trimmed,
        tags: ["site-signup"], // optional: tag people coming from this site
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Buttondown error:", resp.status, text);
      return NextResponse.json(
        { ok: false, error: "Failed to subscribe." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe API error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error." },
      { status: 500 }
    );
  }
}
