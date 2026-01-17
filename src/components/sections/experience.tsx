"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Calendar, MapPin, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Experience List */}
<div className="space-y-8">
  {experienceData.map((exp, index) => (
    <motion.div
      key={exp.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={ANIMATION_VARIANTS.fadeUp}
      transition={{ delay: index * 0.08 }}
      className="w-full"
    >
      <div className="w-full p-6 md:p-8 rounded-2xl border border-border/60 bg-card/70 backdrop-blur hover:shadow-xl transition-all">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              {exp.role}
            </h3>
            <p className="text-primary font-medium flex items-center gap-1 mt-1">
              <Building2 className="h-4 w-4" />
              {exp.company}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-muted-foreground mb-5 leading-relaxed">
          {exp.description}
        </p>

        {/* Achievements */}
        <div className="space-y-2 mb-6">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <p className="text-sm leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}