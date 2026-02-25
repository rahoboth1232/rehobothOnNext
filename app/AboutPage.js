"use client";

import { memo, useEffect, useRef, useState } from "react";
import {
  Award,
  Target,
  Zap,
  Users,
  Search,
  Share2,
  Monitor,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Star,
  Shield,
  BarChart2,
  Eye,
  Megaphone,
} from "lucide-react";
import Contact from "./components/Contact";
import Link from "next/link";

/* ─────────────────────────────────────────
   CountUp hook
───────────────────────────────────────── */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime = null;
          const animate = (ts) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function AnimatedNumber({ end, suffix = "+" }) {
  const { count, ref } = useCountUp(end);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────
   Fade-in-up on scroll
───────────────────────────────────────── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SERVICES = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Ethical, result-driven SEO strategies that build long-term organic visibility and drive qualified traffic.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Strategic campaigns that build genuine brand engagement, grow your audience, and strengthen community.",
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    desc: "Modern, conversion-optimised websites that represent your brand and deliver a seamless user experience.",
  },
  {
    icon: TrendingUp,
    title: "Google Ads & Paid Marketing",
    desc: "Data-backed paid campaigns delivering qualified traffic, measurable ROI, and controlled ad spend.",
  },
  {
    icon: Megaphone,
    title: "Branding & Digital Growth",
    desc: "End-to-end brand strategy and growth solutions tailored to your market and business objectives.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    desc: "Transparent performance tracking with clear, actionable reports so you always know what's working.",
  },
];

const VALUES = [
  { icon: Zap, title: "Speed", desc: "Fast execution without compromising on quality or strategy." },
  { icon: Award, title: "Excellence", desc: "Technical mastery and strategic precision in every project." },
  { icon: Users, title: "Partnership", desc: "Your growth is our success — we're invested in your outcomes." },
  { icon: Shield, title: "Ethics", desc: "White-hat practices, honest communication, zero shortcuts." },
  { icon: Eye, title: "Clarity", desc: "Clear reports and communication — no jargon, no surprises." },
  { icon: CheckCircle, title: "Reliability", desc: "Consistent support and accountability at every stage." },
];

const APPROACH = [
  "Understanding client goals and target audience deeply",
  "Creating data-driven, customised marketing strategies",
  "Using ethical SEO and white-hat marketing practices",
  "Monitoring performance and optimising campaigns regularly",
  "Providing clear, transparent reports and honest insights",
];

const WHY_US = [
  "Experienced and skilled digital marketing professionals",
  "Customised solutions tailored to your business — not generic packages",
  "Clear communication, honest reporting, and zero hidden agendas",
  "Strong understanding of the local Delhi and NCR market",
  "Recognised as a reliable digital marketing agency in Delhi",
  "Focused on real, measurable business outcomes",
];

const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

/* ─────────────────────────────────────────
   SECTION WRAPPER with fade-in
───────────────────────────────────────── */
function Section({ children, className = "", style = {} }) {
  const { ref, visible } = useFadeIn();
  return (
    <section
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const AboutPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .rds-display { font-family: 'Playfair Display', Georgia, serif; }
        .rds-body    { font-family: 'DM Sans', system-ui, sans-serif; }

        :root {
          --navy:       #08172e;
          --navy-mid:   #0d2044;
          --navy-light: #112755;
          --gold:       #c9a84c;
          --gold-light: #e2c47a;
          --blue-acc:   #1d4ed8;
          --cream:      #f7f5f0;
          --white:      #ffffff;
        }

        .rds-gold-text { color: var(--gold); }
        .rds-blue-text { color: var(--blue-acc); }

        .rds-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
        }

        .rds-gold-rule {
          height: 1px;
          background: linear-gradient(90deg, var(--gold) 0%, transparent 100%);
          max-width: 80px;
          margin-bottom: 1.5rem;
        }

        /* ── HERO ── */
        .rds-hero {
          background: linear-gradient(140deg, #08172e 0%, #0d2044 45%, #0a1f50 75%, #08172e 100%);
          padding: 8rem 2rem 6rem;
          position: relative;
          overflow: hidden;
          min-height: 88vh;
          display: flex;
          align-items: center;
        }
        .rds-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 80% 20%, rgba(201,168,76,0.07) 0%, transparent 50%),
            radial-gradient(circle at 10% 80%, rgba(29,78,216,0.12) 0%, transparent 50%);
          pointer-events: none;
        }
        .rds-hero-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.12);
          pointer-events: none;
          animation: rds-pulse 6s ease-in-out infinite;
        }
        @keyframes rds-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.04); }
        }

        .rds-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 5.5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.08;
          margin-bottom: 1.25rem;
        }
        .rds-hero-title em {
          color: var(--gold);
          font-style: italic;
        }

        .rds-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 100px;
          padding: 0.4rem 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.7);
          margin-bottom: 1.5rem;
        }
        .rds-badge span { color: var(--gold); font-weight: 600; }

        /* ── BUTTONS ── */
        .rds-btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gold);
          color: var(--navy);
          border: none;
          padding: 0.9rem 2.2rem;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .rds-btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); }

        .rds-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 0.9rem 2.2rem;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.82rem;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .rds-btn-outline:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.05); }

        /* ── STATS ── */
        .rds-stats-wrap {
          background: var(--navy-mid);
          padding: 4rem 2rem;
          border-top: 1px solid rgba(201,168,76,0.15);
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }
        .rds-stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 14px;
          padding: 2.25rem 1.5rem;
          text-align: center;
          transition: all 0.3s;
          cursor: default;
        }
        .rds-stat-card:hover {
          background: rgba(201,168,76,0.07);
          border-color: rgba(201,168,76,0.5);
          transform: translateY(-4px);
        }
        .rds-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 900;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 0.5rem;
          display: block;
        }
        .rds-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ── WHO WE ARE ── */
        .rds-cream { background: var(--cream); }

        .rds-section-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.9rem);
          font-weight: 900;
          color: var(--navy);
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .rds-img-card {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 4/3;
        }
        .rds-img-card img { width: 100%; height: 100%; object-fit: cover; }
        .rds-img-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(8,23,46,0.75) 0%, rgba(8,23,46,0.2) 60%, transparent 100%);
        }
        .rds-img-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 12px;
          padding: 1rem 1.25rem;
        }

        /* ── SERVICES ── */
        .rds-navy { background: var(--navy); }

        .rds-services-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.9rem);
          font-weight: 900;
          color: #fff;
          text-align: center;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }
        .rds-services-h2 em { color: var(--gold); font-style: italic; }

        .rds-svc-card {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: default;
        }
        .rds-svc-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(201,168,76,0.4);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
        }
        .rds-svc-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        /* ── APPROACH ── */
        .rds-approach-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          padding: 1rem 1.25rem;
          border-left: 3px solid var(--gold);
          background: #fff;
          border-radius: 0 10px 10px 0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: all 0.25s;
          margin-bottom: 0.75rem;
        }
        .rds-approach-item:hover {
          border-left-color: var(--blue-acc);
          padding-left: 1.6rem;
          box-shadow: 0 6px 24px rgba(29,78,216,0.12);
        }

        /* ── MISSION / VISION ── */
        .rds-dark-card {
          background: var(--navy);
          border-radius: 20px;
          padding: 2.75rem;
          position: relative;
          overflow: hidden;
        }
        .rds-dark-card::before {
          content: '';
          position: absolute;
          bottom: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(201,168,76,0.06);
        }
        .rds-light-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 2.75rem;
          box-shadow: 0 4px 32px rgba(0,0,0,0.07);
        }

        /* ── VALUES ── */
        .rds-val-card {
          text-align: center;
          padding: 2rem 1rem;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s;
          cursor: default;
        }
        .rds-val-card:hover {
          background: rgba(201,168,76,0.07);
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-5px);
        }
        .rds-val-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        /* ── WHY US ── */
        .rds-why-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          padding: 1rem 1.25rem;
          border-radius: 10px;
          background: #fff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: all 0.22s;
          cursor: default;
          margin-bottom: 0.75rem;
        }
        .rds-why-item:hover {
          box-shadow: 0 8px 28px rgba(13,74,166,0.13);
          border-color: #bfdbfe;
          transform: translateX(4px);
        }

        /* ── CONTACT BLOCK ── */
        .rds-contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        /* ── CTA ── */
        .rds-cta {
          background: linear-gradient(135deg, #1d4ed8 0%, #08172e 100%);
          padding: 6rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .rds-cta::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          border-radius: 50%;
          background: rgba(201,168,76,0.05);
          pointer-events: none;
        }
        .rds-cta-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .rds-cta-h2 em { color: var(--gold); font-style: italic; }

        /* ── CONTAINER ── */
        .rds-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .rds-two-col { grid-template-columns: 1fr !important; }
          .rds-hide-mobile { display: none !important; }
          .rds-hero { padding: 6rem 1.5rem 4rem; min-height: auto; }
        }
      `}</style>

      <div className="rds-body" style={{ minHeight: "100vh", marginTop:"20px" }}>

        <div className="rds-hero">
          {/* Decorative rings */}
          <div className="rds-hero-ring" style={{ width: 500, height: 500, top: -100, right: -100 }} />
          <div className="rds-hero-ring" style={{ width: 340, height: 340, top: -30, right: -30, animationDelay: "1.5s" }} />
          <div className="rds-hero-ring" style={{ width: 220, height: 220, bottom: 60, left: -60, animationDelay: "3s" }} />

          <div className="rds-container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: 760 }}>
              <div className="rds-badge">
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
                <span>Janakpuri, New Delhi</span>
                &nbsp;·&nbsp; Digital Marketing Agency
              </div>

              <h1 className="rds-hero-title rds-display">
                About{" "}
                <em>Rehoboth</em>
                <br />
                Digitech Solution
              </h1>

              <div className="rds-gold-rule" style={{ maxWidth: 200 }} />

              <p
                className="rds-body"
                style={{
                  fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
                  color: "#93c5fd",
                  fontWeight: 400,
                  marginBottom: "1.25rem",
                  letterSpacing: "0.01em",
                }}
              >
                Trusted Digital Marketing Agency in Janakpuri, Delhi
              </p>

              <p
                className="rds-body"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.85,
                  maxWidth: 640,
                  marginBottom: "2.75rem",
                  fontSize: "0.98rem",
                }}
              >
                A professional digital marketing agency in Janakpuri, Delhi, helping businesses
                grow online through strategic, result-oriented solutions. We support startups,
                small businesses, and established brands in building strong online visibility
                and generating quality leads — with a focus on long-term growth, transparency,
                and measurable results.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                
                <button className="rds-btn-gold">
                 <a href="#contact">
                      Start Your Project 
                    </a>
                </button>
                
                <button className="rds-btn-outline">
                   <a href="#services">
                        View Our Services
                    </a>
               
                </button>
              </div>
            </div>
          </div>
        </div>


        <Section
          className="rds-cream"
          style={{ padding: "6rem 0" }}
        >
          <div className="rds-container">
            <div
              className="rds-two-col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "center",
              }}
            >
              {/* Image */}
              <div className="rds-hide-mobile" style={{ position: "relative" }}>
                <div className="rds-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                    alt="Rehoboth Digitech Solution team"
                  />
                  <div className="rds-img-card-overlay" />
                  <div className="rds-img-badge">
                    <p className="rds-label" style={{ marginBottom: "0.25rem" }}>Based in</p>
                    <p
                      className="rds-display"
                      style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}
                    >
                      Janakpuri, New Delhi
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: -24,
                    right: -24,
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -16,
                    left: -16,
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background: "rgba(29,78,216,0.1)",
                    border: "1px solid rgba(29,78,216,0.2)",
                  }}
                />
              </div>

             
              <div>
                <p className="rds-label" style={{ marginBottom: "1rem" }}>Who We Are</p>
                <h2 className="rds-section-h2 rds-display">
                  Your Growth Partners in{" "}
                  <span className="rds-blue-text">Digital Marketing</span>
                </h2>
                <div className="rds-gold-rule" />
                <p
                  className="rds-body"
                  style={{
                    color: "#4b5563",
                    lineHeight: 1.9,
                    marginBottom: "1.25rem",
                    fontSize: "0.97rem",
                  }}
                >
                  We are a team of experienced digital marketers based in Janakpuri, Delhi,
                  working with businesses across different industries. Our mission is to
                  simplify digital marketing and help brands connect with the right audience online.
                </p>
                <p
                  className="rds-body"
                  style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "0.97rem" }}
                >
                  From planning to execution, we follow a structured and ethical approach.
                  Whether you need SEO, social media marketing, or website development, our
                  team delivers solutions perfectly aligned with your business goals.
                </p>
              </div>
            </div>
          </div>
        </Section>

       
        <Section id="services" className="rds-navy" style={{ padding: "6rem 0" }}>
          <div className="rds-container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="rds-label" style={{ marginBottom: "1rem" }}>What We Do</p>
              <h2 className="rds-services-h2 rds-display">
                Full-Service <em>Digital Solutions</em>
              </h2>
              <p
                className="rds-body"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 520,
                  margin: "0.75rem auto 0",
                  lineHeight: 1.75,
                  fontSize: "0.95rem",
                }}
              >
                We operate as a trusted online marketing company in Janakpuri, offering
                customised strategies based on market research and your specific business needs.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {SERVICES.map((svc, i) => (
                <div className="rds-svc-card" key={i}>
                  <div className="rds-svc-icon">
                    <svc.icon size={26} color="var(--gold)" />
                  </div>
                  <h3
                    className="rds-display"
                    style={{
                      color: "#fff",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: "0.65rem",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="rds-body"
                    style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontSize: "0.88rem" }}
                  >
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════
            APPROACH + MISSION / VISION
        ══════════════════════════════════════════ */}
        <Section className="rds-cream" style={{ padding: "6rem 0" }}>
          <div className="rds-container">
            <div
              className="rds-two-col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "start",
              }}
            >
              {/* Approach */}
              <div>
                <p className="rds-label" style={{ marginBottom: "1rem" }}>Our Approach</p>
                <h2 className="rds-section-h2 rds-display">
                  How We Deliver{" "}
                  <span className="rds-blue-text">Sustainable Results</span>
                </h2>
                <div className="rds-gold-rule" />
                <p
                  className="rds-body"
                  style={{
                    color: "#6b7280",
                    lineHeight: 1.9,
                    marginBottom: "2rem",
                    fontSize: "0.95rem",
                  }}
                >
                  At Rehoboth Digitech Solution, successful digital marketing starts with deeply
                  understanding your business. Our structured approach ensures every campaign is
                  purposeful, ethical, and measurable.
                </p>

                <div>
                  {APPROACH.map((item, i) => (
                    <div className="rds-approach-item" key={i}>
                      <CheckCircle
                        size={17}
                        color="var(--gold)"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      <p
                        className="rds-body"
                        style={{ color: "#374151", fontSize: "0.92rem", lineHeight: 1.65 }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission + Vision */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div className="rds-dark-card">
                  <Target
                    color="var(--gold)"
                    size={36}
                    style={{ marginBottom: "1rem", position: "relative", zIndex: 1 }}
                  />
                  <h3
                    className="rds-display"
                    style={{
                      color: "#fff",
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Our Mission
                  </h3>
                  <p
                    className="rds-body"
                    style={{
                      color: "rgba(255,255,255,0.58)",
                      lineHeight: 1.8,
                      fontSize: "0.91rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    To simplify digital marketing and empower businesses across Delhi NCR to
                    connect with the right audience, generate quality leads, and achieve
                    measurable, long-term growth through ethical strategies.
                  </p>
                </div>

                <div className="rds-light-card">
                  <Award
                    color="var(--blue-acc)"
                    size={36}
                    style={{ marginBottom: "1rem" }}
                  />
                  <h3
                    className="rds-display"
                    style={{
                      color: "var(--navy)",
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    className="rds-body"
                    style={{ color: "#6b7280", lineHeight: 1.8, fontSize: "0.91rem" }}
                  >
                    To become the most trusted digital marketing partner in Delhi NCR —
                    recognised for ethical practices, strategic clarity, and consistently
                    delivering real, measurable business outcomes for every client we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════
            VALUES
        ══════════════════════════════════════════ */}
        <Section className="rds-navy" style={{ padding: "6rem 0" }}>
          <div className="rds-container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="rds-label" style={{ marginBottom: "1rem" }}>What Drives Us</p>
              <h2
                className="rds-display"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.15,
                }}
              >
                Our Core{" "}
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Values</em>
              </h2>
              <p
                className="rds-body"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: 500,
                  margin: "0.75rem auto 0",
                  lineHeight: 1.75,
                  fontSize: "0.9rem",
                }}
              >
                These values aren't words on a wall — they guide every decision, strategy,
                and client interaction.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {VALUES.map((v, i) => (
                <div className="rds-val-card" key={i}>
                  <div className="rds-val-icon">
                    <v.icon size={24} color="var(--gold)" />
                  </div>
                  <h3
                    className="rds-display"
                    style={{
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="rds-body"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.8rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════
            WHY CHOOSE US + CONTACT
        ══════════════════════════════════════════ */}
        <Section className="rds-cream" style={{ padding: "6rem 0" }}>
          <div className="rds-container">
            <div
              className="rds-two-col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "start",
              }}
            >
              {/* Why Us */}
              <div>
                <p className="rds-label" style={{ marginBottom: "1rem" }}>Why Choose Us</p>
                <h2 className="rds-section-h2 rds-display">
                  Why Businesses{" "}
                  <span className="rds-gold-text">Trust Us</span>
                </h2>
                <div className="rds-gold-rule" />
                <p
                  className="rds-body"
                  style={{
                    color: "#6b7280",
                    lineHeight: 1.85,
                    marginBottom: "1.75rem",
                    fontSize: "0.95rem",
                  }}
                >
                  Many clients trust us as one of the best digital marketing agencies in
                  Janakpuri because we focus on real business outcomes — not vanity metrics.
                </p>
                <div>
                  {WHY_US.map((item, i) => (
                    <div className="rds-why-item" key={i}>
                      <CheckCircle
                        size={17}
                        color="var(--blue-acc)"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      <p
                        className="rds-body"
                        style={{ color: "#374151", fontSize: "0.91rem", lineHeight: 1.65 }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact / Service Area */}
              <div>
                <div
                  className="rds-dark-card"
                  style={{ borderRadius: 20, padding: "2.75rem" }}
                >
                  <MapPin
                    color="var(--gold)"
                    size={36}
                    style={{ marginBottom: "1.25rem", position: "relative", zIndex: 1 }}
                  />
                  <h3
                    className="rds-display"
                    style={{
                      color: "#fff",
                      fontSize: "1.55rem",
                      fontWeight: 700,
                      marginBottom: "0.85rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Serving Janakpuri,
                    <br />
                    Delhi & NCR
                  </h3>
                  <p
                    className="rds-body"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.82,
                      marginBottom: "2rem",
                      fontSize: "0.9rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    We proudly work with businesses in Janakpuri, West Delhi, and across Delhi NCR.
                    Whether you are looking for a digital marketing agency near Janakpuri or a
                    dependable partner nearby — our team is ready to support your growth.
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      paddingTop: "1.5rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {[
                      {
                        Icon: MapPin,
                        text: "WZ-20, Second Floor, Backside Village Nangli Jalib, Janakpuri B1, New Delhi – 110058",
                      },
                      {
                        Icon: Phone,
                        text: "+91 9220157241 / +91 8920281686",
                      },
                      {
                        Icon: Mail,
                        text: "info@rehobothdigitechsolution.com",
                      },
                    ].map(({ Icon, text }, i) => (
                      <div className="rds-contact-detail" key={i}>
                        <Icon
                          size={15}
                          color="var(--gold)"
                          style={{ flexShrink: 0, marginTop: 3 }}
                        />
                        <span
                          className="rds-body"
                          style={{ color: "rgba(255,255,255,0.52)", fontSize: "0.82rem", lineHeight: 1.65 }}
                        >
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Contact/>

      </div>
    </>
  );
};

export default memo(AboutPage);