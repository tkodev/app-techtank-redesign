import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

const footerLinks = {
  community: {
    title: "Community",
    links: [
      { name: "Meetup", href: "https://www.meetup.com/techtank-to/", external: true },
      { name: "Luma", href: "https://lu.ma/techtank", external: true },
      { name: "Slack", href: "https://forms.gle/slack-invite", external: true },
      { name: "LinkedIn", href: "https://ca.linkedin.com/company/techtank-to", external: true },
      { name: "Instagram", href: "https://www.instagram.com/techtankto/", external: true },
      { name: "GitHub", href: "https://github.com/tech-tankorg", external: true },
      { name: "YouTube", href: "https://www.youtube.com/@TechTankTo", external: true },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    links: [
      { name: "Speak", href: "/how-it-works/speaker", external: false },
      { name: "Host", href: "/how-it-works/host", external: false },
      { name: "Sponsor", href: "/how-it-works/sponsor", external: false },
      { name: "Volunteer", href: "/how-it-works/volunteer", external: false },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Press Kit", href: "/press-kit", external: false },
      { name: "Events", href: "/events", external: false },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/legal/terms-of-service", external: false },
      { name: "Privacy Policy", href: "/legal/privacy-policy", external: false },
      { name: "Code of Conduct", href: "/legal/code-of-conduct", external: false },
    ],
  },
};

const socialLinks = [
  { name: "LinkedIn", href: "https://ca.linkedin.com/company/techtank-to", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/techtankto/", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@TechTankTo", icon: Youtube },
  { name: "GitHub", href: "https://github.com/tech-tankorg", icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-auto" variant="light" />
              <span className="font-display text-lg font-semibold">
                TechTank TO
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Toronto&apos;s inclusive tech community. Monthly events since 2022.
            </p>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-teal transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} TechTank TO. All rights reserved.
            </p>
            <a
              href="mailto:techtankto@gmail.com"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              techtankto@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
