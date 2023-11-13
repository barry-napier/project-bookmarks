import { createBookmark, deleteBookmark, getBookmarks } from "@/lib/bookmarks";

export async function GET() {
  const bookmarks = await getBookmarks();

  return Response.json(bookmarks, {
    status: 200,
  });
}

export async function POST(request: Request) {
  const { title, url } = await request.json();

  const newBookmark = await createBookmark(title, url);

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
