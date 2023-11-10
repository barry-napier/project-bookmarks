import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { BookmarkIcon } from "lucide-react";
import Link from "next/link";
import { manrope } from "./layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-radial-gradient"></div>
          <header>
            <div className="container mx-auto py-8 flex items-center justify-between">
              <Link
                href="\"
                className="text-muted-foreground hover:text-foreground"
              >
                <BookmarkIcon className="w-8 h-8" />
              </Link>
              <div className="w-8 h-8 rounded-full border-muted-foreground border-2"></div>
            </div>
          </header>
          <main className="container mx-auto flex-grow">{children}</main>
          <footer className="w-full border-t text-sm bg-background">
            <div className="container mx-auto py-8 flex items-center justify-between">
              <div className="text-muted-foreground">
                © {new Date().getFullYear()} bookmarking.io
              </div>
              <ModeToggle />
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
