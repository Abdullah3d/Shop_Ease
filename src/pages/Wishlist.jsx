import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import { Trash2, ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    const handleMoveToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product.id);
        toast.success("Moved to bag!");
    };

    return (
        <div className="min-h-screen bg-[#FDF8F3] dark:bg-gray-950 py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-serif text-[#2D241E] dark:text-white mb-10 text-center">My Wishlist</h1>

                {wishlist.length === 0 ? (
                    <div className="text-center py-20">
                        <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500 mb-8">Your wishlist is currently empty.</p>
                        <Link to="/shop" className="bg-[#2D241E] text-white px-8 py-3 rounded-md uppercase text-xs font-bold tracking-widest">
                            Go Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {wishlist.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-gray-900 group relative rounded-2xl overflow-hidden shadow-sm border border-[#F3E5D8] dark:border-gray-800">
                                {/* Image */}
                                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-5 text-center">
                                    <h3 className="font-serif font-bold text-[#2D241E] dark:text-white text-lg mb-1">{item.name}</h3>
                                    <p className="text-[#453C35] dark:text-gray-400 font-bold mb-4">৳ {item.price}</p>

                                    <button
                                        onClick={() => handleMoveToCart(item)}
                                        className="w-full border border-[#2D241E] dark:border-white py-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#2D241E] hover:text-white transition-all flex items-center justify-center gap-2"
                                    >
                                        <ShoppingBag size={14} /> Add to Bag
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;