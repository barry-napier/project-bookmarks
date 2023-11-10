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
