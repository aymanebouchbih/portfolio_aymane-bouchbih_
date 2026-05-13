"use client";

import { motion } from "framer-motion";

const skills = {
    Frontend: ["React.js", "Redux", "TypeScript", "JavaScript", "Angular", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    Backend: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "Node.js", "PHP", "Python", "Laravel"],
    API: ["REST", "SOAP", "Swagger / OpenAPI", "JWT", "OAuth2", "Postman"],
    DevOps: ["Git", "GitHub", "Azure DevOps", "Docker", "Kubernetes", "Jenkins", "Maven"],
    Database: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"]
};

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 relative z-10 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
                    Mes <span className="text-gradient">compétences</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {Object.entries(skills).map(([category, items], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-slate-300 transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl font-semibold mb-6 text-slate-900 relative z-10">{category}</h3>
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {items.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-slate-50 border border-slate-200 text-slate-700 shadow-sm cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
