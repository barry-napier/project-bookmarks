"use client"

import { useRouter } from "next/navigation"
import { Folder } from "@prisma/client"
import { ChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function FolderSelection({
  folders,
  selectedFolder = null,
}: {
  folders: Folder[]
  selectedFolder?: Folder | null
}) {
  const router = useRouter()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center text-2xl font-medium tracking-tight text-muted-foreground md:text-5xl">
          <div className="flex items-center gap-2">
            <ChevronDown className="h-8 w-8" />
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
  )
}
