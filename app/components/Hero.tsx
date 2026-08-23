"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  Clock3,
  MapPin,
  ExternalLink,
} from "lucide-react";

const PHONE_DISPLAY = "+64 21 738 121";
const PHONE_TEL = "tel:+6421738121";
const WHATSAPP_LINK = "https://wa.me/6421738121";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Plumbing+Solutions+Wellington/@-41.2139701,174.8160226,17.14z/data=!4m15!1m8!3m7!1s0x6d38adc306098621:0x1ee1a67f6bf3832c!2sPlumbing+Solutions+Wellington!8m2!3d-41.2139886!4d174.8161006!10e1!16s%2Fg%2F11w9g931rg!3m5!1s0x6d38adc306098621:0x1ee1a67f6bf3832c!8m2!3d-41.2139886!4d174.8161006!16s%2Fg%2F11w9g931rg";

const ADDRESS = "1 Cara Crescent, Paparangi, Wellington 6037, New Zealand";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-deep"
      aria-label="Introduction"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(63,169,245,0.35), transparent 55%), radial-gradient(circle at 85% 80%, rgba(28,109,168,0.45), transparent 50%), linear-gradient(160deg, #082A44 0%, #0B3D62 55%, #0F4E7C 100%)",
        }}
      />

      {/* Decorative pipe-route linework */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-full w-[60%] opacity-[0.08]"
        viewBox="0 0 500 700"
        fill="none"
      >
        <path
          d="M500 40H320a20 20 0 0 0-20 20v120a20 20 0 0 1-20 20H140a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h100a20 20 0 0 1 20 20v140a20 20 0 0 0 20 20h220"
          stroke="white"
          strokeWidth="3"
        />

        <circle cx="140" cy="220" r="6" fill="white" />
        <circle cx="260" cy="460" r="6" fill="white" />
      </svg>

      <div className="relative mx-auto flex max-w-content flex-col px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:pb-28 lg:pt-24">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow text-sky-400"
          >
            Wellington &amp; Surrounding Suburbs
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Trusted Local Plumbers in Wellington
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 max-w-lg text-base leading-relaxed text-tint-100 sm:text-lg"
          >
            24/7 emergency plumbing, fast response and fair pricing.
            <span className="block">
              Rated <strong className="text-white"> 5.0 stars on Google</strong>{" "}
              across <strong className="text-white">24 reviews</strong>.
            </span>
          </motion.p>

          {/* PRIMARY CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={PHONE_TEL}
              className="flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-base font-semibold text-deep-900 shadow-card transition-transform hover:scale-105 focus-visible:scale-105"
            >
              <Phone size={18} />
              Call Now — {PHONE_DISPLAY}
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-transform hover:scale-105 hover:bg-white/10 focus-visible:scale-105"
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>
          </motion.div>

          {/* LOCATION + GOOGLE LINK */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-7 flex flex-col gap-3 text-sm text-tint-200"
          >
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 transition-colors hover:text-white"
            >
              <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />

              <span>
                <span className="block">{ADDRESS}</span>

                <span className="mt-1 inline-flex items-center gap-1 text-sky-400">
                  View on Google Maps
                  <ExternalLink size={12} />
                </span>
              </span>
            </a>

            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-sky-400" />

              <span>Same-day appointments, most days of the week</span>
            </div>
          </motion.div>
        </div>

        {/* GOOGLE RATING BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="mt-10 flex justify-center lg:mt-0 lg:flex-1 lg:justify-end"
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Plumbing Solutions Wellington on Google Maps"
            className="group relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52"
          >
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-105"
            >
              <path
                d="M100 10 C100 10 40 90 40 135 A60 60 0 0 0 160 135 C160 90 100 10 100 10 Z"
                fill="#EAF4FB"
              />
            </svg>

            <div className="relative flex flex-col items-center pt-6 text-deep">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#3FA9F5"
                    className="text-sky-500"
                  />
                ))}
              </div>

              <p className="mt-1 font-display text-3xl font-bold">5.0</p>

              <p className="font-mono text-[0.65rem] uppercase tracking-wide text-brand-500">
                Google Rating
              </p>

              <p className="mt-0.5 text-[0.7rem] text-ink-500">
                24 Google reviews
              </p>

              <p className="mt-1 text-[0.65rem] font-semibold text-sky-600">
                View profile →
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
