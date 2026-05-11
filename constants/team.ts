export interface TeamMember {
  name: string;
  pronouns: string;
  role?: string;
  bio?: string;
  avatar?: string;
}

export interface TeamGroup {
  title: string;
  subtitle?: string;
  members: TeamMember[];
}

export const teamGroups: TeamGroup[] = [
  {
    title: "Board of Directors",
    subtitle: "Co-Chairs",
    members: [
      {
        name: "Danny Kim",
        pronouns: "he/him",
        role: "Co-Chair, Board Member & Organizer",
      },
      {
        name: "Niki Fereidooni",
        pronouns: "she/her",
        role: "Co-Chair, Board Member & Organizer",
      },
    ],
  },
  {
    title: "Board of Directors",
    subtitle: "Treasurer",
    members: [
      {
        name: "Sophia Kim",
        pronouns: "she/her",
        role: "Treasurer, Board Member & Organizer",
      },
    ],
  },
  {
    title: "Core Team",
    members: [
      {
        name: "Thannia Blanchet",
        pronouns: "she/her",
        role: "Organizer",
      },
      {
        name: "Tony Ko",
        pronouns: "he/him",
        role: "Digital Lead & Organizer",
      },
      {
        name: "Natasha Kasunic",
        pronouns: "she/her",
      },
      {
        name: "Eileen Xue",
        pronouns: "she/her",
      },
    ],
  },
  {
    title: "Website Team",
    members: [
      { name: "Tony Ko", pronouns: "he/him" },
      { name: "Danny Kim", pronouns: "he/him" },
      { name: "Rohan Villoth", pronouns: "he/him" },
      { name: "Danyal Imran", pronouns: "he/him" },
      { name: "Justin Bento", pronouns: "he/him" },
      { name: "Jyle V.", pronouns: "she/her" },
      { name: "John Malapit", pronouns: "he/him" },
    ],
  },
  {
    title: "Social Media",
    members: [
      { name: "Amanda Collantes", pronouns: "she/her" },
      { name: "Beatrice Yu", pronouns: "she/her" },
      { name: "Sophia Kim", pronouns: "she/her" },
      { name: "Natasha Kasunic", pronouns: "she/her" },
      { name: "Niki Fereidooni", pronouns: "she/her" },
    ],
  },
  {
    title: "Community Volunteers",
    members: [
      { name: "Charu Idnani", pronouns: "she/her", role: "CodeDiversity" },
      { name: "Garv Gupta", pronouns: "she/her", role: "General" },
      { name: "Nhi Nguyen", pronouns: "she/her", role: "General, CodeDiversity" },
      { name: "Rana Soyak", pronouns: "she/her", role: "General" },
      { name: "John Malapit", pronouns: "he/him", role: "General, Sashimis (Sports)" },
      { name: "Rohan Villoth", pronouns: "he/him", role: "General" },
      { name: "Danyal Imran", pronouns: "he/him", role: "General" },
      { name: "Justin Bento", pronouns: "he/him", role: "General" },
    ],
  },
];
