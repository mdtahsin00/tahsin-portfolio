import Image from "next/image";
import { profile, roles, socials } from "@/data/profile";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import Spot from "@/components/Spot";
import Roles from "@/components/Roles";
import Reveal from "@/components/Reveal";

const glass = "rounded-3xl border border-line bg-white/5 backdrop-blur-md";
const allTools = skills.flatMap((s) => s.tools);

export default function Home() {
  return (
    <>
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>

      <nav className="sticky top-4 z-50 mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-line bg-bg/60 px-6 py-3 backdrop-blur-xl">
        <a href="#top" className="font-display text-lg font-semibold">MTS</a>
        <div className="flex gap-6 text-sm text-mute">
          <a href="#skills" className="hover:text-ink">Skills</a>
          <a href="#projects" className="hover:text-ink">Projects</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <header className="mx-auto grid max-w-5xl items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
          <div>
            <h1 className="gradient-text font-display text-6xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 font-display text-2xl md:text-3xl">
              I&apos;m a <Roles roles={roles} />
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute">{profile.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-violet to-cyan px-7 py-3 font-medium text-bg shadow-[0_0_40px_#7c5cff66] transition hover:scale-105">
                See projects
              </a>
              <a href="#contact" className="rounded-full border border-line bg-white/5 px-7 py-3 font-medium backdrop-blur transition hover:bg-white/10">
                Get in touch
              </a>
            </div>
          </div>

          <div className="float relative mx-auto w-full max-w-sm">
            <div className="ring">
              <div className="overflow-hidden rounded-[1.8rem] bg-bg">
                <Image src="/photo.jpg" alt={`Portrait of ${profile.name}`} width={800} height={1000} priority className="h-auto w-full object-cover" />
              </div>
            </div>
            {/* <div className={`${glass} absolute -bottom-5 -left-4 px-5 py-3 text-sm`}>
              Based in {profile.location}
            </div> */}
          </div>
        </header>

        {/* Tool marquee */}
        <div className="overflow-hidden border-y border-line py-5" aria-hidden="true">
          <div className="marquee gap-4 pr-4">
            {[...allTools, ...allTools].map((t, i) => (
              <span key={i} className="whitespace-nowrap rounded-full border border-line bg-white/5 px-5 py-2 text-mute">{t}</span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">What I do</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {skills.map((s) => (
                <Spot key={s.area} className={`${glass} p-7`}>
                  <h3 className="font-display text-2xl font-semibold">{s.area}</h3>
                  <p className="mt-3 text-mute">{s.summary}</p>
                  {s.tools.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.tools.map((t) => (
                        <li key={t} className="rounded-full border border-line bg-white/5 px-3 py-1 text-sm">{t}</li>
                      ))}
                    </ul>
                  )}
                </Spot>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Projects</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <Spot key={p.title} className={`${glass} flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1`}>
                  <div
                    className="flex h-56 items-center justify-center bg-cover bg-center text-7xl"
                    style={{ backgroundImage: p.image ? `url(${p.image})` : `radial-gradient(circle at 50% 50%, ${p.color}66, transparent 70%)` }}
                    aria-hidden="true"
                  >
                    {!p.image && p.emoji}
                  </div>
                  <div className="flex flex-1 flex-col border-t border-line p-7">
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-mute">{p.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-mute">{t}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex gap-5 font-medium">
                      <a href={p.live} target="_blank" rel="noreferrer" className="text-cyan hover:underline underline-offset-4">Visit site ↗</a>
                      {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">View code</a>}
                    </div>
                  </div>
                </Spot>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="gradient-text font-display text-5xl font-semibold md:text-7xl">Let&apos;s connect</h2>
            <ul className="mt-10 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="block rounded-full border border-line bg-white/5 px-5 py-2.5 backdrop-blur transition hover:border-violet hover:bg-violet/20">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-mute">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </>
  );
}
