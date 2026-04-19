import { getAllSponsors } from "@/lib/data/sponsors";

interface LogoCloudProps {
  title?: string;
}

export function LogoCloud({
  title = "Companies that have supported TechTank",
}: LogoCloudProps) {
  const sponsors = getAllSponsors();

  return (
    <div className="py-12">
      <p className="text-center text-sm text-muted mb-8">{title}</p>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            title={sponsor.name}
          >
            {/* Placeholder logo - using text for now */}
            <div className="h-8 px-4 flex items-center justify-center text-lg font-semibold text-muted/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300">
              {sponsor.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
