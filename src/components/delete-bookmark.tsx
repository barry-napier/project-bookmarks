import { Bookmark } from "@prisma/client";
import { AlertCircle, Trash2Icon } from "lucide-react";
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

export function DeleteBookmark({ bookmark }: { readonly bookmark: Bookmark }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          <Trash2Icon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertCircle className="text-destructive" />
            Are you sure you want to delete this bookmark?
          </DialogTitle>
          <DialogDescription className="pt-2">
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 justify-end">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
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
  );
}
