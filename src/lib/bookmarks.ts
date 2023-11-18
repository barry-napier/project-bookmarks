import { db } from "./db";

export async function getBookmarks(userId: string) {
  try {
    const bookmarks = db.bookmark.findMany({
      where: {
        userId,
      },
      orderBy: {
        clicks: "desc",
      },
    });
    return bookmarks;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getBookmarksByFolder(userId: string, folderId: string) {
  try {
    const bookmarks = db.bookmark.findMany({
      where: {
        userId,
        folderId,
      },
      orderBy: {
        clicks: "desc",
      },
    });
    return bookmarks;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createBookmark(
  title: string,
  url: string,
  userId: string
) {
  try {
    const bookmark = await db.bookmark.create({
      data: {
        title,
        url,
        userId,
      },
    });
    return bookmark;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteBookmark(id: string) {
  try {
    await db.bookmark.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function incrementClickCount(id: string) {
  console.log("incrementClickCount", id);
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
    });
  } catch (error) {
    console.error(error);
  }
}

export async function updateBookmark(
  title: string,
  url: string,
  userId: string,
  id: string
) {
  console.log("DB PUT", title, url, userId, id);

  try {
    const bookmark = await db.bookmark.update({
      where: {
        id,
      },
      data: {
        title,
        url,
      },
    });
    return bookmark;
  } catch (error) {
    console.error(error);
    return null;
  }
}
