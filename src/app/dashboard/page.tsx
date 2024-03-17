import { BookmarkHeader } from '@/components/bookmark-header';
import { BookmarkList } from '@/components/bookmark-list';
import { Header } from '@/components/header';
import { createClient } from '@/lib/supabase/server';
import { Bookmarks } from '@/types';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const userId = data.user.id;
  const { data: stuff } = await supabase.from('bookmarks').select();

  const bookmarks = stuff as Bookmarks[];
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
