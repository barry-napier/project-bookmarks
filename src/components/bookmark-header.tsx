import { ChevronDown } from "lucide-react";
import { AddNewButton } from "./add-new";

export function BookmarkHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <div className="py-8 font-medium tracking-tight text-2xl md:text-5xl">
          Bookmarks in&nbsp;
        </div>
        <div className="py-8 font-medium tracking-tight text-muted-foreground flex items-center text-2xl md:text-5xl">
          <div className="flex items-center gap-2">
            Work
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div>
        <AddNewButton />
      </div>
    </div>
  );
}
