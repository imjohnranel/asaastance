import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SuccessStoriesSection() {
    const stories = [
        {
            industry: "FINTECH",
            title: "Global Bank LLM Integration",
            description:
                "Reduced customer support response times by 85% through custom fine-tuned AI agents.",
            stats: [
                { value: "85%", label: "EFFICIENCY" },
                { value: "$4.2M", label: "ANNUAL SAVINGS" },
            ],
            image: "/fintech-graph.png",
        },
        {
            industry: "MANUFACTURING",
            title: "Predictive Maintenance AI",
            description:
                "Custom vision models identify equipment failure patterns 48 hours before occurrence.",
            stats: [
                { value: "32%", label: "UPTIME BUMP" },
                { value: "2.4x", label: "ROI SCALE" },
            ],
            image: "/robot-arm.png",
        },
    ];

    return (
        <section id="case-studies" className="w-full py-24 bg-[#141824] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Client Success Stories
                        </h2>
                        <p className="text-lg text-slate-300">
                            Delivering measurable impact through intelligent automation and strategic innovation.
                        </p>
                    </div>
                    <Link
                        href="#case-studies"
                        className="flex items-center gap-2 text-primary font-medium hover:text-white transition-colors"
                    >
                        View All Case Studies <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden group border border-white/10 bg-white/5"
                        >
                            <div className="aspect-[16/10] relative">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#141824] via-[#141824]/80 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3 block">
                                    {story.industry}
                                </span>
                                <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                                <p className="text-slate-300 mb-8 max-w-sm text-sm">
                                    {story.description}
                                </p>
                                <div className="flex gap-8">
                                    {story.stats.map((stat, sIndex) => (
                                        <div key={sIndex}>
                                            <div className="text-3xl font-bold text-primary mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
