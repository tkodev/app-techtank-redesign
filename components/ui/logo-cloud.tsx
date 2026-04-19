import { getAllSponsors } from "@/lib/data/sponsors";

export function LogoCloud() {
  const sponsors = getAllSponsors();

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-12">
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          title={sponsor.name}
        >
          <div className="px-3 py-1.5 flex items-center justify-center text-base font-semibold text-teal-dark/40 hover:text-teal-dark transition-all duration-300">
            {sponsor.name}
          </div>
        </a>
      ))}
    </div>
  );
}
