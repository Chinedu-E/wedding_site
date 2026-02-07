import React from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const WEDDING_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIOcUNoATVPubMdvnaasDAplt0Pgjt8dMAHrxl0u11qSdlWR6DQerqyKGJjSiO44Ht_Rz0mCJeIoaZ3g8EJzyliIN-LNk-jxggLZP-OcHIFipj_GSxuXGCbTM6QNjR-ASfC21ueF0FHKWaDjvXZczoA6h2pGeD4Yhbn30x7rOLTgnHOf6CWpPhGw9SxYjba5R8p4edheUMjJeSsOrGVkPv4CztCdRutBjEU5GKHHLvYUymwv8jyK3sUmKJekgtVmXx4G88p6dFjx0";

const WeddingDetails: React.FC = () => {
  return (
    <section
      id="details"
      className="py-16 md:py-24 px-6 md:px-8 bg-white text-slate-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 border border-[#6B705C]/30 rounded-full text-[10px] tracking-[0.18em] uppercase text-[#6B705C] font-semibold">
            Join Our Celebration
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#6B705C] italic">
            The Wedding Day
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600">
            We would be honoured to have you witness the moment we say “yes” to
            a lifetime together. After a simple courthouse ceremony, we&apos;ll
            gather with the people we love most to share food, stories, and the
            kind of laughter that only happens when home is in the room.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-14 w-14 min-h-14 min-w-14 flex-shrink-0 rounded-full border border-[#6B705C]/30 flex items-center justify-center text-[11px] tracking-[0.18em] text-[#6B705C] font-medium">
                TIME
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base text-slate-800">
                  Ceremony
                </p>
                <p className="text-xs md:text-sm text-slate-500">
                  2:00 PM · April 16, 2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-14 w-14 min-h-14 min-w-14 flex-shrink-0 rounded-full border border-[#6B705C]/30 flex items-center justify-center text-[11px] tracking-[0.18em] text-[#6B705C] font-medium">
                PLACE
              </div>
              <div>
                <p className="font-semibold text-sm md:text-base text-slate-800">
                Manchester, UK
                </p>
                <p className="text-xs md:text-sm text-slate-500">
                  Followed by an intimate celebration with family and friends.
                </p>
              </div>
            </div>
          </div>
          {/* Countdown */}
          <div className="pt-2">
            <Countdown />
          </div>
        </div>

        <div className="relative group aspect-[4/5] w-full">
          <div className="absolute -inset-4 bg-[#FFE8D6] rounded-[2rem] -rotate-3 transition-transform duration-300 group-hover:rotate-0" />
          <div className="absolute -inset-1 bg-[#6B705C]/5 rounded-[2rem]" />
          <Image
            src={WEDDING_IMAGE_URL}
            alt="Soft bridal floral arrangement"
            fill
            className="relative rounded-[2rem] shadow-xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;

