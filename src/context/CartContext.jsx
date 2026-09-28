import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('chai_bro_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'gurh-laachi-chai',
          name: 'Signature Gurh Laachi Chai',
          price: 49,
          quantity: 2,
          servingType: 'Mitti Kulhad (180ml)',
          image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
          customizations: 'Standard • Jaggery Sweetened'
        },
        {
          id: 'desi-ghee-churi',
          name: 'Ghar Ki Desi Ghee Churi',
          price: 99,
          quantity: 1,
          servingType: 'Earthen Terracotta Bowl (200g)',
          image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
          customizations: 'Pure Desi Ghee & Roasted Dry Fruits'
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeItemModal, setActiveItemModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [couponCode, setCouponCode] = useState('CHAIBRO');
  const [isCouponApplied, setIsCouponApplied] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem('chai_bro_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore write errors
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (item, options = {}) => {
    setCartItems(prev => {
      // create unique key based on id and customizations if custom
      const itemKey = options.customKey || item.id;
      const existing = prev.find(i => (i.customKey || i.id) === itemKey);
      
      if (existing) {
        return prev.map(i => 
          (i.customKey || i.id) === itemKey ? { ...i, quantity: i.quantity + (options.quantity || 1) } : i
        );
      } else {
        return [...prev, {
          ...item,
          customKey: options.customKey || item.id,
          customizations: options.customizations || item.servingType || 'Standard',
          price: options.customPrice || item.price,
          quantity: options.quantity || 1
        }];
      }
    });

    showToast(`Added "${item.name}" to your Bro Tray! ☕`);
  };

  const removeFromCart = (targetKey) => {
    setCartItems(prev => prev.filter(i => (i.customKey || i.id) !== targetKey));
  };

  const updateQuantity = (targetKey, delta) => {
    setCartItems(prev => prev.map(i => {
      if ((i.customKey || i.id) === targetKey) {
        const newQty = i.quantity + delta;
        return newQty > 0 ? { ...i, quantity: newQty } : null;
      }
      return i;
    }).filter(Boolean));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const applyCoupon = (code) => {
    if (code.trim().toUpperCase() === 'CHAIBRO') {
      setIsCouponApplied(true);
      showToast('🎉 Promo code CHAIBRO applied! 20% discount added.');
      return true;
    } else {
      showToast('❌ Invalid promo code. Try "CHAIBRO"!');
      return false;
    }
  };

  const removeCoupon = () => {
    setIsCouponApplied(false);
    showToast('Promo code removed.');
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = isCouponApplied ? Math.round(subtotal * 0.20) : 0;
  const taxableAmount = Math.max(0, subtotal - discount);
  const gst = Math.round(taxableAmount * 0.05); // 5% F&B GST
  const grandTotal = taxableAmount + gst;
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      activeItemModal,
      setActiveItemModal,
      toastMessage,
      showToast,
      couponCode,
      setCouponCode,
      isCouponApplied,
      applyCoupon,
      removeCoupon,
      subtotal,
      discount,
      gst,
      grandTotal,
      totalItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
