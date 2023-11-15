import { SignIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Page() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="grid place-content-center h-full">
      <SignIn />
    </div>
  );
}
