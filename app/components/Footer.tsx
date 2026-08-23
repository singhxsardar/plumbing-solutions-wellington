import { Droplet, MapPin, Navigation, Phone } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const PHONE_TEL = "tel:+6421738121";

const MAPS_URL =
  "https://www.google.com/maps/place/Plumbing+Solutions+Wellington/@-41.2139701,174.8160226,17.14z/data=!4m15!1m8!3m7!1s0x6d38adc306098621:0x1ee1a67f6bf3832c!2sPlumbing+Solutions+Wellington!8m2!3d-41.2139886!4d174.8161006!10e1!16s%2Fg%2F11w9g931rg!3m5!1s0x6d38adc306098621:0x1ee1a67f6bf3832c!8m2!3d-41.2139886!4d174.8161006!16s%2Fg%2F11w9g931rg";

const ADDRESS =
  "1 Cara Crescent, Paparangi, Wellington 6037, New Zealand";

export default function Footer() {
  return (
    <footer className="bg-deep-900 text-tint-200">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-8 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-display text-base font-semibold text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Droplet size={15} />
              </span>

              Plumbing Solutions Wellington
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-tint-200/75">
              Reliable local plumbing services for homes and businesses
              across Wellington and surrounding areas.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky-400">
              Quick Links
            </p>

            <nav className="mt-4 flex flex-col gap-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* LOCATION */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky-400">
              Location
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-start gap-2 text-sm leading-relaxed transition-colors hover:text-white"
            >
              <MapPin size={17} className="mt-0.5 shrink-0 text-sky-400" />

              <span>{ADDRESS}</span>
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors hover:text-white"
            >
              <Navigation size={15} />
              View on Google Maps
            </a>

            <a
              href={PHONE_TEL}
              className="mt-4 flex items-center gap-2 text-sm transition-colors hover:text-white"
            >
              <Phone size={15} className="text-sky-400" />
              +64 21 738 121
            </a>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-tint-200/70 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p>
            Proudly serving Wellington & surrounding areas
          </p>

          <p>
            24/7 Emergency Plumbing&nbsp; • &nbsp;Fast Response&nbsp; • &nbsp;Fair Pricing
          </p>

        </div>

      </div>
    </footer>
  );
}