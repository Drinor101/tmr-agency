import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSectionBackground, setCurrentSectionBackground] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      const scrollPosition = scrollY + 100;
      
      // Define section backgrounds
      const sectionBackgrounds = {
        home: 'dark',
        services: 'light',
        portfolio: 'dark',
        about: 'light',
        contact: 'dark'
      };
      
      // Determine current section and its background
      let currentSection = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sections[i];
          break;
        }
      }
      
      setActiveSection(currentSection);
      setCurrentSectionBackground(sectionBackgrounds[currentSection as keyof typeof sectionBackgrounds] as 'light' | 'dark' || 'dark');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  // Determine navigation style based on current section background and scroll state
  const shouldUseLightNav = currentSectionBackground === 'light' && isScrolled;
  const shouldUseDarkNav = currentSectionBackground === 'dark' || !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      shouldUseLightNav
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-black/80 backdrop-blur-md border-b border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Asset 1.png" 
              alt="Agency Logo" 
              className={`h-10 w-auto transition-all duration-700 ${
                shouldUseLightNav ? 'filter brightness-0' : 'filter brightness-0 invert'
              }`}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const nextElement = target.nextElementSibling as HTMLElement;
                if (nextElement) {
                  nextElement.style.display = 'block';
                }
              }}
            />
            <div className={`hidden text-2xl font-bold transition-colors duration-700 ${
              shouldUseLightNav ? 'text-black' : 'text-white'
            }`}>
              Agency
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium relative group transition-all duration-500 ${
                  shouldUseLightNav 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-gray-300 hover:text-white'
                } ${
                  activeSection === item.id 
                    ? (shouldUseLightNav ? 'text-black' : 'text-white') 
                    : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-500 group-hover:w-full ${
                  activeSection === item.id 
                    ? 'w-full' 
                    : 'w-0'
                } ${
                  shouldUseLightNav ? 'bg-black' : 'bg-white'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-3 font-medium flex items-center space-x-2 transform hover:scale-105 transition-all duration-500 ${
                shouldUseLightNav 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 transition-colors duration-700 ${
              shouldUseLightNav ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-6 border-t transition-all duration-700 ${
            shouldUseLightNav 
              ? 'border-gray-200 bg-white/95 backdrop-blur-md' 
              : 'border-gray-700 bg-black/95 backdrop-blur-md'
          }`}>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-medium transition-colors duration-500 ${
                    shouldUseLightNav 
                      ? 'text-gray-700 hover:text-black' 
                      : 'text-gray-300 hover:text-white'
                  } ${
                    activeSection === item.id 
                      ? (shouldUseLightNav ? 'text-black' : 'text-white') 
                      : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className={`mt-4 px-6 py-3 font-medium flex items-center justify-center space-x-2 transition-all duration-500 ${
                  shouldUseLightNav 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;