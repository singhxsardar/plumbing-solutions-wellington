"use client";

import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A Local Team You Can Rely On
            </h2>
            <div className="mt-5 space-y-4 text-ink-500">
              <p>
                Plumbing Solutions Wellington is a locally owned team with
                years of hands-on experience across the region. We know
                Wellington homes - from older villas in Mount Victoria to new
                builds in the Hutt Valley - and the plumbing quirks that come
                with them.
              </p>
              <p>
                Our focus is residential and small commercial plumbing:
                everyday repairs, bathroom and kitchen upgrades, hot water
                systems, and emergency call-outs when something goes wrong
                unexpectedly.
              </p>
              <p>
                We turn up on time, communicate clearly, and stand behind the
                quality of our work &mdash; the kind of service we&rsquo;d want
                in our own homes.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-500">
              <MapPinned size={17} />
              Serving Wellington and surrounding suburbs
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-deep p-8 text-white sm:p-10"
          >
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
              viewBox="0 0 300 260"
              fill="none"
            >
              <path
                d="M0 60H120a16 16 0 0 1 16 16v40a16 16 0 0 0 16 16h148"
                stroke="white"
                strokeWidth="2.5"
              />
              <path
                d="M0 200H90a16 16 0 0 0 16 -16v-30"
                stroke="white"
                strokeWidth="2.5"
              />
            </svg>
            <p className="relative font-mono text-xs uppercase tracking-[0.18em] text-sky-400">
              Service Areas
            </p>
            <ul className="relative mt-4 space-y-3 text-sm">
              {[
                "Wellington City",
                "Lower Hutt",
                "Upper Hutt",
                "Porirua",
                "Kāpiti Coast",
              ].map((area) => (
                <li key={area} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="relative mt-6 text-2xl font-display font-semibold text-sky-400">
              8+ years
            </p>
            <p className="relative text-sm text-tint-200">
              serving the greater Wellington region
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
