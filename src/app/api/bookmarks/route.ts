import {
  createBookmark,
  deleteBookmark,
  getBookmarks,
  updateBookmark,
} from "@/lib/bookmarks";

export async function GET(request: Request) {
  const userId = process.env.USER_ID ?? "";

  const bookmarks = await getBookmarks(userId);

  return Response.json(bookmarks, {
    status: 200,
  });
}

export async function POST(request: Request) {
  const { title, url, userId, folderId } = await request.json();

  const newBookmark = await createBookmark(title, url, userId, folderId);

  return Response.json(newBookmark, {
    status: 201,
  });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  await deleteBookmark(id);

  return Response.json(
    {
      message: "Bookmark deleted",
    },
    {
      status: 200,
    }
  );
}

export async function PUT(request: Request) {
  const { title, url, userId, id } = await request.json();

  const updatedBookmark = await updateBookmark(title, url, userId, id);

  return Response.json(updatedBookmark, {
    status: 200,
  });
}
