"use client";
import { useState, useEffect, useRef } from "react";
import {
  Megaphone, Search, Target, BarChart2, Shield, TrendingUp,
  ArrowRight, Phone, Mail, MapPin, CheckCircle2, Star,
  Zap, Users, Award, FileText, Eye, Settings, DollarSign,
  MousePointer, Globe, Instagram, Facebook, ChevronDown,
} from "lucide-react";
import Contact from "../components/Contact";
import Link from "next/link";

/* ─── Data ───────────────────────────────────────────────────── */
const services = [
  { Icon: Target,       title: "PPC Strategy & Campaign Planning",      desc: "We start by understanding your business objectives, target audience, and budget to plan the right PPC strategy using Google Ads, Meta Ads, or both.", tag: "Strategy"   },
  { Icon: Search,       title: "Keyword Research & Audience Targeting",  desc: "For Google Ads, we research high-intent keywords users are actively searching for. For Meta Ads, we target audiences based on interests, behavior, and demographics.", tag: "Research"   },
  { Icon: Globe,        title: "Google Ads Management",                  desc: "Our Google Ads services help businesses appear at the top of search results. We manage search ads, display ads, and call-focused campaigns for quality leads.", tag: "Google Ads" },
  { Icon: Instagram,    title: "Meta Ads (Facebook & Instagram)",         desc: "We create and manage Meta Ads to reach users on Facebook and Instagram — ideal for brand awareness, engagement, and lead generation.", tag: "Meta Ads"   },
  { Icon: FileText,     title: "Ad Copy & Creative Development",          desc: "We write clear, compelling ad copy and design creatives that attract attention and encourage users to take action.", tag: "Creative"   },
  { Icon: MousePointer, title: "Landing Page Optimization Support",       desc: "We ensure ads lead to relevant landing pages focused on conversions. A good landing page significantly improves PPC performance.", tag: "CRO"        },
  { Icon: BarChart2,    title: "Conversion Tracking Setup",               desc: "We set up conversion tracking to measure form submissions, calls, and inquiries — tracking real results, not just clicks.", tag: "Tracking"   },
  { Icon: Settings,     title: "Ongoing Optimization & Monitoring",       desc: "PPC campaigns need continuous monitoring. We optimize keywords, ads, bids, and targeting to improve performance and reduce unnecessary ad spend.", tag: "Ongoing"    },
  { Icon: DollarSign,   title: "Budget Management & Cost Control",        desc: "We manage your advertising budget carefully to ensure maximum return on investment while eliminating wasted spend.", tag: "Budget"     },
];

const whyUs = [
  { Icon: Award,      point: "Experienced PPC professionals who understand paid platforms and user behavior" },
  { Icon: TrendingUp, point: "Result-focused approach — we optimize for leads and growth, not just impressions" },
  { Icon: Shield,     point: "Transparent process with regular updates and clear performance reports" },
  { Icon: MapPin,     point: "Deep local expertise in Janakpuri and Delhi NCR markets" },
];

const stats = [
  { value: "200+", label: "Campaigns Run",     Icon: Target    },
  { value: "4+",   label: "Years Active",      Icon: Award     },
  { value: "95%",  label: "Client Retention",  Icon: CheckCircle2 },
  { value: "3×",   label: "Avg. ROI Lift",     Icon: TrendingUp },
];

const idealFor = [
  { Icon: MapPin,  label: "Local Businesses",   desc: "Janakpuri & Delhi NCR" },
  { Icon: Zap,     label: "Startups",            desc: "Quick lead generation"  },
  { Icon: Users,   label: "Service Providers",   desc: "B2B & B2C alike"       },
  { Icon: TrendingUp, label: "Growing Brands",   desc: "Needing fast results"   },
];

const faqs = [
  { q: "What is PPC advertising and how does it work?",       a: "PPC advertising allows businesses to show ads on search engines and social platforms and pay only when users click or take action on the ads." },
  { q: "Is PPC suitable for small businesses?",               a: "Yes. PPC is suitable for small businesses because budgets can be controlled, and ads can be targeted to reach the right audience quickly." },
  { q: "Do you manage both Google Ads and Meta Ads?",         a: "Yes. Our PPC services include Google Ads as well as Meta Ads for Facebook and Instagram." },
  { q: "How much budget is required for PPC advertising?",    a: "PPC budgets depend on your industry, competition, and goals. We help plan a budget that matches your business needs and avoids unnecessary spend." },
  { q: "How quickly can PPC generate results?",               a: "PPC can start generating traffic and leads within a few days of launching campaigns, unlike SEO which takes time." },
  { q: "Will I get reports on PPC performance?",              a: "Yes. We provide clear reports showing clicks, leads, conversions, and campaign performance so you can track results." },
  { q: "Do you provide landing page support for PPC?",        a: "Yes. We guide landing page structure and optimization to help improve conversions from paid traffic." },
  { q: "Is PPC better than SEO?",                             a: "PPC and SEO serve different purposes. PPC provides quick results while SEO supports long-term growth. Both work best together." },
  { q: "Can PPC help local businesses in Janakpuri?",         a: "Yes. As a PPC advertising agency in Janakpuri, Delhi, we create local-targeted campaigns to reach customers in specific areas." },
  { q: "How do you reduce wasted ad spend?",                  a: "We regularly monitor and optimize campaigns, refine targeting, improve ad copies, and manage bids to avoid unnecessary spending." },
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

/* ─── Component ──────────────────────────────────────────────── */
export default function PPCPage() {
  const [heroReady, setHeroReady]   = useState(false);
  const [openFaq,   setOpenFaq]     = useState(null);
  const [svcRef,  svcVisible]  = useInView();
  const [whyRef,  whyVisible]  = useInView();
  const [faqRef,  faqVisible]  = useInView();
  const [ctaRef,  ctaVisible]  = useInView();

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
      `}</style>


      <main>
        {/* ══ HERO ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 min-h-[91vh]"
          style={{ background:"linear-gradient(150deg,#1e40af 0%,#1d4ed8 45%,#2563eb 100%)" }}>

          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />
          {/* Glow */}
          <div className="absolute pointer-events-none" style={{ top:0, left:"50%", transform:"translateX(-50%)", width:700, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,255,255,0.07) 0%,transparent 65%)" }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:140, background:"linear-gradient(to bottom,transparent,#ffffff)" }} />

          {/* Floating platform badges */}
          <div className="float-a hidden lg:flex absolute items-center justify-center" style={{ top:"22%", left:"7%", width:56, height:56, borderRadius:18, background:"linear-gradient(135deg,#e1306c,#f77737)", boxShadow:"0 8px 24px rgba(0,0,0,0.22)" }}>
            <Instagram size={24} color="white" />
          </div>
          <div className="float-b hidden lg:flex absolute items-center justify-center" style={{ top:"17%", right:"8%", width:56, height:56, borderRadius:18, background:"#1877f2", boxShadow:"0 8px 24px rgba(0,0,0,0.22)" }}>
            <Facebook size={24} color="white" />
          </div>
          <div className="float-a hidden lg:flex absolute items-center justify-center" style={{ bottom:"30%", left:"10%", width:50, height:50, borderRadius:16, background:"linear-gradient(135deg,#ea4335,#fbbc04)", boxShadow:"0 8px 24px rgba(0,0,0,0.2)" }}>
            <Globe size={20} color="white" />
          </div>
          <div className="float-b hidden lg:flex absolute items-center justify-center" style={{ bottom:"28%", right:"11%", width:46, height:46, borderRadius:14, background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.35)" }}>
            <BarChart2 size={18} color="white" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto" style={{ opacity:heroReady?1:0, transition:"opacity .6s ease" }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8"
              style={{ background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.3)", backdropFilter:"blur(8px)" }}>
              <MapPin size={12} color="#bfdbfe" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color:"#bfdbfe" }}>📍 Janakpuri · Delhi NCR</span>
            </div>

            <h1 className="font-black leading-none tracking-tight mb-6 text-white" style={{ fontSize:"clamp(2.8rem,7.5vw,5.5rem)", letterSpacing:"-0.03em" }}>
              PPC Advertising<br />
              <span className="hero-shimmer">Agency</span><br />
              in Janakpuri
            </h1>

            <p className="text-lg leading-relaxed mb-10 mx-auto" style={{ color:"rgba(255,255,255,0.72)", maxWidth:560, fontWeight:400 }}>
              Rehoboth Digitech Solution helps businesses generate quick leads and targeted traffic through Google Ads & Meta Ads. Performance, budget control, and measurable results — guaranteed.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-700 font-extrabold text-base px-8 py-4 rounded-2xl no-underline hover:bg-blue-50 transition-all"
                style={{ boxShadow:"0 8px 28px rgba(0,0,0,0.18)" }}>
                Start Your Campaign <ArrowRight size={17} />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 font-bold text-sm px-7 py-4 rounded-2xl no-underline transition-all"
                style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.28)", color:"white", backdropFilter:"blur(6px)" }}>
                <Eye size={14} /> Explore Services
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center gap-7">
              {[[Shield,"White-Hat PPC"],[CheckCircle2,"Google & Meta Certified"],[Star,"Delhi's Trusted Agency"]].map(([I,t]) => (
                <div key={t} className="flex items-center gap-2">
                  <I size={13} color="#93c5fd" />
                  <span className="text-xs font-semibold" style={{ color:"rgba(255,255,255,0.52)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHAT IS PPC ════════════════════════════════════════ */}
        <section className="bg-white py-20 px-6 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700 mb-4">
                  <span className="w-5 h-0.5 rounded bg-gradient-to-r from-blue-700 to-blue-400 inline-block" />
                  What Is PPC?
                </span>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mb-5 leading-tight">
                  Pay-Per-Click Advertising <span className="text-blue-700">Explained</span>
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-5">
                  PPC (Pay-Per-Click) advertising allows businesses to display ads on search engines and social media platforms and <strong className="text-slate-700">pay only when users interact</strong> with the ads. PPC is one of the fastest ways to increase visibility, generate leads, and drive conversions.
                </p>
                <p className="text-slate-500 text-base leading-relaxed">
                  As an experienced paid advertising agency in Janakpuri, we create campaigns that align with your business goals and target audience — delivering results from day one.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label, Icon }) => (
                  <div key={label} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100 transition-all duration-200"
                    style={{ boxShadow:"0 2px 10px rgba(29,78,216,0.05)" }}>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                      <Icon size={18} color="#1d4ed8" />
                    </div>
                    <p className="text-4xl font-black tracking-tight text-blue-900 leading-none mb-1">{value}</p>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{label}</p>
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
                PPC & Paid Advertising <span className="text-blue-700">Services</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-lg">
                End-to-end paid advertising management — from strategy and creative to tracking and reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ Icon, title, desc, tag }, i) => (
                <div key={i}
                  className={`pre-view ${svcVisible?"in-view":""} bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100 transition-all duration-200 cursor-default`}
                  style={{ transitionDelay:`${i*50}ms` }}>
                  <div className="h-[3px]" style={{ background:"linear-gradient(90deg,#1d4ed8,#60a5fa)" }} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-[13px] bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} color="#1d4ed8" />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                        {tag}
                      </span>
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
                Why Rehoboth Digitech <span className="text-blue-700">for PPC?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Why list */}
              <div className="lg:col-span-3 flex flex-col gap-3">
                {whyUs.map(({ Icon, point }, i) => (
                  <div key={i}
                    className={`pre-view ${whyVisible?"in-view":""} flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200 cursor-default`}
                    style={{ transitionDelay:`${i*65}ms` }}>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} color="#1d4ed8" />
                    </div>
                    <p className="text-sm font-semibold text-slate-600 leading-snug">{point}</p>
                  </div>
                ))}

                {/* Process strip */}
                <div className="mt-4 bg-blue-50 border border-blue-100 rounded-2xl p-5">
                  <p className="text-xs font-extrabold tracking-widest uppercase text-blue-700 mb-4">Our Reporting Includes</p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Clicks & Impressions","Lead Count","Cost Per Lead","Conversion Rate","Ad Spend Breakdown","Campaign ROI"].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={13} color="#1d4ed8" />
                        <span className="text-xs font-600 text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <p className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-blue-700">Ideal For</p>
                <div className="grid grid-cols-2 gap-3">
                  {idealFor.map(({ Icon, label, desc }, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200 cursor-default">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                        <Icon size={16} color="#1d4ed8" />
                      </div>
                      <p className="text-sm font-extrabold text-slate-900 mb-1">{label}</p>
                      <p className="text-[11px] text-slate-400">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* PPC vs SEO card */}
                <div className="rounded-2xl p-6 text-white" style={{ background:"linear-gradient(135deg,#1d4ed8,#1e3a8a)", boxShadow:"0 10px 36px rgba(29,78,216,0.3)" }}>
                  <Zap size={20} color="#93c5fd" className="mb-3" />
                  <p className="font-extrabold text-base mb-2">PPC vs SEO</p>
                  <p className="text-blue-200/70 text-xs leading-relaxed mb-4">PPC delivers quick results within days, while SEO builds long-term authority. Both work best when used together.</p>
                  <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-700 font-extrabold text-sm px-5 py-2.5 rounded-xl no-underline hover:bg-blue-50 transition-all">
                    Get Free Audit <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ════════════════════════════════════════════════ */}
        <section id="faq" ref={faqRef} className="py-24 px-6 bg-slate-50 border-b border-slate-100">
          <div className="max-w-2xl mx-auto">
            <div className={`pre-view ${faqVisible?"in-view":""} text-center mb-12`}>
              <span className="inline-flex items-center justify-center gap-2 text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700 mb-3">
                <span className="w-5 h-0.5 rounded bg-gradient-to-r from-blue-700 to-blue-400 inline-block" />
                FAQ
              </span>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
                Common <span className="text-blue-700">Questions</span>
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
              We Serve Businesses Across <span className="text-blue-700">Delhi NCR</span>
            </h2>
            <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
              Looking for a PPC advertising agency near Janakpuri? We are here to help local and regional businesses grow.
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

   
    </div>
  );
}