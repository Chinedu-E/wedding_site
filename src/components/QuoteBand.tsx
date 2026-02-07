import React from "react";
import Image from "next/image";

const QUOTE_BG_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJjBCqg1lfPLFzE-9BwaB5nvM7-2WsmcfLUBGokTnZxMP4rNVgEiqXjf-ADd2W1_a3i5B4ABFA2ZOgZNjdakkx1Hd1xq2_ls7jKAL_93TL-H-BlwseQVMkQgaoCyuxb7y8pvz1RQZVLbfKWPOJD_6ZPAPej1dYem17q2G_K6kySui9VzdV3-FXCbEr6fjEWS7uHPQmWYZ9arcB8VlMKJau6xbkfF7mvq7rsIIoqeO4LcWjF7p6BwrY_8QDCuEzuC7Tq3V9I0JzpPw";

const QuoteBand: React.FC = () => {
  return (
    <section className="relative h-64 md:h-72 overflow-hidden">
      <Image
        src={QUOTE_BG_URL}
        alt="Soft floral pattern"
        fill
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/70" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="bg-white/90 border border-[#DDBEA9]/60 rounded-full px-8 md:px-12 py-4 md:py-5 shadow-sm">
          <p className="font-serif text-base md:text-xl text-[#6B705C] italic text-center">
            &quot;A successful marriage requires falling in love many times,
            always with the same person.&quot;
            <span className="block mt-2 text-xs md:text-sm text-slate-500 not-italic">
              — Mignon McLaughlin
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteBand;

