import Image from "next/image";
import { Linkedin } from "lucide-react";

export function ExpertsSection() {
    const experts = [
        {
            name: "Dr. Elias Vance",
            role: "Lead AI Strategist",
            image: "/expert-elias.png",
        },
        {
            name: "Sarah Chen",
            role: "MLOps Lead",
            image: "/expert-sarah.png",
        },
        {
            name: "Marcus Thorne",
            role: "Chief AI Architect",
            image: "/expert-marcus.png",
        },
        {
            name: "Dr. Elena Rodriguez",
            role: "AI Ethics & Policy",
            image: "/expert-elena.png",
        },
    ];

    return (
        <section id="experts" className="w-full py-24 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                        Meet the Experts
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our team of PhDs, engineers, and strategists are world leaders in enterprise AI adoption.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-900 border border-border">
                                <Image
                                    src={expert.image}
                                    alt={expert.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-1">{expert.name}</h3>
                            <p className="text-sm font-medium text-primary mb-4">{expert.role}</p>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={`${expert.name} LinkedIn`}
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
