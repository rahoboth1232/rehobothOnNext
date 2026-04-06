"use client"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield, Server, Wifi, Cloud, Smartphone, HeadphonesIcon,
  CheckCircle, ArrowRight, Phone, Mail, MapPin,
  Zap, Lock, TrendingDown, Star, Building2, GraduationCap,
  Heart, ShoppingBag, Briefcase, Rocket, ChevronRight,
  Activity, Clock, Users, Menu, X, Globe, BarChart2,
} from "lucide-react";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";



const services = [
  { icon: HeadphonesIcon, title: "Managed IT Support", desc: "Ongoing monitoring, maintenance, and troubleshooting for your entire IT environment — desktops, laptops, servers, networks, and cloud systems." },
  { icon: Wifi, title: "Network Setup & Maintenance", desc: "Secure and optimized networks with installation, configuration, firewall setup, and network security updates for smooth operations." },
  { icon: Server, title: "Server Management", desc: "From installation to maintenance and backup configuration, we ensure your servers remain secure and high-performing." },
  { icon: Shield, title: "Cybersecurity & Data Protection", desc: "Antivirus solutions, firewall management, endpoint protection, and regular security audits to protect your business from cyber threats." },
  { icon: Cloud, title: "Cloud Support", desc: "We help businesses migrate, manage, and maintain cloud platforms securely and efficiently for modern workflows." },
  { icon: Smartphone, title: "App Support & Maintenance", desc: "Performance optimization, version upgrades, troubleshooting, and security updates to keep your business applications bug-free." },
];

const benefits = [
  { icon: Zap, label: "Reduced Downtime", desc: "Proactive monitoring prevents failures before they happen." },
  { icon: TrendingDown, label: "Lower IT Costs", desc: "Predictable monthly costs with no surprise expenses." },
  { icon: Lock, label: "Stronger Security", desc: "Multi-layered protection for your critical business data." },
  { icon: Activity, label: "Peak Performance", desc: "Optimized systems that run faster and more reliably." },
];

const process = [
  { step: "01", title: "IT Audit & Assessment", desc: "Thorough evaluation of your current IT infrastructure." },
  { step: "02", title: "Infrastructure Optimization", desc: "Streamline systems for maximum efficiency and reliability." },
  { step: "03", title: "Security Hardening", desc: "Close vulnerabilities and implement robust protections." },
  { step: "04", title: "Continuous Monitoring", desc: "24/7 watchful oversight of your entire environment." },
  { step: "05", title: "Updates & Patch Management", desc: "Timely updates to keep software secure and current." },
  { step: "06", title: "Backup & Disaster Recovery", desc: "Automated backups with rapid recovery protocols." },
];

const industries = [
  { icon: Briefcase, label: "Corporate Offices" },
  { icon: ShoppingBag, label: "Retail Stores" },
  { icon: Heart, label: "Healthcare Clinics" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Building2, label: "SMEs" },
  { icon: Rocket, label: "Startups" },
];

const whyUs = [
  "Experienced and certified IT professionals",
  "Fast response time and issue resolution",
  "Proactive monitoring approach",
  "Transparent pricing with no hidden costs",
  "Regular system health reports",
  "Data privacy and compliance focus",
];

const faqs = [
  { q: "What is included in IT support and maintenance in Janakpuri?", a: "IT support typically includes system monitoring, troubleshooting, cybersecurity, network management, server maintenance, cloud support, and regular software updates." },
  { q: "Why should businesses choose a local IT support company in Janakpuri?", a: "A local provider offers faster on-site support, better understanding of regional business needs, and quick response during emergencies." },
  { q: "Do you provide app support and maintenance in Janakpuri?", a: "Yes, we offer complete app support including bug fixing, updates, performance optimization, and security management." },
  { q: "What industries do you serve?", a: "We provide business IT support services in Janakpuri for retail, healthcare, education, corporate offices, startups, and more." },
  { q: "How do reliable IT support services reduce downtime?", a: "Through proactive monitoring, regular updates, and preventive maintenance, potential issues are identified and resolved before they impact operations." },
  { q: "Do you offer Annual Maintenance Contracts (AMC)?", a: "Yes, we offer flexible AMC plans tailored to your business size and technical requirements." },
];

const stats = [
  { value: "100+", label: "Clients Served", icon: Users },
  { value: "99.9%", label: "Uptime Guarantee", icon: Activity },
  { value: "< 1hr", label: "Avg Response Time", icon: Clock },
  { value: "4", label: "Years Experience", icon: Star },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ITSupportPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,700&display=swap');

        :root {
          --navy: #0f2a5e;
          --navy-mid: #1a3a7a;
          --blue: #1e56c8;
          --blue-bright: #2563eb;
          --sky: #3b82f6;
          --sky-light: #eff6ff;
          --sky-mid: #dbeafe;
          --accent: #f59e0b;
        }

        .navy-grad { background: linear-gradient(135deg, #0f2a5e 0%, #1a3a7a 50%, #1e56c8 100%); }
        .navy-grad-text {
          background: linear-gradient(135deg, #0f2a5e, #1e56c8, #3b82f6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .blue-bright-text { color: #2563eb; }

        /* hero */
        .hero-section {
          background: linear-gradient(160deg, #0f2a5e 0%, #0d2455 40%, #0a1e48 100%);
          position: relative; overflow: hidden;
        }
        .hero-grid {
          background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .hero-glow {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }

        /* cards */
        .service-card {
          border: 1.5px solid #e2e8f0; border-radius: 1rem;
          background: white; padding: 1.75rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s;
          position: relative; overflow: hidden;
        }
        .service-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #0f2a5e, #2563eb, #3b82f6);
          transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(15,42,94,0.12); border-color: #93c5fd; }
        .service-card:hover::before { transform: scaleX(1); }

        .icon-box {
          width: 52px; height: 52px; border-radius: 14px; display: flex;
          align-items: center; justify-content: center; margin-bottom: 1.1rem;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
        }

        .process-card {
          border: 1.5px solid #e2e8f0; border-radius: 1rem;
          background: white; padding: 1.5rem; transition: border-color 0.25s, box-shadow 0.25s;
        }
        .process-card:hover { border-color: #93c5fd; box-shadow: 0 8px 24px rgba(37,99,235,0.08); }

        .why-item {
          display: flex; align-items: center; gap: 0.875rem;
          background: white; border: 1.5px solid #e2e8f0;
          border-radius: 0.875rem; padding: 1rem 1.25rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .why-item:hover { border-color: #93c5fd; background: #f0f7ff; }

        .industry-pill {
          display: flex; align-items: center; gap: 0.5rem;
          border: 1.5px solid #dbeafe; border-radius: 9999px;
          padding: 0.6rem 1.25rem; font-size: 0.875rem; font-weight: 600;
          color: #1e40af; background: #eff6ff;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .industry-pill:hover { background: #dbeafe; border-color: #93c5fd; transform: scale(1.04); }

        .stat-card {
          background: white; border: 1.5px solid #e2e8f0; border-radius: 1.25rem;
          padding: 1.75rem; text-align: center;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .stat-card:hover { box-shadow: 0 12px 32px rgba(15,42,94,0.1); border-color: #93c5fd; }

        .section-chip {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #2563eb; background: #dbeafe;
          padding: 0.35rem 0.9rem; border-radius: 9999px; margin-bottom: 0.85rem;
        }

        .nav-link {
          font-size: 0.875rem; font-weight: 600; color: #475569;
          padding: 0.25rem 0; position: relative; transition: color 0.2s;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #0f2a5e, #2563eb);
          transition: width 0.3s;
        }
        .nav-link:hover { color: #1e56c8; }
        .nav-link:hover::after { width: 100%; }

        .cta-section {
          background: linear-gradient(135deg, #0f2a5e 0%, #1a3a7a 50%, #1e56c8 100%);
          border-radius: 2rem; position: relative; overflow: hidden;
        }
        .cta-section::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%  { box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(37,99,235,0); }
          100%{ box-shadow: 0 0 0 0 rgba(37,99,235,0); }
        }
        .anim-fade-up { animation: fadeUp 0.65s ease both; }
        .anim-delay-1 { animation-delay: 0.1s; }
        .anim-delay-2 { animation-delay: 0.2s; }
        .anim-pulse { animation: pulse-ring 2.2s infinite; }

        footer a { transition: color 0.2s; }
        footer a:hover { color: #93c5fd; }
      `}</style>

    
    
      
      <main id="main">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="hero-section" aria-labelledby="hero-heading" itemScope itemType="https://schema.org/LocalBusiness">
          <div className="hero-grid absolute inset-0" aria-hidden />
          <div aria-hidden className="hero-glow w-[600px] h-[600px] bg-blue-500/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div aria-hidden className="hero-glow w-64 h-64 bg-sky-400/15 top-0 right-1/4" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left content */}
              <div className="anim-fade-up">
                <span className="section-chip bg-blue-500/20 text-blue-300 mb-6">
                  <MapPin className="h-3 w-3" /> Serving Janakpuri &amp; Delhi NCR
                </span>

                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6"
                  style={{ fontFamily: "'Fraunces', serif" }}
                  itemProp="name"
                >
                  IT Support &{" "}
                  <span className="text-sky-400 italic">Maintenance</span>{" "}
                  in Janakpuri
                </h1>

                <p className="text-blue-100/80 text-lg leading-relaxed mb-10 max-w-lg" itemProp="description">
                  Complete IT solutions designed to keep your systems secure, updated, and running without downtime — so you can focus entirely on growing your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-blue-50 font-black text-base px-8 py-6 rounded-xl shadow-xl border-0">
                    <a href="#contact">Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent text-white border border-white/30 hover:bg-white/10 font-bold text-base px-8 py-6 rounded-xl backdrop-blur-sm">
                    <a href="#services">View Our Services <ChevronRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mt-10">
                  {["Certified Engineers","24/7 Monitoring","Local Janakpuri Team","Transparent Pricing"].map(t=>(
                    <span key={t} className="flex items-center gap-1.5 text-xs text-blue-200 font-semibold">
                      <CheckCircle className="h-3.5 w-3.5 text-sky-400 shrink-0" />{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Stats grid */}
              <div className="grid grid-cols-2 gap-4 anim-fade-up anim-delay-2">
                {stats.map(({ value, label, icon: Icon }) => (
                  <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                    <div className="w-10 h-10 bg-sky-400/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-5 w-5 text-sky-300" />
                    </div>
                    <p className="text-3xl font-black text-white mb-1" style={{ fontFamily: "'Fraunces', serif" }}>{value}</p>
                    <p className="text-blue-200 text-xs font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY IT MATTERS
        ══════════════════════════════════════════ */}
        <section className="py-20 px-4 bg-white" aria-labelledby="why-matters-heading">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-chip"><Zap className="h-3 w-3" /> Why It Matters</div>
              <h2 id="why-matters-heading" className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-5" style={{ fontFamily: "'Fraunces', serif" }}>
                Every Minute of Downtime{" "}
                <span className="navy-grad-text">Costs Your Business</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                In today's digital environment, every business depends on reliable IT infrastructure. From computers and servers to cloud platforms and business applications, even a small technical issue can impact productivity and revenue significantly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Prevent system downtime","Improve cybersecurity","Protect sensitive data","Increase operational efficiency","Reduce long-term IT costs","Structured, proactive monitoring"].map(item=>(
                  <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, label, desc }) => (
                <Card key={label} className="border border-slate-100 rounded-2xl shadow-none hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 navy-grad rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-blue-200">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="font-black text-slate-900 text-sm mb-1.5" style={{ fontFamily: "'Fraunces', serif" }}>{label}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SERVICES
        ══════════════════════════════════════════ */}
        <section id="services" className="py-20 px-4 bg-slate-50 border-y border-slate-100" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="section-chip inline-flex"><Globe className="h-3 w-3" /> What We Offer</div>
              <h2 id="services-heading" className="text-3xl md:text-5xl font-black text-slate-900 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Our IT Support &{" "}
                <span className="navy-grad-text">Maintenance Services</span>
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                Comprehensive services tailored to your business needs — from infrastructure to security and cloud.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ icon: Icon, title, desc }, i) => (
                <article key={title} className="service-card" itemScope itemType="https://schema.org/Service">
                  <div className="icon-box"><Icon className="h-5 w-5 text-blue-700" /></div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-black text-slate-900 text-base leading-snug" itemProp="name" style={{ fontFamily: "'Fraunces', serif" }}>{title}</h3>
                    <span className="text-xs text-slate-300 font-bold tabular-nums shrink-0 ml-2">{String(i+1).padStart(2,"0")}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed" itemProp="description">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INDUSTRIES
        ══════════════════════════════════════════ */}
        <section id="industries" className="py-20 px-4 bg-white" aria-labelledby="industries-heading">
          <div className="max-w-5xl mx-auto text-center">
            <div className="section-chip inline-flex"><Building2 className="h-3 w-3" /> Industries We Serve</div>
            <h2 id="industries-heading" className="text-3xl md:text-4xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              Built for <span className="navy-grad-text">Every Business</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
              We provide tailored IT support across a wide range of sectors in Janakpuri and Delhi NCR.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {industries.map(({ icon: Icon, label }) => (
                <div key={label} className="industry-pill cursor-default">
                  <Icon className="h-4 w-4 text-blue-600" /> {label}
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-sm text-slate-600 leading-relaxed">
              We offer flexible support models including{" "}
              <strong className="text-blue-700">on-site support</strong>,{" "}
              <strong className="text-blue-700">remote support</strong>, and{" "}
              <strong className="text-blue-700">Annual Maintenance Contracts (AMC)</strong> — tailored to your business size and needs.
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROCESS
        ══════════════════════════════════════════ */}
        <section id="process" className="py-20 px-4 bg-slate-50 border-y border-slate-100" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="section-chip inline-flex"><BarChart2 className="h-3 w-3" /> How We Work</div>
              <h2 id="process-heading" className="text-3xl md:text-5xl font-black text-slate-900 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Our Structured{" "}
                <span className="navy-grad-text">Maintenance Process</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="process-card group">
                  <div className="flex items-start gap-4">
                    <span className="text-5xl font-black leading-none shrink-0 navy-grad-text" style={{ fontFamily: "'Fraunces', serif" }}>{step}</span>
                    <div>
                      <h3 className="font-black text-slate-900 text-base mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  <div className="mt-4 h-0.5 w-10 bg-blue-200 rounded-full group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════════════════ */}
        <section id="why-us" className="py-20 px-4 bg-white" aria-labelledby="why-us-heading">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-chip"><Star className="h-3 w-3" /> Why Choose Us</div>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-black text-slate-900 mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                A Reliable IT Partner{" "}
                <span className="navy-grad-text">You Can Trust</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Choosing the right partner for IT support and maintenance is critical. Our goal is to provide long-term value, proactive protection, and genuine partnership — not just short-term fixes.
              </p>
              <Button asChild size="lg" className="navy-grad text-white border-0 hover:opacity-90 shadow-xl shadow-blue-200 font-bold px-8 py-6 rounded-xl">
                <a href="#contact">Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>

            <div className="space-y-3">
              {whyUs.map((item, i) => (
                <div key={item} className="why-item">
                  <div className="w-8 h-8 navy-grad rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════ */}
        <section id="faqs" className="py-20 px-4 bg-slate-50 border-y border-slate-100" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-chip inline-flex"><HeadphonesIcon className="h-3 w-3" /> FAQs</div>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-slate-900 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Frequently Asked{" "}
                <span className="navy-grad-text">Questions</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-slate-200 rounded-xl px-5 data-[state=open]:border-blue-300 data-[state=open]:shadow-md data-[state=open]:shadow-blue-100 transition-all"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <AccordionTrigger className="text-sm font-bold text-slate-800 hover:text-blue-700 hover:no-underline py-4 text-left" itemProp="name">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-4" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

<Contact/>
      </main>
 <WhatsAppButton/>
    
    </div>
  );
}