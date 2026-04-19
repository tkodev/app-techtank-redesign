import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { StatsStrip } from "@/components/ui/stats-strip";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { RoleCard, roleCardsData } from "@/components/ui/role-card";
import { EventCard } from "@/components/ui/event-card";
import { DualCTA } from "@/components/ui/dual-cta";
import { testimonials } from "@/lib/data/testimonials";
import { getRecentEvents } from "@/lib/data/events";

export default function HomePage() {
  const recentEvents = getRecentEvents(3);
  const featuredTestimonials = testimonials.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-brand opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            {/* Overline */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Toronto · Monthly · Since 2022
            </span>

            {/* Headline */}
            <h1 className="font-display text-4xl font-semibold text-foreground lg:text-6xl text-balance mb-6">
              Toronto&apos;s inclusive tech community
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted leading-relaxed mb-8 max-w-2xl">
              Foster a supportive and inclusive environment where people of all
              skill levels can explore, create, and thrive in technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" asChild>
                <a
                  href="https://lu.ma/techtank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP on Luma
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://forms.gle/slack-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join our Slack
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip / Stats */}
      <StatsStrip />

      {/* Testimonials Section */}
      <Section>
        <SectionHeader
          overline="What people are saying"
          title="Hear from our community"
          description="From first-time attendees to seasoned speakers, here's what makes TechTank special."
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Logo Cloud */}
      <Section className="py-8 lg:py-12 border-y border-border">
        <LogoCloud />
      </Section>

      {/* Ways to Get Involved */}
      <Section>
        <SectionHeader
          overline="Ways to get involved"
          title="Become part of it"
          description="Every TechTank event runs on the time of community members like you. Here's how you can contribute."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roleCardsData.map((role) => (
            <RoleCard key={role.role} {...role} />
          ))}
        </div>
      </Section>

      {/* Recent Events */}
      <Section className="bg-background">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <SectionHeader
            overline="Recent events"
            title="What's happening"
            description="Join the next event or explore recaps from previous meetups."
          />
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-semibold text-teal hover:text-teal/80 transition-colors"
          >
            View all events
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {recentEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      {/* Values Teaser */}
      <Section className="gradient-brand-soft">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            Our values
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Community. Innovation. Teamwork. Respect.
          </h2>
          <p className="text-lg text-muted mb-8">
            These four pillars guide everything we do at TechTank. Learn more
            about what drives us and how we build an inclusive community.
          </p>
          <Button variant="outline" asChild>
            <Link href="/about">Learn about our values</Link>
          </Button>
        </div>
      </Section>

      {/* Dual End-of-Page CTA */}
      <Section>
        <DualCTA />
      </Section>

      {/* Supported By Strip */}
      <Section className="py-8 lg:py-12 border-t border-border">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
          <span>Supported by</span>
          <span className="font-semibold text-foreground">Shopify</span>
          <span className="text-border">·</span>
          <span className="font-semibold text-foreground">Wealthsimple</span>
          <span className="text-border">·</span>
          <span className="font-semibold text-foreground">Figma</span>
          <span className="text-border">·</span>
          <span className="font-semibold text-foreground">RBC</span>
          <span className="text-border">·</span>
          <span className="font-semibold text-foreground">Cohere</span>
        </div>
      </Section>
    </>
  );
}
