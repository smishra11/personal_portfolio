import { Reveal } from "@/components/common";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import PersonalProjects from "@/components/sections/PersonalProjects";
import { Playground } from "@/components/sections/Playground";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WorkExperience } from "@/components/sections/WorkExperience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal delay={0.05}>
        <WorkExperience />
      </Reveal>
      <Reveal delay={0.1}>
        <SelectedWork />
      </Reveal>
      <Reveal delay={0.15}>
        <PersonalProjects />
      </Reveal>
      <Reveal delay={0.2}>
        <Playground />
      </Reveal>
      <Reveal delay={0.2}>
        <Contact />
      </Reveal>
    </>
  );
}
