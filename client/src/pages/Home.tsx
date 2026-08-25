/*
 * Airy Blue Editorial Care — reference-faithful single-page medical portfolio.
 * This page intentionally uses Tailwind utility classes for all component styling.
 */
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Brain,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";

const asset = {
  hero: "/manus-storage/medical-hero_24913b06.jpg",
  profile: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85",
  clinic: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
  care: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=85",
  monogram: "/manus-storage/medical-monogram_07bae3b5.png",
};

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#gallery" },
  { label: "Blog", href: "#insights" },
];

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Cardiac Wellness",
    description: "Preventive care plans shaped around the whole patient.",
    icon: HeartPulse,
    featured: true,
  },
  {
    title: "Precision Treatment",
    description: "Clear, measured treatment for complex heart conditions.",
    icon: Stethoscope,
  },
  {
    title: "Modern Diagnostics",
    description: "Thoughtful testing supported by current clinical tools.",
    icon: Microscope,
  },
  {
    title: "Recovery Planning",
    description: "A confident path forward with practical follow-through.",
    icon: Activity,
  },
  {
    title: "Family Guidance",
    description: "Plain-language explanations for every important decision.",
    icon: Brain,
  },
  {
    title: "Second Opinion",
    description: "An experienced, independent view when you need clarity.",
    icon: ShieldCheck,
  },
];

type ResumeTab = "Education" | "Experience" | "Skills" | "Awards";

type ResumeItem = {
  period: string;
  title: string;
  place: string;
  detail: string;
};

const resumeTabs: ResumeTab[] = ["Education", "Experience", "Skills", "Awards"];

const resumeContent: Record<ResumeTab, ResumeItem[]> = {
  Education: [
    {
      period: "2015 — 2018",
      title: "Fellowship in Cardiology",
      place: "St. Catherine Medical Center",
      detail: "Advanced training in preventative and interventional cardiology.",
    },
    {
      period: "2011 — 2015",
      title: "Doctor of Medicine",
      place: "Northbridge University School of Medicine",
      detail: "Graduated with distinction in clinical medicine and research.",
    },
    {
      period: "2008 — 2011",
      title: "Bachelor of Medical Science",
      place: "Northbridge University",
      detail: "Built a foundation in human biology, diagnostics, and patient care.",
    },
    {
      period: "2006 — 2008",
      title: "Clinical Sciences Diploma",
      place: "Westlake College",
      detail: "Completed early clinical rotations across medicine and surgery.",
    },
  ],
  Experience: [
    {
      period: "2019 — Present",
      title: "Consultant Cardiologist",
      place: "Havenwell Private Clinic",
      detail: "Leading a patient-first practice focused on long-term heart health.",
    },
    {
      period: "2018 — 2019",
      title: "Clinical Cardiologist",
      place: "St. Catherine Medical Center",
      detail: "Managed complex cases across diagnosis, treatment, and recovery.",
    },
    {
      period: "2015 — 2018",
      title: "Cardiology Fellow",
      place: "St. Catherine Medical Center",
      detail: "Supported multidisciplinary teams through diagnosis and intervention.",
    },
    {
      period: "2012 — 2015",
      title: "Resident Physician",
      place: "Northbridge General Hospital",
      detail: "Delivered attentive care across acute and outpatient services.",
    },
  ],
  Skills: [
    {
      period: "01 / 04",
      title: "Preventative Cardiology",
      place: "Advanced clinical focus",
      detail: "Personalized risk assessment, lifestyle planning, and long-term heart health strategies.",
    },
    {
      period: "02 / 04",
      title: "Interventional Care",
      place: "Advanced clinical focus",
      detail: "Clear treatment plans that connect modern diagnostics with confident decision-making.",
    },
    {
      period: "03 / 04",
      title: "Patient Communication",
      place: "Care philosophy",
      detail: "Complex information translated into calm, plain-language conversations.",
    },
    {
      period: "04 / 04",
      title: "Care Coordination",
      place: "Care philosophy",
      detail: "Thoughtful collaboration with families, specialists, and primary care teams.",
    },
  ],
  Awards: [
    {
      period: "2024",
      title: "Patient Care Excellence Award",
      place: "Havenwell Private Clinic",
      detail: "Recognized for thoughtful communication and continuity of care.",
    },
    {
      period: "2022",
      title: "Clinical Research Distinction",
      place: "Northbridge Medical Society",
      detail: "Honored for contributions to preventative cardiology research.",
    },
    {
      period: "2020",
      title: "Rising Physician Award",
      place: "St. Catherine Medical Center",
      detail: "Awarded for leadership in multidisciplinary cardiac care.",
    },
    {
      period: "2018",
      title: "Graduation with Distinction",
      place: "Northbridge University School of Medicine",
      detail: "Completed medical training with distinction in clinical medicine.",
    },
  ],
};

const galleryTiles = [
  {
    src: asset.clinic,
    alt: "Bright treatment room with medical equipment",
    className: "col-span-2 row-span-2 min-h-[17rem]",
  },
  {
    src: asset.care,
    alt: "Physician discussing care with a patient",
    className: "min-h-[10rem]",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    alt: "Physician in a bright clinic",
    className: "min-h-[10rem]",
  },
  {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=85",
    alt: "Stethoscope resting in a clinical setting",
    className: "min-h-[10rem]",
  },
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    alt: "Medical professional preparing equipment",
    className: "min-h-[10rem]",
  },
  {
    src: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=85",
    alt: "Calm modern healthcare interior",
    className: "min-h-[10rem]",
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#087dd1]">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#183348] sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-sm leading-7 text-[#647789]">{copy}</p> : null}
      <div className={align === "center" ? "mx-auto mt-6 h-0.5 w-12 bg-[#087dd1]" : "mt-6 h-0.5 w-12 bg-[#087dd1]"} />
    </div>
  );
}

function AppLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#087dd1] transition-colors duration-200 hover:text-[#075da0]"
    >
      {children}
      <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeResumeTab, setActiveResumeTab] = useState<ResumeTab>("Education");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[#eef7fd] font-body text-[#243b50]">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-[#17364f]" aria-label="MTN Care home">
            <span className="flex size-10 items-center justify-center rounded-full bg-white/85 p-2 shadow-[0_8px_24px_rgba(17,68,106,0.1)] backdrop-blur">
              <img src={asset.monogram} alt="" className="size-full object-contain" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl font-bold tracking-[0.08em]">MTN</span>
              <span className="mt-1 block text-[0.55rem] font-bold uppercase tracking-[0.28em] text-[#087dd1]">Care studio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#365166] transition-colors hover:text-[#087dd1]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-md bg-[#087dd1] px-5 py-3 text-[0.67rem] font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(8,125,209,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#076fb9] active:scale-[0.97]"
            >
              Contact Me
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-white/75 text-[#183348] shadow-sm lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <nav className="mx-5 rounded-xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#365166] hover:bg-[#eef7fd] hover:text-[#087dd1]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[#087dd1] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white"
              >
                Contact Me
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <main>
        <section className="relative px-4 pb-6 pt-4 sm:px-6 lg:px-8 lg:pt-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] shadow-[0_25px_80px_rgba(54,104,140,0.16)] lg:min-h-[41rem] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative flex min-h-[35rem] flex-col justify-center overflow-hidden bg-[#8bc6ec] px-7 pb-12 pt-28 sm:px-12 lg:min-h-0 lg:px-16 lg:pb-20 lg:pt-28">
              <div className="absolute -left-10 top-16 grid grid-cols-5 gap-5 opacity-70" aria-hidden="true">
                {Array.from({ length: 25 }).map((_, index) => (
                  <span key={index} className="size-2 rounded-full bg-white/80" />
                ))}
              </div>
              <div className="absolute -bottom-24 -left-12 size-72 rounded-full border-[36px] border-white/10" aria-hidden="true" />
              <div className="relative z-10 max-w-xl">
                <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#1a638e]">Private cardiology practice</p>
                <h1 className="max-w-md font-display text-6xl font-semibold leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl lg:text-[5.15rem]">
                  Care that keeps your life moving.
                </h1>
                <p className="mt-7 max-w-sm text-sm leading-7 text-[#eaf7ff]">
                  Thoughtful cardiac care, clear answers, and a calm plan for the years ahead.
                </p>
                <a
                  href="#appointment"
                  className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#087dd1] px-5 py-3.5 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_12px_28px_rgba(8,125,209,0.25)] transition duration-200 hover:-translate-y-1 hover:bg-[#066eaf] active:scale-[0.97]"
                >
                  Make appointment
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
              <a href="#services" className="absolute bottom-7 left-7 z-10 flex items-center gap-3 text-white/90 sm:left-12 lg:left-16" aria-label="Scroll to services">
                <span className="flex size-8 items-center justify-center rounded-full border border-white/75">
                  <ChevronDown className="size-4" />
                </span>
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em]">Scroll to explore</span>
              </a>
            </div>
            <div className="relative min-h-[26rem] overflow-hidden bg-[#c8e6f8] sm:min-h-[35rem] lg:min-h-0">
              <img src={asset.hero} alt="Female physician in a bright consultation room" className="absolute inset-0 size-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8bc6ec]/35 via-transparent to-[#123956]/10" />
              <div className="absolute bottom-7 right-7 hidden max-w-[12rem] border-l border-white/75 pl-4 text-white sm:block lg:right-10">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em]">A quieter kind of expertise</p>
                <p className="mt-2 text-xs leading-5 text-white/85">One careful conversation can change the next chapter.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-12">
              <SectionHeading
                eyebrow="A practice with perspective"
                title="Modern medicine, made more human."
                copy="From the first question to the final follow-up, every part of the experience is designed to feel considered, clear, and personal."
              />
              <div className="mt-9 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#d5eaf7] text-[#087dd1]"><HeartPulse className="size-4" /></span>
                  <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#b9ddf2] text-[#087dd1]"><Check className="size-4" /></span>
                  <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#8bc6ec] text-white"><ShieldCheck className="size-4" /></span>
                </div>
                <p className="text-xs leading-5 text-[#6d8192]">A focused team, a measured approach, and room for your questions.</p>
              </div>
            </div>
            <div className="grid auto-rows-[10rem] grid-cols-2 gap-4 sm:auto-rows-[12rem]">
              {galleryTiles.map((tile, index) => (
                <figure key={tile.src} className={`group relative overflow-hidden rounded-2xl bg-[#d8edf9] ${tile.className}`}>
                  <img src={tile.src} alt={tile.alt} className="size-full object-cover transition duration-500 group-hover:scale-105" loading={index > 1 ? "lazy" : undefined} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123956]/40 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-4 left-4 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white opacity-0 transition duration-200 group-hover:opacity-100">View approach</span>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#dff1fc] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.5fr_0.6fr] lg:items-center">
            <div>
              <p className="font-display text-2xl font-semibold leading-tight text-[#183348] sm:text-3xl">15 years of experience with 1,200+ patients supported through meaningful change.</p>
              <a href="#about" className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#087dd1] px-4 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#076fb9] active:scale-[0.97]">Learn more <ArrowUpRight className="size-3.5" /></a>
            </div>
            <div className="hidden h-14 w-px bg-[#a8d5ee] lg:block" />
            <div className="rounded-2xl bg-[#087dd1] p-5 text-white shadow-[0_14px_30px_rgba(8,125,209,0.18)]">
              <div className="flex items-center gap-2 text-[0.63rem] font-bold uppercase tracking-[0.18em] text-white/80"><Clock3 className="size-3.5" /> Time for you</div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-[0.65rem] leading-5 text-white/90">
                <div><p className="font-bold text-white">Monday — Friday</p><p>9:00 am — 4:30 pm</p></div>
                <div><p className="font-bold text-white">Saturday</p><p>10:00 am — 2:00 pm</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Care, in the details" title="Special services for my patients" copy="A focused set of services built to meet you where you are, from prevention through long-term recovery." align="center" />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <a key={service.title} href="#appointment" className="group relative flex min-h-[15rem] flex-col items-center justify-center border border-[#edf3f7] bg-white px-7 py-8 text-center shadow-[0_18px_45px_rgba(61,104,134,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(61,104,134,0.13)]">
                    <span className={`flex size-14 items-center justify-center rounded-full ${service.featured ? "bg-[#087dd1] text-white" : "bg-[#e4f3fc] text-[#087dd1]"} transition duration-300 group-hover:scale-105`}>
                      <Icon className="size-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-[#183348]">{service.title}</h3>
                    <p className="mt-3 max-w-[15rem] text-xs leading-5 text-[#788b9a]">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#087dd1]">Find service <ArrowUpRight className="size-3" /></span>
                    <span className="absolute inset-x-8 bottom-0 h-0.5 origin-left scale-x-0 bg-[#087dd1] transition duration-300 group-hover:scale-x-100" />
                    <span className="absolute right-4 top-4 text-[0.6rem] font-bold text-[#b4dff4]">0{index + 1}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#dff1fc] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-8 -top-8 size-36 rounded-full border-[18px] border-white/60" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#b7ddf3] p-4 shadow-[0_18px_40px_rgba(58,117,151,0.16)]">
                <img src={asset.profile} alt="Dr. Maya Taylor in her clinic" className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-center" loading="lazy" />
                <div className="absolute bottom-8 left-8 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">
                  <p className="font-display text-2xl font-semibold text-[#183348]">15<span className="text-[#087dd1]">+</span></p>
                  <p className="mt-1 text-[0.57rem] font-bold uppercase tracking-[0.16em] text-[#718697]">Years in practice</p>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="A little about me" title="Good care begins with listening." copy="I am Dr. Maya Taylor, a consultant cardiologist who believes the best medical decisions are made when expertise and empathy share the same room. My work is grounded in precise diagnosis, plain-language guidance, and long-term partnership." />
              <div className="mt-9 grid gap-6 border-y border-[#b7dcef] py-7 sm:grid-cols-3">
                <div><p className="font-display text-3xl font-semibold text-[#183348]">1.2k<span className="text-[#087dd1]">+</span></p><p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#6f8494]">Patients supported</p></div>
                <div><p className="font-display text-3xl font-semibold text-[#183348]">24<span className="text-[#087dd1]">/7</span></p><p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#6f8494]">Care mindset</p></div>
                <div><p className="font-display text-3xl font-semibold text-[#183348]">04</p><p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#6f8494]">Clinical awards</p></div>
              </div>
              <a href="#appointment" className="mt-8 inline-flex items-center gap-2 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-[#087dd1] transition hover:text-[#075da0]">Meet me in person <ArrowUpRight className="size-4" /></a>
            </div>
          </div>
        </section>

        <section id="insights" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHeading eyebrow="My professional path" title="Experience that stays curious." copy="Training, practice, and ongoing learning come together in the way I care for every patient." />
              <div role="tablist" aria-label="Résumé categories" className="flex flex-wrap gap-x-2 border-b border-[#dceaf2] pb-0 text-[0.62rem] font-bold uppercase tracking-[0.16em]">
                {resumeTabs.map((tab) => {
                  const isActive = activeResumeTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      id={`resume-tab-${tab.toLowerCase()}`}
                      aria-selected={isActive}
                      aria-controls="resume-panel"
                      onClick={() => setActiveResumeTab(tab)}
                      className={`relative px-3 pb-3 pt-1 transition-colors duration-200 ${isActive ? "text-[#087dd1]" : "text-[#9aaab6] hover:text-[#087dd1]"}`}
                    >
                      {tab}
                      <span className={`absolute inset-x-3 bottom-[-1px] h-0.5 origin-center bg-[#087dd1] transition-transform duration-200 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                    </button>
                  );
                })}
              </div>
            </div>
            <div id="resume-panel" role="tabpanel" aria-labelledby={`resume-tab-${activeResumeTab.toLowerCase()}`} aria-live="polite" className="mt-14 grid gap-x-16 gap-y-10 lg:grid-cols-2">
              {resumeContent[activeResumeTab].map((item, index) => (
                <div key={`${activeResumeTab}-${item.title}-${item.period}`} className="relative border-l-2 border-[#087dd1] pl-7">
                  <span className="absolute -left-[0.47rem] top-0 flex size-3.5 items-center justify-center rounded-full border-2 border-white bg-[#087dd1] ring-1 ring-[#087dd1]" />
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#087dd1]">{item.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-[#183348]">{item.title}</h3>
                  <p className="mt-1 text-xs font-bold text-[#50687a]">{item.place}</p>
                  <p className="mt-3 max-w-md text-xs leading-6 text-[#7a8d9b]">{item.detail}</p>
                  <span className="absolute right-0 top-0 text-[0.6rem] font-bold text-[#c7e8f8]">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="appointment" className="bg-[#dff1fc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.86fr] lg:gap-24">
            <div>
              <SectionHeading eyebrow="Let’s talk about your next step" title="Request an appointment" copy="Share a little about what you need and our team will follow up with a calm, clear next step." />
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block"><span className="mb-2 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#597285]">Your full name</span><input name="name" required type="text" placeholder="Jane Smith" className="w-full rounded-md border border-white bg-white px-4 py-3.5 text-sm text-[#183348] outline-none transition placeholder:text-[#b5c3cc] focus:border-[#087dd1] focus:ring-2 focus:ring-[#087dd1]/15" /></label>
                  <label className="block"><span className="mb-2 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#597285]">Email address</span><input name="email" required type="email" placeholder="you@example.com" className="w-full rounded-md border border-white bg-white px-4 py-3.5 text-sm text-[#183348] outline-none transition placeholder:text-[#b5c3cc] focus:border-[#087dd1] focus:ring-2 focus:ring-[#087dd1]/15" /></label>
                </div>
                <label className="block"><span className="mb-2 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#597285]">How can we help?</span><textarea name="message" required rows={5} placeholder="Tell us what you would like to discuss..." className="w-full resize-none rounded-md border border-white bg-white px-4 py-3.5 text-sm text-[#183348] outline-none transition placeholder:text-[#b5c3cc] focus:border-[#087dd1] focus:ring-2 focus:ring-[#087dd1]/15" /></label>
                <div className="flex flex-wrap items-center gap-5">
                  <button type="submit" className="inline-flex items-center gap-3 rounded-md bg-[#087dd1] px-5 py-3.5 text-[0.67rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_12px_24px_rgba(8,125,209,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#076fb9] active:scale-[0.97]">Book now <ArrowUpRight className="size-4" /></button>
                  {submitted ? <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#087a58]"><Check className="size-4" /> Thank you — we’ll be in touch.</p> : null}
                </div>
              </form>
            </div>
            <div className="lg:pt-20">
              <div className="border-t-2 border-[#087dd1] pt-6">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#087dd1]">Contact info</p>
                <p className="mt-5 max-w-sm text-sm leading-7 text-[#6c8292]">You can reach the practice directly during office hours. For urgent symptoms, please contact your local emergency service.</p>
                <div className="mt-8 space-y-5">
                  <a href="tel:+14155550148" className="group flex items-start gap-4 text-sm text-[#183348]"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[#087dd1]"><Phone className="size-4" /></span><span><span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#8095a4]">Phone number</span><span className="mt-1 block font-semibold group-hover:text-[#087dd1]">+1 415 555 0148</span></span></a>
                  <a href="mailto:hello@mtncare.com" className="group flex items-start gap-4 text-sm text-[#183348]"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[#087dd1]"><Mail className="size-4" /></span><span><span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#8095a4]">Email address</span><span className="mt-1 block font-semibold group-hover:text-[#087dd1]">hello@mtncare.com</span></span></a>
                  <div className="flex items-start gap-4 text-sm text-[#183348]"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-[#087dd1]"><MapPin className="size-4" /></span><span><span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#8095a4]">Permanent address</span><span className="mt-1 block max-w-xs font-semibold leading-6">120 Harbor View, Suite 4B<br />San Francisco, CA 94103</span></span></div>
                </div>
                <div className="mt-9 flex items-center gap-3 text-xs font-semibold text-[#6c8292]"><CalendarDays className="size-4 text-[#087dd1]" /> In-person and video consultations available.</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#087dd1] px-5 py-6 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <span className="flex size-8 items-center justify-center rounded-full bg-white p-1.5"><img src={asset.monogram} alt="" className="size-full object-contain" /></span>
            <span className="font-display text-lg font-bold tracking-[0.1em]">MTN / CARE</span>
          </a>
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/75">© 2026 Maya Taylor, MD. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="flex size-8 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-[#087dd1]"><Linkedin className="size-3.5" /></a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="flex size-8 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-[#087dd1]"><Instagram className="size-3.5" /></a>
            <a href="#appointment" aria-label="Book an appointment" className="flex size-8 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-[#087dd1]"><ArrowDownRight className="size-3.5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
