import { ArrowDown, ArrowUp, CornerDownLeft } from "lucide-react";
import { CommandShortcut } from "./ui/command";

export function BookmarkBarInstructions() {
  return (
    <div className="flex items-center justify-between text-muted-foreground border-t border-accent text-xs py-4">
      <div className="flex items-center gap-1">
        <CommandShortcut className="bg-muted p-2 rounded-md">
          ⌘K
        </CommandShortcut>
        <div>focus</div>
      </div>

      <div className="flex items-center gap-1">
        <CommandShortcut className="bg-muted p-2 rounded-md">
          <ArrowUp className="w-3 h-3" />
        </CommandShortcut>
        <CommandShortcut className="bg-muted p-2 rounded-md">
          <ArrowDown className="w-3 h-3" />
        </CommandShortcut>
        <div>navigate</div>
      </div>

      <div className="flex items-center gap-1">
        <CommandShortcut className="bg-muted p-2 rounded-md">
          <CornerDownLeft className="w-3 h-3" />
        </CommandShortcut>
        <div>select</div>
      </div>
    </div>
  );
}
