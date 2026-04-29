import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../data/products';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ShoppingBag, Heart, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const { addToWishlist, wishlist } = useContext(WishlistContext);

    const product = allProducts.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div className="py-40 text-center text-2xl font-serif">Product Not Found</div>;
    }

    const isInWishlist = wishlist.some(item => item.id === product.id);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`, {
            style: { background: '#2D241E', color: '#fff', fontSize: '12px', fontWeight: 'bold' },
            icon: <ShoppingBag size={18} />
        });
    };

    const handleAddToWishlist = () => {
        addToWishlist(product);
        toast.success(`Saved to Wishlist`, {
            icon: <Heart size={18} fill="red" color="red" />
        });
    };

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            <div className="max-w-7xl mx-auto py-20 px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Left: Image */}
                    <div className="bg-[#FDF8F3] dark:bg-gray-900 rounded-[2rem] overflow-hidden group">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col pt-4">
                        <nav className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            Home <span className="opacity-30">/</span> {product.category} <span className="opacity-30">/</span> {product.name}
                        </nav>

                        <h1 className="text-5xl font-serif text-[#2D241E] dark:text-white mb-6 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-6 mb-10">
                            <span className="text-3xl font-bold text-[#453C35] dark:text-[#FDF8F3]">${product.price}</span>
                            <span className="text-xl text-gray-300 line-through">${product.oldPrice}</span>
                            <span className="bg-[#FDF8F3] dark:bg-gray-800 text-[#453C35] dark:text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                                {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                            </span>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10 text-sm">
                            Experience ultimate luxury with the {product.name}. A masterpiece of our {product.category} collection,
                            crafted for high-end fashion lovers. Featuring breathable premium fabric and a tailored silhouette.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-[#2D241E] dark:bg-white dark:text-black text-white py-5 px-8 font-black text-xs uppercase tracking-[0.2em] hover:bg-black dark:hover:bg-gray-200 transition-all flex items-center justify-center gap-3"
                            >
                                <ShoppingBag size={18} /> Add to Cart
                            </button>
                            <button
                                onClick={handleAddToWishlist}
                                className={`px-8 py-5 border-2 transition-all flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] ${isInWishlist
                                        ? 'border-red-500 text-red-500'
                                        : 'border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 text-[#2D241E] dark:text-white'
                                    }`}
                            >
                                <Heart size={18} fill={isInWishlist ? "red" : "none"} />
                                {isInWishlist ? "Saved" : "Wishlist"}
                            </button>
                        </div>

                        <div className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                            <div className="flex items-center gap-3"><CheckCircle size={14} className="text-green-500" /> 100% Authentic Product</div>
                            <div className="flex items-center gap-3"><CheckCircle size={14} className="text-green-500" /> Free delivery on orders over $150</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;