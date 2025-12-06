"use client";

import { motion } from 'framer-motion';
import PropertyCard3D from './PropertyCard3D';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function FeaturedProperties() {
    const properties = [
        {
            id: 1,
            title: 'Marina Bay Penthouse',
            location: 'Marina Bay, Singapore',
            price: '$8,500,000',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85',
            beds: 4,
            baths: 4,
            sqft: '3,500 sqft',
            type: 'Penthouse',
        },
        {
            id: 2,
            title: 'Sentosa Waterfront Villa',
            location: 'Sentosa Cove, Singapore',
            price: '$12,800,000',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85',
            beds: 5,
            baths: 5,
            sqft: '5,200 sqft',
            type: 'Villa',
        },
        {
            id: 3,
            title: 'Orchard Luxury Apartment',
            location: 'Orchard Road, Singapore',
            price: '$4,200,000',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85',
            beds: 3,
            baths: 3,
            sqft: '2,100 sqft',
            type: 'Apartment',
        },
        {
            id: 4,
            title: 'Bukit Timah Bungalow',
            location: 'Bukit Timah, Singapore',
            price: '$15,500,000',
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=85',
            beds: 6,
            baths: 6,
            sqft: '6,800 sqft',
            type: 'Bungalow',
        },
        {
            id: 5,
            title: 'Tanjong Pagar Sky Residence',
            location: 'Tanjong Pagar, Singapore',
            price: '$6,900,000',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85',
            beds: 4,
            baths: 4,
            sqft: '2,800 sqft',
            type: 'Condo',
        },
        {
            id: 6,
            title: 'Holland Village Estate',
            location: 'Holland Village, Singapore',
            price: '$9,200,000',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
            beds: 5,
            baths: 5,
            sqft: '4,500 sqft',
            type: 'Estate',
        },
    ];

    return (
        <section id="properties" className="section-padding bg-dark-900 relative overflow-hidden">
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
                        Featured Listings
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
                        variants={fadeInUp}
                    >
                        <span className="text-white">Exclusive </span>
                        <span className="text-gradient">Properties</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        Discover our handpicked selection of Singapore&apos;s most prestigious private properties
                    </motion.p>
                </motion.div>

                {/* Properties Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            variants={fadeInUp}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PropertyCard3D property={property} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.button
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Properties
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
