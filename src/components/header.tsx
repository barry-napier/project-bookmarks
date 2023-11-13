import { BookmarkIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="p-8 flex items-center justify-between">
        <Link
          href="\"
          className="text-muted-foreground hover:text-foreground flex items-center gap-1"
        >
          <BookmarkIcon className="w-7 h-7" />
          <div className="flex font-semibold text-xl sr-only">Bookmarking</div>
        </Link>
        <div className="w-8 h-8 rounded-full border-muted-foreground border-2"></div>
      </div>
    </header>
  );
}
