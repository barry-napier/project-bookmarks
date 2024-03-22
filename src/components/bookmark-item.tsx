import { DeleteBookmark } from "./delete-bookmark"
import { Button } from "./ui/button"
import { Bookmark } from "@prisma/client"
import { EditIcon } from "lucide-react"
import { useRouter } from "next/navigation"

type BookmarkListProps = {
  bookmark: Bookmark
}

export function BookmarkItem({ bookmark }: Readonly<BookmarkListProps>) {
  const router = useRouter()
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-2">
        {bookmark.favicon ? (
          <img
            className="h-8 w-8 rounded-full bg-primary-foreground object-cover"
            src={bookmark.favicon}
            alt="Favicon"
            loading="lazy"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-pink-400"></div>
        )}
        <div className="flex flex-col">
          <div className="flex aria-selected:font-medium">{bookmark.title}</div>
          <div className="w-48 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-muted-foreground md:w-[500px] lg:w-auto">
            {bookmark.url}
          </div>
        </div>
      </div>
      <div className="hidden h-4 items-center gap-2 group-aria-selected:flex">
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation()
            router.push(`/bookmarks/edit/${bookmark.id}`)
          }}
        >
          <EditIcon className="h-4 w-4" />
        </Button>
        <DeleteBookmark bookmark={bookmark} />
      </div>
    </div>
  )
}
