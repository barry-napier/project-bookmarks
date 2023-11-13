import { ChevronDown, PlusIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function AddNewButton() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <PlusIcon className="w-4 h-4 md:hidden" />
              <div className="hidden md:block">Add New</div>
              <ChevronDown className="w-4 h-4 hidden md:block" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/bookmarks/new">Bookmark</Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <Link href="/folders/new">Folder</Link>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
