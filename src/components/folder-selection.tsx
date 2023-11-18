"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Folder } from "@prisma/client";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export function FolderSelection({
  folders,
  selectedFolder = null,
}: {
  folders: Folder[];
  selectedFolder?: Folder | null;
}) {
  const router = useRouter();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="font-medium tracking-tight text-muted-foreground flex items-center text-2xl md:text-5xl">
          <div className="flex items-center gap-2">
            <ChevronDown className="w-8 h-8" />
            {selectedFolder ? selectedFolder.name : "All"}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem onSelect={() => router.push("/dashboard")}>
          All
        </DropdownMenuItem>
        {folders.map((folder) => (
          <DropdownMenuItem
            onSelect={() => router.push(`/folders/${folder.id}`)}
            key={folder.id}
          >
            {folder.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
