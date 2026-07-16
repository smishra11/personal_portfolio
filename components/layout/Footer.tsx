import { SocialIcon } from "@/components/common";
import { Container } from "@/components/layout";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-border border-t">
      <Container>
        <div className="flex flex-col items-center py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight">{profile.name}</h2>

          <p className="text-muted-foreground mt-4 max-w-xl leading-7">
            {profile.footerTagline}
          </p>

          <div className="mt-8 flex items-center gap-2">
            {contact.socials.map((social) => (
              <SocialIcon
                key={social.name}
                {...(social.type === "svg"
                  ? {
                      type: "svg",
                      href: social.href,
                      alt: social.name,
                      src: social.icon,
                      darkSrc: social.darkIcon,
                    }
                  : {
                      type: "lucide",
                      href: social.href,
                      alt: social.name,
                      icon: social.icon,
                    })}
              />
            ))}
          </div>

          <div className="bg-border my-10 h-px w-full max-w-2xl" />

          <p className="text-muted-foreground text-sm">
            {/* © {new Date().getFullYear()} {profile.name}. All rights reserved. */}
            © 2026. All rights reserved.
          </p>

          <p className="text-muted-foreground mt-2 text-sm">
            Built with{" "}
            <span className="text-foreground font-medium">
              Next.js • React • TypeScript • Tailwind CSS
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
