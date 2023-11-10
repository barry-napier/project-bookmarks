import { BookmarkIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container mx-auto py-8 flex items-center justify-between">
        <Link href="\" className="text-muted-foreground hover:text-foreground">
          <BookmarkIcon className="w-8 h-8" />
        </Link>
        <div className="w-8 h-8 rounded-full border-muted-foreground border-2"></div>
      </div>
    </header>
  );
}
