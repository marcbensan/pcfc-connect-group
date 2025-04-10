import { Unauthorized } from "@/components/unauthorized";

export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Unauthorized />
    </div>
  );
}
