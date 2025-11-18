import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Work from "@/models/Work";

export async function GET() {
  try {
    await connectToDB();
    const items = await Work.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      items,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();

    // Remove incorrect incoming IDs
    delete body._id;
    delete body.id;

    const { title, description, imageUrl, link } = body;

    if (!title || !description || !imageUrl) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const item = await Work.create({
      title,
      description,
      imageUrl,
      link: link || "",
    });

    return NextResponse.json(
      { success: true, item },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
