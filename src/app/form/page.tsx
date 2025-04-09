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
    <div className="flex mx-4 justify-center items-center my-4 mb-12">
      <SignupForm leader={leaderSelected} />
    </div>
  );
}
