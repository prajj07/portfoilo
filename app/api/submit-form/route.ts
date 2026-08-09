import { NextRequest, NextResponse } from "next/server";

function readString(value: FormDataEntryValue | null, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = readString(formData.get("name"), 120);
  const email = readString(formData.get("email"), 200);
  const subject = readString(formData.get("subject"), 200);
  const message = readString(formData.get("message"), 4000);

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Invalid form data" },
      { status: 400 }
    );
  }

  const response = await fetch("https://formspree.io/f/xldbdejl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email, subject, message }),
  });

  if (response.ok) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 500 });
}
