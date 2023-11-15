import { BookmarkHeader } from "@/components/bookmark-header";
import { BookmarkList } from "@/components/bookmark-list";
import { Header } from "@/components/header";
import { getBookmarks } from "@/lib/bookmarks";

export default async function Home() {
  const bookmarks = await getBookmarks();

  return (
    <>
      <Header />
      <section>
        <BookmarkHeader />
        <BookmarkList bookmarks={bookmarks} />
      </section>
    </>
  );
}
