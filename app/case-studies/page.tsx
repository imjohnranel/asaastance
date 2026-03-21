import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import {
    IconAlertTriangle,
    IconBrain,
    IconTrendingUp,
    IconBuilding,
    IconLayoutGrid,
    IconClock,
    IconSettings,
    IconDownload,
    IconShare,
    IconArrowRight,
} from "@/components/icons";

export default function CaseStudyPage() {
    return (
        <div className="min-h-screen flex flex-col w-full bg-slate-50 dark:bg-[#0f172a] font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/60 z-10" />
                <Image
                    src="/warehouse-hero.svg"
                    alt="Automated Warehouse"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="relative z-20 max-w-7xl mx-auto px-6 w-full mt-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary-light text-white">
                                Logistics & Supply Chain
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            Optimizing Global Logistics with <span className="text-primary">Predictive AI</span>
                        </h1>
                        <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
                            How Asaastance transformed RetailCorp's distribution network through automated demand forecasting and LLM-driven vendor management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <main className="max-w-7xl mx-auto px-6 py-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-20">

                        {/* The Challenge */}
                        <section id="challenge">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <IconAlertTriangle className="size-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Challenge</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p className="mb-4">
                                    RetailCorp, a global leader in consumer goods, was struggling with a fragmented supply chain that relied heavily on manual data entry and reactive decision-making. As their product catalog grew, traditional forecasting methods failed to account for volatile market shifts and seasonal anomalies.
                                </p>
                                <p>
                                    Key pain points included a 15% inventory wastage rate due to overstocking and significant delays in vendor communication, which was managed through thousands of unstructured emails daily. They needed a scalable solution that could unify their data and provide real-time actionable insights.
                                </p>
                            </div>
                        </section>

                        {/* The AI Solution */}
                        <section id="solution" className="bg-white dark:bg-[#101622] p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5 border border-primary/5">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                                    <IconBrain className="size-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The AI Solution</h2>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        Predictive Demand Engine
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        We implemented a custom deep learning model that analyzes historical sales, social trends, and weather patterns to predict SKU-level demand with 94% accuracy. This system automatically adjusts procurement orders in real-time.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        LLM-Powered Vendor Desk
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Leveraging Large Language Models (LLMs), we built an automated communication layer that categorizes and responds to 80% of vendor inquiries, extracting critical data from invoices and delivery notes automatically.
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Technology Stack</h4>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">PyTorch</span>
                                        <span className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">GPT-4 Enterprise</span>
                                        <span className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">AWS SageMaker</span>
                                        <span className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Snowflake</span>
                                        <span className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">Kubernetes</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* The Results */}
                        <section id="results">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <IconTrendingUp className="size-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Results</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <div className="bg-primary p-8 rounded-2xl text-white transform hover:-translate-y-1 transition-transform">
                                    <div className="text-4xl font-bold mb-2">30%</div>
                                    <div className="text-sm opacity-80 uppercase font-bold tracking-widest">Efficiency Increase</div>
                                </div>
                                <div className="bg-white dark:bg-[#101622] p-8 rounded-2xl border border-primary/20 transform hover:-translate-y-1 transition-transform">
                                    <div className="text-4xl font-bold text-primary mb-2">$4.2M</div>
                                    <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Annual Cost Saved</div>
                                </div>
                                <div className="bg-white dark:bg-[#101622] p-8 rounded-2xl border border-primary/20 transform hover:-translate-y-1 transition-transform">
                                    <div className="text-4xl font-bold text-primary mb-2">94%</div>
                                    <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Prediction Accuracy</div>
                                </div>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                                <p>
                                    Within six months of deployment, RetailCorp saw a radical shift in their operational agility. The AI-driven forecasting reduced inventory carrying costs by 22%, while the automated vendor communication system allowed the procurement team to focus on high-level strategic partnerships rather than administrative tasks.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-6">

                            {/* Quick Facts Card */}
                            <div className="bg-white dark:bg-[#101622] rounded-3xl shadow-xl shadow-primary/5 border border-primary/5 p-8 text-slate-900 dark:text-white">
                                <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <IconBuilding className="mt-1 size-6 text-primary" />
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Client</p>
                                            <p className="font-bold">RetailCorp Global</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <IconLayoutGrid className="mt-1 size-6 text-primary" />
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Industry</p>
                                            <p className="font-bold">Supply Chain & Retail</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <IconClock className="mt-1 size-6 text-primary" />
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                                            <p className="font-bold">6 Months</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <IconSettings className="mt-1 size-6 text-primary" />
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Service</p>
                                            <p className="font-bold">AI Transformation</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                        <IconDownload className="size-4" /> Download PDF Case Study
                                    </button>
                                    <button className="w-full mt-3 bg-primary/5 text-primary py-4 rounded-xl font-bold hover:bg-primary/10 transition-all flex items-center justify-center gap-2">
                                        <IconShare className="size-4" /> Share Project
                                    </button>
                                </div>
                            </div>

                            {/* CTA Mini Card */}
                            <div className="bg-[#0f172a] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/40 transition-all" />
                                <h4 className="text-2xl font-bold mb-4 relative z-10">Have a similar project?</h4>
                                <p className="text-slate-400 mb-6 relative z-10">Let's discuss how AI can transform your business operations.</p>
                                <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all relative z-10">
                                    Book a free audit <IconArrowRight className="size-5" />
                                </Link>
                            </div>

                        </div>
                    </aside>
                </div>
            </main>

            {/* Footer CTA */}
            <section className="bg-white dark:bg-[#101622] border-t border-primary/10 py-24 w-full">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 italic text-slate-900 dark:text-white leading-tight">
                        "Asaastance didn't just give us a tool; they gave us a <span className="text-primary">competitive advantage</span> that redefined our industry standing."
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 relative">
                            <Image
                                src="/portrait-placeholder.svg"
                                alt="David Chen"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-xl text-slate-900 dark:text-white">David Chen</p>
                            <p className="text-slate-500">CTO, RetailCorp Global</p>
                        </div>
                    </div>
                    <button className="bg-primary text-white text-lg px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl shadow-primary/30">
                        Start Your AI Journey Today
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
