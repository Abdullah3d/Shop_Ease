import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const instaImages = [
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400",
        "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=400",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400"
    ];

    return (
        <footer className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-5 w-full h-[250px]">
                {instaImages.map((img, i) => (
                    <div key={i} className="relative group overflow-hidden">
                        <img src={img} alt="Instagram" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>

            <div className="bg-[#453C35] text-white py-16 px-6 text-center">
                <div className="max-w-7xl mx-auto">
                    {/* UPDATED LINKS */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs font-bold uppercase tracking-[0.2em] mb-12">
                        <Link to="/men" className="hover:text-gray-300">Men</Link>
                        <Link to="/woman" className="hover:text-gray-300">Woman</Link>
                        <Link to="/kids" className="hover:text-gray-300">Kids</Link>
                        <Link to="/trends" className="hover:text-gray-300">Trends</Link>
                        <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
                        <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <p className="text-gray-400 text-[10px] tracking-widest uppercase">
                            © {new Date().getFullYear()} FIFASH. All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;