import React from "react";
import { Button } from "../ui/button";

const Registry = () => {
  return (
    <section
      id="registry"
      className="py-16 md:py-24 px-6 md:px-8 bg-[#FFE8D6] text-slate-800 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-4xl md:text-5xl mb-6">💝</div>
        <h2 className="font-serif text-4xl md:text-5xl text-[#6B705C] mb-4 italic">
          Gift Registry
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-10 leading-relaxed">
          Your presence truly is the greatest gift. If you would still like to
          bless us with something extra, we&apos;ve created a small registry to
          help us furnish our first home together.
        </p>
        <Button
          asChild
          variant="outline"
          className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-white text-[#6B705C] border border-[#6B705C]/20 hover:bg-[#6B705C] hover:text-white transition-colors font-medium tracking-[0.16em] text-[11px] uppercase"
        >
          <a href="https://www.myregistry.com" target="_blank" rel="noreferrer">
            Visit Registry
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Registry;