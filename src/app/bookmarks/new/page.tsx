import { AddBookmarkForm } from "@/components/AddBookmarkForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewBookmarkPage() {
  return (
    <div className="flex flex-col">
      <Link href="/" className="ghost flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="py-8 font-medium tracking-tight text-5xl">
        New Bookmark
      </div>
      <div className="text-muted-foreground mb-5">
        Please provide the information below to add your bookmark.
      </div>
      <AddBookmarkForm />
    </div>
  );
}
