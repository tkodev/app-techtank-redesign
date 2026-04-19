export interface Event {
  id: string;
  eventNumber: number;
  title: string;
  pitch: string;
  date: string; // ISO date string
  time: string;
  venue: string;
  venueAddress?: string;
  capacity: number;
  tags: string[];
  status: "upcoming" | "past";
  rsvpUrl?: string;
  photosUrl?: string;
  youtubeUrl?: string;
  host?: {
    name: string;
    logo?: string;
    url?: string;
  };
  sponsor?: {
    name: string;
    logo?: string;
    url?: string;
  };
  speakers?: {
    name: string;
    title: string;
    talkTitle: string;
  }[];
}

export const events: Event[] = [
  {
    id: "event-15",
    eventNumber: 15,
    title: "Building AI-Powered Products",
    pitch: "Learn how Toronto startups are integrating AI into their products",
    date: "2026-05-15",
    time: "6:00 PM - 8:30 PM",
    venue: "Shopify Toronto",
    venueAddress: "620 King St W, Toronto",
    capacity: 120,
    tags: ["AI/ML", "Product", "Beginner-friendly"],
    status: "upcoming",
    rsvpUrl: "https://lu.ma/techtank-15",
    host: {
      name: "Shopify",
      logo: "/images/sponsors/shopify.svg",
      url: "https://shopify.com",
    },
    speakers: [
      {
        name: "Sarah Chen",
        title: "ML Engineer at Cohere",
        talkTitle: "From Prototype to Production: Shipping AI Features",
      },
    ],
  },
  {
    id: "event-14",
    eventNumber: 14,
    title: "Scaling Your First Startup",
    pitch: "Lessons from Toronto founders who scaled from 0 to Series A",
    date: "2026-04-10",
    time: "6:00 PM - 8:30 PM",
    venue: "Wealthsimple HQ",
    venueAddress: "80 Spadina Ave, Toronto",
    capacity: 100,
    tags: ["Startups", "Scaling", "Fundraising"],
    status: "past",
    rsvpUrl: "https://lu.ma/techtank-14",
    photosUrl: "https://photos.google.com/techtank-14",
    youtubeUrl: "https://youtube.com/watch?v=techtank-14",
    host: {
      name: "Wealthsimple",
      logo: "/images/sponsors/wealthsimple.svg",
      url: "https://wealthsimple.com",
    },
    speakers: [
      {
        name: "Marcus Johnson",
        title: "Founder at TechStartup",
        talkTitle: "The Zero to One Journey",
      },
    ],
  },
  {
    id: "event-13",
    eventNumber: 13,
    title: "Design Systems That Scale",
    pitch: "How top Toronto companies build and maintain design systems",
    date: "2026-03-12",
    time: "6:00 PM - 8:30 PM",
    venue: "Figma Toronto",
    venueAddress: "100 Adelaide St W, Toronto",
    capacity: 110,
    tags: ["Design", "Frontend", "Systems"],
    status: "past",
    photosUrl: "https://photos.google.com/techtank-13",
    youtubeUrl: "https://youtube.com/watch?v=techtank-13",
    host: {
      name: "Figma",
      logo: "/images/sponsors/figma.svg",
      url: "https://figma.com",
    },
    speakers: [
      {
        name: "Priya Patel",
        title: "Design Lead at Figma",
        talkTitle: "Building Design Systems from Scratch",
      },
    ],
  },
  {
    id: "event-12",
    eventNumber: 12,
    title: "DevOps Best Practices",
    pitch: "Modern infrastructure patterns for growing engineering teams",
    date: "2026-02-08",
    time: "6:00 PM - 8:30 PM",
    venue: "RBC Waterpark Place",
    venueAddress: "88 Queens Quay W, Toronto",
    capacity: 120,
    tags: ["DevOps", "Infrastructure", "Cloud"],
    status: "past",
    photosUrl: "https://photos.google.com/techtank-12",
    youtubeUrl: "https://youtube.com/watch?v=techtank-12",
    host: {
      name: "RBC",
      logo: "/images/sponsors/rbc.svg",
      url: "https://rbc.com",
    },
    speakers: [
      {
        name: "Alex Thompson",
        title: "Staff Engineer at RBC",
        talkTitle: "Kubernetes at Scale",
      },
    ],
  },
];

export function getUpcomingEvents(): Event[] {
  return events
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getPastEvents(): Event[] {
  return events
    .filter((e) => e.status === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentEvents(count: number = 3): Event[] {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();
  return [...upcoming.slice(0, 1), ...past.slice(0, count - 1)];
}

export function getEventStats() {
  return {
    totalEvents: events.length,
    avgAttendance: "100-120",
    cadence: "Monthly",
    since: 2022,
  };
}
