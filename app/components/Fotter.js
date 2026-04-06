"use client";

import { memo, useState } from "react";
import { Globe, Facebook, Twitter, Instagram, Linkedin, Sparkles,Youtube, Zap, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const quickLinks = [
    {label:"Home", href:"/" },
    {label:"About", href:"/about" },
    {label:"Services", href:"/service" },
    {label:"Contact", href:"/#contact" },
    {label:"Our Location", href:"/digital-marketing-company-in-dwarka" },

  ]

  const socialLinks = [
    { icon: Globe, name: "Website", link: "#", color: "blue" },
    { icon: Facebook, name: "Facebook", link: "https://www.facebook.com/share/1CpGGMsDTh/", color: "blue" },
    { icon: Twitter, name: "Twitter", link: "https://x.com/rehoboth_digi", color: "sky" },
    { icon: Instagram, name: "Instagram", link: "https://www.instagram.com/rehobothdigitechsolution?igsh=NGF0ZTBrcHk0a2F4", color: "pink" },
    { icon: Youtube, name: "Youtube", link: "https://youtube.com/@rehobothdigitech?si=yt1bb_Sudx2ozEEn", color: "blue" },
    { icon: Linkedin, name: "Linkedin", link: "https://www.linkedin.com/company/rehoboth-digitech-solution/", color: "blue" }
  ];

  return (
    <footer className="py-20 px-6 md:px-12 relative z-10 bg-[#F9F8F6] border-t border-blue-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="text-blue-600 group-hover:rotate-180 transition-transform duration-500 group-hover:scale-125">
                <Sparkles size={28} />
              </div>
              <h3 className="text-gray-900 text-3xl font-bold group-hover:text-blue-600 transition-colors">
                Rehoboth DigiTech
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
            Looking for a Cost-effective digital marketing company in Janakpuri, Delhi?
Visit our office or contact us using the details below. Our team is always ready to help you grow your business online.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 hover:bg-blue-100 transition-all cursor-pointer transform hover:scale-105 hover:shadow-md group">
                <Shield className="text-blue-600 group-hover:rotate-12 transition-transform" size={16} />
                <span className="text-sm text-gray-700 font-medium">Trusted Partner</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 hover:bg-blue-100 transition-all cursor-pointer transform hover:scale-105 hover:shadow-md group">
                <Zap className="text-blue-600 group-hover:scale-125 transition-transform" size={16} />
                <span className="text-sm text-gray-700 font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i} className="group cursor-pointer">
                  <Link href={link.href} className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group-hover:translate-x-1 transform transition-transform">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:font-semibold transition-all">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Our Services</h4>
             <ul className="space-y-3">
              <li className="group cursor-pointer">
                <Link href="/website-development-company-in-jankpuri" className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group-hover:translate-x-1 transform transition-transform">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-semibold transition-all">Web Development</span>
                </Link>
              </li>
              
              <li className="group cursor-pointer">
                <Link href="/seo-company-in-janakpuri" className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group-hover:translate-x-1 transform transition-transform">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-semibold transition-all">SEO Services</span>
                </Link>
              </li>
              <li className="group cursor-pointer">
                <Link href="/social-media-marketing-company-in-janakpuri" className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group-hover:translate-x-1 transform transition-transform">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-semibold transition-all">Social Media Marketing</span>
                </Link>
              </li>
              <li className="group cursor-pointer">
                <Link href="/ppc-advertising-company-in-janakpuri" className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group-hover:translate-x-1 transform transition-transform">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-semibold transition-all">PPC Advertising</span>
                </Link>
              </li>
              <li className="group cursor-pointer">
                <Link href="/graphic-design-company-in-janakpuri" className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group-hover:translate-x-1 transform transition-transform">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-semibold transition-all">Graphic Design</span>
                </Link>
              </li>
              <li className="group cursor-pointer">
                <Link href="/it-support-and-maintenance-in-janakpuri" className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group-hover:translate-x-1 transform transition-transform">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  <span className="group-hover:font-semibold transition-all">IT Services</span>
                </Link>
              </li>
             </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Follow Us</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  onMouseEnter={() => setHoveredSocial(i)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="p-3 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-600 hover:border-blue-600 transition-all group cursor-pointer transform hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
                  title={social.name}
                >
                  {hoveredSocial === i && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 animate-pulse" />
                  )}
                  <social.icon size={20} className="text-blue-600 group-hover:text-white transition-colors relative z-10 group-hover:rotate-12 transform transition-transform" />
                </a>
              ))}
            </div>

            {/* Contact Badge */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs text-gray-600 mb-2 font-medium relative z-10">Need Help?</p>
              <a href="tel:+919220157241" className="text-gray-900 font-bold hover:text-blue-600 transition-colors relative z-10 inline-block group-hover:scale-105 transform transition-transform">
                +91 9220157241
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className=" gap-4 pt-8 border-t border-blue-200">
          <p className="text-gray-600 text-sm text-center">
            © 2022 Rehoboth Digitech Solution. All rights reserved.
          </p>
          
          
        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);