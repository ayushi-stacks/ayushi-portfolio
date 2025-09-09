"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Design & Art Club Member",
company: "School Design & Art Club",
period: "2018 - 2024",
description: "Contributed to creative direction for school events and competitions. Designed posters, stage backdrops, and digital artwork to promote cultural programs and exhibitions.",
  },
  {
    title: "Frontend Developer & UI/UX Designer",
    company: "Hackathons - SIH 2k24, JU E-Summit, Tech-a-thon, 23v Startup Sprint",
    period: "2024 - present",
    description:
      "Built responsive web apps and prototypes & collaborated with teammates to design intuitive UI/UX and deliver innovative project solutions under tight deadlines.",
  },
  {
    title: "Graphic Designer",
    company: "2025 Hult OnCampus CU Chapter",
    period: "2024 - 2025",
    description:
      "Designed digital and print graphics for event promotions, social media campaigns, and brand communication. Recognized by Hult International Business School",
  },
  {
    title: "Freelance Frontend Developer",
company: "Misc. / Clients",
period: "2025 - Present",
description: "Developed and deployed responsive web applications for multiple companies and clients, satisfying their requirements."
,
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
         "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
        >
          <motion.div
            className={`w-1/2 ${index % 2 === 0 ? "pl-10" : "pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden md:rounded-xl md:bg-zinc-800/50 md:backdrop-blur-sm md:border md:border-zinc-700/50 p-1 md:p-6 transition-all duration-300 md:hover:border-purple-500/50">
              <div className=" hidden md:absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-md md:text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 text-sm mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300 text-sm">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          
        </div>
      ))}
    </div>
  )
}
