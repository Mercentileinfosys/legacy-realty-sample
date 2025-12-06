"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center bg-black relative overflow-hidden">
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 50% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gold-500 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Side - Large Property Image with 3D Effects */}
                <motion.div
                    className="relative h-[50vh] lg:h-screen overflow-hidden group"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    {/* Image with Parallax Effect */}
                    <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=90"
                            alt="Luxury Property"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Animated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/50" />

                    {/* Floating Badge */}
                    <motion.div
                        className="absolute top-8 left-8 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-gold-600/30"
                        initial={{ opacity: 0, y: -20, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: 3, duration: 0.6 }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.6)' }}
                    >
                        <div className="flex items-center gap-2">
                            <Sparkles className="text-gold-500" size={20} />
                            <span className="text-white font-semibold">Featured Property</span>
                        </div>
                    </motion.div>

                    {/* Bottom Info Card with 3D Transform */}
                    <motion.div
                        className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-md p-6 rounded-2xl border border-gold-600/20"
                        initial={{ opacity: 0, y: 50, rotateX: 90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: 3.5, duration: 0.6 }}
                        whileHover={{
                            y: -5,
                            boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)',
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="text-white font-bold text-lg">Marina Bay Penthouse</h4>
                                <p className="text-gray-400 text-sm">Orchard Road, Singapore</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gold-500 font-bold text-2xl">$8.5M</p>
                                <p className="text-gray-400 text-sm">3,500 sqft</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Shimmer Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                {/* Right Side - Content with Enhanced Animations */}
                <motion.div
                    className="flex items-center justify-center px-8 md:px-16 py-20 lg:py-0 relative"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    <div className="max-w-xl relative z-10">
                        {/* Subtitle with Animated Underline */}
                        <motion.div className="mb-6 relative inline-block">
                            <motion.p
                                className="text-gold-500 text-sm md:text-base tracking-[0.3em] uppercase"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3 }}
                            >
                                Legacy Realty
                            </motion.p>
                            <motion.div
                                className="h-0.5 bg-gradient-to-r from-gold-600 to-transparent mt-2"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 3.2, duration: 0.8 }}
                            />
                        </motion.div>

                        {/* Main Heading with 3D Text Effect */}
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.2 }}
                        >
                            <motion.span
                                className="block text-white"
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                Crafting
                            </motion.span>
                            <motion.span
                                className="block text-gradient mt-2"
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    textShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                                }}
                            >
                                Long-Term Wealth
                            </motion.span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.4 }}
                        >
                            Elevating lifestyles & building legacies through refined real estate strategy.
                        </motion.p>

                        {/* Stats with 3D Cards */}
                        <motion.div
                            className="flex gap-6 mb-10 pb-10 border-b border-gray-800"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.6 }}
                        >
                            {[
                                { value: '$600M+', label: 'Transacted' },
                                { value: '500+', label: 'Clients' },
                                { value: '15+', label: 'Years' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-1 bg-dark-800/50 p-4 rounded-xl border border-gold-600/10 hover:border-gold-600/30 transition-all duration-300"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -5,
                                        boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)',
                                    }}
                                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{ delay: 3.8 + index * 0.1 }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                                        {stat.value}
                                    </h3>
                                    <p className="text-gray-500 text-xs">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons with Enhanced Effects */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.8 }}
                        >
                            <motion.button
                                className="btn-primary flex items-center justify-center gap-2 group relative overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <span className="relative z-10">Explore Properties</span>
                                <ArrowRight
                                    size={20}
                                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                            <motion.button
                                className="btn-secondary relative overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">Contact Us</span>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                        className="absolute top-1/4 right-10 w-32 h-32 border-2 border-gold-600/20 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-20 w-20 h-20 border-2 border-gold-600/20 rounded-full"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [360, 180, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
