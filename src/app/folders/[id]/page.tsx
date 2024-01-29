import { BookmarkHeader } from "@/components/bookmark-header";
import { BookmarkList } from "@/components/bookmark-list";
import { Header } from "@/components/header";
import { getBookmarksByFolder } from "@/lib/bookmarks";
import { db } from "@/lib/db";

export default async function BookmarksByFolder({
  params,
}: {
  params: { id: string };
}) {
  const userId = process.env.USER_ID ?? "";

  const { id: folderId } = params;

  if (!userId) {
    return null;
  }

  const selectedFolder = await db.folder.findUnique({
    where: { id: folderId },
  });
  const bookmarks = await getBookmarksByFolder(userId, folderId);

  return (
    <>
      <Header />
      <section>
        <BookmarkHeader selectedFolder={selectedFolder} />
        <BookmarkList bookmarks={bookmarks} />
      </section>
    </>
  );
}
