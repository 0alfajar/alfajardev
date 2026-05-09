import imgHero from "../imports/Home/image-hero.png";
import imgProject1 from "../imports/image.png";
import imgProject2 from "../imports/image-1.png";
import imgProject3 from "../imports/image-4.png";
import imgProject4 from "../imports/image-3.png";
import svgPaths from "../imports/Home/svg-vgjwxumayr";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`block ${className}`} fill="none" viewBox="0 0 38 38" width="38" height="38">
      <path d={svgPaths.p180d4000} fill="black" />
    </svg>
  );
}

function ProjectCard({
  image,
  title,
  bg = "white",
}: {
  image: string;
  title: string;
  bg?: string;
}) {
  return (
    <div className="flex flex-col gap-5 flex-1 min-w-0">
      <div
        className="rounded-[32px] overflow-hidden flex items-center justify-center"
        style={{ height: "300px", background: bg === "black" ? "#000" : "transparent" }}
      >
        <img
          src={image}
          alt={title}
          className={`w-full h-full ${bg === "black" ? "object-contain p-8" : "object-cover"}`}
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="shrink-0 w-10 h-10 flex items-center justify-center rotate-45">
          <ArrowIcon className="w-8 h-8" />
        </div>
        <span
          className="text-black leading-tight"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(18px, 2vw, 28px)" }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(480px, 60vw, 700px)" }}>
        <img src={imgHero} alt="Alfajar" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

        {/* Nav */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-8 py-6 md:px-14 md:py-8">
          <span className="text-white text-xl" style={{ fontWeight: 500 }}>Alfajar</span>
          <p
            className="text-white text-right opacity-90 max-w-[340px] leading-snug hidden md:block"
            style={{ fontSize: "13px", fontWeight: 300 }}
          >
            Passionate AI/ML Engineer, dedicated to developing robust machine learning models and
            scalable backend architectures
          </p>
        </div>

        {/* Big title */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pb-6">
          <div className="flex w-max animate-marquee">
            <h1
              className="text-white whitespace-nowrap leading-none select-none pr-8 md:pr-16"
              style={{ fontWeight: 500, fontSize: "clamp(64px, 14vw, 200px)" }}
            >
              AI Engineer &amp; Software Developer
            </h1>
            <h1
              className="text-white whitespace-nowrap leading-none select-none pr-8 md:pr-16"
              style={{ fontWeight: 500, fontSize: "clamp(64px, 14vw, 200px)" }}
            >
              AI Engineer &amp; Software Developer
            </h1>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="px-8 py-16 md:px-14 md:py-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <p
            className="text-black max-w-[620px] leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(16px, 1.8vw, 24px)", fontWeight: 500 }}
          >
            Driven by a deep interest in artificial intelligence, I build complex algorithms and
            data-driven solutions. I currently working on computer vision, extracting meaningful metrics
            from complex datasets, and designing secure system architectures.
          </p>
          <div className="flex flex-col items-end gap-6 max-w-[380px]">
            <p
              className="text-[#616161] text-right leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 1.4vw, 18px)", fontWeight: 300 }}
            >
              My expertise in building machine learning and engineering robust backend
              infrastructures places me at the intersection of advanced data processing and software
              development.
            </p>
            <button className="flex items-center gap-2 group">
              <span
                className="text-black"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(16px, 1.5vw, 22px)" }}
              >
                More about me
              </span>
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                <ArrowIcon className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── MY WORKS ── */}
      <section className="px-8 pb-20 md:px-14 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <h2
            className="text-black leading-none"
            style={{ fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 500 }}
          >
            My Works
          </h2>
          <p
            className="text-black max-w-[360px] uppercase leading-relaxed text-right"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(11px, 1.1vw, 15px)", fontWeight: 300 }}
          >
            Here's a selection of projects that showcase my expertise in machine learning, algorithm
            development, and system architecture.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-8">
            <ProjectCard image={imgProject1} title="Ocular Disease Classification" />
            <ProjectCard image={imgProject2} title="CURVED" />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <ProjectCard image={imgProject3} title="National Library Collaboration Portal" />
            <ProjectCard image={imgProject4} title="Hafidz Tracker" />
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <button
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#aeaeae] hover:bg-gray-50 transition-colors"
            style={{ fontSize: "16px" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-black inline-block" />
            <span className="text-black">Explore more</span>
          </button>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="px-8 py-16 md:px-14 max-w-[1400px] mx-auto">
          <p className="text-black mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(12px, 1vw, 16px)" }}>
            That's all for now.
          </p>
          <div className="mb-10">
            <h2 className="text-black leading-tight" style={{ fontSize: "clamp(36px, 6vw, 77px)", fontWeight: 400 }}>
              Got a project in mind?
            </h2>
            <h2 className="text-black leading-tight" style={{ fontSize: "clamp(36px, 6vw, 77px)", fontWeight: 400 }}>
              Let's talk
            </h2>
          </div>
          <div className="w-full h-px bg-black mb-10" />
          <div
            className="flex flex-col sm:flex-row justify-between gap-8"
            style={{ alignItems: "center" }}
          >
            <div className="flex flex-col sm:flex-row gap-10">
              <div>
                <p className="text-[#7e7e7e] mb-1" style={{ fontSize: "14px" }}>Email:</p>
                <a
                  href="mailto:alfajardev@gmail.com"
                  className="text-black hover:opacity-70 transition-opacity"
                  style={{ fontSize: "clamp(16px, 1.8vw, 22px)", textDecoration: "none" }}
                >
                  alfajardev@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[#7e7e7e] mb-1" style={{ fontSize: "14px" }}>Github</p>
                <a
                  href="https://github.com/0alfajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:opacity-70 transition-opacity"
                  style={{ fontSize: "clamp(16px, 1.8vw, 22px)", textDecoration: "none" }}
                >
                  0alfajar
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}