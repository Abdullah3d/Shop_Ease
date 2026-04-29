import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext"; // Make sure to create this context
import { Sun, Moon, ShoppingBag, LogOut, Menu, X, Heart } from "lucide-react";

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext); // Access wishlist items

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <nav className="w-full bg-[#FDF8F3] dark:bg-gray-950 sticky top-0 z-50 transition-colors duration-300 shadow-sm border-b border-[#F3E5D8] dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    <button className="md:hidden text-[#2D241E] dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-[#2D241E] dark:text-white uppercase">
                        FIFASH
                    </Link>

                    <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#2D241E] dark:text-gray-300">
                        <Link to="/shop" className="hover:text-[#453C35] transition">Collection</Link>
                        <Link to="/men" className="hover:text-[#453C35] transition">Men</Link>
                        <Link to="/woman" className="hover:text-[#453C35] transition">Woman</Link>
                        <Link to="/kids" className="hover:text-[#453C35] transition">Kids</Link>
                    </div>

                    <div className="flex items-center gap-5">
                        <button onClick={toggleTheme} className="text-[#2D241E] dark:text-white">
                            {theme === "light" ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                        </button>

                        {/* Wishlist Icon with Count */}
                        <Link to="/wishlist" className="relative text-[#2D241E] dark:text-white group">
                            <Heart size={22} className="group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                            {wishlist.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#453C35] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>

                        {/* Cart Icon with Count */}
                        <Link to="/cart" className="relative text-[#2D241E] dark:text-white">
                            <ShoppingBag size={22} />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold animate-bounce">
                                    {cart.length}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <button onClick={logout} className="text-[#2D241E] dark:text-white hover:text-red-600"><LogOut size={20} /></button>
                        ) : (
                            <Link to="/login" className="text-[10px] font-black tracking-widest border border-[#2D241E] px-4 py-2 rounded hover:bg-[#2D241E] hover:text-white transition">LOGIN</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;