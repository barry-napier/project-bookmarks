import { ChevronDown } from "lucide-react";
import { AddNewButton } from "./add-new";

export function BookmarkHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="py-8 font-medium tracking-tight text-muted-foreground flex items-center text-2xl md:text-5xl">
          <div className="flex items-center gap-2">
            <ChevronDown className="w-8 h-8" />
            All
          </div>
        </div>
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
