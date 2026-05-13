"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';


export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden w-full px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-[10] text-center"
            >
                <motion.div
                    animate={{ y: ["-10px", "10px", "-10px"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full bg-gradient-to-tr from-slate-200 via-slate-100 to-sky-100 p-[2px] shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                >
                    {/* Profile Image */}
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden relative shadow-sm">
                        <Image
                            src="/IMG_4390.jpg.jpeg"
                            alt="Aymane Bouchbih"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-slate-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Aymane Bouchbih
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-3xl text-slate-600 font-medium mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Ingénieur Fullstack spécialisé Java / Spring Boot / React
                </motion.h2>

                <motion.p
                    className="max-w-xl mx-auto text-lg text-slate-600 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    Je conçois des applications web professionnelles, sécurisées et évolutives pour accompagner les entreprises dans leur transformation digitale,
                    avec un focus sur les APIs REST, les pipelines CI/CD et les solutions cloud.
                </motion.p>

                <motion.div
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Voir mes projets
                    </a>

                    <a href="/CV_Aymane_Bouchbih.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                        Télécharger le CV
                    </a>

                    <div className="flex items-center justify-center gap-4">
                        <SocialLink href="https://github.com/aymanebouchbih" icon={<Github size={24} />} title="GitHub" />
                        <SocialLink href="https://linkedin.com/in/aymanebouchbih" icon={<Linkedin size={24} />} title="LinkedIn" />
                        <SocialLink href="#contact" icon={<Mail size={24} />} title="Contact" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

function SocialLink({ icon, href, title }: { icon: React.ReactNode; href: string, title?: string }) {
    return (
        <motion.a
            href={href}
            target={href.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={title}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all shadow-sm"
        >
            {icon}
        </motion.a>
    );
}
