"use client";
import { useState, useEffect, useRef } from "react";
import {
  Pen, Palette, Image, Printer, Monitor, Film,
  CheckCircle2, ArrowRight, Phone, Mail, MapPin,
  Sparkles, Star, Users, Award, Eye, Layers, Zap,
  ArrowUpRight, ImageIcon,
} from "lucide-react";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";



const P = {
  navy:    "#0B2D6B",
  navyMid: "#1040A0",
  blue:    "#1A5FCC",
  sky:     "#3B82F6",
  skyLt:   "#60A5FA",
  ice:     "#EFF6FF",
  iceMid:  "#DBEAFE",
  slate:   "#64748B",
  white:   "#FFFFFF",
  offWhite:"#F8FAFF",
};

const services = [
  { Icon: Pen,     title: "Logo Design",          short: "Marks that endure",         desc: "Distinctive, versatile logos built to stand out across every medium — print, digital, and beyond.",             deliverables: ["Primary + alternate variants", "Vector AI / SVG / PDF", "Brand guidelines", "B&W versions"],            tag: "Popular" },
  { Icon: Palette, title: "Brand Identity",        short: "Visual systems that speak", desc: "Complete brand kits — colour palette, typography, business cards and stationery that tell your story.",      deliverables: ["Colour & typography system", "Business card & letterhead", "Brand style guide", "Social kit"],           tag: null      },
  { Icon: Image,   title: "Social Media Graphics", short: "Scroll-stopping content",   desc: "Platform-optimised graphics for Instagram, Facebook and LinkedIn — posts, stories, covers and reels.",         deliverables: ["Post & story templates", "Cover & banner designs", "Reel thumbnails", "Platform-specific sizing"],      tag: null      },
  { Icon: Printer, title: "Print Design",           short: "Ink worth spending",        desc: "High-impact print — brochures, posters, banners and packaging ready for offset and digital print.",            deliverables: ["Brochures & leaflets", "Posters & banners", "Packaging design", "CMYK print-ready files"],              tag: null      },
  { Icon: Monitor, title: "UI / UX Design",         short: "Interfaces people love",    desc: "Wireframes, prototypes and high-fidelity mockups that balance aesthetics with real usability.",                deliverables: ["Wireframes & user flows", "Hi-fi mockups", "Interactive prototypes", "Design system"],                   tag: null      },
  { Icon: Film,    title: "Motion & Video",          short: "Brands in motion",          desc: "Animated logos, explainer videos and social reels that boost engagement and bring your brand to life.",        deliverables: ["Animated logo intros", "Social media reels", "Explainer videos", "GIF & MP4 export"],                  tag: "New"     },
];

const stats = [
  { value: 290, suffix: "+", label: "Projects Delivered", Icon: Award },
  { value: 250, suffix: "+", label: "Happy Clients",       Icon: Users },
  { value: 4.8,   suffix: "★", label: "Avg Client Rating",  Icon: Star  },
  { value: 48,  suffix: "h", label: "First Draft",         Icon: Zap   },
];

const process = [
  { step: "01", title: "Brief",   desc: "We understand your brand, goals, audience and design preferences.", Icon: Eye      },
  { step: "02", title: "Concept", desc: "Our designers craft initial concepts tailored to your brief.",       Icon: Sparkles },
  { step: "03", title: "Refine",  desc: "You review, give feedback, and we perfect every detail together.",  Icon: Layers   },
  { step: "04", title: "Deliver", desc: "Final files delivered in all formats — print and digital ready.",   Icon: Award    },
];

const whyUs = [
  "Creative designs built around your brand goals",
  "Unlimited revisions until you're 100% satisfied",
  "Fast turnaround — first drafts within 48 hours",
  "Print-ready & web-optimised formats included",
  "Experienced team with deep local market knowledge",
  "Dedicated designer assigned to your project",
];

/* ─── Counter ──────────────────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        setN(cur);
        if (cur >= target) clearInterval(t);
      }, 24);
      obs.disconnect();
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ─── Image slot ───────────────────────────────────────────── */
function Img({ src = "/placeholder.jpg", alt, style, className = "" }) {
  return (
    <div className={`overflow-hidden relative ${className}`} style={{ background: P.iceMid, ...style }}>
      <img src={src} alt={alt} className="w-full h-full object-cover"
        onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
      <div style={{ display:"none", position:"absolute", inset:0, alignItems:"center", justifyContent:"center", flexDirection:"column", gap:8, background:P.iceMid }}>
        <ImageIcon size={22} color={P.skyLt} />
        <span style={{ fontSize:10, color:P.slate, fontFamily:"monospace" }}>{alt}</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════ */
export default function GraphicDesign() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ fontFamily:"'Plus Jakarta Sans','Segoe UI',sans-serif", background:P.white, color:P.navy }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&family=Fraunces:ital,wght@1,700;1,800&display=swap');
    
        @keyframes fadeUp  { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes spin    { to{transform:rotate(360deg)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes ticker  { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .rev{animation:fadeUp .75s cubic-bezier(.22,1,.36,1) both}
        .d1{animation-delay:.08s}.d2{animation-delay:.2s}.d3{animation-delay:.34s}.d4{animation-delay:.5s}.d5{animation-delay:.66s}


        /* ── Cards ── */
        .svc{transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s ease,border-color .3s;cursor:pointer}
        .svc:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(11,45,107,.12);border-color:#93C5FD !important}
        .svc.on{border-color:#3B82F6 !important;box-shadow:0 0 0 3px rgba(59,130,246,.15),0 16px 40px rgba(11,45,107,.12)}
        .icon-b{transition:background .25s,transform .25s,border-color .25s}
        .svc:hover .icon-b{background:${P.navy} !important;border-color:${P.navy} !important;transform:rotate(-7deg) scale(1.08)}
        .svc:hover .icon-b svg{color:${P.white} !important}

  
        /* ── Stat ── */
        .stat{transition:background .25s,transform .25s;cursor:default}
        .stat:hover{transform:translateY(-4px);background:rgba(255,255,255,.07)!important}

        /* ── Marquee ── */
        .mq{display:flex;white-space:nowrap;animation:ticker 22s linear infinite}

        /* Grid texture */
        .gtex{
          background-image:linear-gradient(rgba(59,130,246,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.055) 1px,transparent 1px);
          background-size:52px 52px;
        }

        .mono{font-family:'DM Mono','Courier New',monospace}
        .tag{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px;border-radius:20px}
      `}</style>

      

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{ position:"relative",overflow:"hidden",background:`linear-gradient(148deg,${P.navy} 0%,${P.navyMid} 52%,${P.blue} 100%)`,minHeight:"90vh",display:"flex",alignItems:"center",marginTop:"70px"}}>
        <div className="gtex" style={{ position:"absolute",inset:0,opacity:.55 }} />
        {/* Blobs */}
        <div style={{ position:"absolute",top:"-18%",right:"28%",width:480,height:480,background:"rgba(96,165,250,.08)",borderRadius:"50%",filter:"blur(64px)",pointerEvents:"none" }} />
        <div style={{ position:"absolute",bottom:"-10%",left:"4%",width:360,height:360,background:"rgba(96,165,250,.05)",borderRadius:"50%",filter:"blur(56px)",pointerEvents:"none" }} />
        {/* Spinning ring */}
        <div style={{ position:"absolute",top:"10%",right:"10%",width:180,height:180,border:"1.5px dashed rgba(255,255,255,.1)",borderRadius:"50%",animation:"spin 28s linear infinite",pointerEvents:"none" }} />

        <div style={{ maxWidth:1160,margin:"0 auto",padding:"72px 28px 60px",width:"100%",position:"relative",zIndex:1 }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center" }}>

            {/* LEFT */}
            <div>
              <div className="rev d1 mono" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.14)",borderRadius:40,padding:"5px 14px",fontSize:10,letterSpacing:".18em",textTransform:"uppercase",color:"rgba(255,255,255,.65)",marginBottom:26 }}>
                <MapPin size={9} /> Graphic Design Studio · Janakpuri, Delhi
              </div>

              <h1 className="rev d2" style={{ fontSize:"clamp(2.6rem,5.2vw,4.4rem)",fontWeight:800,lineHeight:1.03,letterSpacing:"-.04em",color:P.white,marginBottom:18 }}>
                Design That<br />
                <em className="blue-shimmer" style={{ fontFamily:"'Fraunces',serif",fontStyle:"italic",fontWeight:800 }}>Elevates</em>
                <br />Your Brand.
              </h1>

              <p className="rev d3" style={{ color:"rgba(255,255,255,.52)",lineHeight:1.88,fontSize:"1rem",maxWidth:400,marginBottom:32 }}>
                Rehoboth Digitech Solution crafts logos, brand identities, social graphics, and motion content for businesses across Delhi NCR.
              </p>

              <div className="rev d4" style={{ display:"flex",gap:12,flexWrap:"wrap",marginBottom:44 }}>
                <a href="#services" className="btn-p" style={{ display:"inline-flex",alignItems:"center",gap:8,background:P.white,color:P.navy,fontWeight:800,fontSize:13,padding:"13px 26px",borderRadius:11,letterSpacing:".01em" }}>
                  View Services <ArrowRight size={14} />
                </a>
                <a href="#contact" className="btn-o" style={{ display:"inline-flex",alignItems:"center",gap:8,border:"1.5px solid rgba(255,255,255,.22)",color:P.white,fontWeight:700,fontSize:13,padding:"13px 26px",borderRadius:11 }}>
                  Free Consultation
                </a>
              </div>

              {/* Stat row */}
              
            </div>

            {/* RIGHT */}
            <div className="hero-float" style={{ position:"relative" }}>
              <Img src="/graphic.jpg" alt="Design workspace"
                style={{ height:470,borderRadius:20,boxShadow:"0 40px 80px rgba(0,0,0,.32)",border:"1px solid rgba(255,255,255,.07)" }} />
              <div style={{ position:"absolute",bottom:0,left:0,right:0,height:"35%",background:`linear-gradient(to top,${P.navy}99,transparent)`,borderRadius:"0 0 20px 20px",pointerEvents:"none" }} />
              {/* Badge bottom-left */}
              <div style={{ position:"absolute",bottom:26,left:-26,background:P.white,borderRadius:14,padding:"14px 20px",boxShadow:`0 14px 36px rgba(11,45,107,.2)`,border:`1px solid ${P.iceMid}` }}>
                <div style={{ fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:22,color:P.navy,lineHeight:1 }}>48h</div>
                <div className="mono" style={{ fontSize:9,color:P.slate,marginTop:3,letterSpacing:".08em",textTransform:"uppercase" }}>First Draft</div>
              </div>
              {/* Badge top-right */}
              <div style={{ position:"absolute",top:18,right:-18,background:`linear-gradient(135deg,${P.navy},${P.blue})`,borderRadius:12,padding:"10px 18px",boxShadow:`0 8px 22px rgba(11,45,107,.35)` }}>
                <div style={{ fontSize:11,fontWeight:800,color:P.white,letterSpacing:".04em" }}>100+ Projects</div>
                <div style={{ fontSize:9,color:"rgba(255,255,255,.45)",marginTop:2 }}>Delhi NCR</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 56" style={{ position:"absolute",bottom:-1,left:0,right:0,width:"100%" }} preserveAspectRatio="none">
          <path d="M0,28 C480,56 960,0 1440,28 L1440,56 L0,56 Z" fill={P.white} />
        </svg>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════ */}
      <div style={{ background:P.ice,borderBottom:`1px solid ${P.iceMid}`,overflow:"hidden",padding:"13px 0" }}>
        <div className="mq">
          {[...Array(2)].fill(["Logo Design","Brand Identity","Social Media","Print Design","UI/UX Design","Motion Graphics"]).flat().map((t,i)=>(
            <span key={i} className="mono" style={{ padding:"0 26px",fontSize:10,letterSpacing:".2em",color:P.slate,textTransform:"uppercase" }}>
              {t} <span style={{ color:P.skyLt,margin:"0 6px" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══════════════════════════════════════════ */}
      <section id="services" style={{ background:P.white,padding:"84px 0 96px" }}>
        <div style={{ maxWidth:1160,margin:"0 auto",padding:"0 28px" }}>

          {/* Section header */}
          <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:48,flexWrap:"wrap",gap:16 }}>
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:10 }}>
                <div style={{ height:2,width:26,background:`linear-gradient(to right,${P.navy},${P.sky})`,borderRadius:2 }} />
                <span className="mono" style={{ fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:P.sky }}>What We Create</span>
              </div>
              <h2 style={{ fontSize:"clamp(1.8rem,3.2vw,2.6rem)",fontWeight:800,letterSpacing:"-.035em",color:P.navy }}>
                Our Design Services
              </h2>
            </div>
            <span style={{ background:P.ice,border:`1px solid ${P.iceMid}`,borderRadius:40,padding:"7px 18px",fontSize:12,fontWeight:700,color:P.blue }}>
              6 Services
            </span>
          </div>

          {/* ── 3-col compact cards ── */}
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16 }}>
            {services.map((svc,i)=>(
              <div key={i}
                className={`svc${active===i?" on":""}`}
                onClick={()=>setActive(active===i?null:i)}
                style={{
                  background: active===i ? P.ice : P.white,
                  border:`1.5px solid ${active===i ? P.sky : P.iceMid}`,
                  borderRadius:16,
                  padding:"20px 20px 18px",
                  position:"relative",
                  display:"flex",
                  flexDirection:"column",
                  gap:12,
                }}
              >
                {/* Tag */}
                {svc.tag&&(
                  <span className="tag" style={{ position:"absolute",top:14,right:14,background:svc.tag==="New"?P.sky:P.navy,color:P.white }}>
                    {svc.tag}
                  </span>
                )}

                {/* Icon + heading */}
                <div style={{ display:"flex",alignItems:"flex-start",gap:12 }}>
                  <div className="icon-b" style={{ width:42,height:42,borderRadius:12,background:P.ice,border:`1px solid ${P.iceMid}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    <svc.Icon size={18} color={P.navy} />
                  </div>
                  <div style={{ paddingTop:2 }}>
                    <div style={{ fontWeight:800,fontSize:14,color:P.navy,lineHeight:1.25 }}>{svc.title}</div>
                    <div className="mono" style={{ fontSize:10,color:P.sky,letterSpacing:".04em",marginTop:3 }}>{svc.short}</div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize:12.5,color:P.slate,lineHeight:1.75 }}>{svc.desc}</p>

                {/* Deliverable pills */}
                <div style={{ display:"flex",flexWrap:"wrap",gap:5 }}>
                  {svc.deliverables.map((d,j)=>(
                    <span key={j} style={{ fontSize:10.5,fontWeight:600,color:P.blue,background:P.ice,border:`1px solid ${P.iceMid}`,borderRadius:20,padding:"3px 10px",lineHeight:1.6 }}>
                      {d}
                    </span>
                  ))}
                </div>

                {/* Footer row */}
                <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:`1px solid ${P.iceMid}`,paddingTop:12,marginTop:"auto" }}>
                  <span style={{ fontSize:11,fontWeight:700,color:P.sky }}>Learn more</span>
                  <div style={{ width:26,height:26,borderRadius:8,background:P.ice,display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <ArrowUpRight size={13} color={P.navy} />
                  </div>
                </div>

                {/* Active bar */}
                {active===i&&<div style={{ position:"absolute",bottom:0,left:0,right:0,height:3,background:`linear-gradient(to right,${P.navy},${P.sky})`,borderRadius:"0 0 14px 14px" }} />}
              </div>
            ))}
          </div>

          <p style={{ textAlign:"center",marginTop:36,fontSize:13,color:P.slate }}>
            Not sure which fits?{" "}
            <a href="#contact" style={{ color:P.blue,fontWeight:700 }}>Let's talk →</a>
          </p>
        </div>
      </section>

      {/* ══ STATS BAND ════════════════════════════════════════ */}
      <section style={{ background:`linear-gradient(135deg,${P.navy},${P.navyMid})`,padding:"52px 0" }}>
        <div style={{ maxWidth:1160,margin:"0 auto",padding:"0 28px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:4 }}>
          {stats.map(({ value,suffix,label,Icon:I })=>(
            <div key={label} className="stat" style={{ textAlign:"center",padding:"22px 14px",borderRadius:14 }}>
              <I size={18} color={P.skyLt} style={{ margin:"0 auto 10px",display:"block" }} />
              <div style={{ fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"2.3rem",color:P.white,lineHeight:1,marginBottom:6 }}>
                <Counter target={value} suffix={suffix} />
              </div>
              <div className="mono" style={{ fontSize:10,color:"rgba(255,255,255,.38)",letterSpacing:".12em",textTransform:"uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHY US ════════════════════════════════════════════ */}
      <section id="about" style={{ background:P.offWhite,padding:"92px 0" }}>
        <div style={{ maxWidth:1160,margin:"0 auto",padding:"0 28px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center" }}>

          {/* Image side */}
          <div style={{ position:"relative" }}>
            <Img src="/images/design-team.jpg" alt="Rehoboth Digitech design team"
              style={{ height:450,borderRadius:20,boxShadow:`0 28px 64px rgba(11,45,107,.14)` }} />
            {/* corner accents */}
            <div style={{ position:"absolute",top:20,left:20,width:42,height:42,borderTop:`2px solid ${P.sky}`,borderLeft:`2px solid ${P.sky}`,borderRadius:3,pointerEvents:"none" }} />
            <div style={{ position:"absolute",bottom:20,right:20,width:42,height:42,borderBottom:`2px solid ${P.sky}`,borderRight:`2px solid ${P.sky}`,borderRadius:3,pointerEvents:"none" }} />
            <div style={{ position:"absolute",bottom:-14,right:-14,width:"100%",height:"100%",border:`1.5px solid ${P.iceMid}`,borderRadius:20,zIndex:0,pointerEvents:"none" }} />
            <div style={{ position:"absolute",bottom:26,left:-24,background:P.white,border:`1px solid ${P.iceMid}`,borderRadius:14,padding:"13px 20px",boxShadow:`0 12px 30px rgba(11,45,107,.12)` }}>
              <div style={{ fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:22,color:P.navy,lineHeight:1 }}>48h</div>
              <div className="mono" style={{ fontSize:9,color:P.slate,marginTop:3,letterSpacing:".08em",textTransform:"uppercase" }}>First Draft</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:12 }}>
              <div style={{ height:2,width:26,background:`linear-gradient(to right,${P.navy},${P.sky})`,borderRadius:2 }} />
              <span className="mono" style={{ fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:P.sky }}>Why Choose Us</span>
            </div>
            <h2 style={{ fontSize:"clamp(1.7rem,2.8vw,2.4rem)",fontWeight:800,letterSpacing:"-.03em",color:P.navy,marginBottom:10,lineHeight:1.12 }}>
              The Rehoboth<br />
              <em style={{ fontFamily:"'Fraunces',serif",fontStyle:"italic",fontWeight:700,color:P.blue }}>Design Difference.</em>
            </h2>
            <p style={{ fontSize:13,color:P.slate,lineHeight:1.85,maxWidth:390,marginBottom:28 }}>
              Every design decision is intentional, strategic, and built around your brand goals — no templates, no shortcuts.
            </p>
            <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
              {whyUs.map((pt,i)=>(
                <div key={i} className="why" style={{ display:"flex",alignItems:"center",gap:12,padding:"12px 14px 12px .85rem",borderRadius:11,border:`1px solid ${P.iceMid}`,background:P.white }}>
                  <CheckCircle2 size={15} className="chk" style={{ color:P.navyMid,flexShrink:0,transition:"color .2s" }} />
                  <span style={{ fontSize:13,fontWeight:600,color:"#1E293B" }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
      <section id="process" style={{ background:P.white,padding:"92px 0" }}>
        <div style={{ maxWidth:1160,margin:"0 auto",padding:"0 28px" }}>
          <div style={{ textAlign:"center",marginBottom:56 }}>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:12 }}>
              <div style={{ height:1,width:32,background:"rgba(59,130,246,.3)" }} />
              <span className="mono" style={{ fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:P.sky }}>How It Works</span>
              <div style={{ height:1,width:32,background:"rgba(59,130,246,.3)" }} />
            </div>
            <h2 style={{ fontSize:"clamp(1.8rem,3.2vw,2.6rem)",fontWeight:800,letterSpacing:"-.035em",color:P.navy,marginBottom:8 }}>
              From Brief to Beautiful
            </h2>
            <p className="mono" style={{ fontSize:11,color:P.slate,letterSpacing:".06em" }}>Four deliberate steps. Zero guesswork.</p>
          </div>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,position:"relative" }}>
            {/* Connector line */}
            <div style={{ position:"absolute",top:38,left:"14%",right:"14%",height:1,background:`linear-gradient(to right,${P.iceMid},${P.sky}66,${P.iceMid})`,pointerEvents:"none" }} />
            {process.map(({ step,title,desc,Icon:I })=>(
              <div key={step} className="step" style={{ background:P.white,border:`1.5px solid ${P.iceMid}`,borderRadius:16,padding:"26px 20px",textAlign:"center" }}>
                <div className="snum" style={{ width:50,height:50,borderRadius:14,background:P.ice,border:`1px solid ${P.iceMid}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",transition:"all .3s" }}>
                  <I size={20} color={P.navy} />
                </div>
                <div className="mono" style={{ fontSize:9,color:P.sky,letterSpacing:".15em",textTransform:"uppercase",marginBottom:8 }}>Step {step}</div>
                <div style={{ fontSize:14,fontWeight:800,color:P.navy,marginBottom:8,letterSpacing:"-.02em" }}>{title}</div>
                <p style={{ fontSize:12,color:P.slate,lineHeight:1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<Contact/>
 <WhatsAppButton/>
      
    </div>
  );
}