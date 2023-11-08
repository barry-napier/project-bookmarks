"use client";

import { Bookmark } from "@prisma/client";
import { ArrowDown, ArrowUp, BookmarkIcon, CornerDownLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ClipboardEvent, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandShortcut,
} from "./ui/command";

type BookmarkListProps = {
  bookmarks: Bookmark[];
};

export function BookmarkList({ bookmarks }: BookmarkListProps) {
  const searchBarInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useHotkeys(
    "meta+k",
    () => {
      console.log("meta+k");
      searchBarInput.current?.focus();
    },
    { preventDefault: true }
  );

  function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log("paste");
  }

  if (bookmarks.length === 0) {
    return (
      <div className="flex flex-col border-dashed border-2 py-40 p-8 items-center justify-center">
        <div className="flex w-20 h-20 bg-muted items-center justify-center rounded-full">
          <BookmarkIcon className="w-8 h-8" />
        </div>
        <div className="flex py-2 text-xl font-semibold">
          No Bookmarks Created
        </div>
        <div className="flex text-sm text-muted-foreground">
          You don&apos;t have any bookmarks yet.
        </div>
        <div className="flex text-sm text-muted-foreground">
          <Button className="mt-8" type="submit">
            Create Bookmark
          </Button>
        </div>
      </div>
    );
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
              className="border-b last:border-none rounded-none py-3"
            >
              <div className="px-4">
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=128`}
                  className="w-6 h-6 rounded-full"
                  width={24}
                  height={24}
                  alt={bookmark.title}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex aria-selected:font-medium">
                  {bookmark.title}
                </div>
                <div className="flex text-muted-foreground text-xs">
                  {bookmark.url}
                </div>
              </div>
            </CommandItem>
          );
        })}
      </CommandGroup>
      <div className="flex items-center justify-between text-muted-foreground border-t border-muted text-xs py-4">
        <div className="flex items-center gap-1">
          <CommandShortcut className="bg-muted p-2 rounded-md">
            ⌘K
          </CommandShortcut>
          <div>focus</div>
        </div>

        <div className="flex items-center gap-1">
          <CommandShortcut className="bg-muted p-2 rounded-md">
            <ArrowUp className="w-3 h-3" />
          </CommandShortcut>
          <CommandShortcut className="bg-muted p-2 rounded-md">
            <ArrowDown className="w-3 h-3" />
          </CommandShortcut>
          <div>navigate</div>
        </div>

        <div className="flex items-center gap-1">
          <CommandShortcut className="bg-muted p-2 rounded-md">
            <CornerDownLeft className="w-3 h-3" />
          </CommandShortcut>
          <div>select</div>
        </div>
      </div>
    </Command>
  );
}
