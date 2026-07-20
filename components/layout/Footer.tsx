import { SocialIcon } from "@/components/common";
import { Container } from "@/components/layout";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-24">
      {/* Divider */}
      <div className="via-border h-px bg-gradient-to-r from-transparent to-transparent" />

      <Container>
        <div className="py-14">
          {/* Main */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              {profile.name}
            </h2>

            <p className="text-muted-foreground mt-4 max-w-xl leading-7">
              {profile.footerTagline}
            </p>

            <div className="mt-8 flex items-center gap-4">
              {contact.socials.map((social) => (
                <SocialIcon
                  key={social.name}
                  href={social.href}
                  alt={social.name}
                  src={social.icon}
                  darkSrc={social.darkIcon}
                  className="bg-card border-border hover:border-primary/30 hover:bg-primary/5 hover:shadow-primary/10 h-11 w-11 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm md:flex-row">
            <p className="text-muted-foreground">
              © 2026 {profile.name}. All rights reserved.
            </p>

            <p className="text-muted-foreground text-center md:text-right">
              Built with{" "}
              <span className="text-foreground font-medium">
                Next.js · React · TypeScript · Tailwind CSS
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
