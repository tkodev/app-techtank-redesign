export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  linkedIn?: string;
  type: "attendee" | "speaker" | "host" | "sponsor";
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "TechTank was the first tech event where I felt genuinely welcome as a junior developer. The community is incredibly supportive and the talks are always practical and relevant.",
    name: "Jamie Rodriguez",
    role: "Software Developer",
    company: "Shopify",
    linkedIn: "https://linkedin.com/in/jamierodriguez",
    type: "attendee",
  },
  {
    id: "testimonial-2",
    quote:
      "Speaking at TechTank was a career highlight. The team helped me prepare, the audience was engaged, and my talk on YouTube has helped me connect with developers across Canada.",
    name: "Priya Sharma",
    role: "Senior Engineer",
    company: "Wealthsimple",
    linkedIn: "https://linkedin.com/in/priyasharma",
    type: "speaker",
  },
  {
    id: "testimonial-3",
    quote:
      "Hosting TechTank at our office was the best recruiting decision we made this year. We met talented developers in a genuine, non-salesy environment.",
    name: "Michael Chen",
    role: "Engineering Manager",
    company: "Figma",
    linkedIn: "https://linkedin.com/in/michaelchen",
    type: "host",
  },
  {
    id: "testimonial-4",
    quote:
      "As someone transitioning into tech, TechTank gave me the confidence to pursue my first developer role. The mentorship and networking opportunities are unmatched.",
    name: "Alex Thompson",
    role: "Junior Developer",
    company: "TD Bank",
    linkedIn: "https://linkedin.com/in/alexthompson",
    type: "attendee",
  },
  {
    id: "testimonial-5",
    quote:
      "TechTank represents everything great about Toronto's tech community - inclusive, innovative, and genuinely helpful. Proud to be a sponsor.",
    name: "Sarah Williams",
    role: "Head of Developer Relations",
    company: "Cohere",
    linkedIn: "https://linkedin.com/in/sarahwilliams",
    type: "sponsor",
  },
  {
    id: "testimonial-6",
    quote:
      "I gave my first tech talk at TechTank. The organizers were so supportive - they helped me practice, gave feedback on my slides, and made the whole experience amazing.",
    name: "David Park",
    role: "Full Stack Developer",
    company: "Startup Toronto",
    linkedIn: "https://linkedin.com/in/davidpark",
    type: "speaker",
  },
];

export function getTestimonialsByType(type: Testimonial["type"]): Testimonial[] {
  return testimonials.filter((t) => t.type === type);
}
