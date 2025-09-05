'use client'
import Gallery from "@/components/gallery/Gallery";
import OurStory from "@/components/our-story/OurStory";
import Registry from "@/components/registry/Registry";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffd7d4] cursor-[url('/cursor-vine.png'),auto]">
      {/* Desktop Layout */}
      <div className="flex flex-col md:flex-row h-screen relative">
        {/* Left Panel - Content */}
        <div className={`md:w-1/2 w-full h-1/2 md:h-full bg-[#a78f9d] text-white flex flex-col relative transform transition-all duration-1000 ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Navigation */}
          <nav className="flex gap-8 p-8 md:text-sm text-xs font-medium tracking-wider">
            <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-105 hover:tracking-widest">
              HOME
            </a>
            <a
              href="#our-story"
              className="hover:opacity-80 transition-all duration-300 hover:scale-105 hover:tracking-widest"
            >
              OUR STORY
            </a>
            <a href="#gallery" className="hover:opacity-80 transition-all duration-300 hover:scale-105 hover:tracking-widest">
              GALLERY
            </a>
            <a href="#registry" className="hover:opacity-80 transition-all duration-300 hover:scale-105 hover:tracking-widest">
              REGISTRY
            </a>
          </nav>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center px-16 mt-1 md:mt-72">
            <div className={`transform transition-all duration-1200 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xs md:text-sm font-medium tracking-wider mb-4 md:mb-8 opacity-90">
                April 16, 2026 | A courthouse wedding
              </p>
              <h1 className="font-serif text-4xl md:text-8xl leading-tight hover:text-[#f4f1ef] transition-colors duration-500">
                Ijay &<br />
                <span className="inline-block hover:rotate-1 transition-transform duration-300">Airnorh</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className={`md:w-1/2 w-full h-1/2 md:h-full overflow-hidden transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}>
          <img
            src="https://images.unsplash.com/photo-1715285977649-4a83c0820399?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ijay and Airnoh embracing on steps"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        {/* RSVP Button */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 rotate-45 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            <Button
              variant="outline"
              className="w-24 h-24 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black hover:rotate-0 hover:scale-110 transition-all duration-500 font-medium tracking-wider shadow-lg hover:shadow-2xl"
            >
              RSVP
            </Button>
          </div>
      </div>

      {/* Desktop Sections */}
      <div className="block">
        <OurStory />
        <Gallery />
        <Registry />
      </div>

      {/* Mobile Layout */}
      {/* <div className="md:hidden min-h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1715285977649-4a83c0820399?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ijay and Airnoh embracing on steps"
            className="w-full h-full object-cover"
          />
        </div>

        <div className={`relative z-10 bg-[#8B8B7A]/90 backdrop-blur-sm text-white transform transition-all duration-1000 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
          
          <nav className="flex gap-6 p-6 text-xs font-medium tracking-wider justify-center">
            <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
              HOME
            </a>
            <a href="#our-story" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
              OUR STORY
            </a>
            <a href="#gallery" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
              GALLERY
            </a>
            <a href="#registry" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
              REGISTRY
            </a>
          </nav>

          <div className="px-6 pb-8">
            <p className="text-xs font-medium tracking-wider mb-6 opacity-90">April 16, 2026</p>
            <h1 className="font-serif text-4xl leading-tight mb-8">
              Ijay &<br />
              Airnoh
            </h1>

            <Button
              variant="outline"
              className="w-16 h-16 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#8B8B7A] hover:scale-110 transition-all duration-500 font-medium text-xs tracking-wider shadow-lg"
            >
              RSVP
            </Button>
          </div>
        </div>

        <div className="bg-white">
          <OurStory />
          <Gallery />
          <Registry />
        </div>
      </div> */}
    </div>
  );  
}
