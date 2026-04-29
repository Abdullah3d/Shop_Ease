import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        if (!email || !password) return toast.error("Please fill in all fields");
        login(email);
        toast.success("Welcome back!");
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3] dark:bg-gray-950 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl rounded-[2rem] overflow-hidden border border-[#F3E5D8] dark:border-gray-800"
            >
                <div className="bg-[#453C35] p-10 text-center text-white">
                    <h2 className="text-4xl font-serif font-bold tracking-tight">Welcome</h2>
                    <p className="text-[10px] opacity-70 mt-2 uppercase tracking-[0.2em]">Sign in to your account</p>
                </div>

                <div className="p-8 md:p-10">
                    <div className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-[#FDF8F3] dark:bg-gray-800 rounded-xl outline-none focus:ring-2 ring-[#453C35] transition"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-[#FDF8F3] dark:bg-gray-800 rounded-xl outline-none focus:ring-2 ring-[#453C35] transition"
                                />
                            </div>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleLogin}
                        className="w-full bg-[#453C35] text-white py-5 rounded-xl mt-10 font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl"
                    >
                        Sign In <ArrowRight size={20} />
                    </motion.button>

                    <p className="text-center mt-8 text-sm text-gray-500">
                        Don't have an account?
                        <Link to="/register" className="text-[#453C35] dark:text-[#F3E5D8] font-bold ml-2 underline underline-offset-4">Create Account</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;