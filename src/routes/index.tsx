import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

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

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video fade
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
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
    return () => cancelAnimationFrame(raf);
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
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const tools = ["React", "TypeScript", "Node.js", "TanStack", "Python", "PostgreSQL", "Tailwind", "AWS"];
  const marqueeWords = ["Full Stack", "✦", "React", "✦", "TypeScript", "✦", "Node.js", "✦", "Postgres", "✦", "Design Systems", "✦", "AI", "✦"];

  return (
    <div className="dark grain relative">
      {/* Ambient orbs */}
      <div className="orb bg-[#4f46e5] w-[420px] h-[420px] -top-32 -left-32" />
      <div className="orb bg-[#ec4899] w-[360px] h-[360px] top-[40vh] -right-24" style={{ animationDelay: "3s" }} />
      <div className="orb bg-[#06b6d4] w-[420px] h-[420px] top-[120vh] left-1/2 -translate-x-1/2" style={{ animationDelay: "6s" }} />

      {/* Floating nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl animate-rise">
        <div className="liquid-glass !rounded-full flex items-center justify-between pl-5 pr-2 py-2 border border-white/10">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-instrument text-lg leading-none transition-transform group-hover:rotate-12">
              K
            </span>
            <span className="font-instrument text-xl tracking-tight text-white hidden sm:inline">
              Kailash<span className="italic text-[#c4c7c8]"> Sahu</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            <a className="px-4 py-2 rounded-full text-white bg-white/5 hover:bg-white/10 transition-colors" href="#work">Work</a>
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
            Portfolio · Full Stack Developer
          </p>
          <h1 className="animate-rise delay-200 font-instrument text-5xl md:text-8xl lg:text-9xl mb-6 leading-[0.9]">
            <span className="text-white">Hi, I'm </span>
            <span className="italic shimmer-text">Kailash Sahu</span>
          </h1>
          <h2 className="animate-rise delay-300 font-instrument text-2xl md:text-4xl text-[#c4c7c8] mb-10 italic max-w-3xl">
            A full stack developer building thoughtful digital experiences.
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
                href="#contact"
                className="liquid-glass px-10 py-4 text-[12px] font-semibold tracking-widest uppercase text-white border border-white/5"
              >
                Get in Touch
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

      {/* WORK */}
      <section id="work" className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 py-32">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#c4c7c8] mb-3">Selected Work</p>
            <h2 className="font-instrument text-5xl md:text-7xl text-white leading-none">
              Projects, <span className="italic shimmer-text">crafted with care.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Nimbus Dashboard", tag: "SaaS · Analytics", desc: "A realtime analytics dashboard with custom charting and role-based access." },
            { title: "Lumen Commerce", tag: "E-commerce · Stripe", desc: "Headless storefront with edge-rendered product pages and instant checkout." },
            { title: "Atlas CMS", tag: "Internal Tool", desc: "Custom content platform for editors, built on Postgres and TanStack Start." },
            { title: "Pulse Chat", tag: "Realtime · AI", desc: "Multi-user chat with streaming AI assistants and persistent memory." },
          ].map((p, i) => (
            <div
              key={p.title}
              className="project-card liquid-glass !rounded-2xl p-8 group cursor-pointer reveal"
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
              I'm Kailash — a full stack developer who enjoys the entire stack, from interface details to database design. I care about performance, accessibility, and writing code that's a pleasure to maintain.
            </p>
            <p>
              I work across React, TypeScript, Node, Python, and Postgres, and I'm always exploring the edges of what's possible on the web.
            </p>
            <div className="pt-6">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">Toolkit</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <span
                    key={t}
                    className="liquid-glass px-4 py-2 text-[11px] tracking-widest uppercase text-white hover:scale-105 transition-transform"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
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
          <div className="liquid-glass w-full max-w-xl flex items-center p-1.5 pl-6">
            <input
              className="bg-transparent border-none focus:ring-0 focus:outline-none flex-1 text-white placeholder:text-white/40"
              placeholder="your@email.com"
              type="email"
            />
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black transition-transform hover:scale-110 hover:rotate-12 active:scale-95">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 w-full flex flex-col md:flex-row gap-6 justify-between items-center px-6 md:px-16 py-10 border-t border-white/5">
        <div className="text-[10px] font-semibold tracking-widest uppercase text-[#c4c7c8] opacity-60">
          © 2026 Kailash Sahu. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a className="liquid-glass w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform" href="#" aria-label="GitHub">
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a className="liquid-glass w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform" href="#" aria-label="LinkedIn">
            <span className="material-symbols-outlined text-[20px]">work</span>
          </a>
          <a className="liquid-glass w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform" href="mailto:hello@kailash.dev" aria-label="Email">
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
