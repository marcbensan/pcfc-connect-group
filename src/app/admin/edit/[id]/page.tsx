import { getLeader } from "@/app/actions/leaders";
import EditLeader from "@/components/edit-leader";

export default async function EditLeaderPage({ id }: { id: string }) {
  const leader = await getLeader(id);
  return <EditLeader leader={leader} />
}
