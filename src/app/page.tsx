import { Hero } from "@/components/sections/hero";
import{About} from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { Achievements } from "@/components/home/achievements";

console.log("HOME COMPONENTS:", {
  Hero,
  FeaturedProjects,
  SkillsShowcase,
  // Achievements,
});

export default function HomePage() {
  return (
    <>
      {/* 1. Start with only Hero */}
      <Hero />
      <About />
      {/* 2. Then uncomment these ONE BY ONE after Hero works */}
      <SkillsShowcase />
      <Experience />
      <FeaturedProjects /> 

      {/* <Achievements /> */}
    </>
  );
}
