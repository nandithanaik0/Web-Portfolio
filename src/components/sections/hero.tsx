"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Typewriter,
  GradientText,
  MagneticButton,
  FloatingParticles,
} from "@/components/animations";

export function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e2f] via-[#2a2a4a] to-[#1c1c2b] opacity-90" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Greeting */}
          <motion.p
            variants={ANIMATION_VARIANTS.fadeDown}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-2"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={ANIMATION_VARIANTS.scaleIn}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <GradientText>Nanditha Naik</GradientText>
          </motion.h1>

          {/* And I'm... */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10"
          >
            And I&apos;m a{" "}
            <Typewriter
              words={[
                "Computer Vision Engineer",
                "Perception Engineer",
                "Generative AI Engineer",
                "Robotics Researcher",
              ]}
              className="text-primary font-semibold"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {/* View Projects */}
            <MagneticButton>
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
            </MagneticButton>

            {/* Resume */}
            <MagneticButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10"
              >
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
