import { db } from "./db";

export async function getFolders(userId: string) {
  try {
    const folders = await db.folder.findMany({
      where: {
        userId,
      },
    });
    return folders;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createFolder(name: string, userId: string) {
  try {
    const folder = await db.folder.create({
      data: {
        name,
        userId,
      },
    });
    return folder;
  } catch (error) {
    console.error(error);
    return null;
  }
}
