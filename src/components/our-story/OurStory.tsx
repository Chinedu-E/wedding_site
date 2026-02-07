import React, { useEffect, useState } from "react";
import Image from "next/image";

const OurStory: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="our-story"
      className="bg-[#F7F4EF] py-16 md:py-24 px-6 md:px-8 text-slate-800"
    >
      <div
        className={`max-w-6xl mx-auto transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#6B705C] tracking-wide">
            Our Story
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Text column */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="font-serif text-xl md:text-2xl text-[#6B705C]">
                How We Met
              </h3>
              <div className="text-sm md:text-base leading-relaxed text-slate-700 space-y-4 text-left">
                <p>
                  We may have been worlds apart, but our paths crossed in the
                  most modern way: social media. Because when two people are
                  meant to be, the algorithm doesn’t stand a chance.
                </p>
                <p>
                  Ijay came on Eno’s “For You” page, proving that scrolling
                  really can change your life. We started chatting around
                  November 2022. At the time, Eno was in Nigeria and Ijay was in
                  Canada—and, by pure coincidence (or divine planning), Ijay
                  already had a Christmas trip to Nigeria in motion.
                </p>
                <p>
                  What began on TikTok moved to WhatsApp, and that’s where the
                  connection picked up. Our conversations were full of
                  curiosity and questions. We talked about life as it was, and
                  life as we hoped it would become—love, faith, values, and the
                  future we wanted to build.
                </p>
                <p>
                  Being in two different places required intention, so we took
                  our time learning who we were and what we stood for. When we
                  met in Nigeria for the first time in December 2022, it didn’t
                  take long to realize this was something special. And from the
                  day we chose each other—February 28, 2023—we began walking
                  toward the same future.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#DDBEA9]/60">
              <h3 className="font-serif text-xl md:text-2xl text-[#6B705C]">
                The Proposal & Journey
              </h3>
              <div className="text-sm md:text-base leading-relaxed text-slate-700 space-y-4 text-left">
                <p>
                  From the very first day I met Ijay, my life shifted in a way I
                  couldn’t explain. I had never met someone so gentle, so
                  intentional, so genuinely pure of heart. Loving her felt
                  certain—like something my soul recognized long before I
                  understood it myself.
                </p>
                <p>
                  In London, during a quiet paint-and-sip, surrounded by colour,
                  laughter, and the ease that only comes from being with your
                  person, I finally spoke. I told her how distance had only made
                  my love grow deeper, how life with her felt honest and safe
                  and full. Then I asked her to be mine forever.
                </p>
                <p>
                  It wasn’t just a question; it was a promise—to choose each
                  other daily, to grow together, to keep learning love, and to
                  keep walking toward the future we had already begun building.
                  And she said yes.
                </p>
                <p>
                  Since then, our journey has been full of grace, patience, and
                  a lot of choosing. Distance has been a blessing in disguise,
                  teaching us to communicate deeply, to cherish every visit, and
                  to care for even the small, ordinary moments. We&apos;re
                  saying yes to more adventures, more growth, and a lifetime of
                  finding forever in the everyday—together.
                </p>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="max-w-md mx-auto md:mx-0 w-full">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-1 row-span-2 relative aspect-[3/4] rounded-3xl overflow-hidden shadow-md bg-[#FFF5EF]">
                <Image
                  src="/pics/20260125_182300.jpg"
                  alt="Ijay and Eno sharing a quiet moment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="col-span-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-[#FFF5EF]">
                <Image
                  src="/pics/20260122_190052.jpg"
                  alt="Hands intertwined on the wedding day"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="col-span-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-[#FFF5EF]">
                <Image
                  src="/pics/20260122_195231.jpg"
                  alt="A candid laugh between Ijay and Eno"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;