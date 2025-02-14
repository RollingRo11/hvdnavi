import React, { useEffect, useState, useRef } from 'react';
import { Heart } from 'lucide-react';

const images = [
  {
    url: "/images/one.jpg",
    alt: "Photo 1"
  },
  {
    url: "/images/two.jpg",
    alt: "Photo 2"
  },
  {
    url: "/images/three.jpg",
    alt: "Photo 3"
  },
  {
    url: "/images/four.jpg",
    alt: "Photo 4"
  },
  {
    url: "/images/five.jpg",
    alt: "Photo 5"
  }, 
  {
    url: "/images/six.jpg",
    alt: "Photo 6"
  }, 
  {
    url: "/images/seven.jpg",
    alt: "Photo 7"
  },
  {
    url: "/images/eight.jpg",
    alt: "Photo 8"
  },
  {
    url: "/images/nine.jpg",
    alt: "Photo 9"
  },
  {
    url: "/images/ten.jpg",
    alt: "Photo 10"
  },
  {
    url: "/images/eleven.jpg",
    alt: "Photo 11"
  },
  {
    url: "/images/twelve.jpg",
    alt: "Photo 12"
  },
  {
    url: "/images/thirteen.jpg",
    alt: "Photo 13"
  }
];

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const containerTop = containerRef.current.offsetTop;
      
      // Calculate progress based on scroll position
      const progress = (scrollPosition - containerTop + windowHeight/2) / windowHeight;
      const imageIndex = Math.floor((progress * images.length) % images.length);
      
      if (imageIndex >= 0 && imageIndex < images.length) {
        setCurrentImageIndex(imageIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh] bg-gradient-to-br from-pink-400 via-pink-200 to-sky-400">
      <div className="sticky top-0 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full" ref={containerRef}>
          <div className={`transform transition-all duration-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-pink-200">
              <div className="flex justify-center mb-6">
                <Heart className="w-16 h-16 text-rose-500 animate-pulse" fill="currentColor" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-center text-rose-600 mb-6">
                Happy Valentine's Day, Navi!
              </h1>
              
              <div className="space-y-6 text-center">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  I LOVE YOU PAONKIN 🎃
                </p>
                
                <div className="flex justify-center space-x-2">
                  <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
                  <Heart className="w-5 h-5 text-rose-500 animate-bounce" fill="currentColor" />
                  <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
                </div>
                
                <p className="text-lg text-gray-600 italic">
                  To think it all started with a proposition.
                </p>
                
                <div className="pt-6 relative aspect-square w-[400px] mx-auto overflow-hidden rounded-lg shadow-lg">
                  {images.map((image, index) => (
                    <img
                      key={image.url}
                      src={image.url}
                      alt={image.alt}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500
                        ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
                
                <p className="text-sm text-gray-500 mt-2">
                  Scroll to see more photos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;