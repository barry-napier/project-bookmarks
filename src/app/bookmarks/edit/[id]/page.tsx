import { EditBookmarkForm } from "@/components/edit-bookmark-form"
import { Header } from "@/components/header"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default async function NewBookmarkPage({
  params,
}: {
  params: { id: string }
}) {
  const { userId } = auth()

  if (!userId) {
    return null
  }

  const { id } = params

  const bookmark = await db.bookmark.findUnique({
    where: { id },
  })

  if (!bookmark) {
    return null
  }

  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/dashboard" className="ghost flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="py-8 text-5xl font-medium tracking-tight">
        Edit Bookmark
      </div>
      <div className="mb-5 text-muted-foreground">
        Please provide the information below to update your bookmark.
      </div>
      <EditBookmarkForm userId={userId} bookmark={bookmark} />
    </div>
  )
}
