import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// GET /api/hello
export async function GET() {
  return NextResponse.json({ message: "Hello from API route!" });
}

// POST /api/hello
const bodySchema = z.object({
  name: z.string().min(1, "name là bắt buộc"),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = bodySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name } = parsed.data;
    return NextResponse.json({ message: `Xin chào, ${name}!` });
  } catch (error) {
    return NextResponse.json(
      { error: "Request body không hợp lệ" },
      { status: 400 },
    );
  }
}
