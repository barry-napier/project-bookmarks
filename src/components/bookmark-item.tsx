import { Bookmark } from "@prisma/client";
import { EditIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { DeleteBookmark } from "./delete-bookmark";
import { Button } from "./ui/button";

type BookmarkListProps = {
  bookmark: Bookmark;
};

export function BookmarkItem({ bookmark }: BookmarkListProps) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full"></div>
        <div className="flex flex-col">
          <div className="flex aria-selected:font-medium">{bookmark.title}</div>
          <div className="text-muted-foreground text-xs w-48 md:w-[500px] lg:w-auto text-ellipsis overflow-hidden whitespace-nowrap">
            {bookmark.url}
          </div>
        </div>
      </div>
      <div className="hidden group-aria-selected:flex items-center gap-2">
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/bookmarks/edit/${bookmark.id}`);
          }}
        >
          <EditIcon className="w-4 h-4" />
        </Button>
        <DeleteBookmark bookmark={bookmark} />
      </div>
    </div>
  );
}
