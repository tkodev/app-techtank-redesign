# Donate — `/donate`

**URL:** https://www.techtankto.com/donate
**Page title:** Donate — TechTank
**Role:** Convert community members into financial supporters.

---

## 1. Purpose

Explain why donations matter, show exactly where the money goes, and give
frictionless options to donate.

## 2. Primary audience

- Existing community members who've found value in TechTank events
- Alumni who have moved on but want to give back
- Allies of the Toronto tech community

## 3. Key messages

- TechTank is **volunteer-run** and **nonprofit-style**.
- **Any amount donated goes entirely to paying for event operations and
  common community infrastructure** for members.
- Donations are **non-refundable** and **do not entail a transactional
  exchange** with TechTank.
- Two official donation methods: **Interac E-Transfer** and **Stripe**.

## 4. Content sections

1. **Hero**
   - Headline: "Support TechTank."
   - Sub-headline: Every dollar goes to event operations and community
     infrastructure.

2. **Why donate**
   - Venues, AV, food when not covered by a host.
   - Platform costs (Meetup, Luma, domain, website, email).
   - Scholarships / accessibility accommodations (if applicable).

3. **How to donate**
   - **Stripe (credit / debit):** primary CTA button → Stripe checkout.
   - **Interac E-Transfer:** send to `techtankto@gmail.com`.
   - Suggested amounts (optional): $5, $10, $25, custom.

4. **What happens after you donate**
   - Confirmation from Stripe or your bank.
   - TechTank does not store payment info externally — see Terms.

5. **Contact**
   - Questions / corporate donations: `techtankto@gmail.com`.

6. **Legal / fine print**
   - Link to full Donation Terms & Conditions (`/terms-conditions`).
   - Non-refundable.
   - Discretion of TechTank administrators within stated objectives.
   - Governed by laws of Ontario, Canada.

## 5. Calls to action (priority order)

1. Donate via Stripe.
2. Donate via Interac E-Transfer.
3. Contact for other options.

## 6. Functional requirements

- Embedded or linked Stripe checkout (hosted or Payment Link preferred for
  simplicity and PCI scope).
- Clear display of Interac E-Transfer email.
- Link to `/terms-conditions` visible near the donation CTAs.
- Do not collect or store payment data server-side; rely on Stripe / Interac.

## 7. Acceptance criteria

- A user can complete a Stripe donation in ≤ 3 steps from the page.
- The Interac address is copy-paste friendly on mobile.
- Terms link is present near every donate CTA, not only in the footer.
