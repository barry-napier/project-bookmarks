import { ArrowDown, ArrowUp, CornerDownLeft } from "lucide-react"

import { CommandShortcut } from "./ui/command"

export function BookmarkBarInstructions() {
  return (
    <div className="flex items-center justify-between border-t border-accent py-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-1">
        <CommandShortcut className="rounded-md bg-muted p-2">
          ⌘K
        </CommandShortcut>
        <div>focus</div>
      </div>

      <div className="flex items-center gap-1">
        <CommandShortcut className="rounded-md bg-muted p-2">
          <ArrowUp className="h-3 w-3" />
        </CommandShortcut>
        <CommandShortcut className="rounded-md bg-muted p-2">
          <ArrowDown className="h-3 w-3" />
        </CommandShortcut>
        <div>navigate</div>
      </div>

      <div className="flex items-center gap-1">
        <CommandShortcut className="rounded-md bg-muted p-2">
          <CornerDownLeft className="h-3 w-3" />
        </CommandShortcut>
        <div>select</div>
      </div>
    </div>
  )
}
