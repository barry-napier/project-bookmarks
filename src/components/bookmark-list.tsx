"use client";

import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandShortcut,
} from "./ui/command";

export function BookmarkList() {
  const router = useRouter();

  function handlePaste() {
    console.log("paste");
  }

  const bookmarks = [
    { id: 1, title: "Google", url: "https://google.com" },
    { id: 2, title: "Facebook", url: "https://facebook.com" },
    { id: 3, title: "Twitter", url: "https://twitter.com" },
    { id: 4, title: "Instagram", url: "https://instagram.com" },
    { id: 5, title: "Youtube", url: "https://youtube.com" },
    { id: 6, title: "Twitch", url: "https://twitch.tv" },
    { id: 7, title: "Reddit", url: "https://reddit.com" },
    { id: 8, title: "Amazon", url: "https://amazon.com" },
    { id: 9, title: "Wikipedia", url: "https://wikipedia.org" },
    { id: 10, title: "Netflix", url: "https://netflix.com" },
    // { id: 11, title: "Discord", url: "https://discord.com" },
    // { id: 12, title: "Spotify", url: "https://spotify.com" },
    // { id: 13, title: "Github", url: "https://github.com" },
    // { id: 14, title: "LinkedIn", url: "https://linkedin.com" },
    // { id: 15, title: "TikTok", url: "https://tiktok.com" },
    // { id: 16, title: "Pinterest", url: "https://pinterest.com" },
    // { id: 17, title: "Whatsapp", url: "https://whatsapp.com" },
  ];

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
                <img
                  src={`https://logo.clearbit.com/${bookmark.url}`}
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex">{bookmark.title}</div>
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
