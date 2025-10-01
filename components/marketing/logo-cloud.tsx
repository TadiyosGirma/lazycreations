import {
  MessageSquare,
  Headphones,
  FileText,
  Receipt,
  BarChart2,
  Activity,
  PenLine,
  Edit3,
} from "lucide-react";

export function LogoCloud({ className = "" }: { className?: string }) {
  const iconSize = "h-12 w-12";
  const glow = {
    filter: "drop-shadow(0 0 10px rgba(0,229,255,0.45))",
  } as const;
  const purpleGlow = {
    filter: "drop-shadow(0 0 10px rgba(139,92,246,0.45))",
  } as const;

  const logos = [
    {
      name: "Support Copilot icon",
      render: () => (
        <MessageSquare
          className={`${iconSize} text-cyan-400`}
          style={glow}
          aria-hidden
        />
      ),
      fallback: () => (
        <Headphones
          className={`${iconSize} text-cyan-400`}
          style={glow}
          aria-hidden
        />
      ),
    },
    {
      name: "Lead to Invoice icon",
      render: () => (
        <FileText
          className={`${iconSize} text-violet-400`}
          style={purpleGlow}
          aria-hidden
        />
      ),
      fallback: () => (
        <Receipt
          className={`${iconSize} text-violet-400`}
          style={purpleGlow}
          aria-hidden
        />
      ),
    },
    {
      name: "Dashboards icon",
      render: () => (
        <BarChart2
          className={`${iconSize} text-sky-400`}
          style={glow}
          aria-hidden
        />
      ),
      fallback: () => (
        <Activity
          className={`${iconSize} text-sky-400`}
          style={glow}
          aria-hidden
        />
      ),
    },
    {
      name: "Content Assistant icon",
      render: () => (
        <PenLine
          className={`${iconSize} text-cyan-400`}
          style={glow}
          aria-hidden
        />
      ),
      fallback: () => (
        <Edit3
          className={`${iconSize} text-cyan-400`}
          style={glow}
          aria-hidden
        />
      ),
    },
  ];
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {logos.map((l) => (
        <div
          key={l.name}
          className="glass rounded-xl p-6 flex items-center justify-center"
          aria-label={l.name}
        >
          {l.render()}
        </div>
      ))}
    </div>
  );
}
