import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const BestSeller = () => {
    const bestSellers = [
        {
            id: 1,
            name: 'Classic Urban Blazer',
            category: 'Men',
            price: 8500,
            oldPrice: 12000,
            image: 'https://i.postimg.cc/qMCM1RRY/Biker.jpg',
            tag: 'Best'
        },
        {
            id: 2,
            name: 'Tailored Oxford Shirt',
            category: 'Men',
            price: 2200,
            oldPrice: 3500,
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
            tag: 'ELEGANT'
        },
        {
            id: 3,
            name: 'Minimalist Wool Sweater',
            category: 'Men',
            price: 3500,
            oldPrice: 5000,
            image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600',
            tag: 'New'
        },
        {
            id: 4,
            name: 'Minimalist Sand Hoodie',
            category: 'Men',
            price: 2800,
            oldPrice: 4200,
            image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
            tag: 'Best'
        },
    ];

    return (
        <section className="bg-[#2D241E] py-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Subtle Wavy Background Patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="#EBD9C8" strokeWidth="0.2" />
                    <path d="M0 60 Q 25 50 50 60 T 100 60" fill="none" stroke="#EBD9C8" strokeWidth="0.2" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Side: Header Content */}
                <div className="lg:w-1/4 text-white space-y-8 z-10 text-center lg:text-left">
                    <div className="space-y-4">
                        <span className="text-[#EBD9C8] uppercase tracking-[0.4em] text-[10px] font-bold">Trending Now</span>
                        <h2 className="text-5xl font-serif leading-tight text-[#FDFCFB]">
                            Our Best <br /> Sellers
                        </h2>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                        Explore our most-loved pieces, curated for those who appreciate the finer details of modern fashion.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 bg-[#2D241E] text-white px-8 py-4 rounded-full uppercase tracking-[0.2em] text-[10px] font-black hover:bg-black hover:shadow-xl transition-all duration-300 group"
                    >
                        View Full Collection
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                {/* Right Side: Product Grid */}
                <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellers.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSeller;