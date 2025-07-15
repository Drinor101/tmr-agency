import React, { useState } from 'react';
import { 
  Search, 
  Megaphone, 
  Palette, 
  BarChart3, 
  Mail, 
  Smartphone,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies.',
      number: '01',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all social platforms.',
      number: '02',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Create a memorable brand identity that resonates with your target audience.',
      number: '03',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Digital Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and reporting.',
      number: '04',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns.',
      number: '05',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach your audience on mobile devices with targeted mobile marketing strategies.',
      number: '06',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-black rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-600 text-sm font-medium mb-6 bg-gray-50">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-black mb-6">
            Everything You Need to
            <span className="block font-bold italic bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide comprehensive marketing solutions 
            that drive results and help your business thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-black mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 hover:bg-black transition-all duration-500 cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-lg transition-all duration-500 ${
                    hoveredService === index 
                      ? 'bg-white text-black shadow-lg scale-110' 
                      : 'bg-gray-100 text-black group-hover:bg-white group-hover:shadow-lg'
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-6xl font-light text-gray-200 group-hover:text-gray-800 transition-colors duration-500">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-black group-hover:text-white mb-4 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <button className="text-black group-hover:text-white font-medium flex items-center space-x-2 transition-colors duration-500 mt-6">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-black p-12 lg:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-light text-white mb-6">
                Ready to Transform Your Marketing?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our services can help you achieve your business goals 
                and drive sustainable growth.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-all duration-300 font-semibold flex items-center space-x-2 mx-auto transform hover:scale-105 group"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;