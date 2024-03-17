import { createClient } from '@/lib/supabase/server';
import { AddNewButton } from './add-new';
import { FolderSelection } from './folder-selection';
import { redirect } from 'next/navigation';

export async function BookmarkHeader({
  selectedFolder = null,
}: {
  selectedFolder?: Folder | null;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  const userId = data.user.id;
  const { data: folders } = await supabase.from('folders').select();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FolderSelection folders={folders} selectedFolder={selectedFolder} />
        <h1 className="py-8 font-medium tracking-tight text-2xl md:text-5xl">
          Bookmarks
        </h1>
      </div>
      <div>
        <AddNewButton />
      </div>
    </div>
  );
}
