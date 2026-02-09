"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PIC_DIR = "/pics";

const photoFilenames: string[] = [
  "20260117_212234.jpg",
  "20260122_173854.jpg",
  "20260122_181602.jpg",
  "20260122_185843.jpg",
  "20260122_190052.jpg",
  "20260122_190745.jpg",
  "20260122_191506.jpg",
  "20260122_194722.jpg",
  "20260122_195042.jpg",
  "20260122_195145.jpg",
  "20260122_195231.jpg",
  "20260122_195530.jpg",
  "20260122_195548.jpg",
  "20260122_195632.jpg",
  "20260122_195706.jpg",
  "20260122_195858.jpg",
  "20260122_195922.jpg",
  "20260125_182300.jpg",
  "20260125_182755.jpg",
  "20260125_185358.jpg",
  "2026-01-31 11_51_14.962-0500.jpg",
  "2026-01-31 11_57_14.356-0500.jpg",
  "IMG_7296(1).jpg",
  "IMG_7323 (1).jpg",
  "IMG_7235 (1).jpg",
  "IMG_7191 (1).jpg",
];

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const slides = useMemo(
    () =>
      photoFilenames.map((filename) => ({
        src: `${PIC_DIR}/${encodeURIComponent(filename)}`,
        alt: "Ijay and Eno",
      })),
    []
  );

  return (
    <section
      id="gallery"
      className="bg-[#FFF5EF] py-16 md:py-24 px-6 md:px-8 text-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#6B705C] text-center mb-10 md:mb-14 tracking-wide">
          Gallery
        </h2>
        <p className="text-center text-sm md:text-base text-slate-600 max-w-2xl mx-auto mb-12">
          A glimpse into the quiet, joyful, and in–between moments that brought
          us to this day.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photoFilenames.map((filename, index) => (
            <figure
              key={filename}
              role="button"
              tabIndex={0}
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B705C] focus-visible:ring-offset-2"
            >
              <Image
                src={`${PIC_DIR}/${encodeURIComponent(filename)}`}
                alt="Ijay and Eno"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        index={lightboxIndex ?? 0}
        slides={slides}
      />
    </section>
  );
};

export default Gallery;
