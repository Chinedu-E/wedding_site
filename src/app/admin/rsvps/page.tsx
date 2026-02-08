import { cookies } from "next/headers";
import { getSupabaseServer } from "@/lib/supabase-server";
import { AdminPasswordForm } from "./AdminPasswordForm";
import { AdminRsvpList } from "./AdminRsvpList";

const COOKIE_NAME = "admin_rsvp_authenticated";

export default async function AdminRsvpsPage() {
  const cookieStore = await cookies();
  const authenticated = cookieStore.get(COOKIE_NAME)?.value === "true";

  if (!authenticated) {
    return <AdminPasswordForm />;
  }

  let rows: { id: number; code: string; name: string; created_at: string }[] = [];
  try {
    const { data, error } = await getSupabaseServer()
      .from("rsvps")
      .select("id, code, name, created_at")
      .order("created_at", { ascending: false });

    if (!error && data) rows = data as typeof rows;
  } catch {
    // Table may not exist yet or env missing
  }

  return <AdminRsvpList initialRows={rows} />;
}
