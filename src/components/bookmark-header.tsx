import { db } from "@/lib/db";
import { Folder } from "@prisma/client";
import { AddNewButton } from "./add-new";
import { FolderSelection } from "./folder-selection";

export async function BookmarkHeader({
  selectedFolder = null,
}: {
  readonly selectedFolder?: Folder | null;
}) {
  const userId = process.env.USER_ID ?? "";

  const folders = await db.folder.findMany({ where: { userId: userId } });

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FolderSelection folders={folders} selectedFolder={selectedFolder} />
        <h1 className="py-8 font-medium tracking-tight text-2xl md:text-5xl">
          Bookmarks
        </h1>
      </div>
      <div>
        <AddNewButton />
      </div>
    </div>
  );
}
