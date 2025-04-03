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
    <div className="flex flex-col mt-4 mb-8">
      <PreviousPage />
      <div className="flex justify-center">
        <SignupForm leader={leaderSelected} />;
      </div>
    </div>
  );
}
