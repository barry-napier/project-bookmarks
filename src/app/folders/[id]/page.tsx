import { BookmarkHeader } from '@/components/bookmark-header';
import { BookmarkList } from '@/components/bookmark-list';
import { Header } from '@/components/header';

export default async function BookmarksByFolder({
  params,
}: {
  params: { id: string };
}) {
  // const { userId } = auth();

  // if (!userId) {
  //   return null;
  // }

  // const { id: folderId } = params;

  // if (!userId) {
  //   return null;
  // }

  // const selectedFolder = await db.folder.findUnique({
  //   where: { id: folderId },
  // });
  // const bookmarks = await getBookmarksByFolder(userId, folderId);

  return (
    <>
      <Header />
      <section>
        {/* <BookmarkHeader selectedFolder={selectedFolder} /> */}
        {/* <BookmarkList bookmarks={bookmarks} /> */}
      </section>
    </>
  );
}
