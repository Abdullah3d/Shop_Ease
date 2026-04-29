import { motion } from "framer-motion";
import { LayoutDashboard, Users, Package, DollarSign } from "lucide-react";

const Dashboard = () => {
    const stats = [
        { label: "Total Revenue", value: "৳ 124,500", icon: <DollarSign />, color: "text-success" },
        { label: "Total Orders", value: "450", icon: <Package />, color: "text-primary" },
        { label: "Customers", value: "1,200", icon: <Users />, color: "text-secondary" },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="p-8 max-w-7xl mx-auto"
        >
            <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <LayoutDashboard size={32} />
                </div>
                <div>
                    <h1 className="text-3xl font-black">Admin Dashboard</h1>
                    <p className="opacity-50">Welcome back, manager.</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, i) => (
                    <div key={i} className="card bg-base-200 shadow-xl p-6 border border-base-300">
                        <div className={`mb-4 ${stat.color}`}>{stat.icon}</div>
                        <div className="text-sm opacity-60 uppercase font-bold tracking-widest">{stat.label}</div>
                        <div className="text-3xl font-black mt-1">{stat.value}</div>
                    </div>
                ))}
            </div>

            {/* Placeholder Table */}
            <div className="bg-base-200 rounded-3xl p-8 border border-base-300">
                <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-mono opacity-50">#7E-9921</td>
                                <td className="font-bold">Abdullah Ibrahim</td>
                                <td><span className="badge badge-success badge-sm">Paid</span></td>
                                <td className="font-bold">৳ 2,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;