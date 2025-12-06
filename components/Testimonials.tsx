"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Michael Chen',
            role: 'Property Investor',
            content: 'Legacy Realty helped me build a diverse property portfolio worth over $20M. Their market insights and strategic guidance are unparalleled.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?img=12',
        },
        {
            name: 'Sarah Tan',
            role: 'Business Owner',
            content: 'The team at Legacy Realty made my dream penthouse purchase seamless. Their professionalism and attention to detail exceeded all expectations.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?img=45',
        },
        {
            name: 'David Lim',
            role: 'Entrepreneur',
            content: 'Outstanding service from start to finish. They found me the perfect waterfront villa and negotiated an excellent deal. Highly recommended!',
            rating: 5,
            image: 'https://i.pravatar.cc/150?img=33',
        },
        {
            name: 'Emily Wong',
            role: 'Executive',
            content: 'Legacy Realty\'s expertise in the luxury property market is exceptional. They understood my needs perfectly and delivered beyond expectations.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?img=47',
        },
        {
            name: 'James Koh',
            role: 'Investor',
            content: 'Their market analysis and investment strategies have consistently delivered strong returns. A truly professional and trustworthy team.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?img=56',
        },
    ];

    return (
        <section className="section-padding bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
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
                        CLIENT TESTIMONIALS
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-6xl font-serif font-bold mb-6"
                        variants={fadeInUp}
                    >
                        <span className="text-white">What Our </span>
                        <span className="text-gradient">Clients Say</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        Trusted by Singapore&apos;s most discerning property investors
                    </motion.p>
                </motion.div>

                {/* Testimonials Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <Swiper
                        modules={[Autoplay, Pagination, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        className="testimonials-swiper pb-16"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="!w-96">
                                <div className="glass-dark p-8 rounded-2xl h-full relative">
                                    {/* Quote Icon */}
                                    <Quote className="text-gold-600 mb-4" size={40} />

                                    {/* Content */}
                                    <p className="text-gray-300 leading-relaxed mb-6 italic">
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    {/* Rating */}
                                    <div className="flex mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-gold-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-gold-600 mr-4 overflow-hidden">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-600/5 to-transparent pointer-events-none" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #666;
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #D4AF37;
        }
      `}</style>
        </section>
    );
}
