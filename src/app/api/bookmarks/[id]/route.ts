import { incrementClickCount } from "@/lib/bookmarks";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  await incrementClickCount(id);

  return Response.json({
    status: 200,
  });
}
