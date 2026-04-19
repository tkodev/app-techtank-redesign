import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative flex flex-col bg-white rounded-2xl border border-border p-6 lg:p-8">
      {/* Quote icon */}
      <Quote className="h-8 w-8 text-teal/20 mb-4" />

      {/* Quote */}
      <blockquote className="flex-1 text-foreground leading-relaxed mb-6">
        &quot;{testimonial.quote}&quot;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-peach via-lavender to-aqua flex items-center justify-center text-lg font-semibold text-white">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          {testimonial.linkedIn ? (
            <a
              href={testimonial.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-teal transition-colors"
            >
              {testimonial.name}
            </a>
          ) : (
            <p className="font-semibold text-foreground">{testimonial.name}</p>
          )}
          <p className="text-sm text-muted">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
