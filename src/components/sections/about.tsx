"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { ScrollReveal, GradientText } from "@/components/animations";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Engineer with experience building end-to-end machine learning and computer
              vision systems, spanning perception, generative modeling, and real-time
              deployment for robotics and large-scale applications.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Content Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT — ABOUT TEXT */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I&apos;m a Machine Learning Engineer and Robotics Researcher with a strong
                focus on computer vision, generative models, and robot learning. My work
                sits at the intersection of perception, decision-making, and scalable ML
                systems, with hands-on experience building models that move beyond
                benchmarks and into real-time, physical deployments.
              </p>

              <p>
                I specialize in diffusion-based generative models, multi-modal learning,
                and 3D perception pipelines for robotics and embodied AI. I&apos;ve designed
                custom lightweight 3D U-Net architectures for depth-video diffusion, built
                visuomotor diffusion policies for robotic manipulation, and deployed
                CUDA-optimized models on physical robots using PyTorch, ROS, MoveIt, and
                TensorRT.
              </p>

              <p className="font-semibold">Across projects, I focus on:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• End-to-end ML systems (data → training → deployment)</li>
                <li>• Multi-modal fusion (language, RGB-D, geometry, and state)</li>
                <li>• Efficiency-driven modeling (latency, memory, inference speed)</li>
                <li>• Experiment-driven iteration with rigorous ablations and metrics</li>
              </ul>

              <p>
                I enjoy working on problems where learning meets geometry and models must
                operate under real-world constraints — whether that&apos;s a robot cleaning
                a table, a car estimating its pose from a single camera, or a diffusion
                model generating physically consistent depth videos.
              </p>
            </div>

            {/* RIGHT — PHOTO + EDUCATION */}
            <div className="relative flex flex-col items-center">
              {/* Photo (no absolute positioning; layout-safe) */}
              <div className="relative flex justify-center w-full mb-10">
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-[4px] bg-gradient-to-br from-primary via-purple-500 to-blue-500 shadow-2xl">
                  <div className="rounded-full overflow-hidden w-full h-full bg-background">
                    <img
                      src="/me/me.jpg" // ✅ update path if needed
                      alt="Nanditha Naik"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Education Cards */}
              <div className="w-full space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>

                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
