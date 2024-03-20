import { ModeToggle } from "./mode-toggle"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background text-sm">
      <div className="flex items-center justify-between p-8">
        <div className="text-muted-foreground">
          © {new Date().getFullYear()} bookmarking.io
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}
