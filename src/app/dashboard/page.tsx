import { BookmarkHeader } from "@/components/bookmark-header";
import { BookmarkList } from "@/components/bookmark-list";
import { Header } from "@/components/header";
import { getBookmarks } from "@/lib/bookmarks";

export default async function Home() {
  const userId = process.env.USER_ID ?? "";
  const bookmarks = await getBookmarks(userId);

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
