"use client";

import { ChevronDown, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function AddNewButton() {
  const router = useRouter();

  return (
    <>
      <DropdownMenu modal={false}>
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
          <DropdownMenuItem onSelect={() => router.push(`/bookmarks/new`)}>
            <Link href="/bookmarks/new">Bookmark</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => router.push(`/folders/new`)}>
            <Link href="/folders/new">Folder</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
