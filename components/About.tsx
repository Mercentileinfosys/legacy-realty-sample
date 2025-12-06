"use client";

import { motion } from 'framer-motion';
import { Award, Target, TrendingUp, Users2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import Image from 'next/image';

export default function About() {
    const values = [
        {
            icon: Award,
            title: 'Excellence',
            description: 'Uncompromising standards in every transaction',
        },
        {
            icon: Target,
            title: 'Precision',
            description: 'Strategic approach to wealth building',
        },
        {
            icon: TrendingUp,
            title: 'Growth',
            description: 'Maximizing long-term investment returns',
        },
        {
            icon: Users2,
            title: 'Partnership',
            description: 'Building lasting client relationships',
        },
    ];

    return (
        <section id="about" className="section-padding bg-black relative overflow-hidden">
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
                        className="text-gold-500 text-sm tracking-[0.3em] mb-4 uppercase"
                        variants={fadeInUp}
                    >
                        About Legacy Realty
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
                        variants={fadeInUp}
                    >
                        <span className="text-white">Building </span>
                        <span className="text-gradient">Legacies</span>
                    </motion.h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85"
                                alt="Singapore Skyline"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Stats Overlay */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-black/70 backdrop-blur-md p-6 rounded-xl border border-gold-600/20">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-3xl font-bold text-gradient">$600M+</h4>
                                            <p className="text-gray-300 text-sm">Transacted</p>
                                        </div>
                                        <div>
                                            <h4 className="text-3xl font-bold text-gradient">15+</h4>
                                            <p className="text-gray-300 text-sm">Years</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -top-6 -right-6 bg-gradient-to-br from-gold-600 to-gold-400 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="text-center">
                                <p className="text-black font-bold text-2xl">500+</p>
                                <p className="text-black text-xs">Clients</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                            Singapore&apos;s Premier Private Property Specialists
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            At Legacy Realty, we don&apos;t just sell properties—we craft long-term wealth
                            strategies through refined real estate expertise. With over $600 million in
                            private properties transacted, we&apos;ve established ourselves as Singapore&apos;s
                            most trusted partner for discerning investors.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our mission is simple yet profound: elevating lifestyles and building legacies.
                            We combine deep market knowledge, strategic insights, and personalized service
                            to help our clients achieve their most ambitious real estate goals.
                        </p>

                        <div className="pt-6">
                            <motion.button
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More About Us
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h3
                        className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
                        variants={fadeInUp}
                    >
                        <span className="text-white">Our Core </span>
                        <span className="text-gradient">Values</span>
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-dark-800/50 border border-gold-600/10 p-8 rounded-2xl text-center group cursor-pointer hover:border-gold-600/30 transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <value.icon className="text-black" size={32} />
                                </motion.div>
                                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
