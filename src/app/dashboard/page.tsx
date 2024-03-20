import { BookmarkHeader } from '@/components/bookmark-header';
import { BookmarkList } from '@/components/bookmark-list';
import { Header } from '@/components/header';
import { getAuthorizedUser } from '@/lib/utils';
import { createClient } from '@/util/supabase/server';

export default async function Home() {
  const supabase = createClient();
  await getAuthorizedUser(supabase);

  const { data: bookmarks } = await supabase.from('bookmarks').select('*');

  return (
    <>
      <Header />
      <section>
        <BookmarkHeader />
        <BookmarkList bookmarks={bookmarks} />
      </section>
    </>
  );
}
