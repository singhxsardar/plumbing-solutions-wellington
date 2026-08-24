"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Navigation,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import PipeDivider from "./PipeDivider";

const PHONE_DISPLAY = "+64 21 738 121";
const PHONE_TEL = "tel:+6421738121";
const WHATSAPP_LINK = "https://wa.me/6421738121";
const EMAIL = "info@plumbingsolutionswellington.co.nz";

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY";

const ADDRESS = "1 Cara Crescent, Paparangi, Wellington 6037, New Zealand";

const MAPS_URL =
  "https://www.google.com/maps/place/Plumbing+Solutions+Wellington/@-41.2139701,174.8160226,17.14z/data=!4m15!1m8!3m7!1s0x6d38adc306098621:0x1ee1a67f6bf3832c!2sPlumbing+Solutions+Wellington!8m2!3d-41.2139886!4d174.8161006!10e1!16s%2Fg%2F11w9g931rg!3m5!1s0x6d38adc306098621:0x1ee1a67f6bf3832c!8m2!3d-41.2139886!4d174.8161006!16s%2Fg%2F11w9g931rg";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Plumbing+Solutions+Wellington%2C+1+Cara+Crescent%2C+Paparangi%2C+Wellington+6037%2C+New+Zealand&output=embed";

const SERVICE_AREAS = [
  "Wellington City",
  "Lower Hutt",
  "Upper Hutt",
  "Porirua",
  "Kapiti",
];

const EXPECTATIONS = [
  "Fast response to your enquiry",
  "Clear and honest communication",
  "Professional plumbing service",
  "Reliable solutions for your property",
];

export default function Contact() {
  return (
    <section id="contact" className="bg-deep">
      <PipeDivider flip />

      <div className="mx-auto max-w-content px-4 pb-20 pt-2 sm:px-6 sm:pb-24 lg:px-8">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="eyebrow text-sky-400">Reach Us Anytime</p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Get In Touch
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-tint-200 sm:text-base">
            Need a plumber, a quote, or help with an urgent plumbing issue?
            Contact Plumbing Solutions Wellington directly.
          </p>
        </motion.div>

        {/* MAIN CONTACT AREA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10"
        >
          {/* LEFT — CONTACT INFORMATION */}
          <div className="space-y-6">
            {/* CONTACT CARD */}
            <div className="rounded-3xl bg-white/[0.06] p-7 backdrop-blur sm:p-8">
              <p className="text-sm leading-relaxed text-tint-200">
                Call us anytime for emergencies or to book a job.
              </p>

              {/* PHONE */}
              <a
                href={PHONE_TEL}
                className="mt-5 flex items-center gap-3 font-display text-3xl font-semibold text-white transition-colors hover:text-sky-400 sm:text-4xl"
              >
                <Phone size={26} className="shrink-0 text-sky-400" />
                {PHONE_DISPLAY}
              </a>

              {/* WHATSAPP */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-deep-900 shadow-card transition-transform hover:scale-105"
              >
                <MessageCircle size={17} />
                Message on WhatsApp
              </a>

              {/* EMAIL */}
              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 flex items-center gap-2.5 text-sm text-tint-200 transition-colors hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-sky-400" />
                <span className="break-all">{EMAIL}</span>
              </a>

              {/* LOCATION */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-brand-400">
                  <MapPin size={14} className="text-sky-400" />
                  Our Location
                </p>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-start gap-3 text-sm leading-relaxed text-tint-100 transition-colors hover:text-sky-400"
                >
                  <MapPin size={18} className="mt-0.5 shrink-0 text-sky-400" />

                  <span>
                    <strong className="block font-semibold text-white">
                      Plumbing Solutions Wellington
                    </strong>

                    <span>{ADDRESS}</span>
                  </span>
                </a>

                {/* DIRECTIONS */}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-5 py-2.5 text-sm font-semibold text-sky-400 transition-all hover:border-sky-400 hover:bg-sky-400 hover:text-deep"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* EMERGENCY CARD */}
            <div className="rounded-3xl border border-sky-400/20 bg-sky-400/[0.08] p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-400/15">
                  <Wrench size={21} className="text-sky-400" />
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wide text-sky-400">
                    Plumbing Emergency?
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Don't wait for the problem to get worse.
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-tint-200">
                    For urgent plumbing problems, call us directly and explain
                    what is happening. We'll help you with the next step.
                  </p>
                </div>
              </div>

              <a
                href={PHONE_TEL}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <Phone size={16} className="text-sky-400" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            {/* WHAT YOU CAN EXPECT */}
            <div className="rounded-3xl bg-white/[0.06] p-7 backdrop-blur sm:p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-sky-400" />

                <p className="text-xs font-mono uppercase tracking-wide text-brand-400">
                  What You Can Expect
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {EXPECTATIONS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-sky-400"
                    />

                    <span className="text-xs leading-relaxed text-tint-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* RESPONSE NOTE */}
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-5">
                <Clock size={16} className="text-sky-400" />

                <p className="text-xs text-tint-200">
                  Contact us today to discuss your plumbing needs.
                </p>
              </div>
            </div>

            {/* SERVICE AREAS */}
            <div className="rounded-3xl bg-white/[0.06] p-7 backdrop-blur sm:p-8">
              <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-brand-400">
                <MapPin size={14} className="text-sky-400" />
                Service Areas
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-tint-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div className="rounded-3xl bg-white/[0.06] p-7 backdrop-blur sm:p-8">
              <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-brand-400">
                <Clock size={14} className="text-sky-400" />
                Business Hours
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-tint-200">Saturday</span>
                  <span className="font-medium text-white">Closed</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-tint-200">Sunday</span>
                  <span className="font-medium text-white">Closed</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-tint-200">Monday</span>
                  <span className="font-medium text-sky-400">
                    Open 24 hours
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-tint-200">Tuesday</span>
                  <span className="font-medium text-sky-400">
                    Open 24 hours
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-tint-200">Wednesday</span>
                  <span className="font-medium text-sky-400">
                    Open 24 hours
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-tint-200">Thursday</span>
                  <span className="font-medium text-sky-400">
                    Open 24 hours
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-tint-200">Friday</span>
                  <span className="font-medium text-sky-400">
                    Open 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM + MAP */}
          <div className="space-y-8">
            {/* CONTACT FORM */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-card">
              <div className="p-7 sm:p-9">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-sky-600">
                  Request A Quote
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-deep sm:text-3xl">
                  Tell us what you need
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Send us your details and we'll get back to you as soon as
                  possible.
                </p>

                {/* WEB3FORMS FORM */}
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="mt-7 space-y-5"
                >
                  {/* WEB3FORMS ACCESS KEY */}
                  <input
                    type="hidden"
                    name="access_key"
                    value={WEB3FORMS_ACCESS_KEY}
                  />

                  {/* EMAIL SUBJECT */}
                  <input
                    type="hidden"
                    name="subject"
                    value="New Plumbing Enquiry - Plumbing Solutions Wellington"
                  />

                  {/* EMAIL SENDER NAME */}
                  <input
                    type="hidden"
                    name="from_name"
                    value="Plumbing Solutions Wellington Website"
                  />

                  {/* REPLY-TO FIELD */}
                  <input type="hidden" name="replyto" value="email" />

                  {/* THANK-YOU REDIRECT */}
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://plumbingsolutionswellington.co.nz/thank-you"
                  />

                  {/* HONEYPOT SPAM PROTECTION */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* CUSTOMER NAME */}
                  <div>
                    <label
                      htmlFor="full-name"
                      className="mb-2 block text-sm font-semibold text-deep"
                    >
                      Full Name *
                    </label>

                    <input
                      id="full-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-deep"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+64 ..."
                      required
                      autoComplete="tel"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-deep"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-deep"
                    >
                      What do you need help with? *
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="Emergency Plumbing">
                        Emergency Plumbing
                      </option>

                      <option value="Blocked Drains">Blocked Drains</option>

                      <option value="Hot Water">Hot Water</option>
                      <option value="Leak Repair">Leak Repair</option>

                      <option value="General Plumbing">General Plumbing</option>

                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-deep"
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us briefly about the plumbing job..."
                      required
                      className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3.5 text-sm font-semibold text-deep-900 shadow-card transition-transform hover:scale-[1.01]"
                  >
                    <Navigation size={16} />
                    Send Enquiry
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Your details are only used to respond to your enquiry.
                  </p>
                </form>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="overflow-hidden rounded-3xl bg-white/[0.06] shadow-card">
              <div className="relative h-[380px] w-full sm:h-[450px]">
                <iframe
                  title="Plumbing Solutions Wellington Google Maps location"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              {/* MAP FOOTER */}
              <div className="flex flex-col gap-3 bg-white/[0.08] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Plumbing Solutions Wellington
                  </p>

                  <p className="mt-1 text-xs text-tint-200">{ADDRESS}</p>
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 px-4 py-2.5 text-xs font-semibold text-deep-900 transition-transform hover:scale-105"
                >
                  <Navigation size={14} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
