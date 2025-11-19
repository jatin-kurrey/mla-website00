import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Work from "@/models/Work";

// Prevent caching
export const dynamic = 'force-dynamic';

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

export async function DELETE(req) {
  try {
    await connectToDB();
    const id = req.nextUrl.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
    }

    const deletedWork = await Work.findByIdAndDelete(id);
    
    if (!deletedWork) {
        return NextResponse.json({ success: false, error: "Work item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Work item deleted successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
