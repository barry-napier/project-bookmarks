"use server";

import { db } from "@/lib/db";

export async function deleteBookmark(id: string) {
  return await db.bookmark.delete({
    where: {
      id: id,
    },
  });
}

export async function addBookmark(url: string, title: string) {
  return await db.bookmark.create({
    data: {
      url: url,
      title: title,
    },
  });
}
