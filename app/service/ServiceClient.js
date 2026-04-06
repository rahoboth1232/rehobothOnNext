"use client";

import { memo, useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Monitor,
  Megaphone,
  Settings,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Shield,
  Users,
  Clock,
  DollarSign,
  Search,
  Share2,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   Fonts loaded via next/head or global CSS.
   Add to globals.css / layout:
   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
───────────────────────────────────────── */

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const services = [
  {
    icon: Code,
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    desc: "Fast, scalable and SEO-friendly websites built with modern technologies tailored for your business goals.",
    bullets: [
      "Custom responsive websites",
      "Headless CMS & eCommerce",
      "Performance optimization",
      "Progressive Web Apps",
    ],
    links: [{ label: "Explore", href: "/web-development" }],
    tag: "Development",
  },
  {
    icon: Monitor,
    title: "UI / UX & Graphic Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    desc: "Clean, conversion-focused designs that build trust, clarity, and a lasting brand impression.",
    bullets: [
      "Brand identity & logos",
      "UI / UX design",
      "Marketing creatives",
      "Design systems",
    ],
    links: [{ label: "Explore", href: "/graphic-design" }],
    tag: "Design",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    desc: "Data-driven SEO and marketing strategies to grow organic traffic, leads, and revenue.",
    bullets: [
      "SEO audits & optimization",
      "Content strategy",
      "Paid ads (PPC)",
      "Analytics & reporting",
    ],
    links: [
      { label: "SEO Services", href: "/seo-service" }
    ],
    tag: "Marketing",
  },
  {
    icon: Settings,
    title: "IT Support & Maintenance",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    desc: "Reliable round-the-clock support and monitoring to keep your digital systems secure and performant.",
    bullets: [
      "24/7 monitoring",
      "Cloud & hosting",
      "Security & backups",
      "Performance tuning",
    ],
    links: [{ label: "Explore", href: "/it-support" }],
    tag: "Support",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We move quickly without compromising quality. Most projects delivered in 2–6 weeks.",
  },
  {
    icon: Target,
    title: "ROI-Focused",
    desc: "Every feature we build is designed to drive measurable, real business results.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Bank-grade security standards protecting your data and your customers' trust.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Work directly with experienced developers, designers, and strategists.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock monitoring and support to keep your systems always running.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "No hidden fees. Clear, upfront pricing with detailed project estimates.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We start by understanding your business goals, target audience, and technical requirements through in-depth consultations.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    desc: "Our designers create wireframes and high-fidelity mockups, ensuring visual direction aligns with your brand.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Development & Testing",
    desc: "Our developers build your solution using modern technologies, with rigorous testing at every stage.",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Launch & Growth",
    desc: "We handle the launch and provide ongoing support, optimisation, and marketing to ensure long-term success.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop",
  },
];

const techStack = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "Firebase", "MongoDB"] },
  { title: "Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
  { title: "Marketing & Analytics", items: ["Google Analytics", "Google Ads", "SEMrush", "HubSpot"] },
  { title: "Cloud & DevOps", items: ["AWS", "Google Cloud", "GitHub", "Docker"] },
];

/* ─────────────────────────────────────────
   REUSABLE SECTION LABEL
───────────────────────────────────────── */
const SectionLabel = ({ children, light = false }) => (
  <span
    className={`block text-[0.65rem] font-semibold tracking-[0.28em] uppercase mb-4 ${
      light ? "text-amber-400" : "text-amber-600"
    }`}
    style={{ fontFamily: "'DM Sans', sans-serif" }}
  >
    {children}
  </span>
);

/* ─────────────────────────────────────────
   GOLD RULE
───────────────────────────────────────── */
const GoldRule = ({ className = "" }) => (
  <div
    className={`h-px bg-gradient-to-r from-amber-500 to-transparent max-w-[80px] mb-6 ${className}`}
  />
);

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
const ServicesClient = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        .rds-display { font-family: 'Playfair Display', Georgia, serif !important; }
        .rds-body    { font-family: 'DM Sans', system-ui, sans-serif !important; }
      `}</style>

      <main className="rds-body bg-white text-gray-900 overflow-x-hidden">

       
        <section
          className="relative min-h-[88vh] flex items-center overflow-hidden"
          style={{
            background:
              "linear-gradient(140deg, #08172e 0%, #0d2044 45%, #0a1f50 75%, #08172e 100%)",
          }}
        >
          {/* Radial glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,1) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(29,78,216,1) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Decorative rings */}
          {[500, 360, 220].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-amber-400/10 pointer-events-none"
              style={{
                width: size,
                height: size,
                top: i === 2 ? "auto" : -80 + i * 40,
                bottom: i === 2 ? 40 : "auto",
                right: i === 2 ? "auto" : -80 + i * 40,
                left: i === 2 ? -60 : "auto",
                animation: `pulse ${4 + i * 1.5}s ease-in-out infinite`,
                animationDelay: `${i * 1.2}s`,
              }}
            />
          ))}

          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(1.04); }
            }
          `}</style>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-amber-400/20 rounded-full px-4 py-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="rds-body text-xs text-white/70 tracking-widest uppercase font-medium">
                  Rehoboth Digitech · Our Services
                </span>
              </div>

              <h1
                className="rds-display text-white leading-[1.08] mb-6"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)", fontWeight: 900 }}
              >
                Digital Services That{" "}
                <em className="text-amber-400">Grow Your Business</em>
              </h1>

              <div
                className="h-px mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, #c9a84c 0%, transparent 100%)",
                  maxWidth: 180,
                }}
              />

              <p
                className="rds-body text-white/60 leading-[1.85] mb-10 max-w-2xl"
                style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
              >
                We design, build and market modern digital products focused on
                measurable business growth. From concept to launch — we are your
                trusted technology and marketing partner in Delhi NCR.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="rds-body inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#08172e] font-bold text-xs tracking-widest uppercase px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
                >
                  Get Started <ArrowRight size={14} />
                </button>
                <button
                  className="rds-body inline-flex items-center gap-2 bg-transparent border border-white/25 hover:border-white/60 text-white font-medium text-sm px-8 py-4 rounded transition-all duration-200"
                >
                  View Portfolio
                </button>
              </div>
            </motion.div>

            {/* Floating stat pills */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
              {[
                { num: "120+", label: "Projects" },
                { num: "50+", label: "Clients" },
                { num: "98%", label: "Satisfaction" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="bg-white/5 border border-amber-400/20 backdrop-blur-sm rounded-xl px-5 py-4 text-center"
                >
                  <div
                    className="rds-display text-amber-400 font-black"
                    style={{ fontSize: "1.6rem" }}
                  >
                    {s.num}
                  </div>
                  <div className="rds-body text-white/50 text-[0.68rem] tracking-wider uppercase">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SERVICES CAROUSEL
        ══════════════════════════════════════════ */}
        <section className="bg-[#f7f5f0] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <SectionLabel>What We Offer</SectionLabel>
              <h2
                className="rds-display text-[#08172e] leading-tight mb-3"
                style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", fontWeight: 900 }}
              >
                Full-Service{" "}
                <span className="text-blue-700">Digital Solutions</span>
              </h2>
              <GoldRule />
              <p className="rds-body text-gray-500 max-w-xl leading-relaxed text-sm">
                Comprehensive digital solutions designed to accelerate your
                business growth and establish your competitive advantage.
              </p>
            </motion.div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-5">
                {services.map((s, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-5 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={s.image}
                            alt={s.title}
                            className="w-full h-full object-cover brightness-75 group-hover:scale-110 group-hover:brightness-50 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                          {/* Tag */}
                          <div className="absolute top-4 right-4">
                            <span className="rds-body text-[0.62rem] font-semibold tracking-widest uppercase bg-amber-500 text-[#08172e] px-3 py-1 rounded-full">
                              {s.tag}
                            </span>
                          </div>

                          {/* Title + Icon */}
                          <div className="absolute bottom-4 left-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center shrink-0">
                              <s.icon size={18} className="text-[#08172e]" />
                            </div>
                            <h3
                              className="rds-display text-white font-bold leading-tight"
                              style={{ fontSize: "1.1rem" }}
                            >
                              {s.title}
                            </h3>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 flex flex-col flex-1">
                          <p className="rds-body text-gray-500 text-sm leading-relaxed mb-4">
                            {s.desc}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {s.bullets.map((b, j) => (
                              <li
                                key={j}
                                className="rds-body flex items-start gap-2 text-gray-600 text-xs"
                              >
                                <CheckCircle
                                  size={13}
                                  className="text-amber-500 shrink-0 mt-0.5"
                                />
                                {b}
                              </li>
                            ))}
                          </ul>

                          {/* Links */}
                          <div className="mt-auto flex flex-wrap gap-2">
                            {s.links.map((link, idx) => (
                              <Link
                                key={idx}
                                href={link.href}
                                className="rds-body inline-flex items-center gap-1 text-blue-700 hover:text-amber-600 font-semibold text-xs transition-colors"
                              >
                                {link.label} <ChevronRight size={13} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-gray-200 hover:bg-amber-50 hover:border-amber-300" />
              <CarouselNext className="hidden md:flex border-gray-200 hover:bg-amber-50 hover:border-amber-300" />
            </Carousel>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════════════════ */}
        <section
          className="py-24 md:py-32"
          style={{ background: "#08172e" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <SectionLabel light>Why Choose Us</SectionLabel>
              <h2
                className="rds-display text-white leading-tight mb-3"
                style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", fontWeight: 900 }}
              >
                Why Choose{" "}
                <em className="text-amber-400">Rehoboth?</em>
              </h2>
              <div
                className="h-px mb-6"
                style={{
                  background: "linear-gradient(90deg, #c9a84c, transparent)",
                  maxWidth: 80,
                }}
              />
              <p className="rds-body text-white/50 max-w-xl leading-relaxed text-sm">
                We combine technical expertise with business acumen to deliver
                solutions that drive real, measurable results.
              </p>
            </motion.div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-5">
                {benefits.map((b, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-5 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <div className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:bg-amber-400/[0.06] hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1.5 h-full">
                        <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-5">
                          <b.icon size={22} className="text-amber-400" />
                        </div>
                        <h3
                          className="rds-display text-white font-bold mb-2"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {b.title}
                        </h3>
                        <p className="rds-body text-white/50 text-sm leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-white/20 text-white hover:bg-white/10" />
              <CarouselNext className="hidden md:flex border-white/20 text-white hover:bg-white/10" />
            </Carousel>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            OUR PROCESS
        ══════════════════════════════════════════ */}
        <section className="bg-[#f7f5f0] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <SectionLabel>How We Work</SectionLabel>
              <h2
                className="rds-display text-[#08172e] leading-tight mb-3"
                style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", fontWeight: 900 }}
              >
                Our Proven{" "}
                <span className="text-blue-700">Process</span>
              </h2>
              <GoldRule />
              <p className="rds-body text-gray-500 max-w-xl leading-relaxed text-sm">
                A proven methodology that ensures successful, on-time project
                delivery every single time.
              </p>
            </motion.div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-5">
                {processSteps.map((step, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-5 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover brightness-60 group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#08172e]/95 via-[#08172e]/40 to-transparent" />

                          {/* Step number */}
                          <div className="absolute top-4 left-4">
                            <div
                              className="rds-display text-amber-400 font-black leading-none"
                              style={{ fontSize: "3rem", opacity: 0.25 }}
                            >
                              {step.step}
                            </div>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center shrink-0">
                                <span
                                  className="rds-display text-[#08172e] font-black text-xs"
                                >
                                  {step.step}
                                </span>
                              </div>
                              <h3
                                className="rds-display text-white font-bold"
                                style={{ fontSize: "1.1rem" }}
                              >
                                {step.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <p className="rds-body text-gray-500 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-gray-200 hover:bg-amber-50 hover:border-amber-300" />
              <CarouselNext className="hidden md:flex border-gray-200 hover:bg-amber-50 hover:border-amber-300" />
            </Carousel>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TECH STACK
        ══════════════════════════════════════════ */}
        <section className="py-24 md:py-32" style={{ background: "#08172e" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <SectionLabel light>Technology</SectionLabel>
              <h2
                className="rds-display text-white leading-tight mb-3"
                style={{ fontSize: "clamp(2rem, 4vw, 2.9rem)", fontWeight: 900 }}
              >
                Technology We{" "}
                <em className="text-amber-400">Trust</em>
              </h2>
              <div
                className="h-px mb-6"
                style={{
                  background: "linear-gradient(90deg, #c9a84c, transparent)",
                  maxWidth: 80,
                }}
              />
              <p className="rds-body text-white/50 max-w-xl leading-relaxed text-sm">
                A modern, battle-tested stack built for performance, security,
                and scalability — using only industry-leading tools.
              </p>
            </motion.div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-5">
                {techStack.map((group, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-5 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1 h-full">
                        {/* Header */}
                        <div className="px-6 pt-6 pb-4 border-b border-white/[0.07]">
                          <h3
                            className="rds-display text-white font-bold"
                            style={{ fontSize: "1.1rem" }}
                          >
                            {group.title}
                          </h3>
                          <div
                            className="h-0.5 mt-2"
                            style={{
                              background:
                                "linear-gradient(90deg, #c9a84c, transparent)",
                              maxWidth: 50,
                            }}
                          />
                        </div>

                        <div className="p-6 space-y-2.5">
                          {group.items.map((tech, j) => (
                            <div
                              key={j}
                              className="group/item flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] hover:bg-amber-400/[0.08] border border-transparent hover:border-amber-400/20 transition-all duration-200 cursor-default"
                            >
                              <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                                <CheckCircle
                                  size={14}
                                  className="text-amber-400"
                                />
                              </div>
                              <span className="rds-body text-white/65 group-hover/item:text-white/90 font-medium text-sm transition-colors">
                                {tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex border-white/20 text-white hover:bg-white/10" />
              <CarouselNext className="hidden md:flex border-white/20 text-white hover:bg-white/10" />
            </Carousel>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA
        ══════════════════════════════════════════ */}
        <section
          className="relative py-24 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #1d4ed8 0%, #08172e 100%)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 600px 350px at 50% -50%, rgba(201,168,76,0.08), transparent)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto px-6">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#c9a84c"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>

            <SectionLabel light>Let's Work Together</SectionLabel>

            <h2
              className="rds-display text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900 }}
            >
              Ready to Grow Your{" "}
              <em className="text-amber-400">Business Online?</em>
            </h2>

            <p className="rds-body text-white/55 leading-relaxed mb-10 text-sm max-w-lg mx-auto">
              Contact Rehoboth Digitech Solution today — your trusted digital
              marketing and technology partner in Janakpuri, Delhi NCR.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="rds-body inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#08172e] font-bold text-xs tracking-widest uppercase px-10 py-4 rounded transition-all duration-200 hover:-translate-y-0.5">
                Contact Us Today <ArrowRight size={14} />
              </button>
              <button className="rds-body inline-flex items-center gap-2 bg-transparent border border-white/25 hover:border-white/60 text-white font-medium text-sm px-8 py-4 rounded transition-all duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(ServicesClient);