'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Gallery from "@/components/gallery/Gallery";
import OurStory from "@/components/our-story/OurStory";
import Registry from "@/components/registry/Registry";
import WeddingDetails from "@/components/WeddingDetails";
import QuoteBand from "@/components/QuoteBand";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#", label: "HOME" },
  { href: "#our-story", label: "OUR STORY" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#registry", label: "REGISTRY" },
] as const;

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingNav(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800">
      {/* Floating oval nav: visible when hero is out of viewport */}
      <nav
        aria-label="Site navigation"
        className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-[#6B705C]/20 bg-[#6B705C] px-5 py-2.5 shadow-lg transition-[opacity,transform] duration-300 md:top-8 md:px-6 md:py-3 ${
          showFloatingNav
            ? "opacity-100 translate-y-0"
            : "pointer-events-none translate-y-[-8px] opacity-0"
        }`}
      >
        <div className="flex items-center gap-4 md:gap-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white md:text-xs">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href + label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="whitespace-nowrap hover:text-[#FFE8D6] transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero: single full-bleed image with text overlay */}
      <section
        ref={heroRef}
        className="relative min-h-dvh h-screen overflow-hidden"
      >
        {/* Image layer: cover on mobile, contain on desktop so image isn't over-cropped */}
        <div className="absolute inset-0 bg-[#6B705C]">
          <Image
            src="/pics/20260122_181602.jpg"
            alt="Eno and Ijay on their wedding day"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-contain"
          />
        </div>
        {/* Scrim overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          aria-hidden
        />
        {/* Content overlay */}
        <div className="relative z-10 flex h-full flex-col px-4 pb-8 pt-6 md:px-8 md:pb-12 md:pt-8">
          <nav className="flex gap-4 text-[10px] font-medium uppercase tracking-[0.18em] md:gap-8 md:text-xs" aria-label="Site navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href + label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="whitespace-nowrap pb-1 text-white hover:text-[#FFE8D6] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-1 flex-col justify-center">
            <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-white/90 md:mb-6 md:text-xs">
              April 16, 2026 · Manchester, UK
            </p>
            <h1 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-7xl md:leading-none lg:text-8xl">
              Eno &<br />
              <span className="inline-block">Ijay</span>
            </h1>
            <div className="mt-8 md:mt-12">
              <Button
                variant="outline"
                className="min-h-[44px] min-w-[44px] rounded-full border border-white/70 bg-transparent px-6 font-medium tracking-[0.18em] text-white shadow-md hover:bg-white hover:text-[#6B705C] transition-colors duration-300 text-xs md:text-[12px]"
              >
                RSVP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <div className="block">
        <WeddingDetails />
        <OurStory />
        <Gallery />
        <QuoteBand />
        <Registry />
      </div>
    </div>
  );
}
