"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Company", href: "/experts" },
    ];

    return (
        <nav className="w-full h-20 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50 px-6 lg:px-12 flex items-center justify-between border-b border-border">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 z-50" onClick={() => setIsOpen(false)}>
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white w-5 h-5"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                    </svg>
                </div>
                <span className="font-bold text-xl tracking-tight text-foreground">Asaastance</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
                <Link href="/inquiry">
                    <Button className="rounded-full px-6">Book a Consultation</Button>
                </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors z-50 text-foreground"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Dropdown Menu */}
            <div
                className={`absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-[#101622]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden z-40 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center gap-6 text-xl font-bold text-foreground">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-primary transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="mt-4">
                    <Link href="/inquiry" onClick={() => setIsOpen(false)}>
                        <Button size="lg" className="rounded-full px-8 shadow-xl shadow-primary/20">
                            Book a Consultation
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
