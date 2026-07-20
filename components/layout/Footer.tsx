import { SocialIcon } from "@/components/common";
import { Container } from "@/components/layout";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-border mt-16 border-t">
      <Container>
        <div className="py-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              {profile.name}
            </h2>

            <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-7 md:text-base">
              {profile.footerTagline}
            </p>

            <div className="mt-8 flex items-center gap-3">
              {contact.socials.map((social) => (
                <SocialIcon
                  key={social.name}
                  href={social.href}
                  alt={social.name}
                  src={social.icon}
                  darkSrc={social.darkIcon}
                  className="bg-card border-border hover:border-primary/30 hover:bg-primary/5 h-11 w-11 rounded-full border transition-all duration-300 hover:-translate-y-1"
                />
              ))}
            </div>
          </div>

          <div className="border-border mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm md:flex-row">
            <p className="text-muted-foreground">© 2026 {profile.name}</p>

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
