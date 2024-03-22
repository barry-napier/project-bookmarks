import { Button } from "./ui/button"
import { auth } from "@clerk/nextjs"
import { BookmarkIcon } from "lucide-react"
import Link from "next/link"

export function MarketingHeader() {
  const { userId } = auth()

  return (
    <header>
      <div className="flex items-center justify-between py-8">
        <Link
          href="\"
          className="flex items-center gap-1 text-foreground hover:text-accent-foreground"
        >
          <BookmarkIcon className="h-7 w-7" />
          <div className="flex text-xl font-semibold tracking-tight">
            Bookmarking.io
          </div>
        </Link>
        {userId ? (
          <div>
            <Link href="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
