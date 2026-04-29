import { createContext, useState } from "react";
import toast from "react-hot-toast";


export const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email) => {
        const isAdmin = email === "admin@7eleven.com";
        const userData = {
            email,
            name: isAdmin ? "Admin User" : "Customer",
            role: isAdmin ? "admin" : "user",
        };
        setUser(userData);
        toast.success(`Welcome, ${userData.name}!`);
    };

    const register = (name, email) => {
        toast.success("Registration Successful!");
    };

    const logout = () => {
        setUser(null);
        toast.error("Logged out");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};