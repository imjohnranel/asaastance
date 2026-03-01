import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTASection } from "../../components/CTASection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { LineChart, Cpu, BookOpen, ShieldCheck, Database, Code, BrainCircuit, Network, Workflow, Bot, Search, FileText, Briefcase, Zap, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function ServicesPage() {
    const services = [
        {
            title: "Website Blogs Writing Automation",
            description: "AI-driven content creation to keep your blog consistently updated with high-quality, SEO-optimized articles.",
            icon: <Bot className="w-6 h-6 text-primary" />,
            features: ["Automated Workflows", "SEO Optimization", "Content Strategy"],
        },
        {
            title: "Technical SEO",
            description: "Optimizing your website's architecture, speed, and backend to ensure search engines can crawl and index effectively.",
            icon: <Search className="w-6 h-6 text-primary" />,
            features: ["Site Speed Audit", "Crawlability", "Backend Tuning"],
        },
        {
            title: "On-page SEO",
            description: "Strategic placement of keywords, meta tags, and content structuring to rank your pages higher in search results.",
            icon: <FileText className="w-6 h-6 text-primary" />,
            features: ["Keyword Strategy", "Meta Tags", "Content Structuring"],
        },
        {
            title: "Business Development Consultancy",
            description: "Strategic guidance to identify growth opportunities, build partnerships, and scale your operations successfully.",
            icon: <Briefcase className="w-6 h-6 text-primary" />,
            features: ["Growth Strategy", "Market Analysis", "Partnership Building"],
        },
        {
            title: "Custom App Development",
            description: "Tailored web and software applications designed to meet your unique business requirements and user needs.",
            icon: <Code className="w-6 h-6 text-primary" />,
            features: ["Scalable Architecture", "UX/UI Design", "Agile Sprints"],
        },
        {
            title: "Custom Automation App Development",
            description: "Streamline your workflows with intelligent automation apps that save time and reduce manual, repetitive tasks.",
            icon: <Zap className="w-6 h-6 text-primary" />,
            features: ["Process Mapping", "API Integrations", "Workflow Automation"],
        },
        {
            title: "Custom AI-Powered App Development",
            description: "Cutting-edge applications integrating LLMs and machine learning to deliver intelligent, predictive, and adaptive features.",
            icon: <Cpu className="w-6 h-6 text-primary" />,
            features: ["LLM Integration", "Machine Learning", "Predictive Analytics"],
        },
        {
            title: "Mobile App Development",
            description: "High-performance native and cross-platform mobile experiences that engage users on iOS and Android.",
            icon: <Smartphone className="w-6 h-6 text-primary" />,
            features: ["iOS & Android", "Cross-Platform", "App Store Optimization"],
        }
    ];

    return (
        <div className="bg-[#f6f6f8] dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
            <Navbar />

            <main className="flex-grow w-full overflow-hidden">
                {/* Services Hero Section */}
                <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white dark:bg-[#101622] border-b border-primary/10">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232b6cee\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 transition-all hover:bg-primary/20 cursor-default">
                            <Zap className="w-4 h-4" />
                            <span className="text-sm font-bold uppercase tracking-wider">Our Solutions</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white">
                            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Solutions</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                            From driving organic traffic with elite SEO optimization to building cutting-edge custom and AI-powered apps, we provide the full stack of expertise required to dominate your market.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/inquiry">
                                <Button className="px-8 py-6 rounded-full text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    Request a Consultation
                                </Button>
                            </Link>
                            <Link href="/case-studies">
                                <Button variant="outline" className="px-8 py-6 rounded-full text-base font-bold border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all bg-white dark:bg-[#101622] text-slate-900 dark:text-white">
                                    See Our Work
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="w-full py-24 bg-[#f6f6f8] dark:bg-black/40">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <Card key={index} className="border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300 bg-white dark:bg-[#101622] rounded-2xl group flex flex-col h-full">
                                    <CardHeader className="pb-4 relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            {/* Clone icon to dynamically alter text color on parent hover */}
                                            <div className="text-primary group-hover:text-white transition-colors duration-300">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</CardTitle>
                                        <CardDescription className="text-base text-slate-600 dark:text-slate-400 leading-relaxed min-h-[80px]">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                                        <ul className="space-y-4">
                                            {service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                    <div className="w-2 h-2 rounded-full bg-primary/80 group-hover:bg-primary transition-colors" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
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
