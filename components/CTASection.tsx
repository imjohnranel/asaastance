import { Button } from "./ui/button";

export function CTASection() {
    return (
        <section className="w-full py-24 bg-primary text-primary-foreground text-center px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Ready to Lead the Next Industrial Revolution?
                </h2>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl font-medium">
                    Schedule a private workshop with our principal consultants and discover your AI potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        size="lg"
                        variant="secondary"
                        className="rounded-full px-8 text-base h-14 bg-white text-primary hover:bg-white/90"
                    >
                        Book Your Consultation
                    </Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        className="rounded-full px-8 text-base h-14 text-white hover:bg-white/10 hover:text-white"
                    >
                        Contact Sales
                    </Button>
                </div>
            </div>
        </section>
    );
}
