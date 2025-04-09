import PreviousPage from "@/components/previous-page";
import SignupForm from "@/components/signup-form";
import { getLeader } from "../actions/leaders";

export default async function SignUpFormPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { leader } = await searchParams;
  const leaderId = leader ?? undefined;

  const leaderSelected = await getLeader(leaderId);
  return (
    <div className="flex flex-col my-4">
      <PreviousPage />
      <SignupForm leader={leaderSelected} />;
    </div>
  );
}
