import { redirect } from "next/navigation";

import Admin from "@/components/admin";
import { createClient } from "@/utils/supabase/server";
import { getAllLeaders } from "../actions/leaders";

export default async function PrivatePage() {
  const supabase = await createClient();
  const leaders = await getAllLeaders();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <Admin leaders={leaders} />;
}
