import { BookmarkHeader } from '@/components/bookmark-header';
import { BookmarkList } from '@/components/bookmark-list';
import { Header } from '@/components/header';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Bookmarks } from '@/types/index';

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const userId = data.user.id;
  const { data: bookmarks }: { data: Bookmarks[] } = await supabase
    .from('bookmarks')
    .select();

  return (
    <>
      {userId}
      <Header />
      <section>
        <BookmarkHeader />
        <BookmarkList bookmarks={bookmarks} />
      </section>
    </>
  );
}
