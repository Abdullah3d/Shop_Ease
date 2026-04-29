import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError("");
    };

    const handleRegister = () => {
        const { name, email, password, confirmPassword } = formData;

        if (!name || !email || !password || !confirmPassword) {
            return toast.error("Please fill in all fields");
        }
        if (password.length < 6) {
            return setError("Password must be at least 6 characters");
        }
        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        register(name, email, password);
        toast.success("Account created successfully!");
        navigate("/login");
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } }
    };

    const itemVariants = { hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3] dark:bg-gray-950 px-4 py-10">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-2xl rounded-[2rem] overflow-hidden border border-[#F3E5D8] dark:border-gray-800"
            >
                <div className="bg-[#453C35] p-10 text-center text-white">
                    <h2 className="text-4xl font-serif font-bold tracking-tight">Create Account</h2>
                    <p className="text-[10px] opacity-70 mt-2 uppercase tracking-[0.2em]">Join the FIFASH community</p>
                </div>

                <div className="p-8 md:p-12">
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="bg-red-50 text-red-600 text-sm p-4 rounded-xl mb-6 flex items-center gap-3 border border-red-100"
                            >
                                <AlertCircle size={16} />
                                <span>{error}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="space-y-5">
                        <motion.div variants={itemVariants}>
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                <input name="name" type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-[#FDF8F3] dark:bg-gray-800 rounded-xl outline-none focus:ring-2 ring-[#453C35] transition" value={formData.name} onChange={handleChange} />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                <input name="email" type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-4 bg-[#FDF8F3] dark:bg-gray-800 rounded-xl outline-none focus:ring-2 ring-[#453C35] transition" value={formData.email} onChange={handleChange} />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                <input name="password" type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-[#FDF8F3] dark:bg-gray-800 rounded-xl outline-none focus:ring-2 ring-[#453C35] transition" value={formData.password} onChange={handleChange} />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                <input name="confirmPassword" type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-[#FDF8F3] dark:bg-gray-800 rounded-xl outline-none focus:ring-2 ring-[#453C35] transition" value={formData.confirmPassword} onChange={handleChange} />
                                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                                    <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-5 h-5" />
                                )}
                            </div>
                        </motion.div>
                    </div>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#453C35] text-white py-5 rounded-xl mt-10 font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-brown/20"
                        onClick={handleRegister}
                    >
                        Create Account <ArrowRight size={20} />
                    </motion.button>

                    <p className="text-center mt-8 text-sm text-gray-500">
                        Already have an account?
                        <Link to="/login" className="text-[#453C35] dark:text-[#F3E5D8] font-bold ml-2 underline underline-offset-4">Sign In</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;