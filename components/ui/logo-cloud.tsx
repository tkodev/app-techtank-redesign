import Image from "next/image";
import { getAllSponsors } from "@/lib/data/sponsors";

export function LogoCloud() {
  const sponsors = getAllSponsors();

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-x-12">
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          title={sponsor.name}
        >
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={100}
            height={28}
            className="h-7 w-auto object-contain"
          />
        </a>
      ))}
    </div>
  );
}
