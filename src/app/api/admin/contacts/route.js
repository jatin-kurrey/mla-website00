// src/app/api/admin/contacts/route.js
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET(req) {
  try {
    await connectToDB();
    const data = await Contact.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("API /api/admin/contacts error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
