"use client";

import { BookmarkIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ClipboardEvent } from "react";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandShortcut,
} from "./ui/command";

type Bookmark = {
  id: number;
  title: string;
  url: string;
};

export function BookmarkList() {
  const router = useRouter();

  function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log("paste");
  }

  const bookmarks: Bookmark[] = [
    // { id: 1, title: "Google", url: "https://google.com" },
    // { id: 2, title: "Facebook", url: "https://facebook.com" },
    // { id: 3, title: "Twitter", url: "https://twitter.com" },
    // { id: 4, title: "Instagram", url: "https://instagram.com" },
    // { id: 5, title: "Youtube", url: "https://youtube.com" },
    // { id: 6, title: "Twitch", url: "https://twitch.tv" },
    // { id: 7, title: "Reddit", url: "https://reddit.com" },
    // { id: 8, title: "Amazon", url: "https://amazon.com" },
    // { id: 9, title: "Wikipedia", url: "https://wikipedia.org" },
    // { id: 10, title: "Netflix", url: "https://netflix.com" },
    // { id: 11, title: "Discord", url: "https://discord.com" },
    // { id: 12, title: "Spotify", url: "https://spotify.com" },
    // { id: 13, title: "Github", url: "https://github.com" },
    // { id: 14, title: "LinkedIn", url: "https://linkedin.com" },
    // { id: 15, title: "TikTok", url: "https://tiktok.com" },
    // { id: 16, title: "Pinterest", url: "https://pinterest.com" },
    // { id: 17, title: "Whatsapp", url: "https://whatsapp.com" },
  ];

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
          <Button className="mt-8">Create Bookmark</Button>
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
              className="border-b last:border-none rounded-none"
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
                <div className="flex text-muted-foreground">{bookmark.url}</div>
              </div>
              <CommandShortcut>⌘{index + 1}</CommandShortcut>
            </CommandItem>
          );
        })}
      </CommandGroup>
    </Command>
  );
}
