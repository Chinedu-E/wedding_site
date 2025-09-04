import React, { useState, useEffect, useRef } from 'react';

// Type definitions
interface Position {
  x: number;
  y: number;
}

interface Photo {
  id: number;
  src: string;
  alt: string;
  initialPosition: Position;
}

interface DraggablePhotoProps {
  src: string;
  alt: string;
  initialPosition: Position;
  onDrag?: (position: Position) => void;
  zIndex?: number;
  onMouseDown?: () => void;
}

interface DragState {
  x: number;
  y: number;
}

const DraggablePhoto: React.FC<DraggablePhotoProps> = ({ 
  src, 
  alt, 
  initialPosition, 
  onDrag,
  zIndex = 1,
  onMouseDown: onMouseDownCallback
}) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<DragState>({ x: 0, y: 0 });
  const photoRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(true);
    
    if (photoRef.current) {
      const rect = photoRef.current.getBoundingClientRect();
      setDragStart({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    
    // Callback to bring this photo to front
    onMouseDownCallback?.();
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging || !photoRef.current) return;
    
    const container = photoRef.current.parentElement?.getBoundingClientRect();
    if (!container) return;

    const photoWidth = 200;
    const photoHeight = 200; // Approximate height including padding and text
    
    const newPosition: Position = {
      x: Math.max(0, Math.min(container.width - photoWidth, e.clientX - container.left - dragStart.x)),
      y: Math.max(0, Math.min(container.height - photoHeight, e.clientY - container.top - dragStart.y))
    };
    
    setPosition(newPosition);
    onDrag?.(newPosition);
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDragging(true);
    
    if (photoRef.current) {
      const rect = photoRef.current.getBoundingClientRect();
      setDragStart({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      });
    }
    
    onMouseDownCallback?.();
  };

  const handleTouchMove = (e: TouchEvent): void => {
    if (!isDragging || !photoRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const container = photoRef.current.parentElement?.getBoundingClientRect();
    if (!container) return;

    const photoWidth = 200;
    const photoHeight = 200;
    
    const newPosition: Position = {
      x: Math.max(0, Math.min(container.width - photoWidth, touch.clientX - container.left - dragStart.x)),
      y: Math.max(0, Math.min(container.height - photoHeight, touch.clientY - container.top - dragStart.y))
    };
    
    setPosition(newPosition);
    onDrag?.(newPosition);
  };

  const handleTouchEnd = (): void => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMoveEvent = (e: MouseEvent) => handleMouseMove(e);
      const handleMouseUpEvent = () => handleMouseUp();
      const handleTouchMoveEvent = (e: TouchEvent) => handleTouchMove(e);
      const handleTouchEndEvent = () => handleTouchEnd();

      document.addEventListener('mousemove', handleMouseMoveEvent);
      document.addEventListener('mouseup', handleMouseUpEvent);
      document.addEventListener('touchmove', handleTouchMoveEvent, { passive: false });
      document.addEventListener('touchend', handleTouchEndEvent);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMoveEvent);
        document.removeEventListener('mouseup', handleMouseUpEvent);
        document.removeEventListener('touchmove', handleTouchMoveEvent);
        document.removeEventListener('touchend', handleTouchEndEvent);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div
      ref={photoRef}
      className={`absolute bg-white p-3 rounded-lg shadow-lg cursor-grab active:cursor-grabbing transform transition-transform duration-200 hover:scale-105 ${
        isDragging ? 'rotate-2 shadow-xl' : 'hover:rotate-1'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '200px',
        userSelect: 'none',
        zIndex: zIndex,
        touchAction: 'none'
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-32 object-cover pointer-events-none"
        draggable={false}
      />
      <div className="text-xs text-gray-600 mt-2 text-center font-serif italic">
        {alt}
      </div>
    </div>
  );
};

const DraggablePhotosArea: React.FC = () => {
  const [photoZIndexes, setPhotoZIndexes] = useState<Record<number, number>>({});
  const [dragPositions, setDragPositions] = useState<Record<number, Position>>({});

  const photos: Photo[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      alt: "First Date",
      initialPosition: { x: 50, y: 30 }
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      alt: "The Proposal",
      initialPosition: { x: 180, y: 120 }
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      alt: "Engagement",
      initialPosition: { x: 100, y: 200 }
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
      alt: "Together",
      initialPosition: { x: 300, y: 80 }
    }
  ];

  const handlePhotoMouseDown = (photoId: number): void => {
    const maxZ = Math.max(...Object.values(photoZIndexes), 0);
    setPhotoZIndexes(prev => ({
      ...prev,
      [photoId]: maxZ + 1
    }));
  };

  const handlePhotoDrag = (photoId: number, position: Position): void => {
    setDragPositions(prev => ({
      ...prev,
      [photoId]: position
    }));
  };

  // Initialize z-indexes
  useEffect(() => {
    const initialZIndexes: Record<number, number> = {};
    photos.forEach((photo, index) => {
      initialZIndexes[photo.id] = index + 1;
    });
    setPhotoZIndexes(initialZIndexes);
  }, []);

  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
      <div className="absolute top-4 left-4 text-white/70 text-sm font-serif italic z-10">
        Drag our memories around ✨
      </div>
      
      {photos.map((photo: Photo) => (
        <DraggablePhoto
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          initialPosition={photo.initialPosition}
          zIndex={photoZIndexes[photo.id] || 1}
          onMouseDown={() => handlePhotoMouseDown(photo.id)}
          onDrag={(position: Position) => handlePhotoDrag(photo.id, position)}
        />
      ))}
      
      {/* Optional: Display current positions for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-2 right-2 text-xs text-white/50 font-mono">
          {Object.entries(dragPositions).map(([id, pos]) => (
            <div key={id}>
              Photo {id}: ({Math.round(pos.x)}, {Math.round(pos.y)})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OurStory: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="our-story" className="min-h-screen bg-gradient-to-br from-[#c4b5ab] to-[#b8a99f] flex items-center justify-center md:px-8 px-4 py-8">
      <div className={`h-full text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-serif text-5xl md:text-7xl text-white mb-12 tracking-wide">Our Story</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center md:items-start">
          <div className="space-y-6 text-white ">
            <div className="transform hover:scale-105 transition-transform duration-300 max-w-2xl">
              <h3 className="font-serif text-2xl mb-4 text-[#f4f1ef]">How We Met</h3>
              <p className="md:text-lg leading-relaxed opacity-90">
                It was a rainy Tuesday morning at the little coffee shop on Fifth Street. 
                Ijay was reading poetry, and Airnoh was sketching the steam rising from her latte. 
                A shared smile over spilled sugar packets became the beginning of forever.
              </p>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-300 delay-100 max-w-2xl">
              <h3 className="font-serif text-2xl mb-4 text-[#f4f1ef]">The Proposal</h3>
              <p className="md:text-lg leading-relaxed opacity-90">
                On a quiet evening walk through the botanical gardens where we had our first date, 
                Ijay got down on one knee beside the fountain of wishes. 
                Every wish we'd ever made together was about to come true.
              </p>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300 delay-200 max-w-2xl">
              <h3 className="font-serif text-2xl mb-4 text-[#f4f1ef]">Our Journey</h3>
              <p className="md:text-lg leading-relaxed opacity-90">
                From midnight conversations to Sunday morning pancakes, 
                from adventure travels to quiet evenings at home. 
                Every moment has been a step towards this perfect day.
              </p>
            </div>
          </div>
          
          <div className="relative h-full w-full">
            <DraggablePhotosArea />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;