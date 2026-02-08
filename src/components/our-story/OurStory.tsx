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
                  most modern way, social media. Because when two people are
                  meant to be, the algorithm doesn’t stand a chance.
                </p>
                <p>
                  Ijay came on Eno’s For you page, proving that scrolling does
                  really change your life.
                </p>
                <p>
                  We began chatting around November 2022. At the time, Eno was
                  living in Nigeria, while Ijay was in Canada, and by pure
                  coincidence (or divine planning), Ijay was already planning a
                  Christmas trip to Nigeria, a trip that would soon mean much
                  more. What started on TikTok soon moved to WhatsApp, and
                  that’s where the connection picked up.
                </p>
                <p>
                  Our conversations were filled with curiosity and lots of
                  questions. We spoke about life as it was and life as we hoped
                  it would become. About love, faith, values, and the kind of
                  future we envisioned. Being worlds apart required intention. So
                  it was really coming down to understanding the type of persons
                  we are.
                </p>
                <p>
                  From sparked interest to faith bringing us to the same
                  timeline, we met in Nigeria for the first time in December
                  2022. From there, it didn’t take long to realize this was
                  something special and from the day we chose each other, Feb
                  28, 2023, we began walking toward the same future.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#DDBEA9]/60">
              <h3 className="font-serif text-xl md:text-2xl text-[#6B705C]">
                The Proposal
              </h3>
              <div className="text-sm md:text-base leading-relaxed text-slate-700 space-y-4 text-left">
                <p>
                  From the very first day I met Ijay, my life shifted in a way I
                  couldn’t explain. I had never met someone so gentle, so
                  intentional, so genuinely pure of heart. Loving her felt
                  certain, like something my soul recognized long before I
                  understood it myself.
                </p>
                <p>
                  I planned the trip to London with intention, knowing it would
                  be more than just another getaway for us. I carried the weight
                  of what I wanted to say the entire journey, rehearsing words
                  that could never fully capture what she means to me. Still, I
                  knew I had to try.
                </p>
                <p>
                  In the middle of the city, during a paint and sip, surrounded
                  by colors, laughter, and the quiet comfort that comes from
                  being with your person, I finally spoke. I told her how she had
                  changed me, how distance had only made my love grow deeper, and
                  how life with her felt honest and safe and full. I told her
                  that loving her had become my favorite place to be.
                </p>
                <p>
                  Then I asked her to be mine forever.
                </p>
                <p>
                  It wasn’t just a question, it was a promise. To choose her
                  daily, to grow with her, to keep learning love together, and
                  to continue walking toward the future we had already begun
                  building. In that moment, I wasn’t stepping into something
                  unknown, I was choosing the life I knew I wanted with her.
                </p>
                <p>And she said yes.</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#DDBEA9]/60">
              <h3 className="font-serif text-xl md:text-2xl text-[#6B705C]">
                The Journey
              </h3>
              <div className="text-sm md:text-base leading-relaxed text-slate-700 space-y-4 text-left">
                <p>
                  The journey has been delightful to say the least. We have our
                  up and downs but we stay riding. We say to each other how the
                  distance has been a blessing in disguise. We say this because
                  we met each other at the time in our lives where space was
                  necessary for healing from past but also recognizing that there
                  is someone special and wouldn’t want to waste any moment
                  without them.
                </p>
                <p>
                  The distance helped us really appreciate each other especially
                  whenever we come together, every moment is cherished, every
                  fight is nurtured to understanding and accountability. It has
                  really taught us what true love is. It has taught us patience.
                </p>
                <p>
                  We are saying yes to more adventures within, we are saying yes
                  to more adventures with each other. We are saying yes to the
                  little things, the quiet moments, the forever hidden in the
                  everyday with each other.
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