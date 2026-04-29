import React, { useState, useEffect } from 'react';
import { allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronRight, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('default');
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    useEffect(() => {
        let result = [...allProducts];

        // Category Filter - Ensures matching even if data has different casing
        if (filter !== 'all') {
            result = result.filter(p => p.category?.toLowerCase() === filter.toLowerCase());
        }

        // Sorting Logic
        if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
        if (sort === 'price-high') result.sort((a, b) => b.price - a.price);

        setFilteredProducts(result);
    }, [filter, sort]);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            {/* Header Section */}
            <div className="bg-[#FDF8F3] dark:bg-gray-900 py-20 px-6 border-b border-[#F3E5D8] dark:border-gray-800">
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-serif text-[#2D241E] dark:text-white mb-6 uppercase tracking-tighter">
                        The Full Collection
                    </h1>
                    <div className="flex items-center justify-center md:justify-start gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        <Link to="/" className="hover:text-[#453C35] cursor-pointer transition-colors ">
                            Home
                        </Link>
                        <ChevronRight size={12} className="text-[#F3E5D8]" />
                        <span className="text-[#453C35] dark:text-[#F3E5D8]">Shop</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 lg:sticky lg:top-24 h-fit space-y-12">
                        <div>
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-[#2D241E] dark:text-gray-300 flex items-center gap-3">
                                <Filter size={14} strokeWidth={3} /> Filter By Category
                            </h3>
                            <div className="flex flex-col gap-5">
                                {['all', 'men', 'woman', 'kids'].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={`group flex items-center justify-between text-xs uppercase tracking-[0.15em] transition-all duration-300 ${filter === cat
                                                ? 'text-[#453C35] font-black pl-2 border-l-2 border-[#453C35]'
                                                : 'text-gray-400 hover:text-gray-600 hover:pl-2'
                                            }`}
                                    >
                                        {cat}
                                        <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                            ({cat === 'all' ? allProducts.length : allProducts.filter(p => p.category?.toLowerCase() === cat.toLowerCase()).length})
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-10 border-t border-[#F3E5D8] dark:border-gray-800">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-[#2D241E] dark:text-gray-300">Sort Selection</h3>
                            <select
                                onChange={(e) => setSort(e.target.value)}
                                className="w-full p-4 bg-[#FDF8F3] dark:bg-gray-800 rounded-xl outline-none text-[11px] uppercase font-bold tracking-widest text-[#453C35] dark:text-white cursor-pointer hover:bg-[#F3E5D8] transition-colors"
                            >
                                <option value="default">New Arrivals</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </aside>

                    {/* Product Display Area */}
                    <main className="flex-1">
                        <div className="flex justify-between items-center mb-12 pb-4 border-b border-gray-50 dark:border-gray-900">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                Showing <span className="text-[#453C35] dark:text-white">{filteredProducts.length}</span> Results
                            </p>
                            <div className="flex gap-4 text-gray-300">
                                <LayoutGrid size={18} className="text-[#453C35] cursor-pointer" />
                                <List size={18} className="cursor-not-allowed opacity-30" />
                            </div>
                        </div>

                        {/* The Fixed Product Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16"
                        >
                            <AnimatePresence mode='popLayout'>
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {/* FIX: Using {...product} spreads all data (image, name, price) into the card */}
                                        <ProductCard {...product} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                            <div className="py-32 text-center bg-[#FDF8F3] rounded-[2rem] border-2 border-dashed border-[#F3E5D8]">
                                <h2 className="font-serif text-2xl text-gray-400 italic">No pieces found in this selection.</h2>
                                <button
                                    onClick={() => setFilter('all')}
                                    className="mt-4 text-xs font-bold uppercase tracking-widest text-[#453C35] underline underline-offset-4"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Shop;