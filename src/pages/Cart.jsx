import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart, totalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    // ১. একটি আইটেম রিমুভ করার আগে কনফার্মেশন
    const handleRemove = (id, name) => {
        const confirmDelete = window.confirm(`Are you sure you want to remove "${name}" from your bag?`);

        if (confirmDelete) {
            removeFromCart(id);
            toast.error(`${name} removed from bag`, {
                style: { borderRadius: '0px', background: '#2D241E', color: '#fff' }
            });
        }
    };

    // ২. পুরো কার্ট ক্লিয়ার করার আগে কনফার্মেশন
    const handleClearCart = () => {
        if (cart.length === 0) return;

        const confirmClear = window.confirm("Are you sure you want to clear your entire shopping bag?");

        if (confirmClear) {
            clearCart();
            toast.error("Shopping bag cleared", {
                style: { borderRadius: '0px', background: '#ef4444', color: '#fff' }
            });
        }
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            toast.error("Your bag is empty!");
            return;
        }
        navigate('/checkout');
        toast.success("Proceeding to secure checkout...");
    };

    return (
        <div className="min-h-screen bg-[#FDF8F3] dark:bg-gray-950 py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif text-[#2D241E] dark:text-white mb-2">Shopping Bag</h1>
                        <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">
                            {cart.length} {cart.length === 1 ? 'Item' : 'Items'} in your selection
                        </p>
                    </div>
                    <Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-[#2D241E] dark:text-gray-400 border-b border-[#2D241E] pb-1 hover:opacity-60 transition">
                        Continue Browsing
                    </Link>
                </div>

                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 bg-white dark:bg-gray-900 rounded-[2rem] shadow-sm border border-[#F3E5D8] dark:border-gray-800">
                        <ShoppingBag size={48} className="text-gray-200 mb-6" />
                        <p className="text-lg font-serif text-gray-400 mb-8">Your shopping bag is empty</p>
                        <Link to="/shop" className="bg-[#2D241E] text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-black transition-all">
                            Discover Collection
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* 1. PRODUCT LIST */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="hidden md:grid grid-cols-6 pb-4 border-b border-gray-100 dark:border-gray-800 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                                <span className="col-span-3">Product Details</span>
                                <span className="text-center">Quantity</span>
                                <span className="text-center">Price</span>
                                <span className="text-right">Action</span>
                            </div>

                            {cart.map((item) => (
                                <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 items-center gap-6 pb-8 border-b border-gray-50 dark:border-gray-900 group">
                                    {/* Image & Info */}
                                    <div className="md:col-span-3 flex gap-6 items-center">
                                        <div className="w-24 h-32 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-xl">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-serif font-bold text-[#2D241E] dark:text-white mb-1">{item.name || item.title}</h3>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">{item.category || 'Premium Wear'}</p>
                                            <div className="md:hidden flex items-center gap-4 mt-2">
                                                <span className="font-bold text-[#2D241E] dark:text-white">৳{item.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quantity Toggle */}
                                    <div className="flex justify-center">
                                        <div className="flex items-center border border-gray-200 dark:border-gray-800 px-3 py-1 rounded-full gap-4">
                                            <button className="text-gray-400 hover:text-black"><Minus size={14} /></button>
                                            <span className="text-sm font-bold">1</span>
                                            <button className="text-gray-400 hover:text-black"><Plus size={14} /></button>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="hidden md:block text-center font-bold text-[#2D241E] dark:text-white">
                                        ৳{item.price}
                                    </div>

                                    {/* Remove Item Button */}
                                    <div className="text-right">
                                        <button
                                            onClick={() => handleRemove(item.id, item.name || item.title)}
                                            className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Clear All Button */}
                            <button
                                onClick={handleClearCart}
                                className="text-[10px] font-bold uppercase tracking-widest text-red-400 hover:text-red-600 transition"
                            >
                                Clear All Items
                            </button>
                        </div>

                        {/* 2. ORDER SUMMARY */}
                        <div className="lg:col-span-4">
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-sm border border-[#F3E5D8] dark:border-gray-800 sticky top-28">
                                <h3 className="text-xl font-serif font-bold text-[#2D241E] dark:text-white mb-8 text-center">Order Summary</h3>

                                <div className="space-y-5 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                                        <span className="font-bold text-[#2D241E] dark:text-white">৳{totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Estimated Shipping</span>
                                        <span className="text-green-600 font-bold uppercase text-[10px] tracking-widest">Calculated at next step</span>
                                    </div>
                                    <div className="pt-5 border-t border-gray-100 dark:border-gray-800 flex justify-between items-end">
                                        <span className="font-serif text-lg font-bold text-[#2D241E] dark:text-white">Grand Total</span>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-[#2D241E] dark:text-white">৳{totalPrice}</p>
                                            <p className="text-[9px] uppercase tracking-tighter text-gray-400">VAT included where applicable</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-[#2D241E] dark:bg-white dark:text-black text-white py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-black dark:hover:bg-gray-200 transition-all group"
                                >
                                    Proceed to Checkout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-30 grayscale">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="paypal" className="h-4" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="visa" className="h-4" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" className="h-4" />
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;