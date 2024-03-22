import { db } from "./db"

export async function getBookmarks(userId: string) {
  try {
    const bookmarks = await db.bookmark.findMany({
      where: {
        userId,
      },
      orderBy: {
        clicks: "desc",
      },
    })
    return bookmarks
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getBookmarksByFolder(userId: string, folderId: string) {
  try {
    const bookmarks = await db.bookmark.findMany({
      where: {
        userId,
        folderId,
      },
      orderBy: {
        clicks: "desc",
      },
    })
    return bookmarks
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function createBookmark(
  title: string,
  url: string,
  userId: string,
  favicon: string,
  folderId: string | null
) {
  console.log({ title, url, userId, favicon, folderId })
  try {
    const bookmark = await db.bookmark.create({
      data: {
        title,
        url,
        favicon,
        userId,
        folderId,
      },
    })
    return bookmark
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function deleteBookmark(id: string) {
  try {
    await db.bookmark.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export async function incrementClickCount(id: string) {
  try {
    await db.bookmark.update({
      where: {
        id,
      },
      data: {
        clicks: {
          increment: 1,
        },
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export async function updateBookmark(
  title: string,
  url: string,
  userId: string,
  id: string
) {
  try {
    const bookmark = await db.bookmark.update({
      where: {
        id,
      },
      data: {
        title,
        url,
      },
    })
    return bookmark
  } catch (error) {
    console.error(error)
    return null
  }
}
