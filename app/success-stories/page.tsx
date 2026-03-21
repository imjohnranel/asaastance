import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { IconArrowRight } from "@/components/icons";

export default function SuccessStoriesPage() {
    const caseStudies = [
        {
            industry: "Finance",
            title: "Fraud Detection at Scale",
            description: "Implemented a real-time predictive engine that reduced fraudulent transactions by 42% for a top-tier European bank.",
            category: "Predictive Analytics",
            image: "/illustration-case-finance.svg"
        },
        {
            industry: "Logistics",
            title: "Autonomous Route Optimization",
            description: "Optimized complex supply chain routes using custom AI models, resulting in a 15% reduction in carbon emissions.",
            category: "Optimization Engines",
            image: "/illustration-case-logistics.svg"
        },
        {
            industry: "Healthcare",
            title: "Patient Data Synthesis",
            description: "Utilized Generative AI to anonymize and synthesize clinical trial data, accelerating research by 6 months.",
            category: "Generative AI",
            image: "/illustration-case-healthcare.svg"
        },
        {
            industry: "Retail",
            title: "Hyper-Personalized CX",
            description: "Leveraged LLMs to power a cross-channel recommendation engine that increased AOV by 28%.",
            category: "NLP & LLMs",
            image: "/illustration-case-retail.svg"
        },
        {
            industry: "Manufacturing",
            title: "Computer Vision Inspection",
            description: "Developed a visual AI system that identified micro-defects with 99.9% accuracy on high-speed lines.",
            category: "Computer Vision",
            image: "/illustration-case-manufacturing.svg"
        },
        {
            industry: "Legal",
            title: "Automated Contract Review",
            description: "Built an NLP pipeline that reduced manual review time by 80% for enterprise compliance teams.",
            category: "Automation",
            image: "/illustration-case-legal.svg"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col w-full bg-[#f6f6f8] dark:bg-[#0f172a] font-sans transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                        Success Stories
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Discover how Asaastance partners with global enterprises to implement transformative AI solutions that drive measurable ROI and operational excellence.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="pb-12 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90">
                            All Projects
                        </button>
                        <button className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                            Generative AI
                        </button>
                        <button className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                            Predictive Analytics
                        </button>
                        <button className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                            Process Automation
                        </button>
                        <button className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                            NLP & LLMs
                        </button>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="pb-24 px-6 lg:px-12 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-[#101622] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            <div className="h-56 overflow-hidden relative w-full">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    unoptimized
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                                        {study.industry}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                                    {study.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                                    {/* For matching exactly with HTML markup, some lines had bold numbers. We are simplifying for loop rendering, but the data is accurate. */}
                                    {study.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <Link href={`/case-studies`} className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                        <span>Read More</span>
                                        <IconArrowRight className="size-4" />
                                    </Link>
                                    <span className="text-xs text-slate-400 font-medium">
                                        {study.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-primary py-24 px-6 lg:px-12 overflow-hidden relative w-full mt-auto">
                <div className="absolute inset-0 opacity-10">
                    {/* Replicating the SVG path background from the HTML */}
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to be our next success story?</h2>
                    <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-medium">
                        Join the ranks of industry leaders who have scaled their operations and unlocked new potential
                        through Asaastance&apos;s comprehensive digital solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all w-full sm:w-auto shadow-lg shadow-black/10">
                            Start Your Transformation
                        </button>
                        <button className="bg-primary border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                            View Our Services
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
