"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Wrench,
  Flame,
  Home,
  AlarmClock,
  ShowerHead,
  Gauge,
} from "lucide-react";

const SERVICES = [
  {
    icon: Droplet,
    title: "Blocked Drains",
    desc: "Fast, thorough drain clearing for kitchens, bathrooms and outdoor lines.",
  },
  {
    icon: Wrench,
    title: "Leaking Taps & Pipes",
    desc: "Stop the drip and the water bill with a proper, lasting repair.",
  },
  {
    icon: Flame,
    title: "Hot Water Systems",
    desc: "Installation, repairs and servicing for all major hot water brands.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom & Kitchen Plumbing",
    desc: "From a new tap to a full renovation, fitted properly the first time.",
  },
  {
    icon: AlarmClock,
    title: "Emergency Plumbing",
    desc: "Burst pipe or overflowing cistern? We're on call 24/7 across Wellington.",
  },
  {
    icon: Home,
    title: "General Maintenance",
    desc: "Ongoing plumbing care for homes and small commercial properties.",
  },
  {
    icon: Gauge,
    title: "Gas Fitting",
    desc: "Certified gas connections and safety checks, done to code.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="eyebrow">What We Fix</p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-3 text-ink-500">
            From a dripping tap to a full bathroom fit-out, we cover the
            plumbing jobs Wellington homes and small businesses need most.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={item}
                className="group rounded-2xl border border-tint-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-cardHover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint-100 text-brand-500 transition-colors group-hover:bg-deep group-hover:text-white">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}