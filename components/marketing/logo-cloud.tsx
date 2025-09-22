import Image from "next/image";

export function LogoCloud({ className = "" }: { className?: string }) {
  const logos = [
    { name: "Vercel", src: "/vercel.svg" },
    { name: "Next.js", src: "/next.svg" },
    { name: "Window", src: "/window.svg" },
    { name: "Globe", src: "/globe.svg" },
  ];
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70 ${className}`}
    >
      {logos.map((l) => (
        <div
          key={l.name}
          className="glass rounded-xl p-4 flex items-center justify-center"
          aria-label={`${l.name} logo`}
        >
          <Image src={l.src} alt="" width={80} height={24} />
        </div>
      ))}
    </div>
  );
}
