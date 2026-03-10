import './App.css'

function App() {
  const projects = [
    {
      title: "MyAlbum",
      badge: "Featured",
      description:
        "A photo-sharing platform with album management and AI-assisted image features, built as a full-stack product with cloud storage and modern frontend architecture.",
      stack: [".NET Core", "React", "Angular", "Azure", "Docker"],
      href: "https://github.com/NhatTanVu/myalbum",
    },
    {
      title: "MyMealAgent",
      badge: "AI App",
      description:
        "An AI-powered cooking assistant designed to transform recipe content into a more guided mobile experience with practical backend integrations.",
      stack: ["React Native", "FastAPI", "OpenAI", "Azure", "RevenueCat"],
      href: "https://github.com/NhatTanVu/MyMealAgent",
    },
    {
      title: "Soccer Logic",
      badge: "Frontend",
      description:
        "A live football website experience with match information, standings, team pages, and player views inspired by modern sports products.",
      stack: ["React", "Redux", "Next.js", "Vercel"],
      href: "https://github.com/NhatTanVu/soccer-logic",
    },
    {
      title: "ProBuddy",
      badge: "Mobile",
      description:
        "A cross-platform networking app for connecting people around fun and professional opportunities, backed by a Django REST API.",
      stack: ["Flutter", "Django REST", "MySQL", "JWT"],
      href: "https://github.com/NhatTanVu/ProBuddy",
    },
    {
      title: "DispoSell",
      badge: "Marketplace",
      description:
        "A web platform focused on collecting, refurbishing, and reselling usable furniture with a practical cloud-backed architecture.",
      stack: ["Java", "Spring", "AWS"],
      href: "https://github.com/NhatTanVu/DispoSell",
    },
    {
      title: "Object Detection ML.NET",
      badge: "ML",
      description:
        "A computer vision experiment using ML.NET and Tiny YOLOv2, reflecting my interest in practical AI and machine learning features.",
      stack: ["ML.NET", "ONNX", "Computer Vision"],
      href: "https://github.com/NhatTanVu/Object-Detection-ML.NET",
    },
  ];

  const skills = [
    {
      title: "Backend & APIs",
      items: ["Python", "Flask", "FastAPI", "C#", ".NET", "Django REST", "REST APIs", "Background Jobs"],
    },
    {
      title: "Data & Cloud",
      items: ["PostgreSQL", "MySQL", "Azure", "Azure Service Bus", "Docker", "Redis", "Airflow", "Celery"],
    },
    {
      title: "Frontend & Product",
      items: ["React", "Angular", "React Native", "Flutter", "GitHub Actions", "AI Integrations", "Product Prototyping"],
    },
  ];

  const experience = [
    {
      title: "Backend Developer",
      company: "SISA Energy Ltd.",
      period: "3+ years",
      description:
        "Built and maintained backend services and ingestion pipelines for an energy analytics platform, with a focus on APIs, time-series processing, resampling workflows, and production reliability.",
    },
    {
      title: "Support Engineer",
      company: "Sitecore",
      period: "3+ years",
      description:
        "Solved difficult production issues and long-running customer problems, developing a strong troubleshooting mindset across application behavior, infrastructure, and support workflows.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_22%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_18%),linear-gradient(to_bottom,#020617,#0f172a)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-lg font-semibold tracking-tight text-white">
            Nhat Tan <span className="text-sky-400">Vu</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
        <section className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.95fr]">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-300">
              Backend Developer · Data Pipelines · Cloud Apps
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">
                Nhat Tan Vu
              </span>
              . I build reliable backend systems, data pipelines, and AI-powered products.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              I&apos;m a Metro Vancouver software developer with 3+ years of backend development experience in Python, Flask, Azure, and PostgreSQL, plus 3+ years of support engineering experience. I enjoy turning messy operational problems into clean APIs, scalable ingestion pipelines, and polished product experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:onchua2006@gmail.com"
                className="rounded-full bg-gradient-to-r from-sky-400 to-violet-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5"
              >
                Email Me
              </a>
              <a
                href="https://github.com/NhatTanVu"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                View GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tanvu"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Resume
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["3+ years", "Backend development in production systems"],
                ["Azure + Python", "Cloud APIs, data jobs, and automation"],
                ["Multiple side projects", "AI, mobile, and analytics apps"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
                  <div className="text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-violet-400 text-2xl font-bold text-slate-950">
                TV
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Nhat Tan Vu</h2>
                <p className="text-sm text-slate-300">Backend Developer · Python · Azure · APIs</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300">
              Currently focused on backend engineering, data ingestion, workflow orchestration, and building practical AI features into side projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "Python",
                "Flask",
                "PostgreSQL",
                "Azure",
                "Docker",
                "Airflow",
                "Celery",
                "React Native",
                ".NET",
                "OpenAI API",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section id="about" className="grid gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">About</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">I build backend systems that are practical, reliable, and product-driven.</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
              My work sits at the intersection of backend engineering, data systems, and product development. I&apos;ve built ingestion pipelines for energy analytics, optimized batch processing, and shipped side projects ranging from photo-sharing apps to AI-powered recipe assistants. I enjoy owning the path from data ingestion to user-facing value.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">What I focus on</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>Designing APIs and backend services that stay maintainable as products grow</li>
                <li>Building ETL and time-series pipelines for operational data</li>
                <li>Improving reliability, observability, and performance in cloud deployments</li>
                <li>Turning AI ideas into practical app features and developer workflows</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">What I bring</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>Hands-on experience with Python, Flask, PostgreSQL, Azure, and Docker</li>
                <li>A strong troubleshooting mindset shaped by years in support and production systems</li>
                <li>Ability to move between backend architecture, data logic, and product delivery</li>
                <li>Curiosity for modern tools like OpenAI, message queues, orchestration, and mobile apps</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="grid gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured work</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
              A few public projects that reflect my work across backend systems, mobile products, cloud deployments, and AI-driven features.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {project.badge}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-sky-300 transition group-hover:text-sky-200"
                >
                  View project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A mix of engineering and real-world production support.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              My background combines backend development with hands-on troubleshooting in production environments. That mix helps me build systems that are not just functional, but easier to operate, debug, and improve.
            </p>
          </div>

          <div className="space-y-5">
            {experience.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title} · {item.company}
                  </h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Skills</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A practical toolkit for product-focused engineering.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((group) => (
              <div key={group.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-sky-500/10 to-violet-500/10 p-8 shadow-2xl shadow-black/20 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s build something useful.</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              I&apos;m interested in backend, full-stack, and platform roles where I can help build reliable products, improve developer workflows, and ship practical features that matter to users.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:onchua2006@gmail.com"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                onchua2006@gmail.com
              </a>
              <a
                href="https://github.com/NhatTanVu"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tanvu"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
