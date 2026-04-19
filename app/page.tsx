import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { StatsStrip } from "@/components/ui/stats-strip";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { RoleCard, roleCardsData } from "@/components/ui/role-card";
import { EventCard } from "@/components/ui/event-card";
import { DualCTA } from "@/components/ui/dual-cta";
import { SocialFeed } from "@/components/ui/social-feed";
import { getRecentEvents } from "@/lib/data/events";

export default function HomePage() {
  const recentEvents = getRecentEvents(3);

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
              Where Toronto tech actually hangs out
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted leading-relaxed mb-8 max-w-2xl">
              Real conversations, genuine connections, zero pretense. Join us for panels, 
              firesides, and workshops where everyone&apos;s welcome to pull up a chair.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" asChild>
                <a
                  href="https://lu.ma/techtankto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See what&apos;s next
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/how-it-works">
                  Get involved
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip / Stats */}
      <StatsStrip />

      {/* Social Feed Section - Replaces Testimonials */}
      <Section>
        <SectionHeader
          overline="From the community"
          title="See what&apos;s happening"
          description="Real moments from our events. No curated highlights, just genuine vibes from the community."
          className="mb-12"
        />
        <SocialFeed />
      </Section>

      {/* Logo Cloud */}
      <Section className="py-8 lg:py-12 border-y border-border">
        <LogoCloud />
      </Section>

      {/* Recent Events */}
      <Section className="bg-background">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <SectionHeader
            overline="Coming up"
            title="Don&apos;t miss these"
            description="Grab a spot at our next event or catch up on what you missed."
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

      {/* Ways to Get Involved */}
      <Section>
        <SectionHeader
          overline="There&apos;s a spot for you"
          title="Jump in"
          description="TechTank runs on people who show up. Here&apos;s how you can be part of it."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roleCardsData.map((role) => (
            <RoleCard key={role.role} {...role} />
          ))}
        </div>
      </Section>

      {/* Values Teaser */}
      <Section className="gradient-brand-soft">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-4">
            What we&apos;re about
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Community first. Always.
          </h2>
          <p className="text-lg text-muted mb-8">
            We believe tech is better when it&apos;s inclusive. No gatekeeping, no cliques—just 
            people who genuinely want to learn, share, and lift each other up.
          </p>
          <Button variant="outline" asChild>
            <Link href="/about">More about us</Link>
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
