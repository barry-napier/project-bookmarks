"use client"

import { BookmarkBarInstructions } from "./bookmark-bar-instructions"
import { BookmarkItem } from "./bookmark-item"
import { NoBookmarks } from "./no-bookmarks"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command"
import { Bookmark } from "@prisma/client"
import { useRouter } from "next/navigation"
import { ClipboardEvent, useRef } from "react"
import { useHotkeys } from "react-hotkeys-hook"

type BookmarkListProps = {
  bookmarks: Bookmark[]
}

export function BookmarkList({ bookmarks }: BookmarkListProps) {
  const searchBarInput = useRef<HTMLInputElement>(null)

  useHotkeys(
    "meta+k",
    () => {
      searchBarInput.current?.focus()
    },
    { preventDefault: true }
  )

  const router = useRouter()

  async function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault()

    const url = e.clipboardData.getData("text/plain")

    if (url) {
      const response = await fetch("/api/bookmarks", {
        method: "POST",
        body: JSON.stringify({ title: url, url }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        router.push("/")
        router.refresh()
      }
    }
  }

  if (bookmarks.length === 0) {
    return <NoBookmarks />
  }

  return (
    <div className="my-4">
      <Command>
        <CommandInput
          placeholder="Search bookmarks..."
          onPaste={handlePaste}
          ref={searchBarInput}
          className="rounded-[0] px-4 py-3"
        />
        <CommandEmpty className="flex items-center justify-center py-8 text-muted-foreground">
          No bookmarks found.
        </CommandEmpty>
        <CommandGroup>
          {bookmarks.map((bookmark, index) => {
            return (
              <CommandItem
                key={bookmark.id}
                onSelect={async () => {
                  fetch(`/api/bookmarks/${bookmark.id}`, {
                    method: "PATCH",
                    body: JSON.stringify({
                      clickCount: bookmark.clicks + 1,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                  router.push(bookmark.url)
                }}
                className="flex w-full items-center rounded-none border-accent py-3 last:border-none"
              >
                <BookmarkItem bookmark={bookmark} />
              </CommandItem>
            )
          })}
        </CommandGroup>
        <BookmarkBarInstructions />
      </Command>
    </div>
  )
}
