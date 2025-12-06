"use client";

import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Shield, Home, Award } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function Services() {
    const services = [
        {
            icon: Building2,
            title: 'Property Investment',
            description: 'Strategic investment guidance for maximizing returns on premium properties',
        },
        {
            icon: TrendingUp,
            title: 'Market Analysis',
            description: 'In-depth market insights and trend analysis for informed decision-making',
        },
        {
            icon: Users,
            title: 'Personalized Consultation',
            description: 'Tailored advisory services matching your lifestyle and investment goals',
        },
        {
            icon: Shield,
            title: 'Legal Support',
            description: 'Comprehensive legal assistance throughout your property transaction',
        },
        {
            icon: Home,
            title: 'Property Management',
            description: 'Full-service property management for hassle-free ownership',
        },
        {
            icon: Award,
            title: 'Exclusive Access',
            description: 'Priority access to off-market and pre-launch luxury developments',
        },
    ];

    return (
        <section id="services" className="section-padding bg-dark-900 relative overflow-hidden">
            {/* Animated Background Grid */}
            <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                style={{
                    backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-64 h-64 bg-gold-600/5 rounded-full blur-3xl"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 30}%`,
                        }}
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
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
                        className="text-gold-500 text-sm tracking-[0.3em] mb-4 uppercase"
                        variants={fadeInUp}
                    >
                        Our Services
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
                        variants={fadeInUp}
                    >
                        <span className="text-white">Comprehensive </span>
                        <span className="text-gradient">Solutions</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        End-to-end real estate services designed to elevate your property journey
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-800/50 border border-gold-600/10 p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                borderColor: 'rgba(212, 175, 55, 0.3)',
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Background Glow on Hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-gold-600/0 to-gold-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                                }}
                            />

                            {/* Icon with 3D Transform */}
                            <motion.div
                                className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-400 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg"
                                whileHover={{
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: 1.1,
                                }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: 'translateZ(50px)',
                                }}
                            >
                                <service.icon className="text-black" size={32} />
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-gold-500 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                {service.description}
                            </p>

                            {/* Corner Accent */}
                            <motion.div
                                className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-600/0 rounded-tr-2xl"
                                animate={{
                                    borderColor: 'rgba(212, 175, 55, 0)',
                                }}
                                whileHover={{
                                    borderColor: 'rgba(212, 175, 55, 0.5)',
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Shimmer Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.8 }}
                            />

                            {/* Number Badge */}
                            <motion.div
                                className="absolute bottom-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold-600/20"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <span className="text-gold-500 font-bold">0{index + 1}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
