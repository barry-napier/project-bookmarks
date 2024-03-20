import { auth } from "@clerk/nextjs"
import { Folder } from "@prisma/client"

import { db } from "@/lib/db"

import { AddNewButton } from "./add-new"
import { FolderSelection } from "./folder-selection"

export async function BookmarkHeader({
  selectedFolder = null,
}: {
  selectedFolder?: Folder | null
}) {
  const { userId } = auth()

  if (!userId) {
    return null
  }

  const folders = await db.folder.findMany({ where: { userId: userId } })

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FolderSelection folders={folders} selectedFolder={selectedFolder} />
        <h1 className="py-8 text-2xl font-medium tracking-tight md:text-5xl">
          Bookmarks
        </h1>
      </div>
      <div>
        <AddNewButton />
      </div>
    </div>
  )
}
