
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { CartSidebar } from './components/CartSidebar';
import { BackgroundMusic } from './components/BackgroundMusic';
import { Order } from './types';
import { createOrder, validateCoupon } from './services/mockBackend';

// Layout wrapper
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-brand-dark text-gray-900 dark:text-white font-sans selection:bg-brand-purple selection:text-white overflow-x-hidden transition-colors duration-300">
    {children}
  </div>
);

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  
  // Cart State
  const [cartItem, setCartItem] = useState<{
    planName: string;
    ram: number;
    basePrice: number;
    custom: boolean;
  } | null>(null);

  const [appliedCoupon, setAppliedCoupon] = useState<{code: string, discount: number} | null>(null);

  const navigate = useNavigate();

  const addToCart = (planName: string, ram: number, basePrice: number, custom = false) => {
    setCartItem({ planName, ram, basePrice, custom });
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    if (!cartItem) return;

    const discountAmount = appliedCoupon ? (cartItem.basePrice * appliedCoupon.discount / 100) : 0;
    const finalPrice = cartItem.basePrice - discountAmount;

    const newOrder: Order = {
      id: `ORD-${Date.now().toString().slice(-6)}`,
      planName: cartItem.planName,
      originalPrice: cartItem.basePrice,
      discountApplied: appliedCoupon ? appliedCoupon.discount : 0,
      couponCode: appliedCoupon?.code,
      finalPrice: finalPrice,
      date: new Date().toISOString(),
      status: 'Active',
      specs: `${cartItem.ram}GB RAM`
    };

    // Create order (anonymous)
    createOrder(newOrder);
    
    // Reset cart
    setCartItem(null);
    setAppliedCoupon(null);
    setIsCartOpen(false);
    alert(`Order placed successfully! Welcome to FlaggerNetwork.\nPlease check your Discord ticket for activation.`);
  };

  return (
    <Layout>
      {/* Background Music Player (Hidden) */}
      <BackgroundMusic isPlaying={isMusicPlaying} />

      {/* Shared Navbar */}
      <Navbar 
        cartCount={cartItem ? 1 : 0} 
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
        isMusicPlaying={isMusicPlaying}
        toggleMusic={() => setIsMusicPlaying(!isMusicPlaying)}
      />

      <Routes>
        <Route path="/" element={<LandingPage onAddToCart={addToCart} currency={currency} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        item={cartItem}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={(code) => {
          const res = validateCoupon(code);
          if (res.valid) {
            setAppliedCoupon({ code, discount: res.discount });
            return { success: true, message: res.message, discount: res.discount };
          } else {
            return { success: false, message: res.message, discount: 0 };
          }
        }}
        onRemoveCoupon={() => setAppliedCoupon(null)}
        onCheckout={handleCheckout}
        currency={currency}
      />

    </Layout>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
