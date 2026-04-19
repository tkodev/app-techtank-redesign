export interface Event {
  id: string;
  eventNumber: number;
  title: string;
  pitch: string;
  date: string;
  time: string;
  venue: string;
  venueAddress?: string;
  capacity: number;
  tags: string[];
  status: "upcoming" | "past";
  rsvpUrl?: string;
  photosUrl?: string;
  youtubeUrl?: string;
  posterImage?: string;
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
    company?: string;
    talkTitle: string;
    image?: string;
  }[];
}

export const events: Event[] = [
  {
    id: "event-cache",
    eventNumber: 16,
    title: "Save CI Time with Built-In Flags",
    pitch: "Native Caching for Faster, Smarter Builds",
    date: "2026-04-13",
    time: "6:30 PM - 9:00 PM",
    venue: "BrainStation",
    venueAddress: "460 King St W, Toronto",
    capacity: 100,
    tags: ["DevOps", "CI/CD", "Beginner-friendly"],
    status: "upcoming",
    rsvpUrl: "https://lu.ma/techtank-16",
    posterImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brainstation%20-%20Meetup-biF1zd6uLklCH2G07z4bhHDaOaO5KE.png",
    sponsor: {
      name: "BrainStation",
      url: "https://brainstation.io",
    },
    speakers: [
      {
        name: "Emily Xiong",
        title: "Software Developer",
        company: "Stackadapt",
        talkTitle: "Save CI Time with Built-In Flags",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brainstation%20-%20Meetup-biF1zd6uLklCH2G07z4bhHDaOaO5KE.png",
      },
    ],
  },
  {
    id: "event-lightning",
    eventNumber: 15,
    title: "Migrating a SaaS Product Across Cloud Providers",
    pitch: "Lightning Talks from senior engineers on cloud migration",
    date: "2025-04-10",
    time: "6:00 PM - 9:00 PM",
    venue: "Vena Solutions",
    venueAddress: "2 Fraser Ave Suite 200, The CUBE, Second Floor",
    capacity: 120,
    tags: ["Cloud", "SaaS", "Architecture"],
    status: "past",
    photosUrl: "https://photos.google.com/techtank-15",
    youtubeUrl: "https://youtube.com/watch?v=techtank-15",
    posterImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Triple%20Speaker%20Poster-pO82lupTezdeLbnG8w0LSc1oubWhSE.png",
    sponsor: {
      name: "Vena",
      url: "https://venasolutions.com",
    },
    speakers: [
      {
        name: "Saiid Douaihy",
        title: "Senior Software Manager",
        talkTitle: "Cloud Migration Strategies",
      },
      {
        name: "Pawan Keer",
        title: "Senior Software Development Manager",
        talkTitle: "Infrastructure at Scale",
      },
      {
        name: "Lucas Tran",
        title: "Senior Software Developer",
        talkTitle: "Lessons from the Trenches",
      },
    ],
  },
  {
    id: "event-codediversity-clay",
    eventNumber: 14,
    title: "Clay & Connection",
    pitch: "A pottery workshop for women and non-binary folks in tech",
    date: "2026-03-14",
    time: "11:00 AM - 2:00 PM",
    venue: "Tiger Baby Ceramics",
    venueAddress: "Toronto",
    capacity: 20,
    tags: ["CodeDiversity", "Workshop", "Community"],
    status: "past",
    posterImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CodeDiversity%20-%20Meetup-0XO3CsPUKalKcJtMdlBSdcyJncN402.png",
    photosUrl: "https://photos.google.com/codediversity-clay",
  },
  {
    id: "event-codediversity",
    eventNumber: 13,
    title: "CodeDiversity Coffee Chat",
    pitch: "Monthly coffee chat and social for women + non-binary folks in tech",
    date: "2026-02-08",
    time: "11:00 AM - 1:00 PM",
    venue: "Prema Coffee and Bar",
    venueAddress: "35 McCaul St #110",
    capacity: 30,
    tags: ["CodeDiversity", "Networking", "Inclusive"],
    status: "past",
    posterImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CodeDiversity%20-%20Meetup%20%281%29-M8pGbZSyN18hxvThJEYVprUcgcB5xr.png",
    photosUrl: "https://photos.google.com/codediversity-coffee",
    host: {
      name: "Prema Coffee",
      url: "https://premacoffee.com",
    },
    speakers: [
      {
        name: "Niki Fereidooni",
        title: "Host",
        talkTitle: "Facilitating conversations",
      },
      {
        name: "Thannia Blanchet",
        title: "Host",
        talkTitle: "Building community",
      },
    ],
  },
  {
    id: "event-mentorship",
    eventNumber: 12,
    title: "Mentorship Meetup",
    pitch: "For Tech Talent in Their First 1-5 Years",
    date: "2025-09-13",
    time: "11:00 AM - 1:00 PM",
    venue: "Prema Coffee and Bar",
    venueAddress: "35 McCaul St #110",
    capacity: 40,
    tags: ["Mentorship", "Career", "Beginner-friendly"],
    status: "past",
    posterImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mentorship%20Poster-dFmJatCn5QvqEOVDiIdlSRyBPFAFsq.png",
    photosUrl: "https://photos.google.com/mentorship-meetup",
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
  return [...upcoming.slice(0, 2), ...past.slice(0, count - 1)];
}

export function getEventStats() {
  return {
    totalEvents: events.length,
    avgAttendance: "40-120",
    cadence: "Monthly",
    since: 2022,
  };
}
