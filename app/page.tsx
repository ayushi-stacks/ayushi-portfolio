"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import Threads from "@/components/threads-icon" // Import Threads icon component
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { TypingText } from "@/components/typing-text"

export default function Portfolio() {
  const [softwareCurrentSlide, setSoftwareCurrentSlide] = useState(0)
  const [designCurrentSlide, setDesignCurrentSlide] = useState(0)

  const softwareProjects = [
    {
      title: "Haemologix",
      description: "Real time blood, plasma, platelets, shortage alert and Donor mobilization system",
      tags: ["Next.js", "Tailwind CSS"],
      image: "/haemologix-screenshot.png",
      demoUrl: "https://www.haemologix.in/",
      repoUrl: "https://github.com/ayushi-stacks/Haemologix-final.git",
      type: "software",
    },
    {
      title: "HackHub",
      description: "HackHub is a modern web platform designed to host and manage hackathons seamlessly",
      tags: ["TypeScript", "Next.js", "Tailwind CSS"],
      image: "/hackhub-screenshot.png",
      demoUrl: "https://hackhub-geeks.vercel.app/",
      repoUrl: "https://github.com/ayushi-stacks/HackHub-final.git",
      type: "software",
    },
    {
      title: "CarbonIQ",
      description:
        "An app to calculate and track carbon footprints with visual insights, eco-friendly product recommendations, and incentive-based rewards to promote sustainable living",
      tags: ["UI/UX", "React.js", "Front-End Development"],
      image: "/carboniq-screenshot.png",
      demoUrl: "https://codershub-e-summit-2024.vercel.app/",
      repoUrl: "https://github.com/ayushi-stacks/CodersHub-ESummit-2024.git",
      type: "software",
    },
  ]

  const designProjects = [
    {
      title: "Analytics Dashboard UI",
      description:
        "Data-driven dashboard design featuring metrics visualization, reports, and performance insights in a modern dark theme.",
      tags: ["Figma", "UI Design", "Dashboard Design"],
      image: "/analytics-dashboard-ui.png",
      viewUrl:
        "https://www.figma.com/design/kFq6pN3sckjcTKlLn0IQm9/Vision-UI-Dashboard?node-id=580-2363&t=lxNkiNCaXCJ8e0e3-1",
      type: "design",
    },
    {
      title: "Hult Prize Campus Poster",
      description:
        "Eye-catching promotional poster design for Hult Prize OnCampus Program 2025 at University of Calcutta featuring modern gradient aesthetics and clear call-to-action elements.",
      tags: ["Canva", "Poster Design", "Event Marketing", "Brand Identity"],
      image: "/hult-prize-poster.png",
      viewUrl:
        "https://www.canva.com/design/DAGYo8ymBeY/QMSrAbP4Zgy__L1CjSxr6w/edit?utm_content=DAGYo8ymBeY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      type: "design",
    },
    {
      title: "Hult Prize Information Brochure",
      description:
        "Professional multi-panel brochure design showcasing Hult Prize program details, university information, and future endeavors with clean layout and strategic information hierarchy.",
      tags: ["Canva", "Brochure Design", "Information Design", "Layout"],
      image: "/hult-prize-brochure.png",
      viewUrl:
        "https://www.canva.com/design/DAGeh7LgW0k/2HwL7XKL58Hpb4CZj41BpA/edit?utm_content=DAGeh7LgW0k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      type: "design",
    },
    {
      title: "Product Landing Page Design",
      description:
        "Modern and responsive landing page crafted to highlight product features, benefits, and call-to-action elements for maximum conversions.",
      tags: ["Figma", "UI/UX", "Prototyping", "Landing Page"],
      image: "/product-landing-page.png",
      viewUrl:
        "https://www.figma.com/design/vdUptafmjJASt7uhswVCOa/Food-delvery-Landing-Page?node-id=0-1&t=BwLKLxhLRHwccvrY-1",
      type: "design",
    },
    {
      title: "Hult Prize ID Cards Design",
      description:
        "Professional identity card system design featuring multiple role hierarchies with consistent branding, modern layout, and clear organizational structure for university chapter members.",
      tags: ["Canva", "Identity Design", "Brand System", "Print Design"],
      image: "/hult-prize-id-cards.png",
      viewUrl:
        "https://www.canva.com/design/DAGfeNG9jmo/joEwKWabPy7ZPxf_ysYrFA/edit?utm_content=DAGfeNG9jmo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      type: "design",
    },
    {
      title: "Food Delivery Platform Design",
      description:
        "Fresh and interactive UI for a food delivery service, highlighting user engagement, product showcase, and easy navigation.",
      tags: ["Figma", "Wireframing", "UI Prototyping", "App Design"],
      image: "/food-delivery-platform.png",
      viewUrl:
        "https://www.figma.com/design/vdUptafmjJASt7uhswVCOa/Food-delvery-Landing-Page?node-id=0-1&t=BwLKLxhLRHwccvrY-1",
      type: "design",
    },
    {
      title: "SDG Mission Campaign Design",
      description:
        "Inspiring campaign poster showcasing the UN's 17 Sustainable Development Goals with powerful messaging about innovation, sustainability, and transformation for global impact.",
      tags: ["Canva", "Campaign Design", "Social Impact", "Event Graphics"],
      image: "/sdg-mission-campaign.png",
      viewUrl:
        "https://www.canva.com/design/DAGZNPWOZ5Q/ks3fRR9ncU7MBdCsyhcuvw/edit?utm_content=DAGZNPWOZ5Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      type: "design",
    },
    {
      title: "Zero Hunger Awareness Campaign",
      description:
        "Impactful social awareness poster design highlighting UN SDG Goal 2 - Zero Hunger, featuring compelling statistics and sustainable solutions with vibrant visual storytelling.",
      tags: ["Canva", "Social Impact Design", "Campaign Design", "Awareness"],
      image: "/zero-hunger-campaign.png",
      viewUrl:
        "https://www.canva.com/design/DAGcp70HCIU/cMwm4tMi3e_OJBAa9fqcxQ/edit?utm_content=DAGcp70HCIU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      type: "design",
    },
  ]

  const nextSoftwareSlide = () => {
    setSoftwareCurrentSlide((prev) => (prev + 1) % softwareProjects.length)
  }

  const prevSoftwareSlide = () => {
    setSoftwareCurrentSlide((prev) => (prev - 1 + softwareProjects.length) % softwareProjects.length)
  }

  const nextDesignSlide = () => {
    setDesignCurrentSlide((prev) => (prev + 1) % designProjects.length)
  }

  const prevDesignSlide = () => {
    setDesignCurrentSlide((prev) => (prev - 1 + designProjects.length) % designProjects.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-25"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-block"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-white drop-shadow-lg" style={{ color: "#ffffff" }}>
                Hello,
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
                <TypingText text="Ayushi this side!" speed={150} />
              </span>
            </h1>
            <div className="mt-3">
              <div className="relative space-y-3 sm:space-y-4 flex flex-col items-center lg:items-start">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 ml-4 sm:ml-8 shadow-lg animate-float w-4/5 sm:w-2/3 md:w-1/2 lg:w-[51%]">
                  <div className="absolute -left-3 sm:-left-4 top-4 sm:top-6 w-0 h-0 border-t-[12px] sm:border-t-[15px] border-t-transparent border-r-[16px] sm:border-r-[20px] border-r-white/80 border-b-[12px] sm:border-b-[15px] border-b-transparent" />
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">Designer</p>
                  <p className="text-sm sm:text-base text-gray-600">by day.</p>
                </div>
                <div
                  className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 ml-8 sm:ml-16 shadow-lg animate-float w-4/5 sm:w-2/3 md:w-1/2 lg:w-[47%]"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="absolute -left-3 sm:-left-4 top-4 sm:top-6 w-0 h-0 border-t-[12px] sm:border-t-[15px] border-t-transparent border-r-[16px] sm:border-r-[20px] border-r-white/80 border-b-[12px] sm:border-b-[15px] border-b-transparent" />
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">Developer</p>
                  <p className="text-sm sm:text-base text-gray-600">by night.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-sm sm:text-base px-4 sm:px-6"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center">
                  see what i've been creating{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500 bg-transparent text-sm sm:text-base px-4 sm:px-6"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <Link href="https://github.com/ayushi-stacks" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ayushi-mandal-6412a9290"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:ayushistacks@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="https://www.threads.com/@ayyuushi._" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
                >
                  <Threads className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Threads</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-8 lg:mt-0">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-l from-purple-500 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-pulse"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-12 lg:mt-16">
            {/* LEFT COLUMN: stacked photo + info */}
            <div className="flex flex-col gap-4 sm:gap-6 h-full">
              {/* Photo card */}
              <div className="relative flex-1 min-h-64 sm:min-h-72 lg:min-h-[360px]">
                <div className="absolute -inset-2 sm:-inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70" />
                <div className="relative h-full rounded-xl overflow-hidden border border-zinc-800">
                  <img
                    src="/images/ayushi.jpg"
                    alt="Ayushi working on a laptop at a cafe"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Info + Languages card */}
              <GlassmorphicCard>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm text-zinc-500">Name</div>
                    <div className="font-medium text-sm sm:text-base">Ayushi Mandal</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-sm sm:text-base break-all">ayushistacks@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm text-zinc-500">Location</div>
                    <div className="font-medium text-sm sm:text-base">Kolkata, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500 text-sm sm:text-base">Open to opportunities</div>
                  </div>
                  <div className="space-y-1 col-span-1 sm:col-span-2">
                    <div className="text-xs sm:text-sm text-zinc-500">Languages</div>
                    <div className="font-medium text-sm sm:text-base">English, Bengali, Hindi</div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>

            {/* RIGHT COLUMN: description + resume button */}
            <div className="h-full flex">
              <div className="flex-1">
                <GlassmorphicCard className="h-full">
                  <div className="inline-block mb-4 sm:mb-6">
                    <div className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                      <h3 className="text-base sm:text-lg font-bold text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Educational Background
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-zinc-300">
                        <span className="font-bold text-white">B.Tech in Optics and Optoelectronics</span>, 2nd year,
                        <span className="text-purple-400 font-medium"> University of Calcutta</span> (2024-2028)
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-zinc-300">
                        <span className="font-bold text-white">Class XII (CBSE)</span> –
                        <span className="text-pink-400 font-bold">95%</span>,
                        <span className="text-purple-400 font-medium"> B.D.M. International School</span> (2024)
                      </p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-zinc-300">
                        <span className="font-bold text-white">Class X (CBSE)</span> –
                        <span className="text-pink-400 font-bold">96%</span>,
                        <span className="text-purple-400 font-medium"> B.D.M. International School</span> (2022)
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-zinc-300 mb-3 sm:mb-4">
                    My journey in tech started with a <span className="font-bold text-white">strong foundation</span> in
                    languages like
                    <span className="text-purple-400 font-medium"> Python</span> and
                    <span className="text-purple-400 font-medium"> C++</span>. I've been creating
                    <span className="font-bold text-white"> small projects since school</span>, which gradually led to
                    <span className="text-pink-400 font-medium"> curiosity and hands-on learning</span> which paved the
                    way for me to participate in
                    <span className="font-bold text-white"> hackathons and real-world applications</span>, where I
                    continue to explore
                    <span className="text-purple-400 font-medium"> innovation and teamwork</span>.
                  </p>

                  <p className="text-sm hidden lg:block sm:text-base lg:text-lg text-zinc-300 mb-6 sm:mb-8">
                    With a <span className="font-bold text-white">strong creative streak</span>, I explore
                    <span className="text-pink-400 font-medium"> UI/UX and graphic design</span> through hands-on
                    projects — from designing
                    <span className="font-bold text-white"> school posters</span> to crafting
                    <span className="text-purple-400 font-medium"> social media visuals</span> and building
                    <span className="text-pink-400 font-medium"> websites</span>. My work blends
                    <span className="font-bold text-white"> functionality with aesthetics</span>, aiming to make digital
                    experiences both
                    <span className="text-purple-400 font-medium"> intuitive and visually appealing</span>.
                  </p>

                  <div className="mt-6 sm:mt-8">
                    <Link
                      href="https://drive.google.com/file/d/1kpCrGVuMugdK-irTfsGqlGWAIoOGGN7u/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm sm:text-base px-4 sm:px-6">
                        View Resume
                      </Button>
                    </Link>
                  </div>
                </GlassmorphicCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-bl from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tr from-pink-500 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="space-y-8 sm:space-y-12 mt-12 lg:mt-16">
            {/* Development Skills */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Development
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="TypeScript" level={85} />
                <SkillBadge name="React" level={95} />
                <SkillBadge name="Next.js" level={90} />
                <SkillBadge name="Node.js" level={80} />
                <SkillBadge name="HTML/CSS" level={95} />
                <SkillBadge name="Python" level={85} />
                <SkillBadge name="C++" level={75} />
                <SkillBadge name="PostgreSQL" level={70} />
                <SkillBadge name="Git" level={85} />
              </div>
            </div>

            {/* UI/UX Skills */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  UI/UX Design
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                <SkillBadge name="Figma" level={90} />
                <SkillBadge name="Adobe XD" level={80} />
                <SkillBadge name="Tailwind CSS" level={90} />
                <SkillBadge name="Sketch" level={75} />
                <SkillBadge name="Prototyping" level={80} />
                <SkillBadge name="User Research" level={75} />
              </div>
            </div>

            {/* Graphic Design Skills */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Graphic Design
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                <SkillBadge name="Adobe Illustrator" level={85} />
                <SkillBadge name="Adobe Photoshop" level={90} />
                <SkillBadge name="Canva" level={95} />
                <SkillBadge name="Adobe InDesign" level={80} />
                <SkillBadge name="Procreate" level={85} />
                <SkillBadge name="Brand Design" level={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-1/2 right-1/2 w-88 h-88 bg-gradient-to-l from-purple-500 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-pink-600 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-22"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="space-y-12 sm:space-y-16 mt-12 lg:mt-16">
            {/* Software Projects */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Software Projects
                </span>
              </h3>

              {/* Desktop Grid - hidden on mobile */}
              <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {softwareProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              <div className="md:hidden relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${softwareCurrentSlide * 100}%)` }}
                  >
                    {softwareProjects.map((project, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <ProjectCard {...project} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSoftwareSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-full flex items-center justify-center text-white hover:bg-zinc-700/80 transition-all duration-200 hover:scale-110"
                  disabled={softwareCurrentSlide === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextSoftwareSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-full flex items-center justify-center text-white hover:bg-zinc-700/80 transition-all duration-200 hover:scale-110"
                  disabled={softwareCurrentSlide === softwareProjects.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 gap-2">
                  {softwareProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSoftwareCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === softwareCurrentSlide ? "bg-purple-400 w-6" : "bg-zinc-600 hover:bg-zinc-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Design Projects */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Design Projects
                </span>
              </h3>

              {/* Desktop Grid - hidden on mobile */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {designProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              <div className="md:hidden relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${designCurrentSlide * 100}%)` }}
                  >
                    {designProjects.map((project, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <ProjectCard {...project} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevDesignSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-full flex items-center justify-center text-white hover:bg-zinc-700/80 transition-all duration-200 hover:scale-110"
                  disabled={designCurrentSlide === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextDesignSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-full flex items-center justify-center text-white hover:bg-zinc-700/80 transition-all duration-200 hover:scale-110"
                  disabled={designCurrentSlide === designProjects.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 gap-2">
                  {designProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setDesignCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === designCurrentSlide ? "bg-purple-400 w-6" : "bg-zinc-600 hover:bg-zinc-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-20 left-1/2 w-76 h-76 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-16"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-12 lg:mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-68 h-68 bg-gradient-to-tl from-pink-500 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-18"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="flex flex-col items-center mt-12 lg:mt-16">
            <div className="flex gap-6 sm:gap-8 mb-6 sm:mb-8">
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushistacks@gmail.com" target="_blank">
                <div className="group relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 transition-all duration-300 group-hover:text-purple-300" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/ayushi-mandal-6412a9290"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                    <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 transition-all duration-300 group-hover:text-purple-300" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </Link>

              <Link href="https://github.com/ayushi-stacks" target="_blank" rel="noopener noreferrer">
                <div className="group relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                    <Github className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 transition-all duration-300 group-hover:text-purple-300" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </Link>

              <Link href="https://www.threads.com/@ayyuushi._" target="_blank" rel="noopener noreferrer">
                <div className="group relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                    <Threads className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 transition-all duration-300 group-hover:text-purple-300" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </Link>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 text-center px-4">
              Available for <span className="text-purple-400 font-medium">freelance work</span> and{" "}
              <span className="text-pink-400 font-medium">part-time work opportunities</span> ✨
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-bold text-lg sm:text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Ayushi</span>
              <span className="text-zinc-300">Mandal</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">2025 Ayushi Mandal. All rights reserved.</p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <Link href="https://github.com/ayushi-stacks" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/ayushi-mandal-6412a9290" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:ayushistacks@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="https://www.threads.com/@ayyuushi._" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
              >
                <Threads className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Threads</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
