import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-[#11131c] text-white pt-20 pb-10 px-6 lg:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
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
                            <span className="font-bold text-xl tracking-tight">Asaastance</span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                            Leading the enterprise transition to intelligent, high-impact AI
                            consulting for B2B customers.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400">
                            <a href="#" className="hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Services</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li>
                                <Link href="/services/blog-automation" className="hover:text-white transition-colors">
                                    Website Blogs Writing Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/technical-seo" className="hover:text-white transition-colors">
                                    Technical SEO
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/on-page-seo" className="hover:text-white transition-colors">
                                    On-page SEO
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/business-consultancy" className="hover:text-white transition-colors">
                                    Business Development Consultancy
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/custom-app" className="hover:text-white transition-colors">
                                    Custom App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/automation-app" className="hover:text-white transition-colors">
                                    Custom Automation App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/ai-app" className="hover:text-white transition-colors">
                                    Custom AI-Powered App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/mobile-app" className="hover:text-white transition-colors">
                                    Mobile App Development
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Offices</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> San Francisco, CA
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> London, UK
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Singapore
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/5 text-sm text-slate-500 gap-4">
                    <p>© 2024 Asaastance Consulting. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Cookie Settings
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
