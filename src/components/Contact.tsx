import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border border-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 border border-gray-700 text-gray-300 text-sm font-medium mb-6 bg-black/50 backdrop-blur-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
            Ready to Start Your
            <span className="block font-bold italic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Journey?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your marketing and drive 
            the growth your business deserves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We'd love to hear about your project and discuss how we can help 
                you achieve your marketing goals. Reach out to us using any of the 
                methods below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 transform group-hover:scale-110">
                  <Mail className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-medium text-white group-hover:text-gray-300 transition-colors duration-300">Email Us</div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">hello@marketingagency.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 transform group-hover:scale-110">
                  <Phone className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-medium text-white group-hover:text-gray-300 transition-colors duration-300">Call Us</div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 transform group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-medium text-white group-hover:text-gray-300 transition-colors duration-300">Visit Us</div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">123 Marketing Street<br />New York, NY 10001</div>
                </div>
              </div>
            </div>

            {/* Enhanced Office Hours */}
            <div className="border border-gray-700 p-6 bg-black/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-white mr-2" />
                <h4 className="font-medium text-white uppercase tracking-wider text-sm">Office Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between group">
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Monday - Friday</span>
                  <span className="text-white group-hover:text-gray-300 transition-colors duration-300">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between group">
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Saturday</span>
                  <span className="text-white group-hover:text-gray-300 transition-colors duration-300">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between group">
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Sunday</span>
                  <span className="text-white group-hover:text-gray-300 transition-colors duration-300">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black rounded-full translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black rounded-full -translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className={`w-full px-0 py-3 border-0 border-b transition-all duration-300 bg-transparent focus:outline-none ${
                        focusedField === 'name' ? 'border-black' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                      focusedField === 'name' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={`w-full px-0 py-3 border-0 border-b transition-all duration-300 bg-transparent focus:outline-none ${
                        focusedField === 'email' ? 'border-black' : 'border-gray-300'
                      }`}
                      placeholder="john@company.com"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                      focusedField === 'email' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-medium text-black mb-2 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => handleFocus('company')}
                      onBlur={handleBlur}
                      className={`w-full px-0 py-3 border-0 border-b transition-all duration-300 bg-transparent focus:outline-none ${
                        focusedField === 'company' ? 'border-black' : 'border-gray-300'
                      }`}
                      placeholder="Your Company"
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                      focusedField === 'company' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                  <div className="relative">
                    <label htmlFor="service" className="block text-sm font-medium text-black mb-2 uppercase tracking-wider">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => handleFocus('service')}
                      onBlur={handleBlur}
                      className={`w-full px-0 py-3 border-0 border-b transition-all duration-300 bg-transparent focus:outline-none ${
                        focusedField === 'service' ? 'border-black' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="branding">Brand Design</option>
                      <option value="analytics">Digital Analytics</option>
                      <option value="email">Email Marketing</option>
                      <option value="mobile">Mobile Marketing</option>
                    </select>
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                      focusedField === 'service' ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className={`w-full px-0 py-3 border-0 border-b transition-all duration-300 resize-none bg-transparent focus:outline-none ${
                      focusedField === 'message' ? 'border-black' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                    focusedField === 'message' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 transform hover:scale-105 group"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;