import { auth } from "@clerk/nextjs";
import { BookmarkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function MarketingHeader() {
  const { userId } = auth();

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
            <Link href="/sign-in">
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
