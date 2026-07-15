import { Mail, MapPin } from "lucide-react";

import { SocialIcon, SectionHeading } from "@/components/common";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
                <Mail className="text-primary h-5 w-5" />
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Email"
                  className="hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-primary h-5 w-5" />

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
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <Input id="name" placeholder="John Doe" />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
