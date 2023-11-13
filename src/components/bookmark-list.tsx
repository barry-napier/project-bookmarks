"use client";

import { deleteBookmark } from "@/actions/bookmark.actions";
import { Bookmark } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ClipboardEvent, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { BookmarkBarInstructions } from "./bookmark-bar-instructions";
import { BookmarkItem } from "./bookmark-item";
import { NoBookmarks } from "./no-bookmarks";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";

type BookmarkListProps = {
  bookmarks: Bookmark[];
};

export function BookmarkList({ bookmarks }: BookmarkListProps) {
  const searchBarInput = useRef<HTMLInputElement>(null);

  useHotkeys(
    "meta+k",
    () => {
      console.log("meta+k");
      searchBarInput.current?.focus();
    },
    { preventDefault: true }
  );

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const router = useRouter();

  function handleEdit(id: string) {
    router.push(`/bookmarks/${id}`);
  }

  function handleDelete(id: string) {
    deleteBookmark(id);
    router.refresh();
  }

  function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log("paste");
  }

  if (bookmarks.length === 0) {
    return <NoBookmarks />;
  }

  return (
    <Command>
      <CommandInput
        autoFocus
        placeholder="Search bookmarks..."
        onPaste={handlePaste}
        ref={searchBarInput}
        className="py-3 px-4 rounded-[0]"
      />
      <CommandEmpty className="flex items-center justify-center text-muted-foreground py-8">
        No bookmarks found.
      </CommandEmpty>
      <CommandGroup>
        {bookmarks.map((bookmark, index) => {
          return (
            <CommandItem
              key={bookmark.id}
              onSelect={(currentValue) => {
                router.push(bookmark.url);
              }}
              className="border-b border-accent last:border-none rounded-none py-3 flex items-center justify-between"
            >
              <BookmarkItem bookmark={bookmark} />
            </CommandItem>
          );
        })}
      </CommandGroup>
      <BookmarkBarInstructions />
    </Command>
  );
}
