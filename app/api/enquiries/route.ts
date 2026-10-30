import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json"))
      return NextResponse.json({ error: "JSON required." }, { status: 415 });
    const text = await request.text();
    if (text.length > 12000)
      return NextResponse.json(
        { error: "Your enquiry is too long." },
        { status: 413 },
      );
    const d = JSON.parse(text);
    if (d.companyFax) return NextResponse.json({ ok: true });
    const limits: Record<string, number> = {
      name: 100,
      email: 200,
      practice: 160,
      website: 300,
      interest: 100,
      goals: 2000,
    };
    const clean: Record<string, string> = {};
    for (const [key, max] of Object.entries(limits)) {
      if (d[key] !== undefined && typeof d[key] !== "string")
        return NextResponse.json(
          { error: "Please check your form details." },
          { status: 400 },
        );
      clean[key] = (d[key] || "").trim();
      if (clean[key].length > max)
        return NextResponse.json(
          { error: "Please shorten your " + key + "." },
          { status: 400 },
        );
    }
    if (
      !clean.name ||
      !clean.practice ||
      !clean.interest ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email) ||
      d.consent !== "on"
    )
      return NextResponse.json(
        { error: "Please complete the required fields and consent." },
        { status: 400 },
      );
    if (clean.website) {
      try {
        const url = new URL(clean.website);
        if (!["http:", "https:"].includes(url.protocol)) throw Error();
      } catch {
        return NextResponse.json(
          { error: "Please enter a valid website URL." },
          { status: 400 },
        );
      }
    }
    const dir =
      process.env.ENQUIRY_DATA_DIR || path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true, mode: 0o700 });
    await appendFile(
      path.join(dir, "enquiries.jsonl"),
      JSON.stringify({
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        ...clean,
        consent: true,
      }) + "\n",
      { mode: 0o600 },
    );
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "We couldn’t save your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
