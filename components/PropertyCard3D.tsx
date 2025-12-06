"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface PropertyCardProps {
    property: {
        id: number;
        title: string;
        location: string;
        price: string;
        image: string;
        beds: number;
        baths: number;
        sqft: string;
        type: string;
    };
}

export default function PropertyCard3D({ property }: PropertyCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            className="relative group cursor-pointer perspective-1000"
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="relative overflow-hidden rounded-2xl bg-dark-800 border border-gold-600/10 hover:border-gold-600/30 transition-all duration-500">
                {/* Image Container - Fixed to prevent blank issue */}
                <div className="relative h-80 overflow-hidden">
                    <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out"
                        style={{
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                    />

                    {/* Animated Gradient Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                        animate={{
                            opacity: isHovered ? 0.8 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Shimmer Effect on Hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: isHovered ? '100%' : '-100%' }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* Type Badge with 3D effect */}
                    <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-gold-600 to-gold-400 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                        initial={{ opacity: 0, x: 20, rotateY: -90 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {property.type}
                    </motion.div>

                    {/* Floating Info on Hover */}
                    <motion.div
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-black/70 backdrop-blur-md p-3 rounded-xl border border-gold-600/20">
                            <p className="text-white text-sm font-semibold">View Property Details</p>
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                    {/* Price with 3D Transform */}
                    <motion.h3
                        className="text-3xl font-bold text-gradient mb-2"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'translateZ(50px)'
                        }}
                        animate={{
                            scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {property.price}
                    </motion.h3>

                    {/* Title */}
                    <h4 className="text-xl font-semibold text-white mb-2">
                        {property.title}
                    </h4>

                    {/* Location */}
                    <div className="flex items-center text-gray-400 mb-4">
                        <MapPin size={16} className="mr-2 text-gold-500" />
                        <span className="text-sm">{property.location}</span>
                    </div>

                    {/* Divider with Animation */}
                    <motion.div
                        className="h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent mb-4"
                        animate={{
                            scaleX: isHovered ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Features with Stagger Animation */}
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-6">
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.1, color: '#D4AF37' }}
                            transition={{ duration: 0.2 }}
                        >
                            <Bed size={18} className="mr-2 text-gold-500" />
                            <span>{property.beds} Beds</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.1, color: '#D4AF37' }}
                            transition={{ duration: 0.2 }}
                        >
                            <Bath size={18} className="mr-2 text-gold-500" />
                            <span>{property.baths} Baths</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.1, color: '#D4AF37' }}
                            transition={{ duration: 0.2 }}
                        >
                            <Square size={18} className="mr-2 text-gold-500" />
                            <span>{property.sqft}</span>
                        </motion.div>
                    </div>

                    {/* CTA Button with 3D Effect */}
                    <motion.button
                        className="w-full btn-primary relative overflow-hidden"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <span className="relative z-10">View Details</span>
                    </motion.button>
                </div>

                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                        boxShadow: isHovered
                            ? '0 20px 60px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)'
                            : '0 0 0px rgba(212, 175, 55, 0)',
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Corner Accents */}
                <motion.div
                    className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-600/0 rounded-tl-2xl"
                    animate={{
                        borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0)',
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-600/0 rounded-br-2xl"
                    animate={{
                        borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0)',
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
}
