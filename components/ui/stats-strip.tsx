import { getEventStats } from "@/lib/data/events";

export function StatsStrip() {
  const stats = getEventStats();

  const items = [
    { value: `${stats.avgAttendance}`, label: "Attendees per event" },
    { value: `${stats.totalEvents}+`, label: "Events hosted" },
    { value: stats.cadence, label: "Cadence" },
    { value: `Since ${stats.since}`, label: "Serving Toronto tech" },
  ];

  return (
    <div className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
