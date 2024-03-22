import { AddBookmarkForm } from "@/components/add-bookmark-form"
import { Header } from "@/components/header"
import { getFolders } from "@/lib/folder"
import { auth } from "@clerk/nextjs"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default async function NewBookmarkPage() {
  const { userId } = auth()

  if (!userId) {
    return null
  }

  const folders = await getFolders(userId)

  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/dashboard" className="ghost flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="py-8 text-5xl font-medium tracking-tight">
        New Bookmark
      </div>
      <div className="mb-5 text-muted-foreground">
        Please provide the information below to add your bookmark.
      </div>
      <AddBookmarkForm userId={userId} folders={folders} />
    </div>
  )
}
