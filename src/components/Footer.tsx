"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-slate-200 mt-10 bg-white">
            <div className="py-8 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Aymane Bouchbih. Tous droits réservés.</p>
                    <p>aymanebouchbih112@gmail.com • +212 602 101 339</p>
                </div>

                <div className="flex gap-6 items-center">
                    <motion.a whileHover={{ y: -2, color: "#0f172a" }} href="mailto:aymanebouchbih112@gmail.com" rel="noopener noreferrer">
                        <Mail size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -2, color: "#0f172a" }} href="https://linkedin.com/in/aymanebouchbih" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                    </motion.a>
                </div>
            </div>
        </footer>
    );
}
