import Link from "next/link"
import { BookmarkIcon } from "lucide-react"

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-between py-8">
        <Link
          href="\"
          className="flex items-center gap-1 text-foreground hover:text-foreground"
        >
          <BookmarkIcon className="h-7 w-7" />
          <div className="flex text-xl font-semibold tracking-tight">
            Bookmarking.io
          </div>
        </Link>
      </div>
    </header>
  )
}
