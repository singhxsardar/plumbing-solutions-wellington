"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Bathroom Renovation",
    image: "/images/gallery/bathroom-renovation.jpg",
    alt: "Completed bathroom renovation with vanity, basin and toilet",
  },
  {
    title: "Bathroom Installation",
    image: "/images/gallery/bathroom-installation.jpg",
    alt: "Bathroom installation with shower, bath and vanity",
  },
  {
    title: "Kitchen Plumbing",
    image: "/images/gallery/kitchen-plumbing.jpg",
    alt: "Kitchen sink and tap plumbing installation",
  },
  {
    title: "Hot Water System",
    image: "/images/gallery/hot-water-system.jpg",
    alt: "Hot water system installation",
  },
  {
    title: "Kitchen Sink Installation",
    image: "/images/gallery/kitchen-sink.jpg",
    alt: "Kitchen sink and tap installation",
  },
  {
    title: "Laundry Plumbing",
    image: "/images/gallery/laundry-plumbing.jpg",
    alt: "Laundry and toilet plumbing installation",
  },
  {
    title: "Toilet Installation",
    image: "/images/gallery/toilet-installation.jpg",
    alt: "Toilet installation and plumbing work",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="eyebrow">Recent Jobs</p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Our Work
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.figure
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
              }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-tint-100 shadow-card transition-shadow duration-300 group-hover:shadow-cardHover">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <figcaption className="mt-2 text-sm font-medium text-ink-700">
                {project.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}