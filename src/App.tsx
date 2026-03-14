import { useEffect, useRef, useState } from "react";
import "./App.css";

/* ── Helpers ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
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
  return { ref, visible };
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <section
      id={id}
      // @ts-ignore
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </section>
  );
}

const badgeColors: Record<string, string> = {
  Featured:    "border-amber-400/30  bg-amber-400/10  text-amber-300",
  "AI App":    "border-violet-400/30 bg-violet-400/10 text-violet-300",
  Frontend:    "border-sky-400/30    bg-sky-400/10    text-sky-300",
  Mobile:      "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Marketplace: "border-rose-400/30   bg-rose-400/10   text-rose-300",
  ML:          "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300",
};

const badgeGlow: Record<string, string> = {
  Featured:    "hover:border-amber-400/40  hover:shadow-amber-500/10",
  "AI App":    "hover:border-violet-400/40 hover:shadow-violet-500/10",
  Frontend:    "hover:border-sky-400/40    hover:shadow-sky-500/10",
  Mobile:      "hover:border-emerald-400/40 hover:shadow-emerald-500/10",
  Marketplace: "hover:border-rose-400/40   hover:shadow-rose-500/10",
  ML:          "hover:border-fuchsia-400/40 hover:shadow-fuchsia-500/10",
};

/* ── Data ── */
const projects = [
  { title: "MyAlbum", badge: "Featured", description: "A photo-sharing platform with album management and AI-assisted image features, built as a full-stack product with cloud storage and modern frontend architecture.", stack: [".NET Core", "React", "Angular", "Azure", "Docker"], href: "https://github.com/NhatTanVu/myalbum" },
  { title: "MyMealAgent", badge: "AI App", description: "An AI-powered cooking assistant designed to transform recipe content into a more guided mobile experience with practical backend integrations.", stack: ["React Native", "FastAPI", "OpenAI", "Azure", "RevenueCat"], href: "https://github.com/NhatTanVu/MyMealAgent" },
  { title: "Soccer Logic", badge: "Frontend", description: "A live football website experience with match information, standings, team pages, and player views inspired by modern sports products.", stack: ["React", "Redux", "Next.js", "Vercel"], href: "https://github.com/NhatTanVu/soccer-logic" },
  { title: "ProBuddy", badge: "Mobile", description: "A cross-platform networking app for connecting people around fun and professional opportunities, backed by a Django REST API.", stack: ["Flutter", "Django REST", "MySQL", "JWT"], href: "https://github.com/NhatTanVu/ProBuddy" },
  { title: "DispoSell", badge: "Marketplace", description: "A web platform focused on collecting, refurbishing, and reselling usable furniture with a practical cloud-backed architecture.", stack: ["Java", "Spring", "AWS"], href: "https://github.com/NhatTanVu/DispoSell" },
  { title: "Object Detection ML.NET", badge: "ML", description: "A computer vision experiment using ML.NET and Tiny YOLOv2, reflecting my interest in practical AI and machine learning features.", stack: ["ML.NET", "ONNX", "Computer Vision"], href: "https://github.com/NhatTanVu/Object-Detection-ML.NET" },
];

const skills = [
  { title: "Backend & APIs", icon: "⚙️", items: ["Python", "Flask", "FastAPI", "C#", ".NET", "Django REST", "REST APIs", "Background Jobs"] },
  { title: "Data & Cloud", icon: "☁️", items: ["PostgreSQL", "MySQL", "Azure", "Azure Service Bus", "Docker", "Redis", "Airflow", "Celery"] },
  { title: "Frontend & Product", icon: "🖥️", items: ["React", "Angular", "React Native", "Flutter", "GitHub Actions", "AI Integrations", "Product Prototyping"] },
];

const experience = [
  { title: "Backend Developer", company: "SISA Energy Ltd.", period: "3+ years", description: "Built and maintained backend services and ingestion pipelines for an energy analytics platform, with a focus on APIs, time-series processing, resampling workflows, and production reliability." },
  { title: "Support Engineer", company: "Sitecore", period: "3+ years", description: "Solved difficult production issues and long-running customer problems, developing a strong troubleshooting mindset across application behavior, infrastructure, and support workflows." },
];

/* ── Component ── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState(true);

  // blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  const navLinks = ["About", "Projects", "Experience", "Skills", "Contact"];

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --font-display: sans-serif;
          --font-body: sans-serif;
          --sky:    #38bdf8;
          --violet: #a78bfa;
          --bg:     #020617;
          --surface: rgba(255,255,255,0.04);
          --border:  rgba(255,255,255,0.08);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: var(--font-body);
          background: var(--bg);
          color: #cbd5e1;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3 { font-family: var(--font-display); }

        /* scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }

        /* orb animations */
        @keyframes orb-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.05); }
          66%      { transform: translate(-20px,15px) scale(0.97); }
        }
        .orb { animation: orb-drift 12s ease-in-out infinite; }
        .orb2 { animation: orb-drift 16s ease-in-out infinite reverse; }

        /* pill glow hover */
        .skill-pill:hover {
          background: rgba(56,189,248,0.12);
          border-color: rgba(56,189,248,0.35);
          color: #e0f2fe;
          transform: translateY(-1px);
        }

        /* card arrow */
        .card-arrow { transition: transform 0.2s; }
        .project-card:hover .card-arrow { transform: translate(3px,-3px); }

        /* timeline dot pulse */
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 0 0 rgba(56,189,248,0.4); }
          50%      { box-shadow: 0 0 0 7px rgba(56,189,248,0); }
        }
        .timeline-dot { animation: pulse-dot 2.5s ease-in-out infinite; }

        /* email button pulse ring */
        @keyframes ring-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(255,255,255,0.3); }
          70%  { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        .email-btn:hover { animation: ring-pulse 1s ease-out; }

        /* mobile nav */
        .mobile-nav { transition: max-height 0.35s ease, opacity 0.3s; }
        .mobile-nav.closed { max-height: 0; opacity: 0; overflow: hidden; }
        .mobile-nav.open   { max-height: 400px; opacity: 1; }
      `}</style>

      <div style={{ minHeight: "100vh", position: "relative" }}>

        {/* Background */}
        <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden" }}>
          <div className="orb" style={{ position: "absolute", top: "-10%", left: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.13) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="orb2" style={{ position: "absolute", top: "5%", right: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "20%", left: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #020617 0%, #0f172a 50%, #020617 100%)" }} />
          {/* subtle grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        {/* ── Header ── */}
        <header style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid var(--border)", background: "rgba(2,6,23,0.8)", backdropFilter: "blur(16px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <a href="#top" style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.01em" }}>
              Nhat Tan <span style={{ background: "linear-gradient(90deg, var(--sky), var(--violet))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Vu</span>
            </a>

            {/* Desktop nav */}
            <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {navLinks.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 13, fontWeight: 500, color: "#94a3b8", textDecoration: "none", letterSpacing: "0.01em", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f1f5f9")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                >{l}</a>
              ))}
              <a href="mailto:onchua2006@gmail.com" style={{ fontSize: 13, fontWeight: 600, background: "linear-gradient(90deg, var(--sky), var(--violet))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textDecoration: "none", border: "1px solid rgba(56,189,248,0.3)", borderRadius: 99, padding: "6px 16px" }}>
                Hire me
              </a>
            </nav>

            {/* Mobile burger */}
            <button onClick={() => setMenuOpen(o => !o)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#cbd5e1", padding: 4 }} aria-label="Menu"
              className="mobile-burger"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>

          {/* Mobile nav */}
          <div className={`mobile-nav ${menuOpen ? "open" : "closed"}`} style={{ borderTop: "1px solid var(--border)", background: "rgba(2,6,23,0.95)" }}>
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "12px 24px", fontSize: 14, color: "#94a3b8", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
                {l}
              </a>
            ))}
          </div>
        </header>

        <main id="top" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 100px", display: "flex", flexDirection: "column", gap: 120 }}>

          {/* ── Hero ── */}
          <section style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }}>
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 99, border: "1px solid rgba(56,189,248,0.25)", background: "rgba(56,189,248,0.08)", padding: "6px 16px", marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#7dd3fc", letterSpacing: "0.06em", textTransform: "uppercase" }}>Open to opportunities · Greater Vancouver, BC · Remote</span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#f8fafc", maxWidth: 860 }}>
                Hi, I'm{" "}
                <span style={{ background: "linear-gradient(100deg, var(--sky) 20%, var(--violet) 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Nhat Tan Vu
                </span>
                .<br />I build reliable backend systems, data pipelines & AI-powered products.
                <span style={{ display: "inline-block", width: 3, height: "0.85em", background: "var(--sky)", marginLeft: 6, verticalAlign: "text-bottom", opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }} />
              </h1>

              <p style={{ marginTop: 24, maxWidth: 780, fontSize: 16, lineHeight: 1.8, color: "#94a3b8" }}>
                Metro Vancouver software developer with 3+ years in backend engineering (Python, Flask, Azure, PostgreSQL) and 3+ years in production support. I turn messy operational problems into clean APIs, scalable ingestion pipelines, and polished product experiences.
              </p>

              <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                {[
                  { label: "Email Me", href: "mailto:onchua2006@gmail.com", primary: true },
                  { label: "GitHub ↗", href: "https://github.com/NhatTanVu", primary: false },
                  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/tanvu", primary: false },
                  { label: "Resume ↗", href: `${import.meta.env.BASE_URL}resume.pdf`, primary: false },
                ].map(btn => (
                  <a key={btn.label} href={btn.href} target={btn.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    style={{
                      textDecoration: "none", fontSize: 13, fontWeight: 600, borderRadius: 99, padding: "11px 22px", transition: "transform 0.2s, box-shadow 0.2s",
                      ...(btn.primary
                        ? { background: "linear-gradient(90deg, var(--sky), var(--violet))", color: "#0f172a", boxShadow: "0 4px 20px rgba(56,189,248,0.25)" }
                        : { border: "1px solid var(--border)", background: "var(--surface)", color: "#e2e8f0" })
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; if (btn.primary) e.currentTarget.style.boxShadow = "0 8px 30px rgba(56,189,248,0.35)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ""; if (btn.primary) e.currentTarget.style.boxShadow = "0 4px 20px rgba(56,189,248,0.25)"; }}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 520, width: "100%" }}>
                {[
                  ["3+ yrs", "Backend in production"],
                  ["Azure · Python", "Cloud APIs & data jobs"],
                  ["6+ projects", "AI, mobile & analytics"],
                ].map(([val, lbl]) => (
                  <div key={val} style={{ borderRadius: 16, border: "1px solid var(--border)", background: "var(--surface)", padding: "16px 18px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#f1f5f9" }}>{val}</div>
                    <div style={{ marginTop: 4, fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Identity card */}
            <aside style={{ borderRadius: 28, border: "1px solid var(--border)", background: "linear-gradient(135deg, rgba(56,189,248,0.06), rgba(167,139,250,0.06))", padding: 28, maxWidth: 460, margin: "0 auto", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 72, height: 72, borderRadius: 20, background: "linear-gradient(135deg, var(--sky), var(--violet))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#0f172a", flexShrink: 0 }}>TV</div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#f8fafc" }}>Nhat Tan Vu</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>Backend Developer · Python · Azure · APIs</div>
                </div>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#94a3b8", marginBottom: 18 }}>
                Currently focused on backend engineering, data ingestion, workflow orchestration, and building practical AI features into side projects.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Python", "Flask", "PostgreSQL", "Azure", "Docker", "Airflow", "Celery", "React Native", ".NET", "OpenAI API"].map(t => (
                  <span key={t} className="skill-pill" style={{ borderRadius: 99, border: "1px solid var(--border)", background: "var(--surface)", padding: "4px 12px", fontSize: 12, color: "#cbd5e1", transition: "all 0.2s", cursor: "default" }}>{t}</span>
                ))}
              </div>
            </aside>
          </section>

          {/* ── About ── */}
          <Section id="about" style={{ display: "grid", gap: 32 }}>
            <div style={{ textAlign: "center", margin: "0 auto", maxWidth: 860 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sky)", marginBottom: 10 }}>About</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.2 }}>
                I build backend systems that are practical, reliable, and product-driven.
              </h2>
              <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.85, color: "#94a3b8" }}>
                My work sits at the intersection of backend engineering, data systems, and product development. I've built ingestion pipelines for energy analytics, optimized batch processing, and shipped side projects ranging from photo-sharing apps to AI-powered recipe assistants. I enjoy owning the path from data ingestion to user-facing value.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {[
                { title: "What I focus on", items: ["Designing APIs and backend services that stay maintainable as products grow", "Building ETL and time-series pipelines for operational data", "Improving reliability, observability, and performance in cloud deployments", "Turning AI ideas into practical app features and developer workflows"] },
                { title: "What I bring", items: ["Hands-on experience with Python, Flask, PostgreSQL, Azure, and Docker", "A strong troubleshooting mindset shaped by years in support and production systems", "Ability to move between backend architecture, data logic, and product delivery", "Curiosity for modern tools like OpenAI, message queues, orchestration, and mobile apps"] },
              ].map(card => (
                <div key={card.title} style={{ borderRadius: 24, border: "1px solid var(--border)", background: "var(--surface)", padding: 24 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 16 }}>{card.title}</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
                    {card.items.map(item => (
                      <li key={item} style={{ display: "flex", gap: 10, fontSize: 13, lineHeight: 1.7, color: "#94a3b8" }}>
                        <span style={{ color: "var(--sky)", marginTop: 3, flexShrink: 0 }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Projects ── */}
          <Section id="projects" style={{ display: "grid", gap: 32 }}>
            <div style={{ textAlign: "center", margin: "0 auto", maxWidth: 860 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sky)", marginBottom: 10 }}>Projects</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.2 }}>Featured work</h2>
              <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.8, color: "#94a3b8" }}>
                Public projects spanning backend systems, mobile products, cloud deployments, and AI-driven features.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {projects.map((p, i) => (
                <article key={p.title} className="project-card"
                  style={{ borderRadius: 24, border: "1px solid var(--border)", background: "var(--surface)", padding: 24, display: "flex", flexDirection: "column", transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s", animationDelay: `${i * 60}ms` }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 14 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3 }}>{p.title}</h3>
                    <span style={{ borderRadius: 99, padding: "3px 10px", fontSize: 11, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }} className={badgeColors[p.badge] ?? "border border-white/10 text-slate-300"}>
                      {p.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: "#94a3b8", flexGrow: 1 }}>{p.description}</p>
                  <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.stack.map(s => (
                      <span key={s} style={{ borderRadius: 99, border: "1px solid var(--border)", background: "rgba(255,255,255,0.03)", padding: "3px 10px", fontSize: 11, color: "#94a3b8" }}>{s}</span>
                    ))}
                  </div>
                  <a href={p.href} target="_blank" rel="noreferrer"
                    style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--sky)", textDecoration: "none" }}>
                    View on GitHub
                    <span className="card-arrow" style={{ display: "inline-block" }}>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </Section>

          {/* ── Experience ── */}
          <Section id="experience" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
            <div style={{ textAlign: "center", margin: "0 auto", maxWidth: 860 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sky)", marginBottom: 10 }}>Experience</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.2 }}>
                A mix of engineering and real-world production support.
              </h2>
              <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.8, color: "#94a3b8" }}>
                My background combines backend development with hands-on troubleshooting in production environments — building systems that are not just functional, but easier to operate, debug, and improve.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {experience.map((item, i) => (
                <div key={item.title} style={{ display: "flex", gap: 24 }}>
                  {/* Timeline */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div className="timeline-dot" style={{ width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, var(--sky), var(--violet))", flexShrink: 0, marginTop: 6 }} />
                    {i < experience.length - 1 && <div style={{ width: 2, flexGrow: 1, background: "linear-gradient(to bottom, rgba(56,189,248,0.4), rgba(56,189,248,0.05))", margin: "8px 0" }} />}
                  </div>
                  {/* Content */}
                  <div style={{ textAlign: "left", borderRadius: 24, border: "1px solid var(--border)", background: "var(--surface)", padding: 24, marginBottom: i < experience.length - 1 ? 20 : 0, flexGrow: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>{item.title}</h3>
                        <span style={{ fontSize: 12, color: "var(--sky)", marginTop: 2, display: "block" }}>{item.company}</span>
                      </div>
                      <span style={{ borderRadius: 99, border: "1px solid var(--border)", background: "rgba(255,255,255,0.03)", padding: "4px 12px", fontSize: 11, color: "#64748b" }}>{item.period}</span>
                    </div>
                    <p style={{ fontSize: 13, lineHeight: 1.75, color: "#94a3b8" }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Skills ── */}
          <Section id="skills" style={{ display: "grid", gap: 32 }}>
            <div style={{ textAlign: "center", margin: "0 auto", maxWidth: 860 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sky)", marginBottom: 10 }}>Skills</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.2 }}>
                A practical toolkit for product-focused engineering.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {skills.map(group => (
                <div key={group.title} style={{ borderRadius: 24, border: "1px solid var(--border)", background: "var(--surface)", padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <span style={{ fontSize: 20 }}>{group.icon}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>{group.title}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.items.map(item => (
                      <span key={item} className="skill-pill" style={{ borderRadius: 99, border: "1px solid var(--border)", background: "var(--surface)", padding: "6px 14px", fontSize: 12, color: "#cbd5e1", cursor: "default", transition: "all 0.2s" }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Contact ── */}
          <Section id="contact">
            <div style={{ borderRadius: 32, border: "1px solid rgba(56,189,248,0.15)", background: "linear-gradient(135deg, rgba(56,189,248,0.07) 0%, rgba(167,139,250,0.07) 100%)", padding: "clamp(32px, 5vw, 56px)", position: "relative", overflow: "hidden" }}>
              {/* decorative blob */}
              <div style={{ position: "absolute", right: -80, top: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.15), transparent 70%)", pointerEvents: "none" }} />

              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sky)", marginBottom: 12, textAlign: "center" }}>Contact</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#f8fafc", lineHeight: 1.1, marginBottom: 16, textAlign: "center" }}>
                Let's build something useful.
              </h2>
              <p style={{ maxWidth: 720, fontSize: 15, lineHeight: 1.8, color: "#94a3b8", marginBottom: 36, margin: "0 auto 36px", textAlign: "center" }}>
                I'm interested in backend, full-stack, and platform roles where I can help build reliable products, improve developer workflows, and ship practical features that matter to users.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 36 }}>
                <a href="mailto:onchua2006@gmail.com" className="email-btn"
                  style={{ textDecoration: "none", fontSize: 13, fontWeight: 700, borderRadius: 99, padding: "12px 24px", color: "#0f172a", transition: "transform 0.2s", background: "linear-gradient(90deg, var(--sky), var(--violet))", boxShadow: "0 4px 20px rgba(56,189,248,0.25)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "")}>
                  Email Me
                </a>
                {[
                  { label: "GitHub ↗", href: "https://github.com/NhatTanVu" },
                  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/tanvu" },
                  { label: "Resume ↗", href: `${import.meta.env.BASE_URL}resume.pdf` },
                ].map(btn => (
                  <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer"
                    style={{ textDecoration: "none", fontSize: 13, fontWeight: 600, borderRadius: 99, padding: "12px 22px", border: "1px solid var(--border)", background: "var(--surface)", color: "#e2e8f0", transition: "transform 0.2s, background 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.background = "var(--surface)"; }}
                  >{btn.label}</a>
                ))}
              </div>
            </div>
          </Section>

        </main>

        <footer style={{ textAlign: "center", padding: "24px 16px", fontSize: 12, color: "#334155", borderTop: "1px solid var(--border)" }}>
          © {new Date().getFullYear()} Nhat Tan Vu · Built with React + Vite
        </footer>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-burger { display: block !important; }
          nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
