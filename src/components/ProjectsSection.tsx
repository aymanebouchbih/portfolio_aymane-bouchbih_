"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
    {
        title: "portfolio_aymane-bouchbih",
        description: "Portfolio personnel présentant les compétences, projets et expériences professionnelles.",
        tech: ["JavaScript", "UI/UX", "Responsive Design"],
        date: "Mai 2026",
        github: "https://github.com/aymanebouchbih/portfolio_aymane-bouchbih"
    },
    {
        title: "stock-management",
        description: "Application TypeScript pour la gestion des stocks et des flux logistiques.",
        tech: ["TypeScript", "Web"],
        date: "Novembre 2025",
        github: "https://github.com/aymanebouchbih/stock-management"
    },
    {
        title: "product_management",
        description: "Application de gestion de produits pour suivre les stocks et améliorer la planification commerciale.",
        tech: ["JavaScript", "Business Logic", "Interactive UI"],
        date: "Décembre 2025",
        github: "https://github.com/aymanebouchbih/product_management"
    },
    {
        title: "NeoDigital",
        description: "Projet JavaScript axé sur la création d'une expérience digitale moderne.",
        tech: ["JavaScript", "Web"],
        date: "Novembre 2025",
        github: "https://github.com/aymanebouchbih/NeoDigital"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 relative z-10 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
                    Projets <span className="text-gradient">importants</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass p-6 rounded-2xl flex flex-col h-full border border-slate-200 hover:border-sky-300 shadow-sm transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between gap-4 mb-3">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    {project.date}
                                </span>
                            </div>
                            <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(tech => (
                                    <span key={tech} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                                    title="View Source"
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
