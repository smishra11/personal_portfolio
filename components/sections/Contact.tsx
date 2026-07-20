import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/common";
import { Container, Section } from "@/components/layout";

import { contact } from "@/data/contact";

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-title">
      <Container>
        <SectionHeading
          id="contact-title"
          title={contact.title}
          subtitle={contact.description}
          className="max-w-3xl"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          {/* Left */}

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                <Mail className="size-5" />
              </div>

              <div>
                <p className="text-sm font-semibold">Email</p>

                <p className="text-muted-foreground mt-1">{contact.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                <MapPin className="size-5" />
              </div>

              <div>
                <p className="text-sm font-semibold">Location</p>

                <p className="text-muted-foreground mt-1">{contact.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                <BriefcaseBusiness className="size-5" />
              </div>

              <div>
                <p className="text-sm font-semibold">Available For</p>

                <p className="text-muted-foreground mt-1 leading-7">
                  Full-time opportunities
                  <br />
                  Freelance projects
                  <br />
                  Technical discussions
                </p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="bg-card border-border rounded-2xl border p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(15,23,42,0.06)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.35)]">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
