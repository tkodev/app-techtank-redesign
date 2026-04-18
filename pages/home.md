# Home — `/`

**URL:** https://www.techtankto.com/
**Page title:** TechTank TO
**Role:** Primary entry point; introduces TechTank and routes visitors to the
most important actions (attend an event, get involved, donate).

---

## 1. Purpose

Give a first-time visitor, within 10 seconds, a clear answer to:

1. What is TechTank?
2. Why should I care (what's in it for me)?
3. What do I do next?

Encourage attendance at upcoming events and funnel qualified visitors to the
Speak, Mentor, Host, and Donate pages.

## 2. Primary audience

- Toronto-based tech enthusiasts (junior devs first, all levels welcome)
- Designers, PMs, other tech-adjacent roles
- Potential sponsors / speakers / mentors looking to evaluate the community

## 3. Key messages

- "A lively and inclusive tech community that welcomes tech enthusiasts from
  all walks of life."
- Beginner-friendly but open to seasoned professionals.
- Volunteer-run, Toronto-based, founded 2022.
- Multiple ways to plug in: events, mentorship, Guppy Talks, Study Tank,
  Code Diversity, socials.

## 4. Content sections

1. **Hero**
   - Brand lockup (TechTank logo + tagline).
   - One-sentence mission statement.
   - Primary CTA: "See upcoming events" → `/events`.
   - Secondary CTA: "Learn more" → `/about`.

2. **What is TechTank**
   - Short paragraph echoing the About page.
   - Inline link to `/about`.

3. **How to get involved (program cards)**
   Cards for each activity, each linking to `/activities` or the relevant
   sub-section:
   - Tech Tank Socials
   - Guppy Talks (virtual panel series / podcast)
   - Mentorship Program → `/mentors`
   - Study Tank
   - Code Diversity Coffee Chat
   - Community Educators

4. **Upcoming events preview**
   - 2–3 next events pulled from `/events`.
   - CTA: "View all events" → `/events`.

5. **For companies / organizers**
   - "Host us" teaser → `/host`
   - "Speak at TechTank" teaser → `/speak`

6. **Support the community**
   - Short pitch → `/donate`.

7. **Social / channels**
   - Icons + links: Meetup, LinkedIn, Instagram, YouTube, GitHub, Linktree.

8. **Footer** (global)
   - Nav, socials, `techtankto@gmail.com`, Terms & Conditions link.

## 5. Calls to action (priority order)

1. RSVP to the next event (→ Meetup / Luma via `/events`).
2. Explore activities (`/activities`).
3. Become a mentor / speaker / host.
4. Donate (`/donate`).

## 6. Functional requirements

- Upcoming events block must update automatically (or be easy for organizers
  to edit).
- All external links open in a new tab with `rel="noopener noreferrer"`.
- Mobile-first responsive layout.
- Open Graph + Twitter card metadata with TechTank branding.

## 7. Acceptance criteria

- A visitor unfamiliar with TechTank can describe in one sentence what it is
  after reading the hero and first section.
- Every primary program has a clear entry point visible without scrolling
  past a second screen on mobile.
- At least one event CTA is above the fold on desktop and reachable within
  one scroll on mobile.
