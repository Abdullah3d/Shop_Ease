import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductCard = (product) => {
  // Props থেকে সরাসরি ডেটা বের করে নেওয়া
  const { id, name, price, oldPrice, image, tag, category } = product;

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlist } = useContext(WishlistContext);

  // উইশলিস্টে অলরেডি আছে কিনা চেক করা
  const isInWishlist = wishlist.some(item => item.id === id);

  const handleAddToCart = (e) => {
    e.preventDefault(); // যাতে কার্ডে ক্লিক করলে লিঙ্কে না চলে যায়
    addToCart(product);
    toast.success(`${name} added to bag!`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <div className="group relative flex flex-col">
      {/* Image Section */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Top Right Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
        >
          <Heart
            size={18}
            fill={isInWishlist ? "#ef4444" : "none"}
            className={isInWishlist ? "text-red-500" : "text-gray-400"}
          />
        </button>

        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 gap-2">
          <button
            onClick={handleAddToCart}
            className="bg-white text-black py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#2D241E] hover:text-white transition-all flex items-center justify-center gap-2 shadow-xl"
          >
            <ShoppingBag size={14} /> Add to Cart
          </button>
          <Link
            to={`/product/${id}`}
            className="bg-[#2D241E] text-white py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all text-center flex items-center justify-center gap-2 shadow-xl"
          >
            <Eye size={14} /> View Details
          </Link>
        </div>

        {/* Tag Badge */}
        {tag && (
          <span className="absolute top-4 left-4 bg-white dark:bg-gray-800 text-[#2D241E] dark:text-white px-3 py-1 text-[9px] font-black uppercase tracking-tighter border border-gray-100 dark:border-gray-700">
            {tag}
          </span>
        )}
      </div>

      {/* Product Info Section */}
      <div className="text-center">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-1 italic">
          {category || "Collection"}
        </h3>
        <Link to={`/product/${id}`}>
          <h2 className="font-serif text-lg text-[#2D241E] dark:text-white mb-2 group-hover:text-gray-500 transition-colors">
            {name}
          </h2>
        </Link>
        <div className="flex justify-center items-center gap-3">
          {oldPrice && (
            <span className="text-gray-300 line-through text-sm font-medium">৳{oldPrice}</span>
          )}
          <span className="text-[#2D241E] dark:text-white font-bold text-lg">৳{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;