import React, { useState, useEffect } from 'react';
import { allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

import {
    ChevronRight,
    LayoutGrid,
    List,
    SlidersHorizontal
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import {
    Link,
    useSearchParams
} from 'react-router-dom';

const Shop = () => {

    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('default');

    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    const [searchParams] = useSearchParams();

    const search = searchParams.get("search") || "";

    useEffect(() => {

        let result = [...allProducts];

        // Category Filter
        if (filter !== 'all') {
            result = result.filter(
                (p) =>
                    p.category?.toLowerCase() === filter.toLowerCase()
            );
        }

        // Search Filter
        if (search) {
            result = result.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.category.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sorting
        if (sort === 'price-low') {
            result.sort((a, b) => a.price - b.price);
        }

        if (sort === 'price-high') {
            result.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(result);

    }, [filter, sort, search]);

    return (
        <div className="min-h-screen bg-[#FCFBFA] dark:bg-gray-950 transition-colors duration-500">

            {/* Header */}
            <div className="relative bg-[#1A1612] py-24 px-6 overflow-hidden">

                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'radial-gradient(#C4A484 0.5px, transparent 0.5px)',
                        size: '20px 20px'
                    }}
                ></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-serif text-[#F3E5D8] mb-6 tracking-tight"
                    >
                        The Collection
                    </motion.h1>

                    <div className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4A484]">

                        <Link
                            to="/"
                            className="hover:text-white transition-colors"
                        >
                            Home
                        </Link>

                        <ChevronRight size={10} />

                        <span className="text-gray-500">
                            Shop
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 lg:sticky lg:top-24 h-fit">

                        <div className="space-y-12">

                            {/* Categories */}
                            <section>

                                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] mb-8 text-[#2D241E] dark:text-white flex items-center gap-2">
                                    <SlidersHorizontal size={14} />
                                    Categories
                                </h3>

                                <div className="space-y-4">

                                    {['all', 'men', 'woman', 'kids'].map((cat) => (

                                        <button
                                            key={cat}
                                            onClick={() => setFilter(cat)}
                                            className={`group flex items-center justify-between w-full text-[11px] uppercase tracking-widest py-1 transition-all ${filter === cat
                                                ? 'text-[#2D241E] font-black border-b border-[#2D241E] dark:text-white dark:border-white'
                                                : 'text-gray-400 hover:text-gray-600'
                                                }`}
                                        >
                                            {cat}

                                            <span className="text-[9px] font-medium opacity-60">
                                                {
                                                    cat === 'all'
                                                        ? allProducts.length
                                                        : allProducts.filter(
                                                            p =>
                                                                p.category?.toLowerCase() ===
                                                                cat.toLowerCase()
                                                        ).length
                                                }
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Sort */}
                            <section className="pt-10 border-t border-gray-200 dark:border-gray-800">

                                <h3 className="text-[11px] font-black uppercase tracking-[0.25em] mb-6 text-[#2D241E] dark:text-white">
                                    Sort By
                                </h3>

                                <select
                                    onChange={(e) => setSort(e.target.value)}
                                    className="w-full p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-none outline-none text-[10px] uppercase font-bold tracking-widest text-gray-600 dark:text-gray-300 appearance-none cursor-pointer hover:border-black transition-all"
                                >
                                    <option value="default">
                                        New Arrivals
                                    </option>

                                    <option value="price-low">
                                        Price: Low to High
                                    </option>

                                    <option value="price-high">
                                        Price: High to Low
                                    </option>
                                </select>
                            </section>
                        </div>
                    </aside>

                    {/* Products */}
                    <main className="flex-1">

                        <div className="flex justify-between items-end mb-12 pb-6 border-b border-gray-100 dark:border-gray-900">

                            <div>

                                <h2 className="text-2xl font-serif text-[#2D241E] dark:text-white capitalize">

                                    {
                                        search
                                            ? `Search Results for "${search}"`
                                            : filter === 'all'
                                                ? 'All Pieces'
                                                : `${filter}'s collection`
                                    }

                                </h2>

                                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-2">
                                    Displaying {filteredProducts.length} unique styles
                                </p>
                            </div>

                            <div className="flex gap-6 items-center">

                                <LayoutGrid
                                    size={18}
                                    className="text-[#2D241E] dark:text-white cursor-pointer"
                                />

                                <List
                                    size={18}
                                    className="text-gray-200 cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14"
                        >

                            <AnimatePresence mode='popLayout'>

                                {filteredProducts.map((product) => (

                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.23, 1, 0.32, 1]
                                        }}
                                    >

                                        <div className="bg-[#2f373c] dark:bg-gray-900 p-2 pb-6 group hover:shadow-2xl hover:shadow-stone-200/50 dark:hover:shadow-none transition-all duration-500 rounded-sm">

                                            <ProductCard {...product} />

                                        </div>
                                    </motion.div>
                                ))}

                            </AnimatePresence>
                        </motion.div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-40 text-center"
                            >

                                <div className="inline-block p-10 border border-dashed border-gray-200 rounded-full mb-6">

                                    <SlidersHorizontal
                                        className="text-gray-200"
                                        size={40}
                                    />
                                </div>

                                <h2 className="font-serif text-2xl text-gray-400 italic">
                                    No pieces found.
                                </h2>

                                <button
                                    onClick={() => setFilter('all')}
                                    className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#2D241E] border-b-2 border-[#2D241E] pb-1"
                                >
                                    Reset Filters
                                </button>
                            </motion.div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Shop;