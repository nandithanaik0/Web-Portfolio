import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SkillsShowcase} from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Nanditha Naik",
  description: "Learn more about Nanditha Naik, her journey and skills",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <SkillsShowcase />
        <Achievements />
      </div>
    </>
  );
}