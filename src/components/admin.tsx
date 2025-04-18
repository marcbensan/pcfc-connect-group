import { Leader } from "@/lib/models/leadersModel";
import { LeadersTable } from "./leaders-table";

export default function Admin({leaders}: {leaders: Leader[]}) {
  return (
    <div className="min-h-screen px-8 bg-pcfcwhite">
      <LeadersTable data={leaders} />
    </div>
  );
}
