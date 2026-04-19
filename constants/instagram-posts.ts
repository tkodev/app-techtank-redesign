export interface InstagramPostMedia {
  type: "image" | "video";
  url: string;
}

export interface InstagramPost {
  caption: string;
  date: string;
  shortcode: string;
  pk: number;
  createdAtRaw: number;
  media: InstagramPostMedia[];
}

export const instagramPosts: Record<string, InstagramPost> = {
  "2024-05-14-C69JJhR2qP": {
    caption:
      "🌟 Dive into the world of AI Prompting with us at #StudyTank! 🚀\nJoin our StudyTank session tonight at 7:00 p.m. as we explore the art of crafting well-written prompts to elicit desired behaviors from AI models.\nDon't miss out on practical tips from our guest teacher, Nhi Nguyen!\nRSVP now at the link in our bio on the app Meetup\nhttps://www.meetup.com/techtank-to/events/300782288\n#AI #TechTalks #StudyTank #TechTank #TechTankTo #FollowUs #TechCommunity #followforfollowback #follow4followback #onlineevent #onlineevents #aiprompts #techenthusiast #techenthusiasts #coder #programmer #dev #developer #designer\n#techtanktoronto #swimwithus #iykyk #foryou #technology #aiprompt #artificialintellegence #toolsandtips #lifehack #quicktips\n#careergrowth",
    date: "2024-05-14",
    shortcode: "C69JJh-R2qP",
    pk: 18027008243035969,
    createdAtRaw: 1715703598,
    media: [
      {
        type: "image",
        url: "2024-05-14-C69JJhR2qP/techtankto_C69JJh-R2qP_3367888333715237519.jpg",
      },
    ],
  },
};
