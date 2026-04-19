import Link from "next/link";
import { Calendar, Clock, MapPin, Users, ExternalLink, Camera, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/data/events";

interface EventCardProps {
  event: Event;
  variant?: "featured" | "compact";
}

export function EventCard({ event, variant = "compact" }: EventCardProps) {
  const hasRecap = event.photosUrl || event.youtubeUrl;
  const isUpcoming = event.status === "upcoming";

  const formattedDate = new Date(event.date).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (variant === "featured") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-white border border-border">
        <div className="p-6 lg:p-8">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                isUpcoming
                  ? "bg-teal/10 text-teal"
                  : "bg-amber/10 text-amber"
              }`}
            >
              {isUpcoming ? "Upcoming" : "Recap Available"}
            </span>
            <span className="text-sm font-medium text-muted">
              Event {event.eventNumber}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2">
            {event.title}
          </h3>
          <p className="text-muted mb-6">{event.pitch}</p>

          {/* Event Details */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Calendar className="h-4 w-4 text-teal" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Clock className="h-4 w-4 text-teal" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-teal" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Users className="h-4 w-4 text-teal" />
              <span>{event.capacity} seats</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full bg-background text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Host/Sponsor Attribution */}
          {event.host && (
            <div className="flex items-center gap-2 text-sm text-muted mb-6">
              <span>Hosted by</span>
              <span className="font-semibold text-foreground">
                {event.host.name}
              </span>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            {isUpcoming && event.rsvpUrl ? (
              <Button variant="primary" asChild>
                <a
                  href={event.rsvpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP on Luma
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <>
                {event.photosUrl && (
                  <Button variant="outline" asChild>
                    <a
                      href={event.photosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      View Photos
                    </a>
                  </Button>
                )}
                {event.youtubeUrl && (
                  <Button variant="outline" asChild>
                    <a
                      href={event.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Talk
                    </a>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Compact variant
  return (
    <div className="group relative flex flex-col bg-white rounded-xl border border-border p-5 hover:border-teal/50 hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isUpcoming
              ? "bg-teal/10 text-teal"
              : hasRecap
              ? "bg-amber/10 text-amber"
              : "bg-muted/10 text-muted"
          }`}
        >
          {isUpcoming ? "Upcoming" : hasRecap ? "Recap" : "Past"}
        </span>
        <span className="text-xs font-medium text-muted">
          Event {event.eventNumber} · {formattedDate}
        </span>
      </div>

      {/* Title */}
      <h4 className="font-display text-lg font-semibold text-foreground mb-2">
        {event.title}
      </h4>

      {/* Details */}
      <div className="flex flex-wrap gap-3 text-sm text-muted mb-4">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {event.venue}
        </span>
      </div>

      {/* Host Attribution */}
      {event.host && (
        <p className="text-xs text-muted mb-4">
          Hosted by{" "}
          <span className="font-medium text-foreground">{event.host.name}</span>
        </p>
      )}

      {/* CTA */}
      <div className="mt-auto pt-4">
        {isUpcoming && event.rsvpUrl ? (
          <Button variant="primary" size="sm" className="w-full" asChild>
            <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
              RSVP on Luma
            </a>
          </Button>
        ) : hasRecap ? (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a
              href={event.photosUrl || event.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Recap
            </a>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
