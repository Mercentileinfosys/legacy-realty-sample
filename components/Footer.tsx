"use client";

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Our Team', href: '#team' },
            { name: 'Careers', href: '#careers' },
            { name: 'Press', href: '#press' },
        ],
        services: [
            { name: 'Buy Property', href: '#buy' },
            { name: 'Sell Property', href: '#sell' },
            { name: 'Property Management', href: '#management' },
            { name: 'Investment Advisory', href: '#advisory' },
        ],
        resources: [
            { name: 'Market Insights', href: '#insights' },
            { name: 'Property Guides', href: '#guides' },
            { name: 'FAQ', href: '#faq' },
            { name: 'Blog', href: '#blog' },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    ];

    return (
        <footer className="bg-black border-t border-gold-600/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-serif font-bold text-gradient mb-4">
                                LEGACY REALTY
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Crafting long-term wealth through refined real estate strategy.
                                Elevating lifestyles & building legacies.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-6">
                                <a
                                    href="tel:+6581152385"
                                    className="flex items-center text-gray-400 hover:text-gold-500 transition-colors"
                                >
                                    <Phone size={18} className="mr-3" />
                                    +65 8115 2385
                                </a>
                                <a
                                    href="mailto:info@legacyrealty.sg"
                                    className="flex items-center text-gray-400 hover:text-gold-500 transition-colors"
                                >
                                    <Mail size={18} className="mr-3" />
                                    info@legacyrealty.sg
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gold-600/10 hover:bg-gold-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ duration: 0.3 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon
                                            size={18}
                                            className="text-gold-500 group-hover:text-black transition-colors"
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-white font-semibold mb-4 capitalize">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-gold-500 transition-colors duration-300 relative group"
                                        >
                                            {link.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <motion.div
                    className="py-8 border-t border-gold-600/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-white font-semibold mb-2">
                                Subscribe to Our Newsletter
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Get the latest property insights and exclusive listings
                            </p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-80 px-6 py-3 bg-black/50 border border-gold-600/30 rounded-full text-white focus:border-gold-500 focus:outline-none transition-all duration-300"
                            />
                            <motion.button
                                className="btn-primary px-8"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gold-600/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                        <p>
                            © {currentYear} Legacy Realty. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="#privacy"
                                className="hover:text-gold-500 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#terms"
                                className="hover:text-gold-500 transition-colors"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="#cookies"
                                className="hover:text-gold-500 transition-colors"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
