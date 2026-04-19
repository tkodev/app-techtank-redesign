import Link from "next/link";
import { Calendar, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLACK_URL = "https://join.slack.com/t/thetechtank/shared_invite/zt-2oou5qbue-LXNB4M7~C_6CBAImj1kpJA";
const LUMA_URL = "https://luma.com/techtank?period=past";

export function DualCTA() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {/* Never miss an event */}
      <div className="relative overflow-hidden rounded-xl glass p-5 lg:p-6">
        <Calendar className="absolute top-4 right-4 h-16 w-16 text-teal-dark/10" />
        <div className="relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-coral mb-2">
            Stay in the loop
          </span>
          <h3 className="font-display text-lg lg:text-xl font-bold text-teal-dark mb-2">
            Never miss an event
          </h3>
          <p className="text-sm text-muted mb-4 max-w-sm">
            Subscribe to our Luma calendar to get notified.
          </p>
          <Button variant="primary" size="sm" asChild>
            <a
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Luma
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Join the community */}
      <div className="relative overflow-hidden rounded-xl glass p-5 lg:p-6">
        <Users className="absolute top-4 right-4 h-16 w-16 text-coral/10" />
        <div className="relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-coral mb-2">
            Connect with us
          </span>
          <h3 className="font-display text-lg lg:text-xl font-bold text-teal-dark mb-2">
            Join the conversation
          </h3>
          <p className="text-sm text-muted mb-4 max-w-sm">
            Chat with the community on Slack.
          </p>
          <Button variant="outline" size="sm" asChild>
            <a
              href={SLACK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Slack
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
