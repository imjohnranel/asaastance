import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/CTASection";
import { Linkedin, Mail, Twitter } from "lucide-react";

export default function ExpertsPage() {
    const experts = [
        {
            name: "Dr. Elias Vance",
            role: "Lead AI Strategist",
            image: "/expert-elias.png",
            bio: "Former Director of Machine Learning at Stanford with 15 years in predictive modeling.",
        },
        {
            name: "Sarah Chen",
            role: "MLOps Lead",
            image: "/expert-sarah.png",
            bio: "Specializes in scalable pipeline architecture and large language model deployment.",
        },
        {
            name: "Marcus Thorne",
            role: "Chief AI Architect",
            image: "/expert-marcus.png",
            bio: "Author of 'The Agentic Future'. Leads our core engineering and infrastructure division.",
        },
        {
            name: "Dr. Elena Rodriguez",
            role: "AI Ethics & Policy",
            image: "/expert-elena.png",
            bio: "Advises federal agencies on AI compliance, bias mitigation, and data usage rights.",
        },
        // Mocking 4 additional experts using existing images
        {
            name: "David Kim",
            role: "Director of Data Engineering",
            image: "/expert-elias.png", // Reusing Elias for mock structure
            bio: "Expert in vector databases and high-throughput data processing systems.",
        },
        {
            name: "Jessica Park",
            role: "Head of Automation",
            image: "/expert-sarah.png", // Reusing Sarah for mock structure
            bio: "Pioneering workflow generation through autonomous AI micro-agents.",
        },
        {
            name: "Leon Vance",
            role: "Security & Compliance Lead",
            image: "/expert-marcus.png", // Reusing Marcus for mock structure
            bio: "Ensures all generative deployments meet strict healthcare and finance regulations.",
        },
        {
            name: "Aisha Patel",
            role: "VP of Enterprise Transformation",
            image: "/expert-elena.png", // Reusing Elena for mock structure
            bio: "Guides Fortune 500 leadership teams through organizational AI adoption.",
        },
    ];

    return (
        <div className="bg-[#f6f6f8] dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
            <Navbar />

            <main className="flex-grow w-full overflow-hidden">
                {/* Leadership Hero Section */}
                <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white dark:bg-[#101622] border-b border-primary/10">
                    <div className="absolute inset-0 z-0">
                        {/* Abstract Neural/Tech Pattern Background */}
                        <div
                            className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34v-.83l57.51-58.34zM29.5 31.5l1.5-1.5 29 29v1.5h-1.5l-29-29zm-15-15l1.5-1.5 44 44v1.5h-1.5l-44-44zm-15-15l1.5-1.5 59 59v1.5h-1.5l-59-59z' fill='%232b6cee' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            }}
                        />
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-10">
                        <div className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded mb-6">
                            Our Team
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white">
                            The Minds Behind <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Asaastance</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            We are a collective of ex-FAANG engineers, PhD researchers, and enterprise strategists dedicated to unlocking the power of generative AI for your business.
                        </p>
                    </div>
                </section>

                {/* Expanded Experts Grid Section */}
                <section className="w-full py-24 bg-[#f6f6f8] dark:bg-black/40">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {experts.map((expert, index) => (
                                <div key={index} className="flex flex-col group bg-white dark:bg-[#101622] rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                                        <Image
                                            src={expert.image}
                                            alt={expert.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                                            <Link href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </Link>
                                            <Link href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="px-2 pb-4 text-center">
                                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{expert.name}</h3>
                                        <p className="text-sm font-bold text-primary mb-4">{expert.role}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed px-2">
                                            {expert.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reused CTA Section */}
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}
