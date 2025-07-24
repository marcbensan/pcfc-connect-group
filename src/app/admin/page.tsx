import Admin from "@/components/admin";
import { getServerSession } from "next-auth";
import { getAllLeaders } from "../actions/leaders";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Login from "../login/_components/login";

export default async function PrivatePage() {
  const session = await getServerSession(authOptions);
  console.log("the session is", session);
  if (!session) {
    return <Login />;
  }

  const leaders = await getAllLeaders();

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-4xl font-subheading text-pcfcwhite">Admin Page</h1>
      <Admin leaders={leaders} />;
    </div>
  );
}
