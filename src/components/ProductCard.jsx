import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import { Heart } from 'lucide-react';

const ProductCard = (product) => {
  const { id, name, price, oldPrice, image, tag, category } = product;
  const { addToWishlist, wishlist } = useContext(WishlistContext);

  const isInWishlist = wishlist.some(item => item.id === id);

  const handleWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product);
  };

  return (
    <div className="group relative flex flex-col">
      {/* Image Section */}
      <Link to={`/product/${id}`} className="relative aspect-[3/4] overflow-hidden bg-[#F9F9F9] rounded-sm mb-6 block">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 p-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm z-10 hover:bg-white transition-all"
        >
          <Heart
            size={16}
            fill={isInWishlist ? "#ef4444" : "none"}
            className={isInWishlist ? "text-red-500" : "text-gray-500"}
          />
        </button>

        {/* Tag Badge */}
        {tag && (
          <span className="absolute top-4 left-4 bg-[#EBD9C8] text-[#2D241E] px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest">
            {tag}
          </span>
        )}
      </Link>

      {/* Product Info Section */}
      <div className="text-center px-2">
        <p className="text-[9px] font-medium text-[#EBD9C8] uppercase tracking-[0.3em] mb-1 opacity-80">
          {category || "Essentials"}
        </p>
        <Link to={`/product/${id}`}>
          <h2 className="font-serif text-[18px] text-[#FDFCFB] mb-2 group-hover:text-[#EBD9C8] transition-colors leading-snug">
            {name}
          </h2>
        </Link>
        <div className="flex justify-center items-center gap-3">
          {oldPrice && (
            <span className="text-gray-500 line-through text-sm font-light">${oldPrice}</span>
          )}
          <span className="text-[#FDFCFB] font-bold text-lg">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;