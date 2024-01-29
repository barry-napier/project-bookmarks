import { AddBookmarkForm } from "@/components/add-bookmark-form";
import { Header } from "@/components/header";
import { getFolders } from "@/lib/folder";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function NewBookmarkPage() {
  const userId = process.env.USER_ID ?? "";

  const folders = await getFolders(userId);

  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/dashboard" className="ghost flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="py-8 font-medium tracking-tight text-5xl">
        New Bookmark
      </div>
      <div className="text-muted-foreground mb-5">
        Please provide the information below to add your bookmark.
      </div>
      <AddBookmarkForm userId={userId} folders={folders} />
    </div>
  );
}
