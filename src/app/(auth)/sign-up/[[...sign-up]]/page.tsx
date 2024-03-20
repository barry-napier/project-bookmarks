import { redirect } from "next/navigation"
import { auth, SignUp } from "@clerk/nextjs"

export default function Page() {
  const { userId } = auth()

  if (userId) {
    redirect("/dashboard")
  }

  return (
    <div className="grid h-full place-content-center">
      <SignUp />
    </div>
  )
}
