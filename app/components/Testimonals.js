"use client"

import { memo, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Raghav Singh",
      role: "Startup Founder",
      company: "TechVenture Inc.",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "Rehoboth completely transformed our workflow. The speed, reliability, and support are unmatched. Their team went above and beyond to deliver exactly what we needed.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Pratiksha Gupta",
      role: "Product Manager",
      company: "InnovateCo",
      image: "https://i.pravatar.cc/150?img=45",
      rating: 5,
      text: "Their design quality and development speed helped us launch our product 3x faster. The attention to detail and professionalism was outstanding throughout the entire process.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Michael Lee",
      role: "Tech Entrepreneur",
      company: "Digital Solutions",
      image: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      text: "From UI/UX to deployment, Rehoboth delivered everything perfectly. Highly recommended! They truly understand modern web development and business needs.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      name: "Ruhi Goinka",
      role: "Marketing Director",
      company: "GrowthHub",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      text: "Working with Rehoboth was a game-changer for our digital presence. Their strategic approach and creative solutions exceeded all our expectations.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      name: "David Chen",
      role: "CEO",
      company: "StartupLabs",
      image: "https://i.pravatar.cc/150?img=68",
      rating: 5,
      text: "The team's expertise in both design and development is remarkable. They transformed our vision into reality with precision and creativity.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 text-gray-900 py-24 px-12 border-t border-b border-blue-200">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-600 font-medium">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our <span className="text-[#003366]">Clients Say</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted by startups, founders, and growing businesses worldwide.
          </p>
        </div>

        {/* Featured Testimonial - Large Card */}
        <div className="mb-12 relative">
          <div className="bg-white border-2 border-blue-200 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
            {/* Background Gradient */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${testimonials[activeIndex].gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-blue-100 group-hover:text-blue-200 transition-colors">
              <Quote size={80} />
            </div>

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-light italic">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-blue-200 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-xl text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-blue-600 font-medium">{testimonials[activeIndex].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-blue-200 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid - Smaller Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`bg-white border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === activeIndex 
                  ? 'border-blue-400 shadow-lg scale-105' 
                  : 'border-blue-200 hover:border-blue-300'
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border border-blue-200"
                />
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">{testimonial.name}</h4>
                  <span className="text-xs text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);