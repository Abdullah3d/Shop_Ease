import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

// 1. Import your Providers
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <>
            {/* Toaster is here to listen for any toast.success() calls */}
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                style: {
                  background: '#2D241E',
                  color: '#fff',
                  fontSize: '14px',
                },
              }}
            />
            <Navbar />
            <AppRoutes />
            <Footer />
          </>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;