import { BookmarkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function MarketingHeader() {
  const supabase = createClient();

  // const { data, error } = await supabase.auth.getUser();

  // if (error || !data?.user) {
  //   redirect('/');
  // }

  const userId = null;

  return (
    <header>
      <div className="py-8 flex items-center justify-between">
        <Link
          href="\"
          className="text-foreground hover:text-accent-foreground flex items-center gap-1"
        >
          <BookmarkIcon className="w-7 h-7" />
          <div className="flex font-semibold text-xl tracking-tight">
            Bookmarking.io
          </div>
        </Link>
        {userId ? (
          <div>
            <Link href="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
