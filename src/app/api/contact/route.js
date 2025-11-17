import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

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
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
