import { NextResponse } from "next/server";
import { getNameForCode, isValidCode } from "@/lib/invite-codes";
import { getSupabaseServer } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const code = typeof body?.code === "string" ? body.code.trim().toLowerCase() : null;

    if (!code || !isValidCode(code)) {
      return NextResponse.json({ error: "Invalid invite code" }, { status: 400 });
    }

    const name = getNameForCode(code);
    if (!name) {
      return NextResponse.json({ error: "Invalid invite code" }, { status: 400 });
    }

    const { error } = await getSupabaseServer()
      .from("rsvps")
      .upsert({ code, name }, { onConflict: "code" });

    if (error) {
      console.error("RSVP insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("RSVP API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
