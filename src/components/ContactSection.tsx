"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 relative z-10 px-4 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-cyan-500" />

                <h2 className="text-4xl font-bold tracking-tight text-center mb-4 text-slate-900">
                    Contactez-<span className="text-gradient">moi</span>
                </h2>
                <p className="text-center text-slate-500 mb-10">
                    Email : <a href="mailto:aymanebouchbih112@gmail.com" className="text-sky-700 hover:underline">aymanebouchbih112@gmail.com</a> • Téléphone : +212 602 101 339
                </p>
                <form className="space-y-6 max-w-2xl mx-auto">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 ml-1">Nom</label>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200 transition-all text-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 ml-1">E-mail</label>
                        <input
                            type="email"
                            placeholder="Votre adresse e-mail"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200 transition-all text-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 ml-1">Message</label>
                        <textarea
                            rows={4}
                            placeholder="Comment puis-je vous aider?"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-200 transition-all text-sm resize-none"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold py-3 px-6 rounded-xl shadow-sm hover:bg-sky-700 transition-all"
                        type="button"
                    >
                        Envoyer un message <Send size={18} />
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}
