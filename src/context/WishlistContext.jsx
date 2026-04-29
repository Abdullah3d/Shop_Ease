import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        // Load wishlist from local storage on initial load
        const savedWishlist = localStorage.getItem('fifash_wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        // Save to local storage whenever wishlist changes
        localStorage.setItem('fifash_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            const isExist = prev.find((item) => item.id === product.id);
            if (isExist) {
                // If it exists, remove it (toggle behavior)
                return prev.filter((item) => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    const clearWishlist = () => setWishlist([]);

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};