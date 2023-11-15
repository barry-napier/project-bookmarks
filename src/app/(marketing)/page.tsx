import { MarketingHeader } from "@/components/marketing-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <>
      <MarketingHeader />
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
          <div className="mx-auto">
            <Badge className="w-auto">bookmarking.io</Badge>
          </div>
          <h1 className="tracking-tight text-5xl md:text-6xl font-bold text-center [text-wrap:balance] mt-6">
            Effortlessly Save, Organize, & Find Your Favorite Links
          </h1>
          <p className="text-muted-foreground text-center [text-wrap:balance] px-8 mt-6 mb-10">
            Simplify Your Web Life with Our Intuitive Bookmark Manager. Unlock
            the ability to Save, Organize, and Find Your Favorite Links Across
            Devices and Browsers, with Real-Time Syncing.
          </p>
          <Link href="/bookmarks/new" className="text-center">
            <Button size="xl" className="w-full md:w-auto">
              Get Started
            </Button>
          </Link>
        </div>
        <div>
          <div className="bg-background w-full rounded-xl p-1 border shadow-2xl mb-10 shadow-[#777] hidden md:block">
            <div className="flex items-center ">
              <div className="p-4 flex items-center gap-2">
                <div className="rounded-full w-3 h-3 bg-muted-foreground"></div>
                <div className="rounded-full w-3 h-3 bg-muted-foreground"></div>
                <div className="rounded-full w-3 h-3 bg-muted-foreground"></div>
              </div>

              <div className="p-3 px-8 flex items-center gap-2 grow">
                <div className="w-full bg-muted text-center rounded-sm py-1 text-muted-foreground border text-sm">
                  bookmarking.io
                </div>
              </div>
            </div>
            <div className="flex rounded-md">
              <img
                alt="bookmarking.io banner image"
                src="/banner.png"
                className="overflow-hidden rounded-b-lg border"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
