"use client"

import { memo } from "react";
import { Zap, Shield, Sparkles, Cloud, Palette, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance at every level.",
      gradient: "from-yellow-100 to-orange-100",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Built with modern security standards and best practices.",
      gradient: "from-blue-100 to-cyan-100",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      icon: Sparkles,
      title: "AI Powered",
      description: "Smart automation to save time and increase productivity.",
      gradient: "from-purple-100 to-pink-100",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      icon: Cloud,
      title: "Cloud Ready",
      description: "Scalable cloud infrastructure for growing businesses.",
      gradient: "from-sky-100 to-indigo-100",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    },
    {
      icon: Palette,
      title: "Modern UI/UX",
      description: "Clean, responsive design that users love to use.",
      gradient: "from-pink-100 to-rose-100",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support whenever you need assistance.",
      gradient: "from-emerald-100 to-teal-100",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
    }
  ];

  return (
    <section className="relative bg-white text-gray-900 py-24 px-6 overflow-hidden border-t border-b border-blue-200">
      {/* Animated background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Features</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Everything You Need to <br />
            <span className="text-blue-600">
              Grow Faster
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Powerful tools designed to simplify your work and boost productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-blue-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-300/80 to-blue-2  00/20"></div>
                  
                  {/* Icon over image */}
                  <div className="absolute bottom-4 left-4 inline-flex p-3 rounded-xl bg-white/95 backdrop-blur-sm border border-blue-200 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400/0 group-hover:bg-blue-600 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
            Explore All Features
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Features);