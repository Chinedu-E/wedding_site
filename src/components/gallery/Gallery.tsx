import React, { useState } from 'react'
import { Button } from '../ui/button';

interface Photo {
    id: number;
    category: string;
    color: string;
}

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
    
    const photos: Photo[] = [
      { id: 1, category: "Engagement", color: "bg-[#d4b5a0]" },
      { id: 2, category: "Travel", color: "bg-[#c4b5ab]" },
      { id: 3, category: "Family", color: "bg-[#b8a99f]" },
      { id: 4, category: "Friends", color: "bg-[#d0c1b7]" },
      { id: 6, category: "Memories", color: "bg-[#a8998f]" },
    ];
  
    return (
      <section id="gallery" className="min-h-screen bg-[#8B8B7A] px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl text-white text-center mb-16 tracking-wide">
            Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${photo.color}`}
                onClick={() => setSelectedImage(photo)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  height: index % 3 === 0 ? '300px' : index % 2 === 0 ? '250px' : '200px'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/80 font-serif md:text-lg">{photo.category}</span>
                </div>
                <div className="absolute bottom-10 left-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white md:text-sm text-xs bg-black/30 px-2 py-1 rounded">
                    {photo.category} Photos
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-white/80 md:text-lg mb-8 max-w-2xl mx-auto">
              Every picture tells a story of love, laughter, and the beautiful journey that brought us together.
            </p>
            <Button
              variant="outline"
              className="border-white hover:bg-white hover:text-[#8B8B7A] px-8 py-3 text-sm md:text-base rounded-full"
            >
              View All Photos
            </Button>
          </div>
        </div>
        
        {/* Modal for selected image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white md:text-xl text-lg hover:opacity-70"
                onClick={() => setSelectedImage(null)}
              >
                ✕ Close
              </button>
              <div className={`w-full h-96 ${selectedImage.color} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-serif md:text-2xl text-xl">{selectedImage.category} Collection</span>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

export default Gallery