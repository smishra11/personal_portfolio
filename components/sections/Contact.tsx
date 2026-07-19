import { Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading, SocialIcon } from "@/components/common";
import { Container, Section } from "@/components/layout";

import { contact } from "@/data/contact";

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-title" className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <SectionHeading
              id="contact-title"
              title={contact.title}
              subtitle={contact.description}
            />

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primary size-5" />

                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-primary size-5" />

                <span>{contact.location}</span>
              </div>

              <div className="flex items-center gap-2 pt-4">
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
            </div>
          </div>

          {/* Right */}

          <div className="bg-card border-border rounded-3xl border p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
