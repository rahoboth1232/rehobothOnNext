"use client";
import { useState, useEffect, useRef } from "react";
import {
  Megaphone, Calendar, Eye, FileText, Instagram, Facebook,
  PieChart, MapPin, Zap, Users, TrendingUp, ArrowRight,
  Phone, Mail, Award, Shield, BarChart2, Target,
  CheckCircle2, Star, Sparkles, Linkedin,
} from "lucide-react";
import Contact from "../components/Contact";

const offerings = [
  { Icon: Calendar,  title: "Strategy & Planning",           desc: "We optimize your social media profiles with the right descriptions, visuals, and branding. Proper optimization helps your profiles look professional and improves discoverability across social platforms.", tag: "Foundation" },
  { Icon: Eye,       title: "Account Optimisation",          desc: "Professional profiles with the right descriptions, visuals, and branding for maximum discoverability.",   tag: "Branding"   },
  { Icon: FileText,  title: "Content Creation & Posting",    desc: "Engaging posts, captions, visuals, and reels crafted to match your brand voice and audience.",            tag: "Content"    },
  { Icon: Instagram, title: "Instagram Marketing",           desc: "Reach, engagement, and follower growth through consistent, creative platform-specific content.",           tag: "Instagram"  },
  { Icon: Facebook,  title: "Facebook & LinkedIn Marketing", desc: "Community management, authority building, and B2B audience connection across platforms.",                  tag: "Meta & B2B" },
  { Icon: PieChart,  title: "Paid Social Advertising",       desc: "Targeted campaigns that reach the right audience efficiently while keeping ad spend controlled.",         tag: "Paid Ads"   },
];

const whyUs = [
  { Icon: TrendingUp, point: "Platform algorithm experts driving your growth"       },
  { Icon: Target,     point: "Tailored strategies — zero generic copy-paste plans"  },
  { Icon: BarChart2,  point: "Transparent process with regular performance updates" },
  { Icon: Shield,     point: "Focus on genuine engagement and brand trust"          },
  { Icon: MapPin,     point: "Strong understanding of the Delhi NCR market"         },
];

const stats = [
  { value: "200+", label: "Brands Managed",   Icon: Users        },
  { value: "2+",   label: "Years Active",     Icon: Award        },
  { value: "95%",  label: "Client Retention", Icon: CheckCircle2 },
  { value: "3×",   label: "Engagement Lift",  Icon: TrendingUp   },
];

const processSteps = [
  { step: "01", title: "Audit & Discovery",  desc: "We audit your current presence, study competitors, and understand your audience.",   Icon: Eye      },
  { step: "02", title: "Content Strategy",   desc: "A platform-specific roadmap with content pillars, posting cadence, and tone.",       Icon: Target   },
  { step: "03", title: "Create & Schedule",  desc: "Our team produces scroll-stopping content and schedules it for peak reach.",         Icon: FileText },
  { step: "04", title: "Analyse & Optimise", desc: "Monthly reports, engagement audits, and continuous strategy refinement.",            Icon: BarChart2},
];

const faqs = [
  { q: "Which platforms do you manage?",                   a: "We specialise in Instagram, Facebook, and LinkedIn. We can also extend to YouTube Shorts and Pinterest based on your audience." },
  { q: "How soon will we see growth?",                     a: "Organic growth typically compounds over 60–90 days. Paid campaigns can show results within the first week of going live." },
  { q: "Do you create the actual content?",                a: "Yes — copywriting, graphic design, reels scripting, and scheduling are all handled by our team. You approve before anything goes live." },
  { q: "Can you work with our existing brand guidelines?", a: "Absolutely. We adapt to your brand voice and visual identity, or help you build one if you're starting fresh." },
  { q: "Do you serve businesses outside Janakpuri?",       a: "Yes. We work with clients across Delhi NCR and remotely with brands across India." },
];

const testimonials = [
  { name: "Priya S.",  role: "Boutique Owner, Janakpuri", text: "Our Instagram followers tripled in 4 months. The content quality is outstanding.",                       initials: "PS" },
  { name: "Rahul M.",  role: "Startup Founder, Delhi",    text: "Rehoboth built our entire social presence from scratch. We now get leads directly from LinkedIn.",        initials: "RM" },
  { name: "Ankita T.", role: "Salon Owner, West Delhi",   text: "The strategy they built is totally different from other agencies. Very personalised and results-driven.", initials: "AT" },
];

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

export default function RehobothSMM() {
  const [heroReady, setHeroReady] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);
  const [offRef,  offVisible]  = useInView();
  const [whyRef,  whyVisible]  = useInView();
  const [procRef, procVisible] = useInView();
  const [testRef, testVisible] = useInView();
  const [faqRef,  faqVisible]  = useInView();

  useEffect(() => { const t = setTimeout(() => setHeroReady(true), 100); return () => clearTimeout(t); }, []);

  const filteredOfferings =
    activeTab === "all"      ? offerings :
    activeTab === "organic"  ? offerings.filter(o => ["Content Creation & Posting","Instagram Marketing","Account Optimisation"].includes(o.title)) :
    activeTab === "paid"     ? offerings.filter(o => o.title === "Paid Social Advertising") :
    offerings.filter(o => ["Strategy & Planning","Account Optimisation"].includes(o.title));

  return (
    <div style={{ fontFamily:"'DM Sans', system-ui, sans-serif", background:"#ffffff", color:"#0f172a" }} className="min-h-screen antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&display=swap');
       
        html { scroll-behavior: smooth; }

        @keyframes float  { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-8px)}  }
        @keyframes shimmer{ 0%{background-position:-200% center} 100%{background-position:200% center} }

        .float-a { animation: float  6s ease-in-out infinite; }
        .float-b { animation: floatB 8s ease-in-out infinite; }
        .pre-view { opacity:0; transform:translateY(24px); transition:opacity .65s ease, transform .65s ease; }
        .in-view  { opacity:1 !important; transform:translateY(0) !important; }

        .hero-shimmer {
          background: linear-gradient(90deg, #93c5fd, #bfdbfe, #e0f2fe, #93c5fd);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .nav-link {
          padding: 7px 15px; border-radius: 8px; font-size: 13.5px; font-weight: 600;
          color: rgba(255,255,255,0.82); text-decoration: none; transition: all .2s;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.14); }

        .btn-white {
          display:inline-flex; align-items:center; gap:8px;
          background:#fff; color:#1d4ed8; font-weight:800; font-size:15px;
          padding:14px 30px; border-radius:13px; text-decoration:none; border:none; cursor:pointer;
          box-shadow:0 6px 24px rgba(0,0,0,0.16); transition:all .25s; font-family:inherit;
        }
        .btn-white:hover { background:#eff6ff; transform:translateY(-2px); box-shadow:0 10px 32px rgba(0,0,0,0.2); }

        .btn-ghost-white {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.12); color:#fff; font-weight:700; font-size:14px;
          padding:14px 28px; border-radius:13px; text-decoration:none;
          border:1px solid rgba(255,255,255,0.28); cursor:pointer;
          transition:all .25s; font-family:inherit; backdrop-filter:blur(6px);
        }
        .btn-ghost-white:hover { background:rgba(255,255,255,0.22); }

        .btn-blue {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#1d4ed8,#2563eb); color:#fff; font-weight:800; font-size:15px;
          padding:15px 36px; border-radius:14px; text-decoration:none; border:none; cursor:pointer;
          box-shadow:0 6px 24px rgba(29,78,216,0.38); transition:all .25s; font-family:inherit;
        }
        .btn-blue:hover { background:linear-gradient(135deg,#1e40af,#1d4ed8); transform:translateY(-2px); box-shadow:0 10px 32px rgba(29,78,216,0.5); }

        .btn-blue-sm {
          display:inline-flex; align-items:center; gap:6px;
          background:#1d4ed8; color:#fff; font-weight:700; font-size:13px;
          padding:10px 22px; border-radius:10px; text-decoration:none; border:none; cursor:pointer;
          transition:all .2s; font-family:inherit;
        }
        .btn-blue-sm:hover { background:#1e40af; transform:translateY(-1px); }

        /* Cards */
        .card-white {
          background:#fff; border:1px solid #e2e8f0; border-radius:18px;
          transition:all .25s; cursor:default;
        }
        .card-white:hover { border-color:#3b82f6; box-shadow:0 8px 32px rgba(29,78,216,0.11); transform:translateY(-4px); }

        .card-stat {
          background:#fff; border:1px solid #e2e8f0; border-radius:20px;
          padding:28px 20px; text-align:center;
          box-shadow:0 2px 10px rgba(29,78,216,0.05);
          transition:all .25s;
        }
        .card-stat:hover { border-color:#93c5fd; box-shadow:0 8px 28px rgba(29,78,216,0.12); transform:translateY(-3px); }

        .card-why {
          background:#fff; border:1px solid #e2e8f0; border-radius:15px;
          display:flex; align-items:center; gap:16px; padding:18px 22px;
          transition:all .2s; cursor:default;
        }
        .card-why:hover { border-color:#3b82f6; box-shadow:0 6px 22px rgba(29,78,216,0.1); }

        .card-ideal {
          background:#fff; border:1px solid #e2e8f0; border-radius:15px; padding:18px;
          transition:all .2s; cursor:default;
        }
        .card-ideal:hover { border-color:#3b82f6; box-shadow:0 6px 20px rgba(29,78,216,0.1); transform:translateY(-2px); }

        .card-test {
          background:#fff; border:1px solid #e2e8f0; border-radius:20px;
          padding:28px; overflow:hidden; transition:all .25s;
        }
        .card-test:hover { border-color:#93c5fd; box-shadow:0 10px 36px rgba(29,78,216,0.1); transform:translateY(-3px); }

        /* Tabs */
        .tabs-wrap { display:flex; flex-wrap:wrap; gap:4px; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:12px; padding:5px; width:fit-content; }
        .tab-btn   { padding:8px 20px; border-radius:9px; font-size:12.5px; font-weight:700; border:none; cursor:pointer; background:transparent; color:#64748b; transition:all .2s; font-family:inherit; }
        .tab-btn:hover  { color:#1d4ed8; background:#dbeafe; }
        .tab-btn.active { background:#1d4ed8; color:#fff; box-shadow:0 3px 12px rgba(29,78,216,0.32); }

        /* FAQ */
        .faq-item { border:1px solid #e2e8f0; border-radius:14px; overflow:hidden; background:#fff; transition:border-color .2s; }
        .faq-item.open { border-color:#3b82f6; box-shadow:0 4px 18px rgba(29,78,216,0.09); }
        .faq-trigger { width:100%; padding:18px 22px; background:transparent; border:none; text-align:left; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:12px; font-weight:700; font-size:14px; color:#0f172a; transition:color .2s; font-family:inherit; }
        .faq-item.open .faq-trigger { color:#1d4ed8; }
        .faq-icon { width:26px; height:26px; border-radius:50%; border:1.5px solid #cbd5e1; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:16px; color:#64748b; transition:transform .3s, background .2s, border-color .2s; }
        .faq-item.open .faq-icon { transform:rotate(45deg); background:#eff6ff; border-color:#3b82f6; color:#1d4ed8; }
        .faq-content { max-height:0; overflow:hidden; transition:max-height .35s ease; }
        .faq-item.open .faq-content { max-height:200px; }

        /* Misc */
        .section-label { display:inline-flex; align-items:center; gap:8px; font-size:11px; font-weight:800; letter-spacing:0.2em; text-transform:uppercase; color:#1d4ed8; margin-bottom:12px; }
        .section-label::before { content:''; display:block; width:22px; height:2.5px; background:linear-gradient(90deg,#1d4ed8,#60a5fa); border-radius:2px; }
        .tag-chip { font-size:10px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:3px 10px; border-radius:999px; background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; }
        .icon-box { width:44px; height:44px; border-radius:13px; background:#eff6ff; border:1px solid #bfdbfe; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .icon-box-sm { width:36px; height:36px; border-radius:10px; background:#eff6ff; border:1px solid #bfdbfe; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .contact-link { display:flex; align-items:center; gap:14px; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.22); border-radius:16px; padding:16px 20px; text-decoration:none; transition:all .2s; backdrop-filter:blur(8px); }
        .contact-link:hover { background:rgba(255,255,255,0.2); border-color:rgba(255,255,255,0.4); }
        .icon-box-inv { width:42px; height:42px; border-radius:13px; background:rgba(255,255,255,0.18); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      `}</style>

     
      <main>

        <section style={{
          background:"#003366",
          minHeight:"91vh", display:"flex", flexDirection:"column", alignItems:"center",
          justifyContent:"center", textAlign:"center", padding:"80px 24px 110px",
          position:"relative", overflow:"hidden",
          marginTop:"70px",
        }}>
          {/* Dot grid */}
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize:"30px 30px", pointerEvents:"none" }} />
          {/* Glow */}
          <div style={{ position:"absolute", top:"0%", left:"50%", transform:"translateX(-50%)", width:700, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)", pointerEvents:"none" }} />
          {/* Bottom fade to white */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:140, background:"linear-gradient(to bottom, transparent, #ffffff)", pointerEvents:"none" }} />

          {/* Floating platform icons */}
          <div className="float-a" style={{ position:"absolute", top:"22%", left:"7%", width:56, height:56, borderRadius:18, background:"linear-gradient(135deg,#e1306c,#f77737)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 24px rgba(0,0,0,0.22)" }}>
            <Instagram size={24} color="white" />
          </div>
          <div className="float-b" style={{ position:"absolute", top:"17%", right:"8%", width:56, height:56, borderRadius:18, background:"#1877f2", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 24px rgba(0,0,0,0.22)" }}>
            <Facebook size={24} color="white" />
          </div>
          <div className="float-a" style={{ position:"absolute", bottom:"30%", left:"10%", width:50, height:50, borderRadius:16, background:"#0077b5", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 24px rgba(0,0,0,0.2)" }}>
            <Linkedin size={20} color="white" />
          </div>
          <div className="float-b" style={{ position:"absolute", bottom:"28%", right:"11%", width:46, height:46, borderRadius:14, background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.35)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <BarChart2 size={18} color="white" />
          </div>

          {/* Hero content */}
          <div style={{ position:"relative", zIndex:2, maxWidth:780, opacity:heroReady?1:0, transition:"opacity .6s ease" }}>
            {/* Badge */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#003366", border:"1px solid rgba(255,255,255,0.3)", borderRadius:999, padding:"7px 20px", marginBottom:30, backdropFilter:"blur(8px)" }}>
              <MapPin size={12} color="#bfdbfe" />
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:"0.15em", color:"#bfdbfe", textTransform:"uppercase" }}>📍 Janakpuri · Delhi NCR</span>
            </div>

            <h1 style={{ fontSize:"clamp(2rem,5vw,5.8rem)", fontWeight:900, maxWidth:989, lineHeight:1.0, letterSpacing:"-0.03em", marginBottom:24 }}>
              <span style={{ color:"white" }}>Social Media </span>
              <span className="hero-shimmer" >Marketing</span>
              <span style={{ color:"white", display:"block" }}>Agency in Janakpuri, Delhi</span>
            </h1>

            <p style={{ fontSize:14, lineHeight:1.8, color:"rgba(255,255,255,0.72)", maxWidth:960, margin:"0 auto 42px", fontWeight:400 }}>
             Rehoboth Digitech Solution is a professional social media marketing agency in Janakpuri, Delhi, helping businesses build a strong social media presence, connect with their audience, and generate quality leads. Our social media services are designed for local businesses, startups, and growing brands that want consistent and meaningful growth online.
If you are looking for reliable social media marketing services in Janakpuri, our team focuses on practical strategies that deliver real engagement and business results.

            </p>

            <div style={{ display:"flex", flexWrap:"wrap", gap:14, justifyContent:"center", marginBottom:52 }}>
              <a href="#services" className="btn-white">Explore Services <ArrowRight size={16} /></a>
              <a href="#contact" className="btn-ghost-white"><Phone size={14} /> Free Consultation</a>
            </div>

            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:28 }}>
              {[[Shield,"White-Hat Only"],[CheckCircle2,"Content Included"],[Star,"Delhi's Top Rated"]].map(([I,t]) => (
                <div key={t} style={{ display:"flex", alignItems:"center", gap:7 }}>
                  <I size={13} color="#93c5fd" />
                  <span style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.52)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ STATS ═══════════════════════════════════════════════ */}
        
 <section id="" ref={offRef} style={{ padding:"96px 24px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
            <div className={`pre-view ${offVisible?"in-view":""}`} style={{ marginBottom:56 }}>
              
              <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:900, letterSpacing:"-0.03em", color:"#0f172a", marginBottom:14, lineHeight:1.1 }}>
                What Is Social Media Marketing and Why It 
                                                          <span style={{ color:"#1d4ed8" }}> Matters</span>
              </h2>
              <p style={{ color:"#64748b", fontSize:16,  lineHeight:1.75 }}>
                Social media marketing helps businesses reach their target audience on platforms like Instagram, Facebook, and LinkedIn. It allows brands to build trust, increase visibility, and stay connected with customers on a daily basis.
As an experienced social media marketing agency in Janakpuri, Delhi, we focus on strategies that not only grow followers but also support brand awareness and lead generation.

              </p>
            </div>
            </div>
        </section>
        {/* ══ SERVICES ════════════════════════════════════════════ */}
        <section id="services" ref={offRef} style={{ padding:"96px 24px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div className={`pre-view ${offVisible?"in-view":""}`} style={{ marginBottom:56 }}>
              <span className="section-label">What We Offer</span>
              <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:900, letterSpacing:"-0.03em", color:"#0f172a", marginBottom:14, lineHeight:1.1 }}>
                Social Media Marketing <span style={{ color:"#1d4ed8" }}>Services</span>
              </h2>
              <p style={{ color:"#64748b", fontSize:16, maxWidth:480, lineHeight:1.75 }}>
                Everything your brand needs to dominate social — strategy, content, and paid ads, all under one roof.
              </p>
            </div>

            <div className="tabs-wrap" style={{ marginBottom:40 }}>
              {[["all","All Services"],["organic","Organic"],["paid","Paid Ads"],["branding","Branding"]].map(([v,l]) => (
                <button key={v} onClick={() => setActiveTab(v)} className={`tab-btn ${activeTab===v?"active":""}`}>{l}</button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredOfferings.map(({ Icon, title, desc, tag }, i) => (
                <div key={i} className="card-white" style={{ overflow:"hidden", transitionDelay:`${i*50}ms` }}>
                  <div style={{ height:3, background:"linear-gradient(90deg,#1d4ed8,#60a5fa)" }} />
                  <div style={{ padding:26 }}>
                    <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:16 }}>
                      <div className="icon-box"><Icon size={20} color="#1d4ed8" /></div>
                      <span className="tag-chip">{tag}</span>
                    </div>
                    <h3 style={{ fontSize:15, fontWeight:800, color:"#0f172a", marginBottom:8, lineHeight:1.3 }}>{title}</h3>
                    <p style={{ fontSize:13.5, color:"#64748b", lineHeight:1.75 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY US ══════════════════════════════════════════════ */}
        <section id="why-us" ref={whyRef} style={{ padding:"96px 24px", background:"#f8faff", borderTop:"1px solid #e2e8f0", borderBottom:"1px solid #e2e8f0" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div className={`pre-view ${whyVisible?"in-view":""}`}>
              <span className="section-label">Why Choose Us</span>
              <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:900, letterSpacing:"-0.03em", color:"#0f172a", marginBottom:52, lineHeight:1.1 }}>
                The Rehoboth <span style={{ color:"#1d4ed8" }}>Difference</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3" style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {whyUs.map(({ Icon, point }, i) => (
                  <div key={i} className={`card-why pre-view ${whyVisible?"in-view":""}`} style={{ transitionDelay:`${i*65}ms` }}>
                    <div className="icon-box"><Icon size={18} color="#1d4ed8" /></div>
                    <p style={{ fontSize:14, fontWeight:600, color:"#334155" }}>{point}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2" style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <p style={{ fontSize:11, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"#1d4ed8", marginBottom:4 }}>Ideal For</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { Icon:MapPin,     label:"Local Businesses", desc:"Janakpuri & West Delhi" },
                    { Icon:Zap,        label:"Startups",          desc:"Early-stage to growth"  },
                    { Icon:Users,      label:"Service Companies", desc:"B2B & B2C alike"        },
                    { Icon:TrendingUp, label:"Growing Brands",    desc:"Ready to scale online"  },
                  ].map(({ Icon, label, desc }, i) => (
                    <div key={i} className="card-ideal">
                      <div className="icon-box-sm" style={{ marginBottom:12 }}><Icon size={15} color="#1d4ed8" /></div>
                      <p style={{ fontSize:13, fontWeight:800, color:"#0f172a", marginBottom:3 }}>{label}</p>
                      <p style={{ fontSize:11, color:"#94a3b8" }}>{desc}</p>
                    </div>
                  ))}
                </div>
                {/* Mini CTA */}
                <div style={{ borderRadius:20, padding:28, textAlign:"center", background:"linear-gradient(135deg,#1d4ed8,#1e3a8a)", boxShadow:"0 10px 36px rgba(29,78,216,0.3)" }}>
                  <Sparkles size={22} color="#93c5fd" style={{ margin:"0 auto 12px" }} />
                  <p style={{ fontWeight:800, fontSize:16, color:"white", marginBottom:6 }}>Ready to Grow?</p>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginBottom:20 }}>Free audit. No strings attached.</p>
                  <a href="#contact" className="btn-white" style={{ fontSize:13, padding:"10px 24px", borderRadius:10 }}>
                    Get Free Audit <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROCESS ═════════════════════════════════════════════ */}
        <section id="process" ref={procRef} style={{ padding:"96px 24px", background:"#fff" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div className={`pre-view ${procVisible?"in-view":""}`} style={{ textAlign:"center", marginBottom:64 }}>
              <span className="section-label" style={{ justifyContent:"center" }}>How It Works</span>
              <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:900, letterSpacing:"-0.03em", color:"#0f172a" }}>
                Our 4-Step <span style={{ color:"#1d4ed8" }}>Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ position:"relative" }}>
              <div className="hidden lg:block" style={{ position:"absolute", top:52, left:"12%", right:"12%", height:1, background:"linear-gradient(90deg,transparent,#bfdbfe,transparent)", zIndex:0 }} />
              {processSteps.map(({ step, title, desc, Icon }, i) => (
                <div key={step} className={`card-white pre-view ${procVisible?"in-view":""}`}
                  style={{ textAlign:"center", padding:"30px 24px", overflow:"hidden", position:"relative", zIndex:1, transitionDelay:`${i*90}ms` }}>
                  <div style={{ height:3, background:"linear-gradient(90deg,#1d4ed8,#60a5fa)", position:"absolute", top:0, left:0, right:0 }} />
                  <div style={{ width:64, height:64, borderRadius:"50%", background:"linear-gradient(135deg,#1d4ed8,#1e40af)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", boxShadow:"0 6px 22px rgba(29,78,216,0.35)" }}>
                    <Icon size={24} color="white" />
                  </div>
                  <span style={{ fontSize:10, fontWeight:800, letterSpacing:"0.14em", color:"#1d4ed8", textTransform:"uppercase", background:"#eff6ff", border:"1px solid #bfdbfe", borderRadius:999, padding:"3px 12px", display:"inline-block", marginBottom:10 }}>Step {step}</span>
                  <h3 style={{ fontSize:14, fontWeight:800, color:"#0f172a", marginBottom:8 }}>{title}</h3>
                  <p style={{ fontSize:12.5, color:"#64748b", lineHeight:1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ════════════════════════════════════════ */}
        <section ref={testRef} style={{ padding:"96px 24px", background:"#f8faff", borderTop:"1px solid #e2e8f0" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div className={`pre-view ${testVisible?"in-view":""}`} style={{ marginBottom:48 }}>
              <span className="section-label">Client Stories</span>
              <h2 style={{ fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:900, letterSpacing:"-0.03em", color:"#0f172a" }}>
                What Clients <span style={{ color:"#1d4ed8" }}>Say</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map(({ name, role, text, initials }, i) => (
                <div key={i} className={`card-test pre-view ${testVisible?"in-view":""}`} style={{ transitionDelay:`${i*80}ms` }}>
                  <div style={{ height:3, background:"linear-gradient(90deg,#1d4ed8,#60a5fa)", marginBottom:20, borderRadius:2 }} />
                  <div style={{ display:"flex", gap:3, marginBottom:16 }}>
                    {Array(5).fill(0).map((_,j) => <Star key={j} size={14} fill="#fbbf24" color="#fbbf24" />)}
                  </div>
                  <p style={{ fontSize:14, color:"#475569", lineHeight:1.8, marginBottom:22, fontStyle:"italic" }}>"{text}"</p>
                  <div style={{ borderTop:"1px solid #f1f5f9", paddingTop:18, display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg,#1d4ed8,#1e40af)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, color:"white", flexShrink:0 }}>{initials}</div>
                    <div>
                      <p style={{ fontSize:13, fontWeight:800, color:"#0f172a" }}>{name}</p>
                      <p style={{ fontSize:11, color:"#94a3b8" }}>{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ═════════════════════════════════════════════════ */}
        <section id="faq" ref={faqRef} style={{ padding:"96px 24px", background:"#fff" }}>
          <div style={{ maxWidth:680, margin:"0 auto" }}>
            <div className={`pre-view ${faqVisible?"in-view":""}`} style={{ textAlign:"center", marginBottom:48 }}>
              <span className="section-label" style={{ justifyContent:"center" }}>FAQ</span>
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, letterSpacing:"-0.03em", color:"#0f172a" }}>
                Common <span style={{ color:"#1d4ed8" }}>Questions</span>
              </h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {faqs.map((f, i) => (
                <div key={i} className={`faq-item ${openFaq===i?"open":""}`}>
                  <button className="faq-trigger" onClick={() => setOpenFaq(openFaq===i?null:i)}>
                    <span>{f.q}</span>
                    <div className="faq-icon">+</div>
                  </button>
                  <div className="faq-content">
                    <p style={{ padding:"0 22px 18px", fontSize:13.5, color:"#475569", lineHeight:1.8 }}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <Contact/>
      </main>

    
    </div>
  );
}