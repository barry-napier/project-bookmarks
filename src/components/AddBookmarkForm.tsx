"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  url: z.string().url({
    message: "URL must be a valid URL.",
  }),
});

export function AddBookmarkForm() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      url: "https://",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { title, url } = data;

    try {
      const newBookmark = await fetch("/api/bookmarks", {
        method: "POST",
        body: JSON.stringify({ title, url }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.push("/");
      router.refresh();

      toast({
        title: "Bookmark added",
        description: "Bookmark has been added to your list.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while adding your bookmark.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Example" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="https://www.example.com" {...field} />
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
  );
}
