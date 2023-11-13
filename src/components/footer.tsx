import { ModeToggle } from "./mode-toggle";

export function Footer() {
  return (
    <footer className="w-full border-t text-sm bg-background">
      <div className="p-8 flex items-center justify-between">
        <div className="text-muted-foreground">
          © {new Date().getFullYear()} bookmarking.io
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
