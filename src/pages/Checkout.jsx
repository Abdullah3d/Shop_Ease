import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ChevronLeft, CreditCard, Truck, CheckCircle2 } from 'lucide-react';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // ফর্ম স্টেট
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        phone: '',
    });

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // একটি ফেক ডিলে (Delay) দিয়ে অর্ডার প্লেস করা
        setTimeout(() => {
            setLoading(false);
            toast.success("Order Placed Successfully!", {
                icon: '🎉',
                style: { background: '#2D241E', color: '#fff' }
            });
            clearCart();
            navigate('/'); // অর্ডার শেষে হোমপেজে নিয়ে যাবে
        }, 2000);
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <p className="mb-4 font-serif text-xl">Your bag is empty to checkout.</p>
                <button onClick={() => navigate('/shop')} className="btn btn-outline uppercase tracking-widest text-xs">Back to Shop</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDF8F3] dark:bg-gray-950 py-12 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* বাম পাশ: শিপিং ফর্ম */}
                <div>
                    <button onClick={() => navigate('/cart')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black mb-8 transition">
                        <ChevronLeft size={14} /> Back to Bag
                    </button>

                    <h2 className="text-3xl font-serif text-[#2D241E] dark:text-white mb-8">Shipping Information</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <input
                                required name="email" type="email" placeholder="Email Address"
                                className="w-full bg-white dark:bg-gray-900 border border-[#F3E5D8] dark:border-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#2D241E]"
                                onChange={handleInput}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input required name="firstName" type="text" placeholder="First Name" className="bg-white dark:bg-gray-900 border border-[#F3E5D8] dark:border-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#2D241E]" onChange={handleInput} />
                                <input required name="lastName" type="text" placeholder="Last Name" className="bg-white dark:bg-gray-900 border border-[#F3E5D8] dark:border-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#2D241E]" onChange={handleInput} />
                            </div>
                            <input required name="address" type="text" placeholder="Complete Address" className="w-full bg-white dark:bg-gray-900 border border-[#F3E5D8] dark:border-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#2D241E]" onChange={handleInput} />
                            <div className="grid grid-cols-2 gap-4">
                                <input required name="city" type="text" placeholder="City" className="bg-white dark:bg-gray-900 border border-[#F3E5D8] dark:border-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#2D241E]" onChange={handleInput} />
                                <input required name="phone" type="tel" placeholder="Phone Number" className="bg-white dark:bg-gray-900 border border-[#F3E5D8] dark:border-gray-800 p-4 rounded-xl focus:outline-none focus:border-[#2D241E]" onChange={handleInput} />
                            </div>
                        </div>

                        <h2 className="text-2xl font-serif text-[#2D241E] dark:text-white pt-6">Payment Method</h2>
                        <div className="p-4 border border-[#2D241E] rounded-xl flex items-center justify-between bg-white dark:bg-gray-900">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-[#2D241E]" />
                                <span className="text-sm font-bold uppercase tracking-widest">Cash on Delivery</span>
                            </div>
                            <Truck size={20} className="text-gray-400" />
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-[#2D241E] text-white py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-3"
                        >
                            {loading ? "Processing..." : `Complete Order • $${totalPrice}`}
                        </button>
                    </form>
                </div>

                {/* ডান পাশ: অর্ডার সামারি */}
                <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] h-fit border border-[#F3E5D8] dark:border-gray-800">
                    <h3 className="text-xl font-serif font-bold text-[#2D241E] dark:text-white mb-6">Order Summary</h3>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 mb-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex gap-4 items-center">
                                <div className="w-16 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-[#2D241E] dark:text-white line-clamp-1">{item.name || item.title}</h4>
                                    <p className="text-xs text-gray-400 italic">Qty: 1</p>
                                </div>
                                <span className="font-bold text-sm text-[#2D241E] dark:text-white">${item.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6 space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                            <span className="font-bold">${totalPrice}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Shipping</span>
                            <span className="text-green-600 font-bold uppercase text-[10px]">Free</span>
                        </div>
                        <div className="flex justify-between items-end pt-4 border-t border-gray-100 dark:border-gray-800">
                            <span className="font-serif text-lg font-bold">Total</span>
                            <span className="text-2xl font-black text-[#2D241E] dark:text-white">${totalPrice}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;