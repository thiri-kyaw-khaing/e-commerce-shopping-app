import { CreateAcc } from "@/components/auth/CreateAcc-form";
export default function CreateAccPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <CreateAcc />
      </div>
    </div>
  );
}
