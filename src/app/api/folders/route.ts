import { createFolder } from "@/lib/folder"

export async function POST(request: Request) {
  const { folderName, userId } = await request.json()

  const newBookmark = await createFolder(folderName, userId)

  return Response.json(newBookmark, {
    status: 201,
  })
}
