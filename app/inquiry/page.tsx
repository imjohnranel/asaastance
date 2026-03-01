"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { MapPin, Mail, Phone, Send, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function InquiryPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/inquiry/thank-you");
    };

    return (
        <div className="bg-[#f6f6f8] dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
            <Navbar />

            {/* Main Content Section */}
            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-[#101622] border border-primary/5">

                    {/* Left Column: Contact Information */}
                    <div className="relative min-h-[500px] lg:min-h-full flex flex-col justify-between p-6 md:p-10 lg:p-16 text-white overflow-hidden">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/architecture-bg.png"
                                alt="Modern Architecture"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-[#0a1128]/85 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent" />
                        </div>

                        <div className="relative z-10">
                            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Partner with <br /><span className="text-primary">Asaastance</span>
                            </h1>
                            <p className="text-slate-300 text-lg max-w-md mb-12">
                                Unlock the potential of generative AI for your enterprise. Our experts are ready to help you scale your digital capabilities.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                                        <MapPin className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Global Headquarters</h3>
                                        <p className="text-slate-400">121 Strategy Way, Suite 400<br />San Francisco, CA 94105</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                                        <Mail className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Email Us</h3>
                                        <p className="text-slate-400">solutions@asaastance.ai</p>
                                        <p className="text-slate-400">press@asaastance.ai</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                                        <Phone className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Call Us</h3>
                                        <p className="text-slate-400">+1 (888) 555-0192</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 pt-12">
                            <div className="flex gap-4">
                                <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                    <Twitter className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                    <Github className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="p-6 md:p-10 lg:p-16 flex flex-col justify-center bg-white dark:bg-[#101622]">
                        <div className="mb-10">
                            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded mb-4">
                                Inquiry Form
                            </span>
                            <h2 className="text-3xl font-extrabold text-[#0a1128] dark:text-white mb-2">Request a Consultation</h2>
                            <p className="text-slate-500 dark:text-slate-400">Tell us about your project and we'll get back to you within 24 hours.</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Acme Corp"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Industry</label>
                                    <select
                                        defaultValue=""
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white appearance-none"
                                    >
                                        <option value="" disabled>Select industry</option>
                                        <option>Finance & Banking</option>
                                        <option>Healthcare & Biotech</option>
                                        <option>Retail & E-commerce</option>
                                        <option>Technology & SaaS</option>
                                        <option>Manufacturing</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">How can we help?</label>
                                <textarea
                                    rows={4}
                                    placeholder="Describe your AI objectives or challenges..."
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-white resize-none"
                                />
                            </div>

                            <div className="pt-4">
                                <Button type="submit" className="w-full py-6 text-lg font-bold rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:bg-primary/90 transition-all">
                                    Submit Inquiry
                                </Button>
                            </div>
                            <p className="text-center text-xs text-slate-400 mt-4">
                                By submitting, you agree to our <Link href="#" className="underline hover:text-primary">Privacy Policy</Link> and <Link href="#" className="underline hover:text-primary">Terms of Service</Link>.
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            {/* Map Section Hint */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="h-64 w-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-slate-200 dark:border-slate-800 shadow-inner relative">
                    <Image
                        src="/sf-map.png"
                        alt="San Francisco Map"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}
