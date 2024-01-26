import { BookmarkIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="py-8 flex items-center justify-between">
        <Link
          href="\"
          className="text-foreground hover:text-foreground flex items-center gap-1"
        >
          <BookmarkIcon className="w-7 h-7" />
          <div className="flex font-semibold text-xl tracking-tight">
            Bookmarking.io
          </div>
        </Link>
      </div>
    </header>
  );
}
