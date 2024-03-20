import { Header } from '@/components/header';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { AddFolderForm } from '../../../components/add-folder-form';
import { createClient } from '@/util/supabase/server';
import { getAuthorizedUser } from '@/lib/utils';

export default async function NewBookmarkPage() {
  const supabase = createClient();
  const { id } = await getAuthorizedUser(supabase);

  return (
    <div className="flex flex-col">
      <Header />
      <Link href="/dashboard" className="ghost flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="py-8 font-medium tracking-tight text-5xl">New Folder</div>
      <div className="text-muted-foreground mb-5">
        Please provide the information below to add your folder.
      </div>
      <AddFolderForm userId={id} />
    </div>
  );
}
