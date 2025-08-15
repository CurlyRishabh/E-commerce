import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from "js-cookie";
import { ThemeProvider } from "../../contexts/ThemeContext";
import Navigation from "../../components/Navigation";
import CheckoutForm from './CheckoutForm';
import OrderSuccess from './OrderSuccess';

export default function Checkout() {
  const [showForm, setShowForm] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const cookieValue = Cookies.get("productList");
    if (cookieValue) {
      const parsedData = JSON.parse(cookieValue);
      setCartItems(parsedData);
    } else {
      setShowForm(false);
    }
  }, []);

  const handleOrderComplete = (formData, total) => {
    const orderInfo = {
      ...formData,
      total: total,
      orderDate: new Date().toISOString(),
      orderId: `NK${Date.now().toString().slice(-6)}`,
      items: cartItems
    };
    
    setOrderData(orderInfo);
    Cookies.set("OrderList", JSON.stringify(orderInfo), { expires: 1 });
    Cookies.remove("productList");
    setShowForm(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-nike-black">
        <Navigation cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)} />
        
        <AnimatePresence mode="wait">
          {showForm ? (
            <CheckoutForm 
              key="checkout-form"
              cartItems={cartItems}
              onOrderComplete={handleOrderComplete}
            />
          ) : (
            <OrderSuccess 
              key="order-success"
              orderData={orderData}
            />
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
