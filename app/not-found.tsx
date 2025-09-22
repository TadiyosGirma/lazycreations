export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-orbitron animate-pulse">404</div>
        <p className="text-muted-foreground mt-2">
          The page you’re looking for glitched out.
        </p>
      </div>
    </div>
  );
}
