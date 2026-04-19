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
    <div className="relative bg-teal-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-3xl lg:text-5xl font-bold text-white">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-seafoam">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
