import React, { useState } from 'react';
import { Users, Award, Target, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy we create is designed to deliver measurable results and ROI.',
      number: '01',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We work as an extension of your team.',
      number: '02',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of trends and use cutting-edge tools and techniques.',
      number: '03',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      number: '04',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '10+ years in brand strategy and creative direction',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Michael Chen',
      role: 'Digital Marketing Lead',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in SEO, PPC, and digital analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Social Media Strategist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialist in social media growth and engagement',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'David Kim',
      role: 'Web Developer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with UX/UI expertise',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-black rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-600 text-sm font-medium mb-6 bg-gray-50">
            About Us
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-black mb-6">
            The Team Behind Your
            <span className="block font-bold italic bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"> Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of marketing experts, creatives, and strategists 
            dedicated to helping businesses achieve extraordinary growth.
          </p>
        </div>

        {/* Enhanced Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-black mb-6">Our Story</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Founded in 2018, our agency was born from a simple belief: every business 
                deserves marketing that works. We started as a small team of digital natives 
                who were frustrated with the gap between traditional marketing and what 
                actually drives results in today's digital world.
              </p>
              <p>
                Over the years, we've grown into a full-service marketing agency, but our 
                core mission remains the same: to help businesses connect with their audience 
                in meaningful ways that drive real, measurable growth.
              </p>
              <p>
                Today, we're proud to have helped over 500 businesses across various industries 
                achieve their marketing goals and exceed their growth expectations.
              </p>
            </div>
            <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors font-medium flex items-center space-x-2 group">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 relative overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 bg-black text-white p-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <div className="text-3xl font-light">500+</div>
                <div className="text-sm uppercase tracking-wider">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-black text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-black">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 hover:bg-black group transition-all duration-500 cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-lg transition-all duration-500 ${
                      hoveredValue === index 
                        ? 'bg-black text-white shadow-lg scale-110' 
                        : 'bg-gray-100 text-black group-hover:bg-black group-hover:text-white group-hover:shadow-lg'
                    }`}>
                      <value.icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-light text-gray-200 group-hover:text-gray-800 transition-colors duration-500">
                      {value.number}
                    </span>
                  </div>
                  <h4 className="text-xl font-light text-black group-hover:text-white mb-4 transition-colors duration-500">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Team */}
        <div>
          <h3 className="text-3xl font-light text-black text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative mb-6 overflow-hidden">
                  <div className="w-full h-64 bg-gray-200 overflow-hidden rounded-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  
                  {/* Social Links on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <span className="text-black text-sm font-medium">L</span>
                      </div>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <span className="text-black text-sm font-medium">T</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-light text-black mb-1 group-hover:text-gray-700 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-gray-600 font-medium mb-2 uppercase tracking-wider text-sm">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;