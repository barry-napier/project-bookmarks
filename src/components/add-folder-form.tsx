"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useToast } from "./ui/use-toast"

const FormSchema = z.object({
  folderName: z.string().min(1, {
    message: "Name must be at least 1 characters.",
  }),
})

export function AddFolderForm({ userId }: { userId: string }) {
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      folderName: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { folderName } = data

    try {
      const newFolder = await fetch("/api/folders", {
        method: "POST",
        body: JSON.stringify({ folderName, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      router.push("/dashboard")
      router.refresh()

      toast({
        title: "Folder added",
        description: "Folder has been added to your list.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while adding your bookmark.",
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 md:w-2/3"
      >
        <FormField
          control={form.control}
          name="folderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Example" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-auto">
          Submit
        </Button>
      </form>
    </Form>
  )
}
