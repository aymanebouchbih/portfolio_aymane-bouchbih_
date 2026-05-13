"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 relative z-10 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass rounded-3xl p-8 md:p-12"
            >
                <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                            À propos de <span className="text-gradient">moi</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Ingénieur Fullstack formé en MIAGE à l&apos;École Marocaine des Sciences d&apos;Ingénieur de Casablanca.
                                J&apos;accompagne les entreprises dans la création de solutions web robustes en combinant backend Java / Spring Boot
                                et frontend React modernes.
                            </p>
                            <p>
                                Mes domaines d&apos;expertise couvrent les API REST sécurisées, la conception de bases de données, les architectures cloud,
                                ainsi que l&apos;intégration de pipelines CI/CD avec Azure DevOps et Docker.
                            </p>
                            <p>
                                Je travaille avec des méthodologies Agiles (Scrum) et des cycles de développement structurés pour livrer des applications
                                performantes, maintenables et adaptées aux besoins métiers.
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm">
                                <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500">Diplômes</h3>
                                <p className="mt-3 text-slate-700 font-semibold">Ingénierie Informatique et Réseaux - Option MIAGE</p>
                                <p className="text-sm text-slate-500">École Marocaine des Sciences d'Ingénieur Casablanca (2019 - 2024)</p>
                                <p className="text-sm text-slate-500">Baccalauréat scientifique option physique, Lycée EL KINDI Casablanca</p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm">
                                <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500">Expertises clés</h3>
                                <ul className="mt-3 space-y-2 text-slate-600 text-sm">
                                    <li>Java, Spring Boot, Spring Security, Hibernate, JPA</li>
                                    <li>React, TypeScript, Angular, Vue, Tailwind CSS</li>
                                    <li>Docker, Kubernetes, Azure DevOps, Git, CI/CD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1 justify-center relative w-[300px] h-[300px]">
                        {/* Decorative floating elements for the about section */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotateZ: [0, 5, 0],
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 left-10 w-32 h-32 rounded-2xl bg-slate-100/90 border border-slate-200 shadow-lg"
                        />
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotateZ: [0, -5, 0],
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-slate-100/90 border border-slate-200 shadow-lg"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
