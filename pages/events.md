# Events — `/events` (and `/events/:slug`)

**URL:** https://www.techtankto.com/events
**Page title:** Upcoming Events — TechTank
**Role:** Canonical listing of upcoming (and recent) TechTank events, each
linking to a detail page and/or external RSVP.

---

## 1. Purpose

Let a visitor see what's happening soon, understand whether an event is
relevant to them, and RSVP — ideally in two clicks.

## 2. Primary audience

- Members / returning visitors looking for "what's next"
- Newcomers converted from the home page
- Prospective speakers / mentors / sponsors evaluating activity level

## 3. Key messages

- TechTank runs a mix of **in-person meetups** (usually monthly) and
  **virtual events** (Guppy Talks, Study Tank, Code Diversity).
- Most events are **free** and RSVPs happen on Meetup or Luma.

## 4. Content sections

1. **Hero / intro**
   - "Upcoming Events" headline.
   - One-line description of the cadence and variety of events.

2. **Filters / segmentation (optional)**
   - In-person vs virtual
   - Program (Guppy Talks, Study Tank, Socials, Code Diversity, Educators)

3. **Event list**
   For each event, show:
   - Title
   - Date, time, timezone
   - Format (in-person / virtual) and venue (for in-person)
   - Short description (1–2 sentences)
   - Tag(s) (program name)
   - Primary CTA: RSVP on Meetup / Luma
   - Secondary CTA: "Learn more" → `/events/:slug`

4. **Past / archive (optional)**
   - Collapsed list of recent past events, linking to recordings on YouTube
     or writeups.

5. **Subscribe**
   - Follow on Meetup / LinkedIn / Luma to get notified of new events.

### Example upcoming events referenced on the site

These are real event examples found on techtankto.com — use them as seed
content or to validate the schema:

- **From Junior to Mid-Level & Beyond: Strategies for Career Advancement**
  (VIRTUAL) — `/events/junior-to-mid-level`
- **Code Diversity: Women & Non-Binary Coffee Social**
  — `/events/code-diversity-women-non-binary-coffee-social`
- **Guppy Talks (in-person)** — Roof Garden event space, Toronto
- **AI Prompting with Nhi Nguyen** — practical prompt-writing session

## 5. Event detail page (`/events/:slug`)

Required content:
- Event title and hero image / banner
- Date, start/end time, timezone
- Format: in-person / virtual
- Venue name + address + map embed (in-person) OR platform (virtual)
- Description (long form)
- Agenda / schedule
- Speaker(s) with bio + photo + links
- Host / sponsor logo + link (if in-person)
- RSVP CTA → external (Meetup / Luma)
- Calendar (.ics) download (nice-to-have)
- Social share buttons with Open Graph image
- Related events / program link

## 6. Calls to action (priority order)

1. RSVP (external).
2. View event detail.
3. Follow Meetup / LinkedIn for future events.

## 7. Functional requirements

- Events are sortable by date (ascending for upcoming).
- Past events automatically move to an archive view.
- Structured data: schema.org `Event` for SEO.
- Each event has a unique, slugged URL for social sharing.
- Editable via CMS or markdown front matter.

## 8. Acceptance criteria

- A user can find and RSVP to the next event within two clicks from this
  page.
- Event cards clearly distinguish in-person vs virtual at a glance.
- If no events are scheduled, the page shows a helpful empty state (e.g.,
  "Subscribe to be notified of the next one").
