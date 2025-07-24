import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";

export async function POST(req) {
  try {
    // Log the raw request details
    console.log("=== REQUEST DEBUG START ===");
    console.log("Request method:", req.method);
    console.log("Request headers:", Object.fromEntries(req.headers.entries()));
    console.log("Content-Type:", req.headers.get("content-type"));

    // Try to parse the body
    let body;
    try {
      body = await req.json();
      console.log("Successfully parsed JSON body:", body);
      console.log("Body type:", typeof body);
      console.log("Body keys:", Object.keys(body || {}));
      console.log("Body.name:", body?.name);
      console.log("Body.name type:", typeof body?.name);
      console.log("Body.name length:", body?.name?.length);
      console.log("Body.name truthy:", !!body?.name);
    } catch (parseError) {
      console.error("Failed to parse JSON:", parseError);
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    console.log("=== REQUEST DEBUG END ===");

    // Check if name exists and is not empty
    if (!body || !body.name || body.name.trim() === "") {
      console.log("Name validation failed - body:", body);
      return NextResponse.json(
        { error: "Board name is required" },
        { status: 400 }
      );
    }

    let session;
    try {
      session = await auth();
    } catch (authError) {
      console.error("Auth error:", authError);
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: 401 }
      );
    }

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Not authorised" }, { status: 401 });
    }

    await connectMongo();
    console.log("Mongo connected");

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }


    const board = await Board.create({
      userId: user._id,
      name: body.name.trim(), // Trim whitespace
    });

    user.boards.push(board._id);
    await user.save();

    return NextResponse.json({
      message: "Board created successfully",
      board: { id: board._id, name: board.name },
    });
  } catch (e) {
    console.error("Error creating board:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    if (!boardId) {
      return NextResponse.json(
        { error: "boardId is required" },
        { status: 400 }
      );
    }

    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Not authorised" }, { status: 401 });
    }

    await connectMongo();

    await Board.deleteOne({
      _id: boardId,
      userId: session?.user?.id,
    });

    const user = await User.findById(session?.user?.id);
    if (user) {
      user.boards = user.boards.filter((id) => id.toString() !== boardId);
      await user.save();
    }

    return NextResponse.json({});
  } catch (e) {
    console.error("Error deleting board:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
