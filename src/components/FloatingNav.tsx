"use client";

import { motion } from "framer-motion";
import { User, Code, Briefcase, Award, Send, Home } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { icon: <Home size={18} />, href: "#top", label: "Accueil" },
    { icon: <User size={18} />, href: "#about", label: "À propos" },
    { icon: <Code size={18} />, href: "#skills", label: "Compétences" },
    { icon: <Briefcase size={18} />, href: "#projects", label: "Projets" },
    { icon: <Award size={18} />, href: "#certifications", label: "Certifications" },
    { icon: <Send size={18} />, href: "#contact", label: "Contact" }
];

export default function FloatingNav() {
    const [active, setActive] = useState("#top");

    useEffect(() => {
        const handleScroll = () => {
            // Very basic scrollspy implementation for demonstration
            const sections = navItems.map(item => item.href.substring(1));
            let current = "";
            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = section;
                    }
                }
            });
            if (window.scrollY < 100) current = "top";
            if (current) setActive(`#${current}`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 glass rounded-full hidden md:flex"
        >
            <nav className="flex items-center gap-1">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        title={item.label}
                        className={`relative flex items-center justify-center gap-1 px-3 py-2 rounded-full transition-colors whitespace-nowrap text-xs lg:text-sm ${active === item.href ? "text-sky-700" : "text-slate-600 hover:text-slate-900"
                            }`}
                    >
                        {item.icon}
                        <span className="hidden lg:inline font-medium">{item.label}</span>
                        {active === item.href && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-sky-100 rounded-full border border-sky-200 -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </a>
                ))}
            </nav>
        </motion.div>
    );
}
