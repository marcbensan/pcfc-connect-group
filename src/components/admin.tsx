import { Leader } from "@/lib/models/leadersModel";
import { LeadersTable } from "./leaders-table";

export default function Admin({ leaders }: { leaders: Leader[] }) {
  return (
    <div className="min-h-screen">
      <LeadersTable data={leaders} />
    </div>
  );
}
