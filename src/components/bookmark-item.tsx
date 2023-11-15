"use client";

import { Bookmark } from "@prisma/client";
import { AlertCircle, MoreHorizontalIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type BookmarkListProps = {
  bookmark: Bookmark;
};

export function BookmarkItem({ bookmark }: BookmarkListProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const router = useRouter();

  function handleEdit(id: string) {
    router.push(`/bookmarks/${id}`);
  }

  async function handleDelete(id: string) {
    const response = await fetch(`/api/bookmarks`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      router.refresh();
    }
  }

  return (
    <>
      <div className="flex">
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
          <div className="flex aria-selected:font-medium">{bookmark.title}</div>
          <div className="flex text-muted-foreground text-xs">
            {bookmark.url}
          </div>
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="">
              <MoreHorizontalIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuItem className="p-0">
              <Button
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(bookmark.id);
                }}
                className="w-full items-left justify-start"
              >
                Edit
              </Button>
            </DropdownMenuItem> 
            <DropdownMenuSeparator />*/}
            <DropdownMenuItem className="p-0">
              <Dialog open={deleteDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteDialogOpen(true);
                    }}
                    className="w-full items-left justify-start"
                  >
                    Delete
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <AlertCircle className="text-destructive" />
                      Are you sure you want to delete this bookmark?
                    </DialogTitle>
                    <DialogDescription>
                      This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center gap-2 justify-end">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteDialogOpen(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(bookmark.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
