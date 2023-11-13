import { db } from "./db";

export async function getBookmarks() {
  try {
    const bookmarks = await db.bookmark.findMany();
    return bookmarks;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createBookmark(title: string, url: string) {
  try {
    const bookmark = await db.bookmark.create({
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
