import { BookmarkHeader } from "@/components/bookmark-header";
import { BookmarkList } from "@/components/bookmark-list";
import { getBookmarks } from "@/lib/bookmarks";

export default async function Home() {
  const bookmarks = await getBookmarks();

  return (
    <section>
      <BookmarkHeader />
      <BookmarkList bookmarks={bookmarks} />
    </section>
  );
}
