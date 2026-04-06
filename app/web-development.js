"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// shadcn/ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// lucide-react
import {
  Monitor,
  Smartphone,
  Search,
  Code2,
  Building2,
  RefreshCcw,
  Zap,
  ShieldCheck,
  Users,
  Target,
  BarChart3,
  Eye,
  MapPin,
  Handshake,
  Store,
  Rocket,
  Settings,
  Briefcase,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Globe,
  Star,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";


// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────

const C = {
  navy:      "#061d3a",
  navyMid:   "#0a3060",
  brand:     "#0d4f9e",
  brandMid:  "#1464c8",
  accent:    "#3b8bff",
  sky:       "#64aaff",
  ice:       "#c6dcff",
  frost:     "#e8f1ff",
  offWhite:  "#f5f8ff",
  slate:     "#667b99",
  darkTxt:   "#0d1f35",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Monitor,     title: "Custom Website Development",       tag: "Popular",     desc: "Tailor-made websites designed around your brand identity and business goals — no generic templates." },
  { icon: Smartphone,  title: "Responsive Website Design",        tag: "Mobile-First",desc: "Pixel-perfect layouts that adapt flawlessly across mobile, tablet, and desktop for better rankings." },
  { icon: Search,      title: "SEO-Friendly Development",         tag: "SEO",         desc: "Clean code structure, fast loading speeds, and proper on-page elements to help search engines find you." },
  { icon: Code2,       title: "WordPress Development",            tag: "CMS",         desc: "Easy-to-manage WordPress sites so you can update content without any technical knowledge." },
  { icon: Building2,   title: "Business Website Development",     tag: "B2B",         desc: "Professional sites that clearly explain your services, build credibility, and convert visitors to leads." },
  { icon: RefreshCcw,  title: "Website Redesign & Improvement",   tag: "Revamp",      desc: "Transform outdated websites with better structure, modern design, and improved performance metrics." },
  { icon: Zap,         title: "Speed & Performance Optimization", tag: "Performance", desc: "Optimized images, code, and structure for blazing-fast load times and perfect Core Web Vitals scores." },
  { icon: ShieldCheck, title: "Website Maintenance & Support",    tag: "Support",     desc: "Ongoing maintenance keeps your site secure, updated, and running at peak performance — always." },
];

const WHY_US = [
  { icon: Users,      title: "Experienced Team",       desc: "Modern design expertise and technical depth to deliver reliable, future-proof website solutions." },
  { icon: Target,     title: "Customized Solutions",   desc: "Every project starts with your goals. No templates, no shortcuts — just tailored web solutions." },
  { icon: BarChart3,  title: "SEO & Performance Focus",desc: "Built for search engines and speed from day one — not bolted on as an afterthought." },
  { icon: Eye,        title: "Transparent Process",    desc: "Stay in the loop at every milestone, from wireframes through to your launch day." },
  { icon: MapPin,     title: "Local Market Knowledge", desc: "Deep understanding of Janakpuri and Delhi NCR audiences helps us design sites that connect." },
  { icon: Handshake,  title: "Ongoing Support",        desc: "We grow with you. Long-term partnerships with continuous support beyond launch." },
];

const WHO_WE_SERVE = [
  { icon: Store,     title: "Local Businesses", desc: "Shops, retailers, and service providers in Janakpuri and Delhi NCR ready to go digital." },
  { icon: Rocket,    title: "Startups",         desc: "Early-stage companies needing a professional web presence to attract investors and customers." },
  { icon: Settings,  title: "Service Companies",desc: "Agencies and B2B providers who need credibility-building websites that generate leads." },
  { icon: Briefcase, title: "Professionals",    desc: "Doctors, lawyers, coaches, and freelancers showcasing expertise and attracting the right clients." },
];

const HERO_SERVICES = [
  { icon: Monitor,     name: "Custom Website Development" },
  { icon: Smartphone,  name: "Responsive Web Design" },
  { icon: Search,      name: "SEO-Friendly Development" },
  { icon: Zap,         name: "Speed Optimization" },
  { icon: ShieldCheck, name: "Website Maintenance" },
];

const REASONS = [
  "Experienced web development team",
  "Customized solutions for every business",
  "SEO & performance focus from day one",
  "Transparent, milestone-based process",
  "Deep local Janakpuri market knowledge",
  "Post-launch maintenance & support",
];

const SERVICE_AREAS = ["Janakpuri", "Delhi NCR", "West Delhi", "Dwarka", "Uttam Nagar", "Najafgarh"];

const NAV_LINKS = [
  { label: "Services",     href: "#services" },
  { label: "Why Us",       href: "#why-us" },
  { label: "Who We Help",  href: "#who-we-help" },
  { label: "Areas",        href: "#service-areas" },
];



function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}



function SectionBadge({ children, light = false }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.13em] uppercase mb-5"
      style={
        light
          ? { background: "rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.88)", border: "1px solid rgba(255,255,255,0.22)" }
          : { background: C.frost, color: C.brand }
      }
    >
      {children}
    </span>
  );
}

function RevealDiv({ children, className = "", delay = 0, direction = "up" }) {
  const [ref, visible] = useReveal();

  const base = "transition-all duration-700 ease-out";
  const hidden =
    direction === "left"  ? "opacity-0 -translate-x-10" :
    direction === "right" ? "opacity-0 translate-x-10" :
                            "opacity-0 translate-y-8";
  const shown = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? shown : hidden} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function WebDevelopment() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    

      <div className="bg-white text-[#0d1f35] overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>

        <section
          className="relative overflow-hidden py-24 lg:py-32"
          style={{ background: `linear-gradient(145deg, ${C.navy} 0%, ${C.navyMid} 55%, ${C.brand} 100%)` }}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(100,170,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,170,255,0.06) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              animation: "gridShift 20s linear infinite",
            }}
          />
          {/* Glow orbs */}
          <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle, ${C.accent}, transparent 70%)`, filter: "blur(80px)", animation: "pulse 6s ease-in-out infinite" }} />
          <div className="absolute bottom-[-150px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${C.sky}, transparent 70%)`, filter: "blur(80px)", animation: "pulse 6s ease-in-out infinite 3s" }} />

          <style>{`
            @keyframes gridShift { to { background-position: 60px 60px; } }
            @keyframes pulse { 0%,100%{ opacity:0.7; transform:scale(1); } 50%{ opacity:1; transform:scale(1.08); } }
            @keyframes heroUp { from{ opacity:0; transform:translateY(28px); } to{ opacity:1; transform:translateY(0); } }
            @keyframes blinkDot { 0%,100%{ opacity:1; } 50%{ opacity:0.3; } }
          `}</style>

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left */}
              <div>
                {/* Location badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase text-white/85 mb-7"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    animation: "heroUp 0.8s cubic-bezier(.25,.8,.25,1) both",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-sky-300" style={{ animation: "blinkDot 2s ease-in-out infinite" }} />
                  <MapPin size={11} className="text-sky-300" />
                  Janakpuri, Delhi NCR
                </div>

                <h1
                  className="text-4xl lg:text-5xl xl:text-[56px] leading-[1.06] mt-4 font-black text-white mb-5"
                  style={{ fontFamily: "'DM Serif Display', serif", animation: "heroUp 0.85s 0.08s cubic-bezier(.25,.8,.25,1) both" }}
                >
                  Website Development Company in{" "}
                  <em className="not-italic" style={{ color: C.ice }}>Janakpuri</em>
                  , Delhi
                </h1>

                <p
                  className="text-base lg:text-[17px] leading-relaxed mb-8 max-w-lg"
                  style={{ color: "rgba(255,255,255,0.65)", animation: "heroUp 0.85s 0.16s cubic-bezier(.25,.8,.25,1) both" }}
                >
                  Rehoboth Digitech Solution builds fast, responsive, and user-friendly websites that convert
                  visitors into customers — tailored for every business in Janakpuri and Delhi NCR.
                </p>

                {/* CTAs */}
                <div
                  className="flex flex-wrap gap-3 mb-10"
                  style={{ animation: "heroUp 0.85s 0.24s cubic-bezier(.25,.8,.25,1) both" }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white font-bold text-sm h-12 px-7 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all border-0"
                    style={{ color: C.brand }}
                  >
                    <a href="#contact">
                      Start Your Project <ArrowRight size={16} className="ml-1.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="font-semibold text-sm h-12 px-7 rounded-xl transition-all"
                    style={{ color: "#fff", borderColor: "rgba(255,255,255,0.32)", background: "transparent" }}
                  >
                    <a href="#services">Explore Services</a>
                  </Button>
                </div>

                {/* Stats */}
                <div
                  className="inline-flex divide-x rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    divideColor: "rgba(255,255,255,0.1)",
                    animation: "heroUp 0.85s 0.32s cubic-bezier(.25,.8,.25,1) both",
                  }}
                >
                 
                </div>
              </div>

              {/* Right: Services card */}
              <Card
                className="border-0 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(20px)",
                  animation: "heroUp 0.9s 0.2s cubic-bezier(.25,.8,.25,1) both",
                }}
              >
                <CardHeader className="px-7 pt-7 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <CardTitle className="text-[15px] font-bold text-white">Our Core Services</CardTitle>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>Web solutions for every business need</p>
                </CardHeader>
                <CardContent className="px-5 pt-4 pb-5 flex flex-col gap-2">
                  {HERO_SERVICES.map(({ icon: Icon, name }) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 px-3.5 py-3 rounded-xl cursor-default transition-all duration-200 group"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateX(0)"; }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.13)" }}>
                        <Icon size={15} style={{ color: C.ice }} />
                      </div>
                      <span className="text-[13px] font-medium flex-1" style={{ color: "rgba(255,255,255,0.85)" }}>{name}</span>
                      <ChevronRight size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
                    </div>
                  ))}
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            WHY A WEBSITE MATTERS
        ════════════════════════════════ */}
        <section className="py-24 lg:py-28 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* Left */}
              <RevealDiv direction="left">
                <SectionBadge>Why It Matters</SectionBadge>
                <h2
                  className="text-3xl lg:text-[42px] leading-[1.1] font-black mb-5"
                  style={{ fontFamily: "'DM Serif Display', serif", color: C.darkTxt }}
                >
                  Your Website Is Your{" "}
                  <span style={{ color: C.brand }}>First Impression</span>
                </h2>
                <p className="text-[15px] leading-relaxed mb-4" style={{ color: C.slate }}>
                  Your website is often the very first impression customers have of your business. A well-designed
                  website builds trust, improves user experience, and supports your digital marketing efforts.
                </p>
                <p className="text-[15px] leading-relaxed mb-4" style={{ color: C.slate }}>
                  As a reliable website development agency in Janakpuri, we create websites that are
                  easy to use, mobile-friendly, and optimised for search engines.
                </p>
                <p className="text-[15px] leading-relaxed mb-8" style={{ color: C.slate }}>
                  Whether you're a startup, small business, or growing brand, our services are tailored
                  to meet your specific needs.
                </p>

                {/* Feature highlights */}
                <div className="flex flex-col gap-3">
                  {[
                    { icon: ShieldCheck, title: "Builds Trust & Credibility",    desc: "A professional website signals legitimacy and builds customer confidence instantly." },
                    { icon: TrendingUp,  title: "Supports Digital Marketing",    desc: "Your website serves as the hub for all SEO, social media, and ad campaigns." },
                    { icon: Target,      title: "Converts Visitors to Customers",desc: "Strategic design and clear CTAs guide users toward your business goals." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex items-start gap-4 p-4 rounded-xl cursor-default transition-all duration-200 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(13,79,158,0.1)]"
                      style={{ background: C.offWhite, borderLeft: `3px solid ${C.brand}` }}
                    >
                      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: C.frost }}>
                        <Icon size={16} style={{ color: C.brand }} />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold mb-0.5" style={{ color: C.darkTxt }}>{title}</p>
                        <p className="text-xs leading-snug" style={{ color: C.slate }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealDiv>

              {/* Right */}
              <RevealDiv direction="right" className="relative pb-7">
                <Card
                  className="border-0 rounded-2xl overflow-hidden shadow-[0_28px_72px_rgba(6,29,58,0.38)]"
                  style={{ background: `linear-gradient(150deg, ${C.navy} 0%, ${C.brand} 100%)` }}
                >
                  {/* dot texture */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
                  />
                  <CardHeader className="relative z-10 px-8 pt-8 pb-5">
                    <CardTitle
                      className="text-[22px] text-white"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                      Why Rehoboth Digitech Solution?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 px-8 pb-8 flex flex-col gap-2">
                    {REASONS.map((reason) => (
                      <div
                        key={reason}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200 hover:bg-white/[0.13]"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      >
                        <CheckCircle2 size={16} style={{ color: C.ice }} className="flex-shrink-0" />
                        <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>{reason}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Floating pill */}
                <Card
                  className="absolute -bottom-2 right-4 border-0 rounded-2xl shadow-xl flex items-center gap-3 px-5 py-4"
                  style={{ background: "#fff", border: `1px solid ${C.frost}` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: C.frost }}>
                    <MapPin size={18} style={{ color: C.brand }} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold leading-none mb-0.5" style={{ color: C.darkTxt }}>Based in Janakpuri</p>
                    <p className="text-xs" style={{ color: C.slate }}>Serving Delhi NCR &amp; beyond</p>
                  </div>
                </Card>
              </RevealDiv>

            </div>
          </div>
        </section>
                                                                                
         
        <section id="services" className="py-24 lg:py-28" style={{ background: C.offWhite }}>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

            <RevealDiv className="text-center mb-14">
              <SectionBadge>What We Offer</SectionBadge>
              <h2
                className="text-3xl lg:text-[42px] leading-[1.1] font-black mb-3 max-w-lg mx-auto"
                style={{ fontFamily: "'DM Serif Display', serif", color: C.darkTxt }}
              >
                Website Design &amp; <span style={{ color: C.brand }}>Development Services</span>
              </h2>
              <p className="text-[15px] max-w-md mx-auto leading-relaxed" style={{ color: C.slate }}>
                End-to-end web solutions from concept and design through to launch and ongoing support.
              </p>
            </RevealDiv>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.map(({ icon: Icon, title, tag, desc }, i) => (
                <RevealDiv key={title} delay={i * 70}>
                  <Card
                    className="group border rounded-2xl bg-white h-full cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(13,79,158,0.14)]"
                    style={{ borderColor: "rgba(13,79,158,0.07)" }}
                  >
                    
                    <div
                      className="h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ background: `linear-gradient(90deg, ${C.brand}, ${C.accent})` }}
                    />
                    <CardContent className="p-6">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: C.frost }}>
                        <Icon size={20} style={{ color: C.brand }} />
                      </div>
                      <Badge
                        className="mb-3 text-[10px] font-bold px-2 py-0.5 rounded-md border-0"
                        style={{ background: C.frost, color: C.brand }}
                      >
                        {tag}
                      </Badge>
                      <h3 className="text-[14.5px] font-bold leading-snug mb-2" style={{ color: C.darkTxt }}>{title}</h3>
                      <p className="text-xs leading-relaxed mb-4" style={{ color: C.slate }}>{desc}</p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold no-underline group-hover:gap-2.5 transition-all duration-200"
                        style={{ color: C.brand }}
                      >
                        Learn more <ArrowRight size={12} />
                      </a>
                    </CardContent>
                  </Card>
                </RevealDiv>
              ))}
            </div>
          </div>
        </section>

        
        <section id="why-us" className="py-24 lg:py-28 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

              {/* Left */}
              <RevealDiv direction="left">
                <SectionBadge>Why Choose Us</SectionBadge>
                <h2
                  className="text-3xl lg:text-[42px] leading-[1.1] font-black mb-5"
                  style={{ fontFamily: "'DM Serif Display', serif", color: C.darkTxt }}
                >
                  Why Choose Rehoboth Digitech Solution for{" "}
                  <span style={{ color: C.brand }}>Website Development?</span>
                </h2>
                <p className="text-[15px] leading-relaxed mb-4" style={{ color: C.slate }}>
                  As a trusted website design company in Janakpuri, we don&apos;t follow a one-size-fits-all
                  approach. Every website is planned based on your unique business needs, audience, and goals.
                </p>
                <p className="text-[15px] leading-relaxed mb-8" style={{ color: C.slate }}>
                  Our experience working with businesses across Janakpuri and Delhi NCR gives us a unique
                  understanding of the local market, enabling us to design websites that genuinely connect
                  with your target audience.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="text-white font-bold h-12 px-7 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all border-0"
                  style={{ background: C.brand }}
                >
                  <a href="#contact">
                    Talk to Our Team <ArrowRight size={16} className="ml-1.5" />
                  </a>
                </Button>
              </RevealDiv>

              {/* Right: 2×3 grid */}
              <div className="grid grid-cols-2 gap-4">
                {WHY_US.map(({ icon: Icon, title, desc }, i) => (
                  <RevealDiv key={title} delay={i * 80}>
                    <Card
                      className="border rounded-2xl h-full cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(13,79,158,0.10)]"
                      style={{ background: C.offWhite, borderColor: C.frost }}
                    >
                      <CardContent className="p-5">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: C.frost }}>
                          <Icon size={18} style={{ color: C.brand }} />
                        </div>
                        <h3 className="text-[13px] font-bold mb-1.5" style={{ color: C.darkTxt }}>{title}</h3>
                        <p className="text-xs leading-relaxed" style={{ color: C.slate }}>{desc}</p>
                      </CardContent>
                    </Card>
                  </RevealDiv>
                ))}
              </div>

            </div>
          </div>
        </section>

        <section
          id="who-we-help"
          className="py-24 lg:py-28 relative overflow-hidden"
          style={{ background: `linear-gradient(145deg, ${C.navy} 0%, ${C.brand} 100%)` }}
        >
          {/* dot texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, rgba(59,139,255,0.15), transparent 70%)`, filter: "blur(90px)" }} />
          <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, rgba(100,170,255,0.1), transparent 70%)`, filter: "blur(90px)" }} />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">

            <RevealDiv className="text-center mb-12">
              <SectionBadge light>Who We Serve</SectionBadge>
              <h2
                className="text-3xl lg:text-[42px] leading-[1.1] font-black text-white mb-3 max-w-lg mx-auto"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Who Can Benefit from Our <span style={{ color: C.ice }}>Services?</span>
              </h2>
              <p className="text-[15px] max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Our website development services in Janakpuri, Delhi are ideal for businesses and professionals across every industry.
              </p>
            </RevealDiv>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
              {WHO_WE_SERVE.map(({ icon: Icon, title, desc }, i) => (
                <RevealDiv key={title} delay={i * 80}>
                  <Card
                    className="border-0 rounded-2xl text-center cursor-default transition-all duration-300 hover:-translate-y-1.5 h-full"
                    style={{
                      background: "rgba(255,255,255,0.09)",
                      border: "1px solid rgba(255,255,255,0.13)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <CardContent className="p-7">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                        style={{ background: "rgba(255,255,255,0.12)" }}
                      >
                        <Icon size={26} style={{ color: C.ice }} />
                      </div>
                      <h3 className="text-[16px] font-bold text-white mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>{title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
                    </CardContent>
                  </Card>
                </RevealDiv>
              ))}
            </div>

            {/* Service Areas */}
            <div
              id="service-areas"
              className="pt-14"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              <RevealDiv className="text-center mb-8">
                <SectionBadge light>Service Areas</SectionBadge>
                <h2
                  className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-3"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  We Serve Businesses Across{" "}
                  <em className="not-italic" style={{ color: C.ice }}>Delhi NCR</em>
                </h2>
                <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Searching for a website development company near Janakpuri? Our team is ready to help.
                </p>
              </RevealDiv>
              <div className="flex flex-wrap gap-3 justify-center">
                {SERVICE_AREAS.map((area, i) => (
                  <RevealDiv key={area} delay={i * 60}>
                    <div
                      className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white cursor-default transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.18)",
                      }}
                    >
                      <MapPin size={13} style={{ color: C.sky }} />
                      {area}
                    </div>
                  </RevealDiv>
                ))}
              </div>
            </div>
          </div>

          <Contact/>
        </section>
         <WhatsAppButton/>

      
      </div>
    </>
  );
}