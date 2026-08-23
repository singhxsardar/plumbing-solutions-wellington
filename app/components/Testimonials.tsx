"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import PipeDivider from "./PipeDivider";

const REVIEWS = [
  {
    quote:
      "We can’t recommend Simon from Plumbing Solutions Wellington highly enough! Simon completed our bathroom renovation last year, so when our hot water ...",
    name: "Sabrina T.",
    detail: "Google Review · Edited a month ago",
  },
  {
    quote:
      "Installed new dishwasher without any drama. Friendly, efficient, good comms, and great value for money. Highly recommend to everyone!",
    name: "Sam O'Riley",
    detail: "Google Review · 3 months ago",
  },
  {
    quote:
      "Simon did a great job repairing some spouting & couple other maintenance items at short notice. He fitted us in at the end of a busy week and was very helpful and kept us well informed.",
    name: "Rod Dimock",
    detail: "Google Review · 7 months ago",
  },
  {
    quote:
      "I was impressed from my first contact with Simon. He is highly professional, responding promptly to my enquiries and working with me and the required suppliers to meet my needs.",
    name: "Hannah Rollo",
    detail: "Google Review · 1 year ago",
  },
  {
    quote:
      "We used Plumbing Solutions for a toilet leak/insurance job. The service was outstanding. Great communication & very professional. Very happy with the repair.",
    name: "Sophia Smart",
    detail: "Google Review · 1 year ago",
  },
  {
    quote:
      "Honestly, can not recommend these guys enough! They were so quick to respond, arrive and fix my issue, even though it was after hours. Simon was also really lovely to deal with.",
    name: "Sheree Moanaroa",
    detail: "Google Review · 1 year ago",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-tint-100">
      <PipeDivider />

      <div className="mx-auto max-w-content px-4 pb-20 pt-2 sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Customer Reviews</p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Trusted by Wellington Customers
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-600">
            Plumbing Solutions Wellington is rated{" "}
            <strong>5.0 stars on Google</strong> from{" "}
            <strong>24 reviews</strong>.
          </p>

          <a
            href="https://www.google.com/maps/place/Plumbing+Solutions+Wellington/@-41.2139701,174.8160226,17.14z/data=!4m15!1m8!3m7!1s0x6d38adc306098621:0x1ee1a67f6bf3832c!2sPlumbing+Solutions+Wellington!8m2!3d-41.2139886!4d174.8161006!10e1!16s%2Fg%2F11w9g931rg!3m5!1s0x6d38adc306098621:0x1ee1a67f6bf3832c!8m2!3d-41.2139886!4d174.8161006!16s%2Fg%2F11w9g931rg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-deep/15 px-5 py-2.5 text-sm font-semibold text-deep transition-all hover:border-deep hover:bg-deep hover:text-white"
          >
            <Star size={16} fill="currentColor" />
            View all Google reviews
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.94, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-card"
            >
              <Quote size={22} className="text-sky-500/50" />

              <div className="mt-3 flex gap-0.5" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={15}
                    fill="#F4B400"
                    className="text-[#F4B400]"
                  />
                ))}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div className="mt-5 border-t border-ink-100 pt-4">
                <p className="font-display text-sm font-semibold text-deep">
                  {review.name}
                </p>

                <p className="mt-1 text-xs text-ink-500">
                  {review.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}