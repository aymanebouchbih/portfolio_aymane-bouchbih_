"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
    "Salesforce Trailhead - Administration et Développement CRM",
    "Docker & Kubernetes Master Class",
    "DevOps from Scratch",
    "Cloud and Agile Foundations",
    "Introduction to Git and GitHub"
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 relative z-10 px-4 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
                    Mes <span className="text-gradient">certifications</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -15, scale: 1.05 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center text-center w-full md:w-64 border border-slate-200 hover:border-sky-300 shadow-sm group"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6 text-slate-700 group-hover:text-slate-900 group-hover:scale-110 transition-all duration-300">
                                <Award size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{cert}</h3>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
