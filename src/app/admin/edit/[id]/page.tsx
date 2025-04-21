import { getLeader } from "@/app/actions/leaders";
import EditLeader from "@/components/edit-leader";

export default async function EditLeaderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const leader = await getLeader(id);

  return (
    <div className="m-8 md:flex md:items-center md:justify-center">
      <EditLeader leader={leader} />;
    </div>
  );
}
