"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    alt: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background page scrolling while the image is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

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
              <button
                type="button"
                onClick={() => setSelectedImage(project)}
                aria-label={`Open ${project.title} photo`}
                className="block w-full cursor-zoom-in text-left"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-tint-100 shadow-card transition-shadow duration-300 group-hover:shadow-cardHover">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </button>

              <figcaption className="mt-2 text-sm font-medium text-ink-700">
                {project.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Full-size image viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} photo viewer`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={24} />
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-[95vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}