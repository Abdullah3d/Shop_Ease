import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import {
    ShoppingBag,
    LogOut,
    Menu,
    X,
    Heart,
    Search
} from "lucide-react";

const Navbar = () => {

    const [theme, setTheme] = useState("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext);

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

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm.trim()) {
            navigate(`/shop?search=${searchTerm}`);
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="w-full bg-[#FDF8F3] dark:bg-gray-950 sticky top-0 z-50 transition-colors duration-300 shadow-sm border-b border-[#F3E5D8] dark:border-gray-800">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                {/* Navbar Top */}
                <div className="flex items-center justify-between h-20">

                    {/* Left Side */}
                    <div className="flex items-center gap-4">

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-[#2D241E] dark:text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Logo */}
                        <Link
                            to="/"
                            className="text-xl sm:text-2xl font-serif font-bold tracking-tighter text-[#2D241E] dark:text-white uppercase"
                        >
                            SHOP-Ease
                        </Link>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#2D241E] dark:text-gray-300">

                        <Link
                            to="/shop"
                            className="hover:text-[#453C35] transition"
                        >
                            Collection
                        </Link>

                        <Link
                            to="/men"
                            className="hover:text-[#453C35] transition"
                        >
                            Men
                        </Link>

                        <Link
                            to="/woman"
                            className="hover:text-[#453C35] transition"
                        >
                            Women
                        </Link>

                        <Link
                            to="/kids"
                            className="hover:text-[#453C35] transition"
                        >
                            Kids
                        </Link>
                        <Link to="/ai">AI Stylist</Link>

                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3 sm:gap-5">

                        {/* Desktop Search */}
                        <form
                            onSubmit={handleSearch}
                            className="hidden md:flex items-center border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 bg-white dark:bg-gray-900 w-[220px] lg:w-[320px] xl:w-[380px]"
                        >

                            <input
                                type="text"
                                placeholder="Search jackets, hoodies, blazers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent outline-none text-sm w-full dark:text-white placeholder:text-gray-400"
                            />

                            <button type="submit">
                                <Search
                                    size={18}
                                    className="text-gray-500"
                                />
                            </button>
                        </form>

                        {/* Wishlist */}
                        <Link
                            to="/wishlist"
                            className="relative text-[#2D241E] dark:text-white group"
                        >

                            <Heart
                                size={22}
                                className="group-hover:fill-red-500 group-hover:text-red-500 transition-colors"
                            />

                            {wishlist.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#453C35] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative text-[#2D241E] dark:text-white"
                        >

                            <ShoppingBag size={22} />

                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold animate-bounce">
                                    {cart.length}
                                </span>
                            )}
                        </Link>

                        {/* Login / Logout */}
                        {user ? (
                            <button
                                onClick={logout}
                                className="text-[#2D241E] dark:text-white hover:text-red-600"
                            >
                                <LogOut size={20} />
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="hidden sm:block text-[10px] font-black tracking-widest border border-[#2D241E] px-4 py-2 rounded hover:bg-[#2D241E] hover:text-white transition"
                            >
                                LOGIN
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen
                        ? "max-h-[400px] opacity-100 pb-6"
                        : "max-h-0 opacity-0"
                        }`}
                >

                    <div className="flex flex-col gap-5 pt-4 border-t border-[#F3E5D8] dark:border-gray-800 text-[11px] font-black uppercase tracking-widest text-[#2D241E] dark:text-gray-300">

                        {/* Mobile Links */}
                        <Link
                            to="/shop"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Collection
                        </Link>

                        <Link
                            to="/men"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Men
                        </Link>

                        <Link
                            to="/woman"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Women
                        </Link>

                        <Link
                            to="/kids"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Kids
                        </Link>
                        <Link to="/ai" onClick={() => setIsMenuOpen(false)}>AI Stylist</Link>

                        {/* Mobile Search */}
                        <form
                            onSubmit={handleSearch}
                            className="flex items-center border border-gray-300 dark:border-gray-700 rounded-full px-4 py-3 bg-white dark:bg-gray-900 w-full"
                        >

                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent outline-none text-sm w-full dark:text-white placeholder:text-gray-400"
                            />

                            <button type="submit">
                                <Search
                                    size={18}
                                    className="text-gray-500"
                                />
                            </button>
                        </form>

                        {/* Mobile Login */}
                        {!user && (
                            <Link
                                to="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-center text-[10px] font-black tracking-widest border border-[#2D241E] px-4 py-3 rounded hover:bg-[#2D241E] hover:text-white transition"
                            >
                                LOGIN
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;