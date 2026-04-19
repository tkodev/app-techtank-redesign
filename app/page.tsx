import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { StatsStrip } from "@/components/ui/stats-strip";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { RoleCard, roleCardsData } from "@/components/ui/role-card";
import { EventCard } from "@/components/ui/event-card";
import { DualCTA } from "@/components/ui/dual-cta";
import { SocialFeed } from "@/components/ui/social-feed";
import { getRecentEvents, getUpcomingEvents } from "@/lib/data/events";

export default function HomePage() {
  const recentEvents = getRecentEvents(4);
  const upcomingEvents = getUpcomingEvents();
  const featuredEvent = upcomingEvents[0] || recentEvents[0];

  return (
    <>
      {/* Hero Section - Photo-forward with texture */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Gradient Background with texture */}
        <div className="absolute inset-0 gradient-hero texture-grain" />
        
        {/* Decorative event poster collage */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
          <div className="relative h-full w-full">
            {/* Main poster */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-80 photo-frame rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Triple%20Speaker%20Poster-pO82lupTezdeLbnG8w0LSc1oubWhSE.png"
                alt="Lightning Talks at Vena Solutions"
                width={400}
                height={250}
                className="w-full h-auto"
              />
            </div>
            {/* Secondary poster */}
            <div className="absolute right-48 top-16 w-64 photo-frame -rotate-6 hover:rotate-0 transition-transform duration-500 opacity-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CodeDiversity%20-%20Meetup%20%281%29-M8pGbZSyN18hxvThJEYVprUcgcB5xr.png"
                alt="CodeDiversity Coffee Chat"
                width={320}
                height={200}
                className="w-full h-auto"
              />
            </div>
            {/* Tertiary poster */}
            <div className="absolute right-4 bottom-24 w-56 photo-frame rotate-6 hover:rotate-0 transition-transform duration-500 opacity-70">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mentorship%20Poster-dFmJatCn5QvqEOVDiIdlSRyBPFAFsq.png"
                alt="Mentorship Meetup"
                width={280}
                height={175}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            {/* Tag pill */}
            <span className="tag mb-6">
              Toronto &middot; Monthly &middot; Since 2022
            </span>

            {/* Headline */}
            <h1 className="font-display text-5xl font-bold text-teal-dark lg:text-7xl text-balance mb-6 leading-tight">
              Where Toronto tech actually hangs out
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted leading-relaxed mb-8 max-w-xl">
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
        
        {/* Mobile poster preview */}
        <div className="absolute bottom-0 left-0 right-0 lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-8 px-4 snap-x snap-mandatory no-scrollbar">
            {recentEvents.slice(0, 3).map((event) => (
              event.posterImage && (
                <div key={event.id} className="flex-shrink-0 w-64 snap-center photo-frame">
                  <Image
                    src={event.posterImage}
                    alt={event.title}
                    width={256}
                    height={160}
                    className="w-full h-auto"
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip / Stats */}
      <StatsStrip />

      {/* Featured Upcoming Event */}
      {featuredEvent && (
        <Section className="gradient-brand-vertical texture-grain">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              overline="Next up"
              title="Don&apos;t miss this one"
              className="mb-8 text-center"
            />
            <EventCard event={featuredEvent} variant="featured" />
          </div>
        </Section>
      )}

      {/* Recent Events Grid - Photo Forward */}
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <SectionHeader
            overline="From the community"
            title="Recent happenings"
            description="A peek at what we&apos;ve been up to. Real moments, real people."
          />
          <Link
            href="/events"
            className="inline-flex items-center text-sm font-semibold text-coral hover:text-coral/80 transition-colors"
          >
            View all events
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="poster" />
          ))}
        </div>
      </Section>

      {/* Social Feed Section */}
      <Section className="bg-sand/50 texture-grain">
        <SectionHeader
          overline="Follow along"
          title="See what&apos;s happening"
          description="Real moments from our events. No curated highlights, just genuine vibes from the community."
          className="mb-12"
        />
        <SocialFeed />
      </Section>

      {/* Logo Cloud */}
      <Section className="py-12 lg:py-16">
        <p className="text-center text-sm text-muted mb-8 uppercase tracking-widest font-medium">
          Hosted and supported by
        </p>
        <LogoCloud />
      </Section>

      {/* Ways to Get Involved */}
      <Section className="gradient-brand texture-grain">
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

      {/* Values Teaser - Glass card */}
      <Section>
        <div className="glass rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto shadow-soft-lg">
          <span className="tag-outline mb-6 inline-block">
            What we&apos;re about
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-teal-dark mb-6">
            Community first. Always.
          </h2>
          <p className="text-lg text-muted mb-8">
            We believe tech is better when it&apos;s inclusive. No gatekeeping, no cliques—just 
            people who genuinely want to learn, share, and lift each other up.
          </p>
          <Button variant="primary" asChild>
            <Link href="/about">More about us</Link>
          </Button>
        </div>
      </Section>

      {/* Dual End-of-Page CTA */}
      <Section className="gradient-brand-vertical texture-grain">
        <DualCTA />
      </Section>
    </>
  );
}
