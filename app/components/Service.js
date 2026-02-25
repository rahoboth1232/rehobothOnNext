"use client";

import { memo } from "react";
import { Code, Palette, TrendingUp, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

const ServiceCard = memo(function ServiceCard({ service }) {
  return (
    <div className="bg-white border border-blue-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          loading="lazy"
          decoding="async"
          alt={service.title}
          className="w-full brightness-[0.65] h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
          {service.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {service.tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-[#003366] rounded-full text-xs font-medium hover:bg-blue-200 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 🔥 NEW: Sub‑services links (optional) */}
        {service.links?.length > 0 && (
          <div className="mt-auto pt-4 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-500 mb-2 text-center">
              Explore Services
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {service.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {link.label}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// Main Services Section
// ─────────────────────────────────────────────────────────────────────────────

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description:
        "We design and develop fast, mobile-friendly, and SEO-optimized websites that reflect your brand professionally. Our web development services focus on clean design, smooth user experience, and high performance to help convert visitors into customers and grow your business online.",
      image: "/web.jpeg",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      links: [{ label: "explore", href: "/web-development" }],
    },

    {
      icon: <TrendingUp size={40} />,
      title: "SEO Services,",
      description:
        "Our SEO services help your website rank higher on Google and attract organic traffic. As a reliable SEO company in Janakpuri, Delhi. We focus on keyword optimization, on-page SEO, technical improvements, and content strategies that bring sustainable results.",
      image: "/Digital.jpeg",
      tech: ["SEO", "Google Ads", "Analytics", "Social Media"],
      links: [{ label: "explore", href: "/seo-service" }],
    },

    {
      icon: <Wrench size={40} />,
      title: "Social media marketig",
      description:
        "We help brands connect with their audience on platforms like Instagram, Facebook, and LinkedIn. Our social media marketing services are designed to improve engagement, brand awareness, and lead generation for businesses in Delhi.",
      image: "/social-media.jpg",
      tech: ["24/7 Support", "Security", "Cloud", "Backup"],
      links: [{ label: "explore", href: "/social-media-marketing" }],
    },
    {
      icon: <Wrench size={40} />,
      title: "PPC Advertising",
      description:
        "Our paid advertising services help you reach the right audience at the right time. We manage Google Ads and social media ads to generate quality leads while keeping your ad spend efficient.",
      image: "/ppc.jpg",
      tech: ["24/7 Support", "Security", "Cloud", "Backup"],
      links: [{ label: "explore", href: "/ppc-advertising" }],
    },
    {
      icon: <Wrench size={40} />,
      title: "IT Suport & Maintenance",
      description:
        " We provide reliable IT solutions, system maintenance, and technical support to keep your business running smoothly. Our proactive monitoring, network management, and quick issue resolution ensure better security, performance, and minimal downtime for your business.",
      image: "/It.jpeg",
      tech: ["24/7 Support", "Security", "Cloud", "Backup"],
      links: [{ label: "explore", href: "/it-support" }],
    },
    {
      icon: <Palette size={40} />,
      title: "Graphic Design",
      description:
        " Our graphic design services help your brand stand out with creative logos, social media creatives, brochures, and marketing materials. We focus on professional, eye-catching designs that build a strong brand identity and leave a lasting impression.",
      image: "/Graphic.jpeg",
      tech: ["Figma", "Photoshop", "Illustrator", "Canva"],
      links: [{ label: "explore", href: "/graphic-design" }],
    },
  ];

  return (
    <>
    <section className="bg-[#F9F8F6] text-gray-900 pb-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-600 font-medium">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
           WHY CHOOSE US <br />
            To <span className="text-[#003366]">Experienced digital marketing professionals
</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our SEO services help your website rank higher on Google and attract
            organic traffic. We focus on keyword optimization, technical SEO,
            and content strategies that bring sustainable results.
          </p>
        </div>

        {/* Grid */}
        <div className="">
          <Carousel
            plugins={[
              Autoplay({
                dealy: 300,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            >
            {" "}
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-5 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ServiceCard key={index} service={service} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>

       
    </section>
    
            </>
  );
};

export default memo(Services);
