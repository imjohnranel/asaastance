import Image from "next/image";
import { Button } from "./ui/button";

export function HeroSection() {
    return (
        <section className="w-full px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 space-y-8">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
                    The future of enterprise
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                    Transforming <br />
                    <span className="text-primary">Enterprise</span> with <br />
                    Intelligent <br />
                    Solutions
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                    We bridge the gap between complex AI research and scalable business impact. Partner with Asaastance to lead the next industrial revolution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="rounded-full px-8 text-base h-14">
                        Book a Consultation
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14">
                        View Our Work
                    </Button>
                </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 relative w-full mt-12 lg:mt-0">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                    {/* We will replace this image source once generation is done */}
                    <Image
                        src="/hero-server.png"
                        alt="Futuristic Server Room"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Testimonial Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-12 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-xl text-white shadow-xl">
                        <p className="text-sm lg:text-base font-medium leading-relaxed italic mb-3">
                            "Asaastance integrated a new system with no down time, resulting in a 40% efficiency boost."
                        </p>
                        <p className="text-xs text-white/70 font-semibold">— CTO, Global Logistics Corp</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
