import { BookmarkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function NoBookmarks() {
  return (
    <div className="flex flex-col border-dashed border-2 py-40 p-8 items-center justify-center">
      <div className="flex w-20 h-20 bg-muted items-center justify-center rounded-full">
        <BookmarkIcon className="w-8 h-8" />
      </div>
      <div className="flex py-2 text-xl font-semibold mt-6">
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
  );
}
