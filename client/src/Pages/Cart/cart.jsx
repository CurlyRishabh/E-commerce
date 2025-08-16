import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { ThemeProvider } from "../../contexts/ThemeContext";
import Navigation from "../../components/Navigation";

// Import icons
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
  AiOutlineShoppingCart,
  AiOutlineArrowLeft
} from "react-icons/ai";

// Cart Item Component
const CartItem = ({ item, onUpdateQuantity, onRemove, index }) => {
  const [quantity, setQuantity] = useState(item.qty);

  const handleQuantityChange = (newQty) => {
    if (newQty < 1) return;
    setQuantity(newQty);
    onUpdateQuantity(item.title, newQty);
  };

  const itemTotal = (quantity * parseFloat(item.newPrice)).toFixed(2);

  return (
    <motion.div
      className="nike-card p-6 mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        {/* Product Image */}
        <motion.div
          className="flex-shrink-0 mx-auto md:mx-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain rounded-lg bg-nike-gray-50 dark:bg-nike-gray-800 p-2"
          />
        </motion.div>

        {/* Product Details */}
        <div className="flex-1 text-center md:text-left min-w-0">
          <h3 className="font-semibold text-base md:text-lg text-nike-black dark:text-white mb-1 md:mb-2 truncate">
            {item.title}
          </h3>
          <p className="nike-price text-lg md:text-xl">${item.newPrice}</p>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
          {/* Quantity Controls */}
          <div className="flex items-center bg-nike-gray-100 dark:bg-nike-gray-800 rounded-lg p-1 flex-shrink-0">
            <motion.button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="p-2 rounded-lg hover:bg-nike-gray-200 dark:hover:bg-nike-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineMinus size={14} />
            </motion.button>

            <span className="px-3 py-2 font-semibold text-nike-black dark:text-white min-w-[2.5rem] text-center text-sm">
              {quantity}
            </span>

            <motion.button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="p-2 rounded-lg hover:bg-nike-gray-200 dark:hover:bg-nike-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlinePlus size={14} />
            </motion.button>
          </div>

          {/* Item Total and Remove Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="text-center sm:text-right min-w-[4rem]">
              <p className="nike-price text-base md:text-lg font-bold">${itemTotal}</p>
            </div>

            {/* Remove Button */}
            <motion.button
              onClick={() => onRemove(item.title)}
              className="p-2 text-nike-red hover:bg-nike-red/10 rounded-lg transition-colors flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Remove item"
            >
              <AiOutlineDelete size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Empty Cart Component
const EmptyCart = () => (
  <motion.div
    className="text-center py-16"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="mb-8"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <AiOutlineShoppingCart className="mx-auto text-nike-gray-400 mb-4" size={120} />
    </motion.div>

    <h2 className="nike-section-title mb-4">Your Cart is Empty</h2>
    <p className="nike-text mb-8 max-w-md mx-auto">
      Looks like you haven't added any items to your cart yet.
      Start shopping to fill it up!
    </p>

    <Link to="/products">
      <motion.button
        className="nike-btn-primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        START SHOPPING
      </motion.button>
    </Link>
  </motion.div>
);

// Main Cart Component
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    loadCartFromCookies();
  }, []);

  useEffect(() => {
    calculateTotal();
    setIsEmpty(cartItems.length === 0);
  }, [cartItems]);

  const loadCartFromCookies = () => {
    const cookieValue = Cookies.get("productList");
    if (cookieValue) {
      try {
        const parsedData = JSON.parse(cookieValue);
        setCartItems(parsedData);
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCartItems([]);
      }
    }
  };

  const calculateTotal = () => {
    const newTotal = cartItems.reduce((sum, item) => {
      return sum + (item.qty * parseFloat(item.newPrice));
    }, 0);
    setTotal(newTotal);
  };

  const updateQuantity = (title, newQty) => {
    const updatedItems = cartItems.map(item =>
      item.title === title ? { ...item, qty: newQty } : item
    );
    setCartItems(updatedItems);
    Cookies.set("productList", JSON.stringify(updatedItems), { expires: 1 });
  };

  const removeItem = (title) => {
    const updatedItems = cartItems.filter(item => item.title !== title);
    setCartItems(updatedItems);

    if (updatedItems.length === 0) {
      Cookies.set("productList", JSON.stringify([]), { expires: 1 });
    } else {
      Cookies.set("productList", JSON.stringify(updatedItems), { expires: 1 });
    }
  };

  const clearCart = () => {
    setCartItems([]);
    Cookies.set("productList", JSON.stringify([]), { expires: 1 });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-nike-black">
        {/* Navigation */}
        <Navigation cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)} />

        {/* Main Content */}
        <div className="pt-20">
          {/* Header */}
          <motion.section
            className="bg-gradient-to-r from-nike-gray-50 to-nike-gray-100 dark:from-nike-gray-900 dark:to-nike-black py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/products">
                  <motion.button
                    className="p-2 hover:bg-nike-gray-200 dark:hover:bg-nike-gray-800 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AiOutlineArrowLeft size={24} />
                  </motion.button>
                </Link>
                <h1 className="nike-hero-text text-3xl md:text-4xl">
                  Shopping <span className="text-nike-red">Cart</span>
                </h1>
              </motion.div>

              {!isEmpty && (
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="nike-text">
                    {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
                  </p>
                  <motion.button
                    onClick={clearCart}
                    className="text-nike-red hover:text-nike-red/80 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear Cart
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.section>

          {/* Cart Content */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {isEmpty ? (
                <EmptyCart />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Cart Items */}
                  <div className="lg:col-span-2">
                    <AnimatePresence mode="popLayout">
                      {cartItems.map((item, index) => (
                        <CartItem
                          key={item.title}
                          item={item}
                          index={index}
                          onUpdateQuantity={updateQuantity}
                          onRemove={removeItem}
                        />
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Order Summary */}
                  <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="nike-card p-6 sticky top-24">
                      <h3 className="nike-section-title text-xl mb-6">Order Summary</h3>

                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between nike-text">
                          <span>Subtotal</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between nike-text">
                          <span>Shipping</span>
                          <span className="text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between nike-text">
                          <span>Tax</span>
                          <span>${(total * 0.08).toFixed(2)}</span>
                        </div>
                        <hr className="border-nike-gray-200 dark:border-nike-gray-700" />
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg text-nike-black dark:text-white">Total</span>
                          <span className="nike-price text-2xl">${(total * 1.08).toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Link to="/checkout" className="block">
                          <motion.button
                            className="nike-btn-primary w-full"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            PROCEED TO CHECKOUT
                          </motion.button>
                        </Link>

                        <Link to="/products" className="block">
                          <motion.button
                            className="nike-btn-secondary w-full"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            CONTINUE SHOPPING
                          </motion.button>
                        </Link>
                      </div>

                      {/* Security Badge */}
                      <div className="mt-6 pt-6 border-t border-nike-gray-200 dark:border-nike-gray-700">
                        <div className="flex items-center justify-center gap-2 nike-text text-sm">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          Secure Checkout
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Cart;
