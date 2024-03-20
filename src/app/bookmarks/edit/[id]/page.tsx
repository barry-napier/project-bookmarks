import { EditBookmarkForm } from '@/components/edit-bookmark-form';
import { Header } from '@/components/header';
import { getAuthorizedUser } from '@/lib/utils';
import { createClient } from '@/util/supabase/server';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

type NewBookmarkPageProps = {
  readonly params: {
    id: string;
  };
};

export default async function NewBookmarkPage({
  params,
}: NewBookmarkPageProps) {
  const supabase = createClient();
  const { id } = await getAuthorizedUser(supabase);
  const { data: bookmark } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('id', params.id)
    .single();

  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/dashboard" className="ghost flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="py-8 font-medium tracking-tight text-5xl">
        Edit Bookmark
      </div>
      <div className="text-muted-foreground mb-5">
        Please provide the information below to update your bookmark.
      </div>
      <EditBookmarkForm userId={id} bookmark={bookmark} />
    </div>
  );
}
