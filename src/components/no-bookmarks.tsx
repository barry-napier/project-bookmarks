import { Button } from "./ui/button"
import { BookmarkIcon } from "lucide-react"
import Link from "next/link"

export function NoBookmarks() {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed p-8 py-40">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <BookmarkIcon className="h-8 w-8" />
      </div>
      <div className="mt-6 flex py-2 text-xl font-semibold">
        No Bookmarks Created
      </div>
      <div className="flex text-sm text-muted-foreground">
        You don&apos;t have any bookmarks yet.
      </div>
      <div className="flex text-sm text-muted-foreground">
        <Link href="/bookmarks/new">
          <Button className="mt-8" type="submit" size="lg">
            Create Bookmark
          </Button>
        </Link>
      </div>
    </div>
  )
}
