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

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-4xl font-subheading text-pcfcwhite">Admin Page</h1>
      <Admin leaders={leaders} />;
    </div>
  );
}
