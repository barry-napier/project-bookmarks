import { createBookmark, deleteBookmark, getBookmarks } from "@/lib/bookmarks";
import { auth } from "@clerk/nextjs";

export async function GET(request: Request) {
  const { userId, sessionId } = auth();

  if (!sessionId) {
    return Response.json({ id: null }, { status: 401 });
  }

  const bookmarks = await getBookmarks(userId);

  return Response.json(bookmarks, {
    status: 200,
  });
}

export async function POST(request: Request) {
  const { title, url, userId } = await request.json();

  const newBookmark = await createBookmark(title, url, userId);

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
