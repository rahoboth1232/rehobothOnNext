"use client";

import { useState, useEffect, useRef } from "react";
import {
  TrendingUp, Search, Share2, MousePointerClick, Globe, FileText,
  CheckCircle2, ArrowRight, PhoneCall, MapPin, ChevronDown,
  BarChart3, Target, Lightbulb, ShieldCheck, Star, Zap, Users, Award
} from "lucide-react";
import Contact from "./components/Contact";
import Link from "next/link";
import WhatsAppButton from "./components/WhatsAppButton";

// ─── Brand Color Tokens ───────────────────────────────────────────────────────
const NAVY      = "#003366";
const NAVY_LIGHT = "#f0f4fa";
const NAVY_MID  = "#0a4a8f";

// ─── Global Styles + Animations ──────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Lora:wght@600;700&display=swap');

     

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33%       { transform: translateY(-12px) rotate(0.8deg); }
      66%       { transform: translateY(-5px) rotate(-0.8deg); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes drawLine {
      from { width: 0; }
      to   { width: 48px; }
    }
    @keyframes gridFade {
      from { opacity: 0; }
      to   { opacity: 0.032; }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .nav-link {
      position: relative; color: #334155; font-size: 14px;
      font-weight: 500; text-decoration: none; padding-bottom: 2px;
      transition: color 0.2s;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: -2px; left: 0;
      width: 0; height: 2px; background: ${NAVY};
      border-radius: 2px; transition: width 0.3s cubic-bezier(.22,1,.36,1);
    }
    .nav-link:hover { color: ${NAVY}; }
    .nav-link:hover::after { width: 100%; }

    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      background: ${NAVY}; color: #fff; border: none; border-radius: 10px;
      padding: 13px 28px; font-size: 14px; font-weight: 600;
      cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif;
      box-shadow: 0 4px 20px rgba(0,51,102,0.28);
      transition: all 0.2s;
    }
    .btn-primary:hover { background: ${NAVY_MID}; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,51,102,0.38); }
    .btn-primary:active { transform: translateY(0); }

    .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent; color: ${NAVY}; border: 1.5px solid ${NAVY};
      border-radius: 10px; padding: 12px 28px; font-size: 14px; font-weight: 600;
      cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s;
    }
    .btn-outline:hover { background: ${NAVY_LIGHT}; transform: translateY(-2px); }

    .btn-white {
      display: inline-flex; align-items: center; gap: 8px;
      background: #fff; color: ${NAVY}; border: none; border-radius: 10px;
      padding: 13px 28px; font-size: 14px; font-weight: 700;
      cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif;
      box-shadow: 0 4px 20px rgba(0,0,0,0.12); transition: all 0.2s;
    }
    .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.2); }

    .btn-ghost-white {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent; color: rgba(255,255,255,0.85);
      border: 1.5px solid rgba(255,255,255,0.35); border-radius: 10px;
      padding: 12px 28px; font-size: 14px; font-weight: 600;
      cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s;
    }
    .btn-ghost-white:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }

    .card {
      background: #fff; border: 1px solid #e8eef6; border-radius: 16px;
      transition: all 0.3s cubic-bezier(.22,1,.36,1);
    }
    .card:hover {
      border-color: rgba(0,51,102,0.18);
      box-shadow: 0 16px 48px rgba(0,51,102,0.1);
      transform: translateY(-4px);
    }

    .badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: ${NAVY_LIGHT}; color: ${NAVY};
      border: 1px solid rgba(0,51,102,0.14);
      border-radius: 999px; padding: 5px 14px;
      font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    }
    .badge-dark {
      background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.9);
      border: 1px solid rgba(255,255,255,0.22);
    }

    .shimmer-text {
      background: linear-gradient(90deg, ${NAVY} 0%, #1a6bbf 45%, ${NAVY} 90%);
      background-size: 200% auto;
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; animation: shimmer 5s linear infinite;
    }

    .divider {
      display: block; height: 3px; width: 0;
      background: ${NAVY}; border-radius: 2px; margin: 12px auto 0;
      animation: drawLine 0.9s cubic-bezier(.22,1,.36,1) 0.4s both;
    }
    .divider-white {
      background: rgba(255,255,255,0.45);
    }

    .grid-bg {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(0,51,102,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,51,102,1) 1px, transparent 1px);
      background-size: 52px 52px;
      animation: gridFade 1.5s ease forwards;
    }

    .float-card {
      position: absolute; background: #fff;
      border: 1px solid #e8eef6; border-radius: 14px;
      padding: 12px 16px; box-shadow: 0 8px 32px rgba(0,51,102,0.1);
      display: flex; align-items: center; gap: 10px;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .process-card {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.13);
      border-radius: 16px; padding: 28px; text-align: left;
      backdrop-filter: blur(4px); transition: background 0.3s;
    }
    .process-card:hover { background: rgba(255,255,255,0.13); }

    .tag-pill {
      display: inline-flex; align-items: center; gap: 6px;
      background: #fff; color: #334155;
      border: 1px solid #e2e8f0; border-radius: 999px;
      padding: 9px 20px; font-size: 13px; font-weight: 500;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: all 0.2s;
    }
    .tag-pill:hover { border-color: ${NAVY}; color: ${NAVY}; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,51,102,0.1); }

    .accordion-trigger {
      width: 100%; display: flex; align-items: center; gap: 14px;
      padding: 20px 24px; background: none; border: none;
      text-align: left; cursor: pointer;
      font-family: 'Plus Jakarta Sans', sans-serif; transition: background 0.2s;
    }
    .accordion-trigger:hover { background: ${NAVY_LIGHT}; }

    .footer-link {
      color: #94a3b8; font-size: 13px; text-decoration: none; transition: color 0.2s;
    }
    .footer-link:hover { color: ${NAVY}; }

    @media (max-width: 768px) {
      .float-card    { display: none !important; }
      .hero-grid     { grid-template-columns: 1fr !important; }
      .service-grid  { grid-template-columns: 1fr !important; }
      .why-grid      { grid-template-columns: 1fr !important; }
      .process-grid  { grid-template-columns: 1fr 1fr !important; }
      .stat-grid     { grid-template-columns: 1fr 1fr !important; }
      .btn-group     { flex-direction: column; align-items: stretch !important; }
      .footer-row    { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 16px !important; }
    }
    @media (max-width: 480px) {
      .process-grid  { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

// ─── Scroll-triggered reveal hook ─────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref}>
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}>
        {children}
      </div>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ icon: Icon, title, description, items, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className="card" style={{
      padding: 28, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}ms`,
    }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
        <Icon size={21} color="#fff" />
      </div>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: 16.5, color: "#0f172a", marginBottom: 8 }}>{title}</h3>
      <p style={{ color: "#64748b", fontSize: 13.5, lineHeight: 1.65, marginBottom: 16 }}>{description}</p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#475569" }}>
            <CheckCircle2 size={14} color={NAVY} style={{ marginTop: 2, flexShrink: 0 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Problem Accordion ────────────────────────────────────────────────────────
function ProblemCard({ problem, solution, result, icon: Icon }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <button className="accordion-trigger" onClick={() => setOpen(!open)}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: NAVY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon size={17} color={NAVY} />
        </div>
        <p style={{ fontWeight: 600, color: "#1e293b", flex: 1, fontSize: 14.5 }}>{problem}</p>
        <ChevronDown size={16} color="#94a3b8" style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.25s" }} />
      </button>
      {open && (
        <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${NAVY_LIGHT}`, animation: "fadeUp 0.3s ease both" }}>
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: NAVY_LIGHT, borderRadius: 12, padding: 16 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Our Solution</p>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65 }}>{solution}</p>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 12, padding: 16 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Result</p>
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65 }}>{result}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #e8eef6" }}>
      <button style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16, padding: "20px 0", background: "none", border: "none",
        textAlign: "left", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
      }} onClick={() => setOpen(!open)}>
        <span style={{ fontWeight: 600, color: "#1e293b", fontSize: 14.5 }}>{q}</span>
        <ChevronDown size={15} color={NAVY} style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.25s" }} />
      </button>
      {open && (
        <p style={{ fontSize: 14, color: "#64748b", paddingBottom: 20, lineHeight: 1.75, animation: "fadeUp 0.3s ease both" }}>{a}</p>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ══════════════════════════════════════════════════════════════════════════════
export default function RehobothDigitechPage() {

  const services = [
    { icon: Search, title: "Search Engine Optimization", description: "Drive consistent organic traffic with proven local SEO strategies tailored for Dwarka businesses.", items: ["Keyword research – long-tail & high-conversion", "On-page SEO: meta tags, headings, linking", "Google Maps & local citations optimization", "Technical SEO: speed & mobile-friendly", "Content SEO: blogs, FAQs for Dwarka audience"] },
    { icon: Share2, title: "Social Media Marketing", description: "Build trust, grow your audience, and convert followers into real clients through targeted campaigns.", items: ["Facebook, Instagram & LinkedIn marketing", "Engaging reels, posts & ad campaigns", "Targeted ads for Dwarka demographics", "Community management & relationship building"] },
    { icon: MousePointerClick, title: "Google Ads & PPC", description: "Generate instant leads with budget-optimized pay-per-click campaigns that maximize your ROI.", items: ["High-intent keyword-focused campaigns", "Conversion-optimized landing pages", "Budget optimization for max ROI", "Real-time performance tracking"] },
    { icon: Globe, title: "Website Design & Development", description: "Turn your website into a lead-generating machine with fast, beautiful, SEO-ready design.", items: ["SEO-friendly & mobile-optimized builds", "Fast-loading pages with clear CTAs", "User-friendly UI to reduce bounce rate", "Built for conversions, not aesthetics"] },
    { icon: FileText, title: "Content Marketing", description: "Establish authority and attract your ideal customers through strategic, locally-targeted content.", items: ["Informative blogs & service pages", "FAQs answering common Dwarka queries", "Local content for Dwarka & surrounding areas", "Content that ranks and converts"] },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Data-driven insights that help you make smart decisions and see exactly where your budget goes.", items: ["Monthly performance reports", "Conversion rate tracking", "Competitor benchmarking", "Actionable growth recommendations"] },
  ];

  const problems = [
    { icon: Target, problem: "Your website isn't ranking on Google", solution: "Complete website audit, on-page and off-page SEO, Google Maps optimization, and high-quality content that answers local customer queries.", result: "Your website starts ranking for terms like 'digital marketing agency in Dwarka Delhi' and attracts consistent organic leads." },
    { icon: Zap, problem: "Low or zero leads from your digital marketing", solution: "ROI-based campaigns, targeted social strategies, Google Ads optimized for small budgets, and continuous conversion rate improvements.", result: "Your marketing budget works efficiently to generate qualified leads without wasteful spending." },
    { icon: Lightbulb, problem: "Not sure how to grow your business online", solution: "A step-by-step strategy: understand your business and audience, identify the best channels, custom plan with measurable KPIs, continuous optimization.", result: "Clear, sustainable online growth tailored to Dwarka's local business landscape." },
  ];

  const faqs = [
    { q: "What is the best way to get clients in Dwarka?", a: "By combining SEO, social media marketing, Google Ads, and local targeting, your business can attract qualified leads consistently." },
    { q: "Why is my website not ranking in Dwarka?", a: "Ranking issues often arise from weak SEO, poor site structure, low-quality content, or lack of local targeting. Our SEO audits and optimization services solve these problems." },
    { q: "How can digital marketing help local businesses in Dwarka?", a: "It increases visibility for your target audience, generates leads, builds trust, and improves your brand reputation." },
    { q: "How long does it take to see results?", a: "SEO takes 3–6 months for significant results. Google Ads generate leads immediately. Social media engagement improves within 1–2 months." },
    { q: "Do you provide affordable solutions for small businesses?", a: "Yes, our packages are tailored to small budgets without compromising on quality or results." },
  ];

  const areas = ["Dwarka Sector 1–23", "Janakpuri", "Uttam Nagar", "Najafgarh", "Delhi NCR"];

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <GlobalStyles />
     
      {/* ════════ HERO ════════ */}
      <section style={{ position: "relative", overflow: "hidden", background: "#fff", paddingTop: 96, paddingBottom: 112 }}>
        {/* Grid background */}
        <div className="grid-bg" />

        {/* Radial vignette over grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.98) 75%)" }} />

        {/* Soft accent blob */}
        <div style={{
          position: "absolute", top: "10%", right: "12%",
          width: 420, height: 420, borderRadius: "50%",
          background: `radial-gradient(circle, ${NAVY_LIGHT} 0%, transparent 68%)`,
          pointerEvents: "none", opacity: 0.9,
          animation: "float 10s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "8%",
          width: 260, height: 260, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0,51,102,0.06) 0%, transparent 70%)`,
          pointerEvents: "none",
          animation: "float 13s ease-in-out infinite 2s",
        }} />

        {/* Floating micro cards */}
        <div className="float-card" style={{ top: 140, right: "7%", animation: "float 9s ease-in-out infinite 1s, fadeIn 0.8s ease 0.7s both" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TrendingUp size={14} color="#16a34a" />
          </div>
          <div>
            <p style={{ fontSize: 10.5, color: "#94a3b8", fontWeight: 500 }}>Organic Traffic</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#16a34a" }}>+312%</p>
          </div>
        </div>

        <div className="float-card" style={{ bottom: 120, right: "9%", animation: "float 11s ease-in-out infinite 3s, fadeIn 0.8s ease 1s both" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: NAVY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Star size={14} color={NAVY} />
          </div>
          <div>
            <p style={{ fontSize: 10.5, color: "#94a3b8", fontWeight: 500 }}>Google Ranking</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>#1 in Dwarka</p>
          </div>
        </div>

        <div className="float-card" style={{ top: 300, left: "6%", animation: "float 14s ease-in-out infinite 5s, fadeIn 0.8s ease 1.2s both" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#fef9ec", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users size={14} color="#d97706" />
          </div>
          <div>
            <p style={{ fontSize: 10.5, color: "#94a3b8", fontWeight: 500 }}>Leads / Month</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#d97706" }}>+48 Leads</p>
          </div>
        </div>

        {/* Hero content */}
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", padding: "0 28px", textAlign: "center" }}>

          {/* Badge */}
          <div style={{ animation: "fadeUp 0.6s ease 0.1s both", marginBottom: 22 }}>
            <span className="badge"><Star size={11} /> Trusted Digital Marketing Partner — Dwarka, Delhi</span>
          </div>

          {/* Headline */}
          <div style={{ animation: "fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.2s both", marginBottom: 24 }}>
            <h1 style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(38px, 5.5vw, 70px)",
              fontWeight: 700, color: "#0f172a", lineHeight: 1.1,
            }}>
             Digital Marketing 

              <br />
              <span className="shimmer-text"> Company in Dwarka</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div style={{ animation: "fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.35s both", marginBottom: 40 }}>
            <p style={{ fontSize: 17, color: "#64748b", lineHeight: 1.75, maxWidth: 580, margin: "0 auto" }}>
              Over <strong style={{ color: "#0f172a", fontWeight: 700 }}>70% of local businesses</strong> in Dwarka struggle to generate leads online.
              We combine data-driven strategies with local insights to deliver measurable, real results.
            </p>
          </div>

          {/* CTAs */}
          <div className="btn-group" style={{ animation: "fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.5s both", display: "flex", gap: 12, justifyContent: "center", marginBottom: 68, flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ padding: "15px 34px", fontSize: 15 }}>
              <PhoneCall size={15} /> Get Free Consultation
            </button>
            <button className="btn-outline" style={{ padding: "14px 34px", fontSize: 15 }}>
              Explore Services <ArrowRight size={15} />
            </button>
          </div>

          {/* Stats */}
          <div className="stat-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14,
            maxWidth: 680, margin: "0 auto",
            animation: "fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0.65s both",
          }}>
            {[
              { icon: Users,      value: "200+",  label: "Businesses Served" },
              { icon: TrendingUp, value: "3×",    label: "Avg. Lead Growth"  },
              { icon: Award,      value: "Top 3", label: "Google Rankings"   },
              { icon: ShieldCheck,value: "100%",  label: "Transparent ROI"   },
            ].map(({ icon: Icon, value, label }, i) => (
              <div key={label} style={{
                background: "#fff", border: "1px solid #e8eef6", borderRadius: 14, padding: 18,
                display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                animation: `countUp 0.5s ease ${0.75 + i * 0.1}s both`,
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: NAVY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color={NAVY} />
                </div>
                <p style={{ fontSize: 21, fontWeight: 800, color: NAVY }}>{value}</p>
                <p style={{ fontSize: 11, color: "#94a3b8", textAlign: "center", lineHeight: 1.4 }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div style={{ marginTop: 44, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, animation: "fadeIn 0.8s ease 1.1s both" }}>
            <div style={{ display: "flex" }}>
              {[NAVY, NAVY_MID, "#0d5ca6"].map((bg, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: bg, border: "2.5px solid #fff", marginLeft: i > 0 ? -9 : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 8.5, color: "#fff", fontWeight: 700 }}>{["SK", "PR", "AM"][i]}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#64748b" }}>
              <strong style={{ color: "#0f172a" }}>200+ local businesses</strong> growing with Rehoboth
            </p>
          </div>
        </div>
      </section>

      {/* ════════ WHY US ════════ */}
      <section style={{ padding: "88px 28px", background: NAVY_LIGHT }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="badge" style={{ marginBottom: 14 }}>Why Partner With Us</span>
              <span className="divider" style={{ marginTop: 14 }} />
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#0f172a", marginTop: 18, lineHeight: 1.2 }}>
                Why Your Business Needs a<br />
                <span style={{ color: NAVY }}>Digital Marketing Agency in Dwarka</span>
              </h2>
              <p style={{ color: "#64748b", maxWidth: 500, margin: "16px auto 0", fontSize: 15, lineHeight: 1.75 }}>
                Stop wondering how to grow online. We educate, guide, and implement strategies that deliver measurable results.
              </p>
            </div>
          </Reveal>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
            {[
              { icon: Target,   title: "Targeted Online Presence",    desc: "We optimize your website, social media, and Google Business profile to attract local customers searching for your services." },
              { icon: Zap,      title: "Lead Generation Strategies",  desc: "Instead of generic marketing, we implement methods that generate real, ready-to-buy leads in Dwarka and Delhi NCR." },
              { icon: BarChart3,title: "Business Growth Insights",    desc: "Our team analyzes data, tracks performance, and provides actionable steps so you can make informed, confident decisions." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="card" style={{ padding: "32px 28px", textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <Icon size={22} color="#fff" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: "#64748b", fontSize: 13.5, lineHeight: 1.72 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section id="services" style={{ padding: "88px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="badge" style={{ marginBottom: 14 }}>What We Offer</span>
              <span className="divider" style={{ marginTop: 14 }} />
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#0f172a", marginTop: 18, lineHeight: 1.2 }}>
                Result-Driven Digital Marketing<br />
                <span style={{ color: NAVY }}>Services in Dwarka Delhi</span>
              </h2>
              <p style={{ color: "#64748b", maxWidth: 500, margin: "16px auto 0", fontSize: 15, lineHeight: 1.75 }}>
                Comprehensive, problem-solving services designed to help local businesses improve visibility, generate quality leads, and achieve consistent online growth.
              </p>
            </div>
          </Reveal>
          <div className="service-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
            {services.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 70} />)}
          </div>
        </div>
      </section>

      {/* ════════ PROBLEMS ════════ */}
      <section id="problems" style={{ padding: "88px 28px", background: NAVY_LIGHT }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="badge" style={{ marginBottom: 14 }}>Problem Solving</span>
              <span className="divider" style={{ marginTop: 14 }} />
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#0f172a", marginTop: 18, lineHeight: 1.2 }}>
                How We Solve<span style={{ color: NAVY }}> Local Business Problems</span>
              </h2>
              <p style={{ color: "#64748b", maxWidth: 460, margin: "16px auto 0", fontSize: 15, lineHeight: 1.75 }}>
                Problem-solving marketing, not just service selling. Click each challenge to see our approach.
              </p>
            </div>
          </Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
            {problems.map((p, i) => (
              <Reveal key={p.problem} delay={i * 80}>
                <ProblemCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section style={{ padding: "88px 28px", background: NAVY }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <span className="badge badge-dark" style={{ marginBottom: 14 }}>Our Process</span>
            <span className="divider divider-white" style={{ marginTop: 14, display: "block", margin: "14px auto 0" }} />
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#fff", marginTop: 20, marginBottom: 14 }}>
              How We Work for Small Businesses
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 460, margin: "0 auto 52px", fontSize: 15, lineHeight: 1.75 }}>
              We operate as your in-house marketing team — transparent, hands-on, and always ROI-focused.
            </p>
          </Reveal>
          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[
              { step: "01", title: "Discovery", desc: "Deep-dive into your business, competitors, and Dwarka audience." },
              { step: "02", title: "Strategy",  desc: "A custom plan with the right channels, KPIs, and timelines." },
              { step: "03", title: "Execute",   desc: "Implement campaigns with precision and creativity." },
              { step: "04", title: "Optimize",  desc: "Continuous data analysis, reporting & improvement." },
            ].map(({ step, title, desc }, i) => (
              <Reveal key={step} delay={i * 80}>
                <div className="process-card">
                  <p style={{ fontSize: 42, fontWeight: 800, color: "rgba(255,255,255,0.18)", fontFamily: "'Plus Jakarta Sans'", marginBottom: 14, lineHeight: 1 }}>{step}</p>
                  <h3 style={{ fontWeight: 700, color: "#fff", fontSize: 16, marginBottom: 8 }}>{title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.57)", fontSize: 13.5, lineHeight: 1.68 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section id="faq" style={{ padding: "88px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="badge" style={{ marginBottom: 14 }}>FAQ</span>
              <span className="divider" style={{ marginTop: 14 }} />
              <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#0f172a", marginTop: 20 }}>
                Frequently Asked <span style={{ color: NAVY }}>Questions</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ background: "#fff", border: "1px solid #e8eef6", borderRadius: 20, padding: "8px 32px", boxShadow: "0 4px 40px rgba(0,51,102,0.07)" }}>
              {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ AREAS ════════ */}
      <section id="areas" style={{ padding: "72px 28px", background: NAVY_LIGHT }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <span className="badge" style={{ marginBottom: 14 }}>Service Areas</span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: 24, color: "#0f172a", margin: "14px 0 10px" }}>
              Areas We Serve in Dwarka & Surroundings
            </h2>
            <p style={{ color: "#64748b", fontSize: 14, maxWidth: 400, margin: "0 auto 32px" }}>
              Local targeting that ensures every marketing effort reaches potential clients near your business.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {areas.map((area) => (
                <div key={area} className="tag-pill">
                  <MapPin size={13} color={NAVY} /> {area}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section style={{ padding: "80px 28px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <Reveal>
            <div style={{
              position: "relative", overflow: "hidden",
              background: NAVY, borderRadius: 24, padding: "72px 48px", textAlign: "center",
              boxShadow: `0 32px 80px rgba(0,51,102,0.32)`,
            }}>
              <div style={{ position: "absolute", top: -90, right: -90, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: -70, left: -70, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <span className="badge badge-dark" style={{ marginBottom: 20 }}>
                  <Zap size={11} /> Let's Grow Together
                </span>
                <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px,4vw,46px)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
                  Ready to Solve Your Business<br />Growth Problems?
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto 36px", fontSize: 15, lineHeight: 1.75 }}>
                  Whether you want to generate leads in Dwarka Delhi, grow your business online, or improve your Google rankings — our team is here to implement solutions that work.
                </p>
                <div className="btn-group" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <button className="btn-white">
                    <PhoneCall size={15} /> Book Free Consultation
                  </button>
                  <Link href="/service">
                  <button className="btn-ghost-white">
                    View Services <ArrowRight size={15} />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <Contact/>
      </section>
 <WhatsAppButton/>
  
    </div>
  );
}