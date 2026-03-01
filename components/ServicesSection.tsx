import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Bot, Search, FileText, Briefcase, Code, Zap, Cpu, Smartphone } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
    const services = [
        {
            title: "Website Blogs Writing Automation",
            description: "AI-driven content creation to keep your blog consistently updated with high-quality, SEO-optimized articles.",
            icon: <Bot className="w-6 h-6 text-primary" />,
            features: ["Automated Workflows", "SEO Optimization"],
            slug: "blog-automation"
        },
        {
            title: "Technical SEO",
            description: "Optimizing your website's architecture, speed, and backend to ensure search engines can crawl and index effectively.",
            icon: <Search className="w-6 h-6 text-primary" />,
            features: ["Site Speed Optimization", "Crawlability"],
            slug: "technical-seo"
        },
        {
            title: "On-page SEO",
            description: "Strategic placement of keywords, meta tags, and content structuring to rank your pages higher in search results.",
            icon: <FileText className="w-6 h-6 text-primary" />,
            features: ["Keyword Strategy", "Content Optimization"],
            slug: "on-page-seo"
        },
        {
            title: "Business Development Consultancy",
            description: "Strategic guidance to identify growth opportunities, build partnerships, and scale your operations successfully.",
            icon: <Briefcase className="w-6 h-6 text-primary" />,
            features: ["Growth Strategy", "Market Analysis"],
            slug: "business-consultancy"
        },
        {
            title: "Custom App Development",
            description: "Tailored web and software applications designed to meet your unique business requirements and user needs.",
            icon: <Code className="w-6 h-6 text-primary" />,
            features: ["Scalable Architecture", "UX/UI Design"],
            slug: "custom-app"
        },
        {
            title: "Custom Automation App Development",
            description: "Streamline your workflows with intelligent automation apps that save time and reduce manual, repetitive tasks.",
            icon: <Zap className="w-6 h-6 text-primary" />,
            features: ["Process Automation", "API Integrations"],
            slug: "automation-app"
        },
        {
            title: "Custom AI-Powered App Development",
            description: "Cutting-edge applications integrating LLMs and machine learning to deliver intelligent, predictive, and adaptive features.",
            icon: <Cpu className="w-6 h-6 text-primary" />,
            features: ["LLM Integration", "Predictive Analytics"],
            slug: "ai-app"
        },
        {
            title: "Mobile App Development",
            description: "High-performance native and cross-platform mobile experiences that engage users on iOS and Android.",
            icon: <Smartphone className="w-6 h-6 text-primary" />,
            features: ["iOS & Android", "Cross-Platform"],
            slug: "mobile-app"
        }
    ];

    return (
        <section id="services" className="w-full py-24 bg-zinc-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Comprehensive Digital Solutions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From organic growth to custom automation, we provide the end-to-end expertise to scale your business and dominate your market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link href={`/services/${service.slug}`} key={index} className="block group">
                            <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-zinc-900 rounded-2xl group-hover:-translate-y-1">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground mt-2 line-clamp-3">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
