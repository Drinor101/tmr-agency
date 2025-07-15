import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Volume2, VolumeX, ChevronDown } from 'lucide-react';

const HERO_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4"; // Placeholder: replace with a retro/old-school video if you have a better one

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border-r border-b border-gray-800 animate-pulse"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Moving Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white opacity-10 animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-white opacity-5 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 border-2 border-white opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-20 w-8 h-8 bg-white opacity-15 animate-ping" style={{ animationDelay: '6s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white opacity-8 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        </div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"></div>
      </div>

      {/* Parallax Background Elements */}
      <div ref={parallaxRef} className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-white opacity-10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-white opacity-25 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium animate-fade-in bg-black/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                #1 Marketing Agency
              </div>
              <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight animate-slide-up">
                Grow Your
                <span className="block font-bold italic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Business </span>
                With Expert Marketing
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
                We help ambitious brands dominate their markets through data-driven strategies, 
                creative campaigns, and measurable results that drive real growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-2xl group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center group">
                <div className="text-3xl font-light text-white group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-light text-white group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-light text-white group-hover:scale-110 transition-transform duration-300">5x</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Average ROI</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Main Frame with Video Inside */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="w-96 h-96 border border-gray-700 relative animate-float">
                <div className="absolute inset-4 border border-gray-600 animate-pulse"></div>
                <div className="absolute inset-8 border border-gray-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Enhanced Video Inside the Frame */}
                <div className="absolute inset-12 group cursor-pointer">
                  <div className="relative w-full h-full bg-black border border-gray-600 overflow-hidden hover:border-white transition-all duration-500">
                    {!isVideoLoaded && (
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-8 h-8 text-white mx-auto mb-2" />
                          <p className="text-white text-xs">Loading Video...</p>
                        </div>
                      </div>
                    )}
                    <video
                      ref={videoRef}
                      className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ${
                        isVideoLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      onLoadedData={handleVideoLoad}
                      poster="https://i.imgur.com/8QfQF5F.png" // Optional: a dark/retro poster
                    >
                      <source src={HERO_VIDEO_URL} type="video/mp4" />
                    </video>
                    
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300"></div>
                    
                    {/* Enhanced Video Controls */}
                    <div className="absolute bottom-2 right-2">
                      <button
                        onClick={toggleMute}
                        className="bg-black/50 text-white p-2 hover:bg-black/70 transition-colors text-xs rounded-sm"
                      >
                        {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                      </button>
                    </div>
                    
                 
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-white p-4 animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                  <div className="text-black font-bold text-lg">247%</div>
                  <div className="text-black text-xs uppercase tracking-wider">Growth</div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-black border border-white p-4 animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg" style={{ animationDelay: '1s' }}>
                  <div className="text-white font-bold text-lg">4.9/5</div>
                  <div className="text-gray-300 text-xs uppercase tracking-wider">Rating</div>
                </div>

                {/* Additional floating elements */}
                <div className="absolute -top-12 -right-12 w-6 h-6 bg-white opacity-60 animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute -bottom-12 -left-12 w-4 h-4 border border-white opacity-40 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Click Function */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer group"
        onClick={scrollToServices}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400 group-hover:text-white transition-colors duration-300">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-gray-600 group-hover:bg-white transition-colors duration-300 animate-pulse"></div>
          <ChevronDown className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;