import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

const CategoryPage = ({ category, title, description }) => {
    const { addToCart } = useContext(CartContext);
    const { addToWishlist, wishlist } = useContext(WishlistContext);

    // প্রোডাক্ট ফিল্টার লজিক
    const filteredProducts = category === 'all'
        ? allProducts
        : allProducts.filter(item => item.category.toLowerCase() === category.toLowerCase());

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to bag!`, {
            style: { background: '#2D241E', color: '#fff' }
        });
    };

    return (
        <div className="min-h-screen bg-[#FDF8F3] dark:bg-gray-950 py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif text-[#2D241E] dark:text-white mb-4 uppercase tracking-tight">
                        {title}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm uppercase tracking-widest leading-relaxed">
                        {description}
                    </p>
                    <div className="mt-6 w-20 h-1 bg-[#2D241E] dark:bg-white mx-auto"></div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {filteredProducts.map((product) => {
                            const isInWishlist = wishlist.some(item => item.id === product.id);

                            return (
                                <div key={product.id} className="group">
                                    {/* Product Image Container */}
                                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6 rounded-sm">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Top Right Wishlist Button */}
                                        <button
                                            onClick={() => addToWishlist(product)}
                                            className="absolute top-4 right-4 p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
                                        >
                                            <Heart
                                                size={18}
                                                fill={isInWishlist ? "#ef4444" : "none"}
                                                className={isInWishlist ? "text-red-500" : "text-gray-400"}
                                            />
                                        </button>

                                        {/* Hover Overlay Actions */}
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 gap-2">
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="bg-white text-black py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#2D241E] hover:text-white transition-all flex items-center justify-center gap-2"
                                            >
                                                <ShoppingBag size={14} /> Add to Cart
                                            </button>
                                            <Link
                                                to={`/product/${product.id}`}
                                                className="bg-[#2D241E] text-white py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all text-center flex items-center justify-center gap-2"
                                            >
                                                <Eye size={14} /> View Details
                                            </Link>
                                        </div>

                                        {/* Tag/Badge */}
                                        {product.tag && (
                                            <span className="absolute top-4 left-4 bg-white dark:bg-gray-800 text-[#2D241E] dark:text-white px-3 py-1 text-[9px] font-black uppercase tracking-tighter border border-gray-100 dark:border-gray-700">
                                                {product.tag}
                                            </span>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="text-center">
                                        <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                                            {product.category}
                                        </h3>
                                        <h2 className="font-serif text-xl text-[#2D241E] dark:text-white mb-2 group-hover:opacity-70 transition-opacity">
                                            {product.name}
                                        </h2>
                                        <div className="flex justify-center items-center gap-3">
                                            <span className="text-gray-300 line-through text-sm font-medium">৳{product.oldPrice}</span>
                                            <span className="text-[#2D241E] dark:text-white font-bold text-lg">৳{product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-400 font-serif text-xl">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;