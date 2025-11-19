import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

// Added this to prevent caching and ensure fresh data is fetched every time.
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectToDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    console.error("API GET /api/contact Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch contacts." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    await connectToDB();

    const created = await Contact.create(body);

    return NextResponse.json(
      { success: true, data: created },
      { status: 201 }
    );

  } catch (error) {
    console.error("API POST /api/contact Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
