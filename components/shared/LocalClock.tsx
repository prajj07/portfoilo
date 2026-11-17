"use client";

import { useEffect, useState } from "react";
import { formatKolkataTime } from "@/lib/time";
import { cn } from "@/lib/utils";

export function LocalClock({ className }: { className?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const sync = () => setTime(formatKolkataTime());
    sync();
    const id = window.setInterval(sync, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground tabular-nums",
        className,
      )}
      dateTime={time ? `1970-01-01T${time}:00+05:30` : undefined}
      title="Asia/Kolkata"
    >
      {time ? `${time} IST` : "— IST"}
    </time>
  );
}
