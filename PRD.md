# Product Requirements Document (PRD)

## TechTank TO — Website

**Source:** https://www.techtankto.com/
**Document date:** 2026-04-18
**Status:** Discovery / redesign baseline

---

## 1. Product Overview

TechTank TO (TechTank) is a volunteer-run, Toronto-based tech community
organization founded in 2022. The `techtankto.com` website is the public-facing
hub that explains who TechTank is, what it does, and how community members,
speakers, sponsors, and donors can participate.

The site is a content-driven marketing and community-engagement website. It
does not host a user account system or host ticketing itself; it funnels
visitors to external platforms (Meetup, Luma, LinkedIn, Slack, GitHub, YouTube,
Instagram) for RSVPs, communications, and event operations, and to payment
processors (Stripe, Interac E-Transfer) for donations.

### 1.1 Mission

Foster a supportive and inclusive environment where individuals of all skill
levels can explore, create, and thrive in technology, aiming to make tech
accessible, engaging, and empowering through collaboration and diversity.

### 1.2 Audience

- Junior / early-career software developers (primary)
- Designers, PMs, and other tech-adjacent roles
- Experienced professionals open to mentoring or speaking
- Companies that want to sponsor/host events or recruit
- Donors who want to support the community

### 1.3 Goals (product)

1. Explain what TechTank is and build trust with newcomers.
2. Convert visitors into event attendees (via Meetup / Luma).
3. Convert qualified visitors into speakers, mentors, or venue hosts.
4. Collect donations to fund event operations.
5. Centralize links to all external community channels.

### 1.4 Success metrics (suggested)

- RSVP click-throughs to Meetup / Luma
- Host / Speak / Mentor form submissions
- Donation conversions (Stripe + Interac)
- Returning visitors (engagement with Activities/Events)
- Newsletter / LinkedIn follow click-through

---

## 2. Information Architecture

Top-level pages (all reachable from the primary nav and/or footer):

| Path | Title | Purpose |
|---|---|---|
| `/` | Home | Entry point, overview, primary CTAs |
| `/about` | About | Mission, story, values |
| `/activities` | Activities | Programs (Guppy Talks, Study Tank, Code Diversity, Socials, Mentorship) |
| `/events` | Upcoming Events | Listing of current and upcoming events |
| `/events/:slug` | Event detail | Individual event description, date/time, RSVP |
| `/mentors` | Mentors | Pitch for becoming a mentor + signup |
| `/speak` | Speak | Pitch for becoming a speaker + signup |
| `/host` | Host Us | Pitch for companies to sponsor / host events |
| `/donate` | Donate | Donation methods (Stripe, Interac) |
| `/terms-conditions` | Donation Terms & Conditions | Legal terms for donations |

### 2.1 Global navigation

- Primary nav: About, Activities, Events, Mentors, Speak, Host Us, Donate
- Footer: same nav + social links (LinkedIn, Instagram, YouTube, GitHub,
  Meetup, Linktree), contact email `techtankto@gmail.com`, link to
  Donation Terms & Conditions.

### 2.2 External destinations referenced across the site

- Meetup: https://www.meetup.com/techtank-to/
- Luma (event RSVPs)
- LinkedIn: https://ca.linkedin.com/company/techtank-to
- Instagram: https://www.instagram.com/techtankto/
- YouTube: https://www.youtube.com/@TechTankTo
- GitHub: https://github.com/tech-tankorg
- Linktree: https://linktr.ee/techtankto
- Guppy Talks podcast (external listing)

---

## 3. Key User Journeys

1. **Newcomer discovers TechTank** → lands on Home → reads About → clicks
   Events → RSVPs on Meetup/Luma.
2. **Aspiring speaker** → Home → Speak → submits speaker form.
3. **Potential mentor** → Home → Mentors → submits mentor form.
4. **Company sponsor** → Home → Host Us → contacts TechTank about venue.
5. **Supporter** → Home → Donate → reviews Terms → pays via Stripe or Interac.
6. **Returning member** → directly to Events or Activities to see what's new.

---

## 4. Page-Level Requirements (Index)

Detailed requirements for each page live in the `pages/` directory:

- [pages/home.md](pages/home.md)
- [pages/about.md](pages/about.md)
- [pages/activities.md](pages/activities.md)
- [pages/events.md](pages/events.md)
- [pages/mentors.md](pages/mentors.md)
- [pages/speak.md](pages/speak.md)
- [pages/host.md](pages/host.md)
- [pages/donate.md](pages/donate.md)
- [pages/terms-conditions.md](pages/terms-conditions.md)

---

## 5. Content, Brand & Tone

- Brand voice: friendly, welcoming, beginner-safe, Toronto-local, inclusive.
- Visual motifs: aquatic / fish metaphors ("Guppy Talks", "Tank", 🐟🐠🐟).
- Emphasis on accessibility for non-experts and underrepresented folks in tech
  (Code Diversity program for women & non-binary).
- Community-run, non-commercial tone; transparent about being volunteer-led.

---

## 6. Functional Requirements

### 6.1 Must-have

- Responsive static/marketing site (mobile-first).
- Navigation + footer present on every page.
- Event listings with individual detail pages.
- Contact / intake forms for Speak, Mentors, Host Us (or clear mailto/fallback).
- Donate page with Stripe checkout + Interac E-Transfer instructions.
- Social share / Open Graph metadata on all pages, especially event pages.
- Links out to Meetup / Luma / LinkedIn / GitHub / YouTube / Instagram.
- Accessible: WCAG 2.1 AA (color contrast, alt text, keyboard nav, semantic
  headings, focus states).

### 6.2 Should-have

- Content-editable event data (CMS or structured markdown).
- Automatic sorting of events by date, with a "past events" archive.
- Embedded newsletter / mailing-list signup.
- SEO-friendly slugs, sitemap, robots.txt.
- Analytics (privacy-respecting — e.g., Plausible).

### 6.3 Nice-to-have

- Embedded Guppy Talks podcast player.
- Mentor/speaker directory (public profiles, opt-in).
- Calendar (.ics) download for events.
- Dark mode.

---

## 7. Non-Functional Requirements

- **Performance:** Core Web Vitals "Good" on mobile; LCP < 2.5s.
- **SEO:** Proper titles, meta descriptions, structured data for `Event`
  schema.org on event pages.
- **Reliability:** Static hosting with CDN preferred.
- **Privacy:** Minimal PII collected. Donation data is handled by Stripe /
  Interac — nothing stored externally by TechTank (per existing terms).
- **Jurisdiction:** Governed by the laws of Ontario, Canada.

---

## 8. Out of Scope

- Member account system / login
- Paid ticketing (RSVPs are free and handled via Meetup/Luma)
- E-commerce / merchandise store
- Native mobile app

---

## 9. Open Questions

- Do we want a first-party event RSVP flow, or stay on Meetup/Luma?
- Should mentor / speaker / host intake be forms on-site or external
  (Typeform, Google Forms)?
- Should there be a blog or is the Guppy Talks podcast the primary content
  channel?
- Do we want a public team page listing admins / organizers?
