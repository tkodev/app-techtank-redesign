export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
  type: "host" | "sponsor";
}

export const sponsors: Sponsor[] = [
  {
    id: "shopify",
    name: "Shopify",
    logo: "/images/sponsors/shopify.svg",
    url: "https://shopify.com",
    type: "host",
  },
  {
    id: "wealthsimple",
    name: "Wealthsimple",
    logo: "/images/sponsors/wealthsimple.svg",
    url: "https://wealthsimple.com",
    type: "host",
  },
  {
    id: "figma",
    name: "Figma",
    logo: "/images/sponsors/figma.svg",
    url: "https://figma.com",
    type: "host",
  },
  {
    id: "rbc",
    name: "RBC",
    logo: "/images/sponsors/rbc.svg",
    url: "https://rbc.com",
    type: "host",
  },
  {
    id: "cohere",
    name: "Cohere",
    logo: "/images/sponsors/cohere.svg",
    url: "https://cohere.com",
    type: "sponsor",
  },
  {
    id: "td",
    name: "TD Bank",
    logo: "/images/sponsors/td.svg",
    url: "https://td.com",
    type: "host",
  },
  {
    id: "clio",
    name: "Clio",
    logo: "/images/sponsors/clio.svg",
    url: "https://clio.com",
    type: "host",
  },
  {
    id: "1password",
    name: "1Password",
    logo: "/images/sponsors/1password.svg",
    url: "https://1password.com",
    type: "sponsor",
  },
];

export function getAllSponsors(): Sponsor[] {
  return sponsors;
}

export function getHosts(): Sponsor[] {
  return sponsors.filter((s) => s.type === "host");
}

export function getSponsorsOnly(): Sponsor[] {
  return sponsors.filter((s) => s.type === "sponsor");
}
