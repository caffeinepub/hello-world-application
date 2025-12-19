export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold">Hello World App</h1>
        </div>
      </div>
    </header>
  );
}
