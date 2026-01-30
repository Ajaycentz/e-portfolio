import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, email, service, budget, message } = payload;

    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "data", "inquiries.json");
    const raw = await fs.readFile(filePath, "utf8").catch(() => "[]");
    const entries = JSON.parse(raw);

    const entry = {
      id: `${Date.now()}`,
      name,
      email,
      service,
      budget,
      message,
      createdAt: new Date().toISOString(),
    };

    entries.push(entry);
    await fs.writeFile(filePath, JSON.stringify(entries, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 }
    );
  }
}
