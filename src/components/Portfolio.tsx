import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filters = ['All', 'Branding', 'Web Design', 'Social Media', 'SEO'];
  
  const projects = [
    {
      id: 1,
      title: 'TechStart Rebranding',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete brand identity redesign for a growing tech startup',
      results: '+150% Brand Recognition',
      year: '2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'E-commerce Growth Campaign',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Social media strategy that drove massive sales growth',
      results: '+300% Sales Increase',
      year: '2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Restaurant Website Redesign',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern website design with online ordering system',
      results: '+200% Online Orders',
      year: '2023',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Local Business SEO',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Local SEO optimization for service-based business',
      results: '+400% Local Traffic',
      year: '2023',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Fitness Brand Identity',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dynamic brand identity for fitness and wellness company',
      results: '+180% Member Growth',
      year: '2024',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'SaaS Platform Launch',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete digital presence for SaaS product launch',
      results: '10K+ Sign-ups',
      year: '2024',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 border border-white rounded-full translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-white rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 border border-gray-700 text-gray-300 text-sm font-medium mb-6 bg-black/50 backdrop-blur-sm">
            <Filter className="w-4 h-4 mr-2" />
            Our Work
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
            Success Stories That
            <span className="block font-bold italic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Inspire</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable 
            growth through strategic marketing and creative excellence.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-transparent text-gray-400 border border-gray-700 hover:text-white hover:border-gray-500 hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white hover:bg-gray-100 transition-all duration-500 cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                
                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Enhanced External Link Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white text-black p-3 hover:bg-gray-100 transition-colors shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Enhanced Year Badge */}
                <div className="absolute bottom-4 left-4 text-white font-light text-sm bg-black/50 px-3 py-1 backdrop-blur-sm">
                  {project.year}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-white bg-black/50 px-2 py-1 uppercase tracking-wider backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-light text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-500">Result: </span>
                    <span className="font-medium text-black">{project.results}</span>
                  </div>
                  <button className="text-black hover:text-gray-600 transition-colors group-hover:translate-x-1 transform duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-all duration-300 font-semibold flex items-center space-x-2 mx-auto transform hover:scale-105 group">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;