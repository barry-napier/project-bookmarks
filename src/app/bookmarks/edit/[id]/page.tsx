import { EditBookmarkForm } from "@/components/EditBookmarkForm";
import { Header } from "@/components/header";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function NewBookmarkPage({
  params,
}: {
  params: { id: string };
}) {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const { id } = params;

  const bookmark = await db.bookmark.findUnique({
    where: { id },
  });

  if (!bookmark) {
    return null;
  }

  console.log(bookmark);

  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/dashboard" className="ghost flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="py-8 font-medium tracking-tight text-5xl">
        Edit Bookmark
      </div>
      <div className="text-muted-foreground mb-5">
        Please provide the information below to update your bookmark.
      </div>
      <EditBookmarkForm userId={userId} bookmark={bookmark} />
    </div>
  );
}
