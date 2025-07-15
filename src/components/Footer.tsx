import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white text-black border-t border-gray-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-black rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Enhanced Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="./Asset 1.png" 
                  alt="Agency Logo" 
                  className="h-10 w-auto mr-3 filter brightness-0"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const nextElement = target.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'block';
                    }
                  }}
                />
                <div className="hidden text-2xl font-light">Agency</div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We help ambitious brands dominate their markets through data-driven 
                strategies and creative excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:scale-110 group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:scale-110 group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:scale-110 group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:scale-110 group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Enhanced Services */}
            <div>
              <h3 className="text-lg font-medium mb-6 uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  SEO Optimization
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Social Media Marketing
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Brand Design
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Digital Analytics
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Email Marketing
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Mobile Marketing
                </a></li>
              </ul>
            </div>

            {/* Enhanced Company */}
            <div>
              <h3 className="text-lg font-medium mb-6 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  About Us
                </a></li>
                <li><a href="#portfolio" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Our Work
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Careers
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Blog
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Press
                </a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors duration-300 group flex items-center">
                  <span className="w-0 h-px bg-black transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Contact
                </a></li>
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div>
              <h3 className="text-lg font-medium mb-6 uppercase tracking-wider">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  <span className="text-gray-600 group-hover:text-black transition-colors duration-300">hello@marketingagency.com</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Phone className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  <span className="text-gray-600 group-hover:text-black transition-colors duration-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1 group-hover:text-black transition-colors duration-300" />
                  <span className="text-gray-600 group-hover:text-black transition-colors duration-300">123 Marketing Street<br />New York, NY 10001</span>
                </div>
              </div>

              {/* Enhanced Newsletter */}
              <div className="mt-8">
                <h4 className="font-medium mb-3 uppercase tracking-wider text-sm">Newsletter</h4>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-0 py-2 border-0 border-b border-gray-300 focus:border-black focus:outline-none bg-transparent transition-colors duration-300"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors ml-2 transform hover:scale-105 group"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Footer */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 Marketing Agency. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors duration-300">Terms of Service</a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:scale-110 group"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;