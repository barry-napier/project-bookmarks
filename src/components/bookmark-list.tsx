'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { BookmarkBarInstructions } from './bookmark-bar-instructions';
import { BookmarkItem } from './bookmark-item';
import { NoBookmarks } from './no-bookmarks';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './ui/command';

type BookmarkListProps = {
  readonly bookmarks: Bookmark[] | null;
};

export function BookmarkList({ bookmarks }: BookmarkListProps) {
  const searchBarInput = useRef<HTMLInputElement>(null);

  useHotkeys(
    'meta+k',
    () => {
      searchBarInput.current?.focus();
    },
    { preventDefault: true }
  );

  const router = useRouter();

  if (bookmarks?.length === 0) {
    return <NoBookmarks />;
  }

  return (
    <div className="my-4">
      <Command>
        <CommandInput
          placeholder="Search bookmarks..."
          ref={searchBarInput}
          className="py-3 px-4 rounded-[0]"
        />
        <CommandEmpty className="flex items-center justify-center text-muted-foreground py-8">
          No bookmarks found.
        </CommandEmpty>
        <CommandGroup>
          {bookmarks?.map((bookmark, index) => {
            return (
              <CommandItem
                key={bookmark.id}
                onSelect={async () => {
                  fetch(`/api/bookmarks/${bookmark.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                      clickCount: bookmark.clicks + 1,
                    }),
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  });
                  router.push(bookmark.url);
                }}
                className="border-accent last:border-none rounded-none py-3 flex items-center w-full"
              >
                <BookmarkItem bookmark={bookmark} />
              </CommandItem>
            );
          })}
        </CommandGroup>
        <BookmarkBarInstructions />
      </Command>
    </div>
  );
}
