import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Playground } from "@/components/sections/Playground";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WorkExperience } from "@/components/sections/WorkExperience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <Playground />
      <WorkExperience />
      <Contact />
    </>
  );
}
