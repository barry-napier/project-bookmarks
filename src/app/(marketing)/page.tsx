import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Features } from "@/components/features"
import { MarketingHeader } from "@/components/marketing-header"
import Pricing from "@/components/pricing"

export default function MarketingPage() {
  return (
    <div>
      <MarketingHeader />
      <section>
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
          <div className="mx-auto">
            <Badge className="w-auto">bookmarking.io</Badge>
          </div>
          <h1 className="mt-6 text-center text-5xl font-bold tracking-tight [text-wrap:balance] md:text-6xl">
            Effortlessly Save, Organize, & Find Your Favorite Links
          </h1>
          <p className="mb-10 mt-6 px-8 text-center text-muted-foreground [text-wrap:balance]">
            Simplify Your Web Life with Our Intuitive Bookmark Manager. Unlock
            the ability to Save, Organize, and Find Your Favorite Links Across
            Devices and Browsers, with Real-Time Syncing.
          </p>
          <Link href="/sign-up" className="text-center">
            <Button size="xl" className="w-full md:w-auto">
              Get Started
            </Button>
          </Link>
        </div>
        <div>
          <div className="mb-10 hidden w-full rounded-xl border bg-background p-1 shadow-2xl shadow-[#777] md:block">
            <div className="flex items-center ">
              <div className="flex items-center gap-2 p-4">
                <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
                <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
                <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
              </div>

              <div className="flex grow items-center gap-2 p-3 px-8">
                <div className="w-full rounded-sm border bg-muted py-1 text-center text-sm text-muted-foreground">
                  bookmarking.io
                </div>
              </div>
            </div>
            <div className="flex rounded-md">
              <Image
                alt="bookmarking.io banner image"
                src="/banner.png"
                className="overflow-hidden rounded-b-lg border"
                width="1326"
                height="1009"
              />
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Pricing />
    </div>
  )
}
