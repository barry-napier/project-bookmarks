import { BookmarkHeader } from '@/components/bookmark-header';
import { BookmarkList } from '@/components/bookmark-list';
import { Header } from '@/components/header';
import { getAuthorizedUser } from '@/lib/utils';
import { createClient } from '@/util/supabase/server';

type BookmarksByFolderProps = {
  readonly params: { id: string };
};
export default async function BookmarksByFolder({
  params,
}: BookmarksByFolderProps) {
  const supabase = createClient();
  getAuthorizedUser(supabase);

  const { data: selectedFolder } = await supabase
    .from('folders')
    .select('*')
    .eq('id', params.id)
    .single();

  const { data: bookmarks } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('folder_id', params.id);

  return (
    <>
      <Header />
      <section>
        <BookmarkHeader selectedFolder={selectedFolder} />
        <BookmarkList bookmarks={bookmarks} />
      </section>
    </>
  );
}
