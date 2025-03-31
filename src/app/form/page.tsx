import PreviousPage from "@/components/previous-page";
import SignupForm from "@/components/signup-form";

export default function SignUpFormPage() {
  return (
    <div className="flex flex-col my-4 md:px-52">
      <PreviousPage />
      <div className="flex justify-center">
        <SignupForm />;
      </div>
    </div>
  );
}
