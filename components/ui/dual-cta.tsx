import Link from "next/link";
import { Calendar, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DualCTA() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Never miss an event */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal/5 to-teal/10 border border-teal/20 p-6 lg:p-8">
        <Calendar className="absolute top-6 right-6 h-20 w-20 text-teal/10" />
        <div className="relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-3">
            Stay in the loop
          </span>
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
            Never miss an event
          </h3>
          <p className="text-muted mb-6 max-w-md">
            Subscribe to our Luma calendar to be notified when the next event
            goes live.
          </p>
          <Button variant="primary" asChild>
            <a
              href="https://lu.ma/techtank"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Luma
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Want to contribute? */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber/5 to-amber/10 border border-amber/20 p-6 lg:p-8">
        <Users className="absolute top-6 right-6 h-20 w-20 text-amber/10" />
        <div className="relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber mb-3">
            Get involved
          </span>
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
            Want to contribute?
          </h3>
          <p className="text-muted mb-6 max-w-md">
            Speak, host, sponsor, or volunteer for the next event. Multiple ways
            to get involved.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/how-it-works">Get involved</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
