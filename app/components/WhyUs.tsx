"use client";

import { motion } from "framer-motion";
import {
  Star,
  Zap,
  ShieldCheck,
  Sparkles,
  BadgeDollarSign,
  MapPin,
} from "lucide-react";
import PipeDivider from "./PipeDivider";

const FEATURES = [
  {
    icon: Star,
    title: "5-Star Rated on Google",
    desc: "Rated 5.0 stars on Google across 24 customer reviews.",
  },
  {
    icon: Zap,
    title: "Fast Response & Same-Day Service",
    desc: "We know plumbing problems don't wait — most jobs booked same day.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Experienced Plumbers",
    desc: "Fully qualified tradespeople with years of hands-on experience.",
  },
  {
    icon: Sparkles,
    title: "Clean, Tidy Work",
    desc: "We treat your home with respect and leave the site spotless.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent, Fair Pricing",
    desc: "Upfront quotes with no surprise call-out fees or hidden extras.",
  },
  {
    icon: MapPin,
    title: "Local Wellington Team",
    desc: "Born-and-raised locals who know the suburbs and the pipes beneath them.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-tint-100">
      <PipeDivider />
      <div className="mx-auto max-w-content px-4 pb-20 pt-2 sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="eyebrow">Why It's Worth Calling Us</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Why Choose Plumbing Solutions Wellington
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-deep text-white">
                  <Icon size={19} strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
