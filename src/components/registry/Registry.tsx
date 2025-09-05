import React from 'react'
import { Button } from '../ui/button';

const Registry = () => {
  
    return (
        <section id="registry" className="min-h-screen bg-gradient-to-br from-[#f4f1ef] to-[#ebe7e3] flex items-center justify-center px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-[#8B8B7A] mb-8 tracking-wide">
            Registry
          </h2>
          <p className="md:text-xl text-[#8B8B7A]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your presence at our celebration is the most precious gift we could ask for. 
            If you wish to honor us with a gift, we have set up a registry for cash contributions 
            to help us start our new journey together.
          </p>
          
          <div className="relative max-w-md mx-auto">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#d4b5a0] to-[#c4b5ab] rounded-3xl blur-lg opacity-20"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#b8a99f] to-[#a8998f] rounded-2xl blur-md opacity-30"></div>
            
            {/* Main registry card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-white/40">
              <div className="text-5xl md:text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">
                💝
              </div>
              <h3 className="font-serif md:text-2xl text-xl text-[#8B8B7A] mb-6">Cash Registry</h3>
              
              <div className="space-y-4 text-[#8B8B7A]/80 mb-8">
                <p className="md:text-lg leading-relaxed">
                  We&apos;re grateful for your love and support as we begin this beautiful chapter together.
                </p>
                <p className="md:text-sm text-xs opacity-75">
                  All contributions will help us create our dream home and future adventures.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-[#a78f9d] to-[#8B8B7A] text-white border-0 hover:from-[#8B8B7A] hover:to-[#a78f9d] hover:scale-105 transition-all duration-300 py-3 rounded-full font-medium tracking-wider shadow-lg"
                >
                  Visit Our Registry
                </Button>
                
                <p className="text-xs text-[#8B8B7A]/60">
                  Hosted securely on myregistry.ca
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <p className="text-[#8B8B7A]/60 italic md:text-lg max-w-2xl mx-auto">
              &quot;A successful marriage requires falling in love many times, always with the same person.&quot; 
              <span className="block mt-2 md:text-sm text-xs">- Mignon McLaughlin</span>
            </p>
          </div>
        </div>
      </section>
    );
  };

export default Registry