import { AddBookmarkForm } from '@/components/add-bookmark-form';
import { Header } from '@/components/header';
import { createClient } from '@/lib/supabase/server';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function NewBookmarkPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const userId = data.user.id;

  const { data: folders } = await supabase.from('folders').select();

  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/dashboard" className="ghost flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="py-8 font-medium tracking-tight text-5xl">
        New Bookmark
      </div>
      <div className="text-muted-foreground mb-5">
        Please provide the information below to add your bookmark.
      </div>
      <AddBookmarkForm userId={userId} folders={folders} />
    </div>
  );
}
