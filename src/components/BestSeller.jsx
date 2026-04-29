import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const BestSeller = () => {
    const bestSellers = [
        { id: 1, name: 'Pastel Long Sleeve', price: 140, oldPrice: 220, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500' },
        { id: 2, name: 'Pastel Long Sleeve', price: 140, oldPrice: 220, image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=500' },
        { id: 3, name: 'Pastel Long Sleeve', price: 140, oldPrice: 220, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=500' },
        { id: 4, name: 'Pastel Long Sleeve', price: 140, oldPrice: 220, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500' },
    ];

    return (
        <section className="bg-[#453C35] py-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Subtle Wavy Background Patterns */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" />
                    <path d="M0 60 Q 25 50 50 60 T 100 60" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

                {/* Left Side: Header Content */}
                <div className="lg:w-1/4 text-white space-y-6">
                    <h2 className="text-5xl font-serif leading-tight">
                        Best Seller <br /> Product
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Ullamcorper Congue Eros
                    </p>
                    <Link
                        to="/shop"
                        className="bg-[#453C35] text-white px-10 py-4 uppercase tracking-[0.2em] font-bold hover:bg-black transition-colors"
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Right Side: Product Grid */}
                <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {bestSellers.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>

            {/* Slider Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full border border-white opacity-50"></div>
                ))}
            </div>
        </section>
    );
};

export default BestSeller;