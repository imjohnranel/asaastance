export function TrustedBySection() {
    const logos = [
        { name: "Acme Corp", initial: "A" },
        { name: "GlobalTech", initial: "G" },
        { name: "NovaLink", initial: "N" },
        { name: "Stellar", initial: "S" },
        { name: "Quantum", initial: "Q" },
    ];

    return (
        <section className="w-full py-12 border-y border-border/40 bg-zinc-50 dark:bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-8">
                    Trusted by industry leaders
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 font-bold text-xl text-foreground"
                        >
                            <div className="w-8 h-8 rounded bg-foreground text-background flex items-center justify-center text-sm">
                                {logo.initial}
                            </div>
                            <span className="hidden sm:inline-block">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
