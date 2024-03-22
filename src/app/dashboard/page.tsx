import { BookmarkHeader } from "@/components/bookmark-header"
import { BookmarkList } from "@/components/bookmark-list"
import { Header } from "@/components/header"
import { getBookmarks } from "@/lib/bookmarks"
import { auth } from "@clerk/nextjs"

export default async function Home() {
  const { userId } = auth()

  if (!userId) {
    return null
  }

  const bookmarks = await getBookmarks(userId)

  return (
    <>
      <Header />
      <section>
        <BookmarkHeader />
        <BookmarkList bookmarks={bookmarks} />
      </section>
    </>
  )
}
