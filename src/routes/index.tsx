import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kailash Sahu — Full Stack Developer" },
      { name: "description", content: "Portfolio of Kailash Sahu, a full stack developer crafting thoughtful systems and creative engineering." },
      { property: "og:title", content: "Kailash Sahu — Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Kailash Sahu, a full stack developer crafting thoughtful systems and creative engineering." },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" },
    ],
  }),
  component: Index,
});

const projects = [
  { 
    title: "E-Healthcare Application", 
    tag: "Spring Boot · JPA · PostgreSQL · React", 
    desc: "Engineered a scalable hospital management system backend supporting 500+ patient records. Delivered 10+ RESTful APIs for patient registration, doctor scheduling, and appointment management, reducing scheduling time by 50%." 
  },
  { 
    title: "AI Task Automation Extension", 
    tag: "JavaScript · Chrome Extension API · DOM Manipulation", 
    desc: "Built an intelligent browser automation tool that interprets natural language prompts and dynamically executes multi-step web workflows by interacting with the DOM." 
  },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "SQL", "JavaScript", "TypeScript"],
    icon: "code",
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Spring Cloud",
      "Hibernate",
      "RESTful APIs",
      "Microservices",
      "NestJS",
    ],
    icon: "dns",
  },
  {
    title: "Frontend",
    skills: ["ReactJS", "Next.js", "Tailwind CSS", "Thymeleaf"],
    icon: "data_object",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    icon: "database",
  },
  {
    title: "Tools & Tech",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "Postman", "Docker", "Maven", "Gradle"],
    icon: "terminal",
  },
  {
    title: "Integrations",
    skills: ["Pusher", "Twilio SMS", "Video SDK", "OCR Integration", "AI/ML Model API"],
    icon: "extension",
  },
];

const experiences = [
  {
    role: "Software Developer",
    company: "Westech",
    location: "Bhubaneswar, India",
    period: "Feb 2026 – Present",
    points: [
      "Working on a Media Tracking platform, building backend services to monitor and analyse media assets at scale.",
      "Implemented an OCR-based scanning pipeline using Java to extract text from media content and analyse it via an integrated AI model.",
      "Deployed and served a custom ML model on a VPS, configured under the organisation’s own domain for production-grade inferencing.",
      "Managed full production deployment on Hostinger VPS, including server setup, environment configuration, and CI/CD coordination.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Hyscaler",
    location: "Bhubaneswar, India",
    period: "May 2024 – Jan 2026",
    points: [
      "Delivered backend services for a CRM for event management using Spring Boot, JPA/Hibernate, and PostgreSQL/MySQL.",
      "Developed RESTful APIs for key modules including event registration, scheduling, and attendee management, improving operational efficiency by 10-20%.",
      "Engineered end-to-end payment workflows using Spring Boot service layers and event-driven architecture, introducing a discount system that reduced manual pricing adjustments by 30% and improved transaction success rates.",
      "Launched an email integration module (IMAP), real-time messaging system (Pusher), and Twilio SMS/call integration.",
      "Integrated Video SDK for virtual meetings and streamlined Git workflows in resolving conflicts.",
    ],
  },
];

const marqueeWords = ["Full Stack", "✦", "Spring Boot", "✦", "React", "✦", "NestJS", "✦", "Postgres", "✦", "Microservices", "✦", "AI", "✦"];

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const skillsVideoRef = useRef<HTMLVideoElement>(null);
  const projectsVideoRef = useRef<HTMLVideoElement>(null);
  const experienceVideoRef = useRef<HTMLVideoElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler for nav blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Video fade
  useEffect(() => {
    const fadeVideo = (video: HTMLVideoElement | null) => {
      if (!video) return 0;
      const fadeTime = 0.5;
      const endThreshold = 0.55;
      let raf = 0;
      const update = () => {
        if (video.duration) {
          const t = video.currentTime;
          const remaining = video.duration - t;
          if (t < fadeTime) video.style.opacity = String(t / fadeTime);
          else if (remaining <= endThreshold) video.style.opacity = String(Math.max(0, remaining / endThreshold));
          else video.style.opacity = "1";
        }
        raf = requestAnimationFrame(update);
      };
      raf = requestAnimationFrame(update);
      return raf;
    };

    const rafs = [
      fadeVideo(videoRef.current),
      fadeVideo(skillsVideoRef.current),
      fadeVideo(projectsVideoRef.current),
      fadeVideo(experienceVideoRef.current),
    ];

    return () => rafs.forEach(r => r && cancelAnimationFrame(r));
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isScrolled]);

  return (
    <div className="dark grain relative">
      {/* Ambient orbs */}
      <div className="orb bg-[#4f46e5] w-[420px] h-[420px] -top-32 -left-32" />
      <div className="orb bg-[#ec4899] w-[360px] h-[360px] top-[40vh] -right-24" style={{ animationDelay: "3s" }} />
      <div className="orb bg-[#06b6d4] w-[420px] h-[420px] top-[120vh] left-1/2 -translate-x-1/2" style={{ animationDelay: "6s" }} />

      {/* Floating nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl animate-rise">
        <div className={`liquid-glass !rounded-full flex items-center justify-between pl-5 pr-2 py-2 border transition-all duration-500 ${isScrolled ? 'bg-black/40 backdrop-blur-xl border-white/20' : 'bg-white/5 backdrop-blur-md border-white/10'}`}>
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-instrument text-lg leading-none transition-transform group-hover:rotate-12">
              K
            </span>
            <span className="font-instrument text-xl tracking-tight text-white hidden sm:inline">
              Kailash<span className="italic text-[#c4c7c8]"> Sahu</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            <a className="px-4 py-2 rounded-full text-[#c4c7c8] hover:text-white hover:bg-white/5 transition-colors" href="#work">Work</a>
            <a className="px-4 py-2 rounded-full text-[#c4c7c8] hover:text-white hover:bg-white/5 transition-colors" href="#experience">Experience</a>
            <a className="px-4 py-2 rounded-full text-[#c4c7c8] hover:text-white hover:bg-white/5 transition-colors" href="#skills">Skills</a>
            <a className="px-4 py-2 rounded-full text-[#c4c7c8] hover:text-white hover:bg-white/5 transition-colors" href="#about">About</a>
            <a className="px-4 py-2 rounded-full text-[#c4c7c8] hover:text-white hover:bg-white/5 transition-colors" href="#contact">Contact</a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase hover:scale-[1.03] active:scale-95 transition-transform"
          >
            Hire Me
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover translate-y-[17%]"
            style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
            src="https://res.cloudinary.com/dlkihhtby/video/upload/v1781204257/look_at_the_video_and_change_t_k1rn8l.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-transparent to-[#131313] opacity-80 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-16 -translate-y-[6%] flex flex-col items-center text-center">
          <div className="animate-rise inline-flex items-center gap-2 liquid-glass px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white">
              Available for work
            </span>
          </div>

          <p className="animate-rise delay-100 text-[12px] font-semibold tracking-[0.3em] uppercase text-[#c4c7c8] mb-6">
            Portfolio · Java & Full Stack Specialist
          </p>
          <h1 className="animate-rise delay-200 font-instrument text-5xl md:text-8xl lg:text-9xl mb-6 leading-[0.9]">
            <span className="text-white">Hi, I'm </span>
            <span className="italic shimmer-text">Kailash Sahu</span>
          </h1>
          <h2 className="animate-rise delay-300 font-instrument text-2xl md:text-4xl text-[#c4c7c8] mb-10 italic max-w-3xl">
            Engineering robust backend systems and intuitive frontend experiences.
          </h2>

          <div className="animate-rise delay-400 flex flex-col items-center gap-8 w-full max-w-xl">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#work"
                className="group liquid-glass px-10 py-4 text-[12px] font-semibold tracking-widest uppercase text-white border border-white/5 inline-flex items-center gap-2"
              >
                View Work
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a
                href="#skills"
                className="liquid-glass px-10 py-4 text-[12px] font-semibold tracking-widest uppercase text-white border border-white/5"
              >
                Expertise
              </a>
            </div>
          </div>

          <div className="animate-rise delay-600 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c4c7c8]">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
            <span className="material-symbols-outlined animate-bounce text-[20px]">expand_more</span>
          </div>
        </div>
      </main>

      {/* MARQUEE */}
      <div className="relative z-10 py-10 border-y border-white/5 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="font-instrument italic text-4xl md:text-6xl text-white/70 px-8 whitespace-nowrap"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* WORK (PROJECTS) */}
      <section id="work" className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 py-32 border-b border-white/5">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#c4c7c8] mb-3">Selected Work</p>
            <h2 className="font-instrument text-5xl md:text-7xl text-white leading-none">
              Projects, <span className="italic shimmer-text">crafted with care.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title + i}
              className="project-card liquid-glass !rounded-2xl p-8 group cursor-pointer backdrop-blur-xl bg-white/[0.02] border border-white/10 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c4c7c8]">{p.tag}</span>
                <span className="material-symbols-outlined text-white/60 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">north_east</span>
              </div>
              <h3 className="font-instrument text-3xl md:text-4xl text-white mb-3">{p.title}</h3>
              <p className="text-[#c4c7c8] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 py-32 border-t border-white/5 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <video
            ref={experienceVideoRef}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
            style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
            src="https://res.cloudinary.com/dlkihhtby/video/upload/v1781292186/hf_20260511_080827_a9e5ad52-b6ee-4e79-b393-d936f179cfd7_e0zfbj.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/70 to-[#131313] opacity-95 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="flex flex-col mb-16 reveal">
            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#c4c7c8] mb-3">Career Path</p>
            <h2 className="font-instrument text-5xl md:text-7xl text-white leading-none">
              Work <span className="italic shimmer-text">Experience.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company + i}
                className="liquid-glass !rounded-2xl p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-3xl reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="font-instrument text-3xl md:text-4xl text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-[#c4c7c8] font-instrument text-xl italic">
                      <span>{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold tracking-widest uppercase text-white w-fit">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.points.map((point, pi) => (
                    <li key={pi} className="flex gap-4 text-[#c4c7c8] text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <video
            ref={skillsVideoRef}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
            style={{ opacity: 0, transition: "opacity 0.5s ease-in-out" }}
            src="https://res.cloudinary.com/dlkihhtby/video/upload/v1781290561/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13_v2e5qu.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/40 to-[#131313] opacity-90 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="flex flex-col mb-16 reveal">
            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#c4c7c8] mb-3">Expertise</p>
            <h2 className="font-instrument text-5xl md:text-7xl text-white leading-none">
              Toolkit, <span className="italic shimmer-text">refined over time.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="liquid-glass !rounded-2xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-white/80 text-[20px]">{cat.icon}</span>
                  </div>
                  <h3 className="font-instrument text-2xl text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-medium tracking-wider uppercase text-[#c4c7c8] hover:bg-white/10 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 py-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#c4c7c8] mb-3">About</p>
            <h2 className="font-instrument text-5xl md:text-7xl text-white leading-none">
              A developer with a <span className="italic shimmer-text">curious mind.</span>
            </h2>
          </div>
          <div className="space-y-6 text-[#c4c7c8] leading-relaxed reveal" style={{ transitionDelay: "120ms" }}>
            <p>
              Java Backend Developer with 2+ years of experience building scalable REST APIs and microservices using Spring Boot and the Spring ecosystem.
            </p>
            <p>
              Skilled in PostgreSQL, MySQL, third-party integrations, and production VPS deployments. Comfortable working across the stack in Agile teams, I care about performance, scalability, and writing clean, maintainable code.
            </p>
            <div className="pt-6">
              <a
                href="mailto:mr.kailashsahu08@gmail.com"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-white hover:text-white/70 transition-colors"
              >
                Let's work together
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 py-32 border-t border-white/5">
        <div className="flex flex-col items-center text-center reveal">
          <p className="text-[12px] font-semibold tracking-widest uppercase text-[#c4c7c8] mb-4">Contact</p>
          <h2 className="font-instrument text-5xl md:text-7xl text-white leading-none mb-8">
            Let's <span className="italic shimmer-text">build something.</span>
          </h2>
          <p className="text-[#c4c7c8] max-w-md mb-10">
            Have a project in mind, or just want to chat? Drop a line — I usually reply within a day.
          </p>
          <a 
            href="mailto:mr.kailashsahu08@gmail.com"
            className="liquid-glass w-full max-w-xl flex items-center justify-between p-1.5 pl-6 group hover:scale-[1.02] transition-transform"
          >
            <span className="text-white text-lg font-instrument italic">mr.kailashsahu08@gmail.com</span>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined">mail</span>
            </div>
          </a>
        </div>
      </section>

      <footer className="relative z-10 w-full flex flex-col md:flex-row gap-6 justify-between items-center px-6 md:px-16 py-10 border-t border-white/5">
        <div className="text-[10px] font-semibold tracking-widest uppercase text-[#c4c7c8] opacity-60">
          © 2026 Kailash Sahu. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a className="liquid-glass w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform" href="https://github.com/kailashsahu08" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a className="liquid-glass w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform" href="https://www.linkedin.com/in/kailash-sahu-333a7425a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <span className="material-symbols-outlined text-[20px]">work</span>
          </a>
          <a className="liquid-glass w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform" href="https://leetcode.com/u/kailashsahu07/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </a>
          <a className="liquid-glass w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform" href="mailto:mr.kailashsahu08@gmail.com" aria-label="Email">
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
