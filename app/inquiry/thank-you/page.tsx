import Link from "next/link";
import { CheckCircle2, Home, Sparkles, Hexagon, Layers, Workflow, Twitter } from "lucide-react";
import { Navbar } from "../../../components/Navbar";

export default function ThankYouPage() {
    return (
        <div className="bg-[#f6f6f8] dark:bg-[#101622] font-sans text-slate-900 dark:text-slate-100 min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300">

            {/* Background Decoration */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L30 40 M30 40 L70 30 M70 30 L90 80 M30 40 L50 70 M50 70 L90 80' stroke='%232b6cee' stroke-width='0.5' fill='none' stroke-opacity='0.1'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%232b6cee' fill-opacity='0.2'/%3E%3Ccircle cx='30' cy='40' r='1.5' fill='%232b6cee' fill-opacity='0.2'/%3E%3Ccircle cx='70' cy='30' r='1.2' fill='%232b6cee' fill-opacity='0.2'/%3E%3Ccircle cx='90' cy='80' r='1.5' fill='%232b6cee' fill-opacity='0.2'/%3E%3Ccircle cx='50' cy='70' r='1' fill='%232b6cee' fill-opacity='0.2'/%3E%3C/svg%3E")`,
                    backgroundSize: "300px 300px"
                }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#f6f6f8]/50 to-[#f6f6f8] dark:via-[#101622]/50 dark:to-[#101622] pointer-events-none" />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-12">
                <div className="max-w-2xl w-full text-center space-y-8">

                    {/* Success Icon */}
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />
                        <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-primary rounded-2xl md:rounded-3xl shadow-2xl shadow-primary/40 mx-auto">
                            <CheckCircle2 className="text-white w-12 h-12 md:w-16 md:h-16" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Thank You! We've Received Your Inquiry
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                            An AI specialist from <span className="text-primary font-semibold">Asaastance</span> will review your requirements and reach out within 24 hours to discuss the next steps.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                        >
                            <Home className="w-5 h-5" />
                            <span>Back to Home</span>
                        </Link>
                        <Link
                            href="/success-stories"
                            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center space-x-2"
                        >
                            <Sparkles className="w-5 h-5" />
                            <span>Browse Success Stories</span>
                        </Link>
                    </div>

                    {/* Trust Badges / Social */}
                    <div className="pt-12 flex flex-col items-center space-y-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Trusted by Global Enterprises</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center space-x-1">
                                <Hexagon className="w-5 h-5" />
                                <span className="font-bold">TECHCORE</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Layers className="w-5 h-5" />
                                <span className="font-bold">NEXUS AI</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Workflow className="w-5 h-5" />
                                <span className="font-bold">FLOWSOFT</span>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 w-full px-8 py-8 border-t border-slate-200 dark:border-slate-800 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © 2024 Asaastance AI Consulting. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
