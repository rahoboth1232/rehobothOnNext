"use client";
import { useState, useEffect, useRef } from "react";
import {
  Megaphone, Search, KeyRound, FileText, Settings2, Link2,
  MapPin, PenLine, ShieldCheck, SlidersHorizontal, BarChart2,
  TrendingUp, Globe, Store, Rocket, Briefcase, Mail, Phone,
  ChevronDown, Zap, ArrowRight, CheckCircle2, Star, Award,
  Users, Shield, Target,
} from "lucide-react";
import Contact from "./components/Contact";
import Link from "next/link";
import WhatsAppButton from "./components/WhatsAppButton";


/* ─── Data ───────────────────────────────────────────────────── */
const services = [
  { Icon: Search,         title: "Website SEO Audit",                    desc: "A detailed audit of your website's performance — checking technical issues, content quality, keyword gaps, and overall SEO health to build a clear roadmap.", tag: "Audit"      },
  { Icon: KeyRound,       title: "Keyword Research & SEO Planning",       desc: "We research keywords based on real user search intent and your business goals, focusing on terms that attract relevant traffic and potential customers.", tag: "Research"   },
  { Icon: FileText,       title: "On-Page SEO Optimization",              desc: "We optimize page titles, meta descriptions, headings, content structure, images, and internal links to improve rankings and user experience.", tag: "On-Page"    },
  { Icon: Settings2,      title: "Technical SEO Improvements",            desc: "We improve website speed, mobile responsiveness, crawlability, indexing, and overall site structure to meet Google's technical standards.", tag: "Technical"  },
  { Icon: Link2,          title: "Off-Page SEO & Link Building",          desc: "High-quality backlink building, local business listings, brand mentions, and reputation support to build your website's authority and trust with Google.", tag: "Off-Page"   },
  { Icon: MapPin,         title: "Local SEO for Janakpuri",               desc: "We optimize your Google Business Profile, local keywords, and location signals to attract customers from Janakpuri, West Delhi, and nearby areas.", tag: "Local SEO"  },
  { Icon: PenLine,        title: "SEO Content Optimization",              desc: "We improve and optimize website content to match search intent. Well-structured, informative content helps improve rankings, engagement, and conversions.", tag: "Content"    },
];

const whyUs = [
  { Icon: ShieldCheck,     point: "Ethical, 100% white-hat SEO — Google-approved practices that protect your site from penalties" },
  { Icon: SlidersHorizontal,point: "Customized SEO strategies tailored to your goals, industry, and competitive landscape"        },
  { Icon: BarChart2,        point: "Transparent process with honest reporting — you always know what's being done"                  },
  { Icon: TrendingUp,       point: "Focus on leads and growth, not just traffic numbers"                                           },
  { Icon: Globe,            point: "Deep local knowledge of Janakpuri and Delhi NCR markets"                                       },
];


const faqs = [
  { q: "What does an SEO agency in Janakpuri, Delhi do?",         a: "An SEO agency in Janakpuri, Delhi helps businesses improve their website visibility on Google through on-page SEO, technical SEO, off-page SEO, and local SEO strategies that attract relevant traffic and leads." },
  { q: "Why should I choose a local SEO agency in Janakpuri?",    a: "A local SEO agency in Janakpuri understands the local market and search behavior, helping businesses appear in local searches and Google Maps to reach nearby customers more effectively." },
  { q: "Do you provide complete SEO services in Janakpuri?",      a: "Yes, we provide complete SEO services including SEO audits, keyword research, on-page optimization, technical improvements, off-page SEO, and local SEO support." },
  { q: "How long does SEO take to show results?",                 a: "SEO is a long-term process. Most businesses start seeing visible improvements within 3 to 6 months, depending on competition and the current condition of the website." },
  { q: "Is off-page SEO important for Google rankings?",          a: "Yes, off-page SEO helps build website authority and trust through quality backlinks, brand mentions, and online presence. It plays an important role in improving Google rankings." },
  { q: "Are your SEO services suitable for startups?",            a: "Yes, our SEO services are designed for startups, small businesses, and growing brands. We create scalable strategies based on business goals and budgets." },
  { q: "Do you provide SEO services outside Janakpuri?",          a: "Yes, along with Janakpuri we provide SEO services across West Delhi and Delhi NCR for businesses looking to expand their online presence." },
  { q: "Will my website be optimized per Google guidelines?",     a: "Yes, we follow ethical, Google-approved SEO practices to ensure your website remains compliant and performs well in the long term." },
];

/* ─── useInView ──────────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── Animated Counter ───────────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
          else setCount(target);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Main ───────────────────────────────────────────────────── */
export default function SEOPage() {
  const [heroReady, setHeroReady] = useState(false);
  const [openFaq,   setOpenFaq]   = useState(null);

  const [svcRef,  svcVisible]  = useInView();
  const [whyRef,  whyVisible]  = useInView();
  const [faqRef,  faqVisible]  = useInView();
  const [ctaRef,  ctaVisible]  = useInView();
  const [whoRef,  whoVisible]  = useInView();

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased" style={{ fontFamily:"'DM Sans',system-ui,sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&display=swap');
        html { scroll-behavior: smooth; }

        @keyframes float  { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-8px)}  }
        @keyframes shimmer{ 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }

        .float-a { animation: float  6s ease-in-out infinite; }
        .float-b { animation: floatB 8s ease-in-out infinite; }

        .pre-view { opacity:0; transform:translateY(24px); transition:opacity .65s ease,transform .65s ease; }
        .in-view  { opacity:1 !important; transform:translateY(0) !important; }

        .hero-shimmer {
          background: linear-gradient(90deg,#93c5fd,#bfdbfe,#e0f2fe,#93c5fd);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
          animation: shimmer 4s linear infinite;
        }

        .nav-link {
          padding:7px 15px; border-radius:8px; font-size:13.5px; font-weight:600;
          color:rgba(255,255,255,0.82); text-decoration:none; transition:all .2s;
        }
        .nav-link:hover { color:#fff; background:rgba(255,255,255,0.14); }

        .faq-content { max-height:0; overflow:hidden; transition:max-height .35s ease; }
        .faq-open .faq-content { max-height:220px; }
        .faq-icon { transition:transform .3s; }
        .faq-open .faq-icon { transform:rotate(180deg); }

        .service-card { transition:all .25s ease; }
        .service-card:hover { border-color:#3b82f6 !important; transform:translateY(-5px); box-shadow:0 12px 40px rgba(29,78,216,0.12); }
        .service-card:hover .svc-icon { background:#1d4ed8 !important; border-color:#1d4ed8 !important; }
        .service-card:hover .svc-icon svg { color:white !important; }
        .service-card:hover .top-bar { transform:scaleX(1) !important; }

        .why-card { transition:all .2s ease; }
        .why-card:hover { border-color:#3b82f6 !important; box-shadow:0 6px 22px rgba(29,78,216,0.1); }
      `}</style>

     
      <main>
        {/* ══ HERO ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden flex flex-col items-center  justify-center text-center px-6 py-20 min-h-[91vh]"
          style={{ background:"#003366" }}>

          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
          {/* Glow */}
          <div className="absolute pointer-events-none" style={{ top:0, left:"50%", transform:"translateX(-50%)", width:700, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,255,255,0.07) 0%,transparent 65%)" }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:140, background:"linear-gradient(to bottom,transparent,#ffffff)" }} />

          {/* Floating icons */}
          <div className="float-a hidden lg:flex absolute items-center justify-center" style={{ top:"22%", left:"7%", width:56, height:56, borderRadius:18, background:"linear-gradient(135deg,#ea4335,#fbbc04)", boxShadow:"0 8px 24px rgba(0,0,0,0.22)" }}>
            <Search size={24} color="white" />
          </div>
          <div className="float-b hidden lg:flex absolute items-center justify-center" style={{ top:"17%", right:"8%", width:56, height:56, borderRadius:18, background:"linear-gradient(135deg,#34a853,#4285f4)", boxShadow:"0 8px 24px rgba(0,0,0,0.22)" }}>
            <TrendingUp size={24} color="white" />
          </div>
          <div className="float-a hidden lg:flex absolute items-center justify-center" style={{ bottom:"30%", left:"10%", width:50, height:50, borderRadius:16, background:"linear-gradient(135deg,#4285f4,#1d4ed8)", boxShadow:"0 8px 24px rgba(0,0,0,0.2)" }}>
            <Globe size={20} color="white" />
          </div>
          <div className="float-b hidden lg:flex absolute items-center justify-center" style={{ bottom:"28%", right:"11%", width:46, height:46, borderRadius:14, background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.35)" }}>
            <Link2 size={18} color="white" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-3xl mx-auto mt-16" style={{ opacity:heroReady?1:0, transition:"opacity .6s ease" }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8"
              style={{ background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.3)", backdropFilter:"blur(8px)" }}>
              <MapPin size={12} color="#bfdbfe" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color:"#bfdbfe" }}>📍 Trusted SEO Agency · Janakpuri, Delhi</span>
            </div>

            <h1 className="font-black leading-none tracking-tight mb-6 text-white" style={{ fontSize:"clamp(2.8rem,7.5vw,5.2rem)", letterSpacing:"-0.03em" }}>
              SEO Agency in<br />
              <span className="hero-shimmer">Janakpuri, Delhi</span>
            </h1>

            <p className="text-lg leading-relaxed mb-10 mx-auto" style={{ color:"rgba(255,255,255,0.72)", maxWidth:560, fontWeight:400 }}>
              Rehoboth Digitech Solution helps businesses improve Google visibility, attract organic traffic, and generate quality leads through ethical, result-driven SEO strategies.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-700 font-extrabold text-base px-8 py-4 rounded-2xl no-underline hover:bg-blue-50 transition-all"
                style={{ boxShadow:"0 8px 28px rgba(0,0,0,0.18)" }}>
                Get Free SEO Audit <ArrowRight size={17} />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 font-bold text-sm px-7 py-4 rounded-2xl no-underline transition-all"
                style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.28)", color:"white", backdropFilter:"blur(6px)" }}>
                <Search size={14} /> Explore Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-7">
              {[[ShieldCheck,"100% White-Hat SEO"],[CheckCircle2,"Google-Approved"],[Star,"Transparent Reporting"],[Globe,"Delhi NCR Coverage"]].map(([I,t]) => (
                <div key={t} className="flex items-center gap-2">
                  <I size={13} color="#93c5fd" />
                  <span className="text-xs font-semibold" style={{ color:"rgba(255,255,255,0.52)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ STATS BAR ══════════════════════════════════════════ */}
       

        {/* ══ WHAT IS SEO ════════════════════════════════════════ */}
        <section className="py-20 px-6 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700 mb-4">
                  <span className="w-5 h-0.5 rounded bg-gradient-to-r from-blue-700 to-blue-400 inline-block" />
                  Why SEO Matters
                </span>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-5 leading-tight">
                  What Is SEO &amp; Why Your Business <span className="text-blue-700">Needs It</span>
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-4">
                  Search Engine Optimization (SEO) helps your website appear in front of people actively searching for your products or services on Google. A strong SEO strategy improves website visibility, builds trust, and supports steady lead generation — without relying solely on paid ads.
                </p>
                <p className="text-slate-500 text-base leading-relaxed">
                  As an experienced SEO agency in Janakpuri, Delhi, we follow Google-approved practices that help businesses grow safely and sustainably over the long term.
                </p>
              </div>

              {/* Benefit pills */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  { Icon: TrendingUp,   text: "Steady organic traffic without paying per click"        },
                  { Icon: Users,        text: "Reach audiences actively searching for your services"   },
                  { Icon: ShieldCheck,  text: "Build authority and trust with Google over time"        },
                  { Icon: Target,       text: "Generate quality leads that convert into customers"     },
                  { Icon: Globe,        text: "Outrank local competitors in Janakpuri & Delhi NCR"     },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} color="white" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ═══════════════════════════════════════════ */}
        <section id="services" ref={svcRef} className="py-24 px-6 bg-slate-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className={`pre-view ${svcVisible?"in-view":""} mb-14`}>
              <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700 mb-3">
                <span className="w-5 h-0.5 rounded bg-gradient-to-r from-blue-700 to-blue-400 inline-block" />
                Our Services
              </span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-3 leading-tight">
                SEO Services in <span className="text-blue-700">Janakpuri, Delhi</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                Comprehensive, end-to-end SEO solutions tailored to your business goals, industry, and competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ Icon, title, desc, tag }, i) => (
                <div key={i}
                  className={`pre-view ${svcVisible?"in-view":""} service-card bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-default`}
                  style={{ transitionDelay:`${i*55}ms` }}>
                  {/* Top accent bar */}
                  <div className="top-bar h-[3px] origin-left" style={{ background:"linear-gradient(90deg,#1d4ed8,#60a5fa)", transform:"scaleX(0)", transition:"transform .3s ease" }} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="svc-icon w-11 h-11 rounded-[13px] bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                        <Icon size={20} color="#1d4ed8" />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">{tag}</span>
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2 leading-snug">{title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY US ═════════════════════════════════════════════ */}
        <section id="why-us" ref={whyRef} className="py-24 px-6 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className={`pre-view ${whyVisible?"in-view":""} mb-14`}>
              <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700 mb-3">
                <span className="w-5 h-0.5 rounded bg-gradient-to-r from-blue-700 to-blue-400 inline-block" />
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Why Rehoboth Digitech <span className="text-blue-700">for SEO?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Why list */}
              <div className="lg:col-span-3 flex flex-col gap-3">
                {whyUs.map(({ Icon, point }, i) => (
                  <div key={i}
                    className={`why-card pre-view ${whyVisible?"in-view":""} flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl cursor-default`}
                    style={{ transitionDelay:`${i*65}ms` }}>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} color="#1d4ed8" />
                    </div>
                    <p className="text-sm font-semibold text-slate-600 leading-snug">{point}</p>
                  </div>
                ))}

                {/* Reporting checklist */}
                <div className="mt-3 bg-blue-50 border border-blue-100 rounded-2xl p-5">
                  <p className="text-xs font-extrabold tracking-widest uppercase text-blue-700 mb-4">Our Monthly Reports Include</p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Keyword Rankings","Organic Traffic","Backlinks Built","Technical Fixes","Content Performance","Lead Conversions"].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={13} color="#1d4ed8" />
                        <span className="text-xs font-medium text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="lg:col-span-2 flex flex-col gap-4" ref={whoRef}>
                <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-blue-700">Who Benefits</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { Icon:Store,      label:"Small Businesses",  desc:"Local & service-based"   },
                    { Icon:Rocket,     label:"Startups",           desc:"Early to growth stage"   },
                    { Icon:Briefcase,  label:"Service Providers",  desc:"B2B & B2C alike"         },
                    { Icon:TrendingUp, label:"Growing Brands",     desc:"Ready to rank online"    },
                  ].map(({ Icon, label, desc }, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200 cursor-default">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                        <Icon size={16} color="#1d4ed8" />
                      </div>
                      <p className="text-sm font-extrabold text-slate-900 mb-1">{label}</p>
                      <p className="text-[11px] text-slate-400">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* SEO vs PPC card */}
                <div className="rounded-2xl p-6 text-white" style={{ background:"linear-gradient(135deg,#1d4ed8,#1e3a8a)", boxShadow:"0 10px 36px rgba(29,78,216,0.3)" }}>
                  <Zap size={20} color="#93c5fd" className="mb-3" />
                  <p className="font-extrabold text-base mb-2">SEO vs PPC</p>
                  <p className="text-blue-200/70 text-xs leading-relaxed mb-4">PPC delivers quick results; SEO builds long-term authority and trust. The best strategy combines both for maximum growth.</p>
                  <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-700 font-extrabold text-sm px-5 py-2.5 rounded-xl no-underline hover:bg-blue-50 transition-all">
                    Get Free Audit <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* ══ FAQ ════════════════════════════════════════════════ */}
        <section id="faq" ref={faqRef} className="py-24 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-2xl mx-auto">
            <div className={`pre-view ${faqVisible?"in-view":""} text-center mb-12`}>
              <span className="inline-flex items-center justify-center gap-2 text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700 mb-3">
                <span className="w-5 h-0.5 rounded bg-gradient-to-r from-blue-700 to-blue-400 inline-block" />
                FAQ
              </span>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
                FAQs – SEO Services in <span className="text-blue-700">Janakpuri</span>
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((f, i) => (
                <div key={i}
                  className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${openFaq===i?"border-blue-500 shadow-md shadow-blue-50 faq-open":"border-slate-200"}`}>
                  <button
                    className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left bg-transparent border-none cursor-pointer"
                    style={{ fontFamily:"inherit" }}
                    onClick={() => setOpenFaq(openFaq===i?null:i)}>
                    <span className={`text-sm font-bold ${openFaq===i?"text-blue-700":"text-slate-800"}`}>{f.q}</span>
                    <ChevronDown size={18} color={openFaq===i?"#1d4ed8":"#94a3b8"} className="faq-icon flex-shrink-0" />
                  </button>
                  <div className="faq-content">
                    <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICE AREAS ══════════════════════════════════════ */}
        <section className="py-16 px-6 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-flex items-center justify-center gap-2 text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700 mb-4">
              <span className="w-5 h-0.5 rounded bg-gradient-to-r from-blue-700 to-blue-400 inline-block" />
              Service Areas
            </span>
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900 mb-3">
              SEO Services Across <span className="text-blue-700">Delhi NCR</span>
            </h2>
            <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
              We provide SEO services across West Delhi and Delhi NCR — helping businesses expand their online presence locally and regionally.
            </p>
           <div className="flex flex-wrap justify-center gap-3">
            {["Janakpuri","West Delhi","Delhi NCR","Dwarka","Uttam Nagar","Vikaspuri","Punjabi Bagh"].map(area => (
              <Link
                key={area}
                href={`/${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase px-4 py-2 rounded-full hover:bg-blue-100 transition"
              >
                <MapPin size={11} /> {area}
              </Link>
            ))}
          </div>
          </div>
        </section>

       <Contact/>
      </main>
       <WhatsAppButton/>

    
    </div>
  );
}