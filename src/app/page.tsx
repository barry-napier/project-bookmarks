import { ArrowDown } from "lucide-react";
import { BookmarkList } from "../components/bookmark-list";

export default function Home() {
  function handlePaste() {
    console.log("paste");
  }

  return (
    <main className="mb-48">
      <section>
        <header className="flex items-center text-3xl md:text-5xl">
          <div className="py-8 font-medium tracking-tight">
            Bookmarks in&nbsp;
          </div>
          <div className="py-8 font-medium tracking-tight text-muted-foreground flex items-center">
            Work
            <ArrowDown className="w-8 h-8 inline-block ml-4" />
          </div>
        </header>
        <main className="my-4">
          <BookmarkList />
        </main>
      </section>
    </main>
  );
}
