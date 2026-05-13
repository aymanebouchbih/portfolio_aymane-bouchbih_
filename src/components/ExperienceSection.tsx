"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Stagiaire Développeur Web Full Stack",
        company: "INWI Casablanca",
        date: "03/2024 - 08/2024",
        desc: "Analyse des besoins et développement d'une application de gestion de catalogue produits avec backend Spring Boot, frontend React et API REST sécurisée par JWT.",
    },
    {
        role: "Développeur Full Stack Freelance",
        company: "Casablanca",
        date: "01/2025 - Présent",
        desc: "Réalisation d'applications web Spring Boot & React pour des clients PME, création d'API REST sécurisées, mise en place de CI/CD avec Azure DevOps et containerisation Docker.",
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 relative z-10 px-4 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="text-4xl font-bold tracking-tight text-center mb-16 text-slate-900">
                    Mon <span className="text-gradient">expérience</span>
                </h2>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-[16px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-slate-300 via-slate-200 to-transparent transform md:-translate-x-1/2 opacity-50" />

                    {experiences.map((exp, i) => (
                        <div key={i} className="relative mb-12 flex flex-col md:flex-row items-start">

                            {/* Floating Node */}
                            <motion.div
                                className="absolute left-[8px] md:left-1/2 w-5 h-5 rounded-full bg-sky-500 transform md:-translate-x-1/2 mt-1 shadow-sm"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.5, rotate: 90 }}
                            />

                            {/* Content left/right logic */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className={`w-full md:w-[45%] pl-12 md:pl-0 glass p-6 rounded-2xl ${i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                                    }`}
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                                <h4 className="text-sky-700 font-semibold mb-2 flex items-center gap-2 justify-start md:justify-end">
                                    {i % 2 === 0 ? "" : <Briefcase size={16} />}
                                    {exp.company}
                                    {i % 2 === 0 ? <Briefcase size={16} className="ml-2" /> : ""}
                                </h4>
                                <div className="text-xs text-slate-500 font-medium mb-4">{exp.date}</div>
                                <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
