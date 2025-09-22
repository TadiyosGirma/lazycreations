"use client";

import { useEffect, useState } from "react";

const items = [
  { label: "Hours saved / wk", value: 10 },
  { label: "Lead response ↑", value: 3 },
  { label: "Intake time ↓", value: 40 },
];

export function Metrics() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {items.map((m) => (
        <Counter key={m.label} label={m.label} value={m.value} />
      ))}
    </div>
  );
}

function Counter({ label, value }: { label: string; value: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 800;
    const step = 16;
    const inc = end / (duration / step);
    const id = setInterval(() => {
      start += inc;
      if (start >= end) {
        start = end;
        clearInterval(id);
      }
      setN(Math.round(start));
    }, step);
    return () => clearInterval(id);
  }, [value]);

  return (
    <div className="text-center glass rounded-xl p-6">
      <div className="text-4xl font-display font-bold">
        {n}
        {label.includes("↓") ? "%" : label.includes("↑") ? "x" : "+"}
      </div>
      <div className="text-muted-foreground mt-1 text-sm">{label}</div>
    </div>
  );
}
