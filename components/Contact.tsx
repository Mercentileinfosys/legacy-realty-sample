"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-gold-500 text-sm tracking-[0.3em] mb-4"
                        variants={fadeInUp}
                    >
                        GET IN TOUCH
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-6xl font-serif font-bold mb-6"
                        variants={fadeInUp}
                    >
                        <span className="text-white">Start Your </span>
                        <span className="text-gradient">Legacy Today</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        Let&apos;s discuss how we can help you achieve your real estate goals
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-black/50 border border-gold-600/30 rounded-xl text-white focus:border-gold-500 focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-black/50 border border-gold-600/30 rounded-xl text-white focus:border-gold-500 focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-black/50 border border-gold-600/30 rounded-xl text-white focus:border-gold-500 focus:outline-none transition-all duration-300"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-6 py-4 bg-black/50 border border-gold-600/30 rounded-xl text-white focus:border-gold-500 focus:outline-none transition-all duration-300 resize-none"
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: Phone,
                                    title: 'Phone',
                                    content: '+65 8115 2385',
                                    link: 'tel:+6581152385',
                                },
                                {
                                    icon: Mail,
                                    title: 'Email',
                                    content: 'info@legacyrealty.sg',
                                    link: 'mailto:info@legacyrealty.sg',
                                },
                                {
                                    icon: MapPin,
                                    title: 'Office',
                                    content: 'Marina Bay Financial Centre, Singapore',
                                    link: '#',
                                },
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    className="glass p-6 rounded-2xl flex items-start gap-4 group cursor-pointer block"
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-gold-600 to-gold-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <item.icon className="text-black" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                        <p className="text-gray-400">{item.content}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <motion.div
                            className="glass rounded-2xl overflow-hidden h-64"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                                <MapPin className="text-gold-500" size={48} />
                            </div>
                        </motion.div>

                        {/* Business Hours */}
                        <div className="glass p-6 rounded-2xl">
                            <h4 className="text-white font-semibold mb-4">Business Hours</h4>
                            <div className="space-y-2 text-gray-400">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="text-gold-500">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="text-gold-500">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="text-gray-500">Closed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
