import { auth, SignUp } from "@clerk/nextjs"
import { redirect } from "next/navigation"

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
