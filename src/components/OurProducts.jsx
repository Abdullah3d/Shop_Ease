import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext'; 
import toast from 'react-hot-toast';
import { ShoppingBag, Heart, Eye } from 'lucide-react';

const OurProducts = () => {
    const [activeTab, setActiveTab] = useState('ELEGANT');
    const { addToCart } = useContext(CartContext);
    const { addToWishlist, wishlist } = useContext(WishlistContext);

    const tabs = [
        { name: 'ELEGANT', filter: 'ELEGANT' },
        { name: 'ON SALE', filter: 'SALE' },
        { name: 'TRENDING NOW', filter: 'TRENDING' },
        { name: 'NEW ARRIVAL', filter: 'NEW' },
    ];

    const displayProducts = allProducts
        .filter((item) => item.tag === activeTab)
        .slice(0, 8);

    // Add to Cart Handler
    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to bag!`, {
            style: { background: '#2D241E', color: '#fff' }
        });
    };

    return (
        <section className="py-20 px-6 lg:px-12 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2D241E] dark:text-white mb-10">
                    Our Products
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.filter)}
                            className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all pb-2 border-b-2 ${activeTab === tab.filter
                                ? 'border-[#2D241E] text-[#2D241E] dark:text-white dark:border-white'
                                : 'border-transparent text-gray-400 hover:text-[#2D241E]'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {displayProducts.map((product) => {
                        const isInWishlist = wishlist.some(item => item.id === product.id);

                        return (
                            <div key={product.id} className="group">
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Quick Actions (উইশলিস্ট বাটন এখন ইমেজের ওপরে থাকবে) */}
                                    <button
                                        onClick={() => addToWishlist(product)}
                                        className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10"
                                    >
                                        <Heart size={16} fill={isInWishlist ? "red" : "none"} className={isInWishlist ? "text-red-500" : "text-black dark:text-white"} />
                                    </button>

                                    {/* Hover Actions Overlay */}
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 gap-2">
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="bg-white text-black py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#2D241E] hover:text-white transition-colors flex items-center justify-center gap-2"
                                        >
                                            <ShoppingBag size={14} /> Add to Cart
                                        </button>
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="bg-[#2D241E] text-center text-white py-3 text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Eye size={14} /> View Details
                                        </Link>
                                    </div>

                                    {product.tag && (
                                        <span className="absolute top-4 left-4 bg-[#2D241E] text-white px-3 py-1 text-[9px] font-black uppercase tracking-tighter">
                                            {product.tag}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="text-center">
                                    <h3 className="font-serif font-bold text-[#2D241E] dark:text-white text-lg mb-1">
                                        {product.name}
                                    </h3>
                                    <div className="flex justify-center gap-3 text-sm">
                                        <span className="text-gray-400 line-through">${product.oldPrice}</span>
                                        <span className="font-bold text-[#2D241E] dark:text-white font-mono">${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurProducts;