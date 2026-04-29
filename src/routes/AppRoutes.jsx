import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
// Import the new CategoryPage
import CategoryPage from "../pages/CategoryPage";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collection" element={<Shop />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* --- New Category Routes --- */}
            <Route path="/men" element={
                <CategoryPage
                    category="men"
                    title="Men's Collection"
                    description="The latest essentials for the modern man."
                />
            } />

            <Route path="/woman" element={
                <CategoryPage
                    category="woman"
                    title="Women's Collection"
                    description="Elegance and style curated for every occasion."
                />
            } />

            <Route path="/kids" element={
                <CategoryPage
                    category="kids"
                    title="Kids' Corner"
                    description="Comfortable and playful styles for the little ones."
                />
            } />

            <Route path="/collection" element={
                <CategoryPage
                    category="all"
                    title="Full Collection"
                    description="Browse our entire catalog of premium fashion."
                />
            } />

            <Route path="/trends" element={
                <CategoryPage
                    category="all" // You can also filter this by a 'trending' flag if you prefer
                    title="Trending Now"
                    description="The hottest picks of the season."
                />
            } />

            {/* --- Admin Route --- */}
            <Route
                path="/admin"
                element={
                    <ProtectedRoute adminOnly={true}>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>

    );
};

export default AppRoutes;