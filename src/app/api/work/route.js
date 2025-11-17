import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Work from "@/models/Work";

export async function GET() {
  try {
    await connectToDB();
    const items = await Work.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, items });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();

    const item = await Work.create(body);
    return NextResponse.json({ success: true, item });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
