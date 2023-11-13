"use client";
import { DialogDescription } from "@radix-ui/react-dialog";
import { BookmarkPlusIcon } from "lucide-react";
import { useState } from "react";
import { AddBookmarkForm } from "./AddBookmarkForm";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function AddBookmarkDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full items-left justify-start"
        >
          Bookmark
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookmarkPlusIcon />
            Add New Bookmark
          </DialogTitle>
          <DialogDescription>
            Please enter the bookmark information below.
          </DialogDescription>
        </DialogHeader>
        <AddBookmarkForm />
      </DialogContent>
    </Dialog>
  );
}
