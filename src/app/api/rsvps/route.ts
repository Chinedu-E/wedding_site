import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseServer } from "@/lib/supabase-server";

const COOKIE_NAME = "admin_rsvp_authenticated";

export async function GET() {
  const cookieStore = await cookies();
  if (cookieStore.get(COOKIE_NAME)?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, error } = await getSupabaseServer()
      .from("rsvps")
      .select("id, code, name, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("RSVPs list error:", error);
      return NextResponse.json({ error: "Failed to load RSVPs" }, { status: 500 });
    }

    return NextResponse.json(data ?? []);
  } catch (err) {
    console.error("RSVPs list error:", err);
    return NextResponse.json({ error: "Failed to load RSVPs" }, { status: 500 });
  }
}
