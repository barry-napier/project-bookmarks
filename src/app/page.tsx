import { BookmarkList } from "@/components/bookmark-list";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { db } from "@/lib/db";
import { ChevronDown, PlusIcon } from "lucide-react";
import { Suspense } from "react";

export default async function Home() {
  async function addBookmark() {
    "use server";
    console.log("add bookmark");
    try {
      const bookmark = await db.bookmark.create({
        data: {
          title: "Google",
          url: "https://google.com",
        },
      });
      return bookmark;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const bookmarks = await getBookmarks();
  return (
    <main className="mb-40">
      <section>
        <header className="flex items-center justify-between">
          <div className="flex">
            <div className="py-8 font-medium tracking-tight text-2xl md:text-5xl">
              Bookmarks in&nbsp;
            </div>
            <div className="py-8 font-medium tracking-tight text-muted-foreground flex items-center text-2xl md:text-5xl">
              <div className="flex items-center gap-2">
                Work
                <ChevronDown className="w-8 h-8" />
              </div>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <PlusIcon className="w-4 h-4 md:hidden" />
                    <div className="hidden md:block">Add New ...</div>
                    <ChevronDown className="w-4 h-4 hidden md:block" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Bookmark</DropdownMenuItem>
                <DropdownMenuItem>Folder</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="my-4">
          <Suspense fallback={<div>Loading...</div>}>
            <BookmarkList bookmarks={bookmarks} />
          </Suspense>
        </main>
      </section>
    </main>
  );
}

async function getBookmarks() {
  try {
    const bookmarks = await db.bookmark.findMany();
    return bookmarks;
  } catch (error) {
    console.error(error);
    return [];
  }
}
