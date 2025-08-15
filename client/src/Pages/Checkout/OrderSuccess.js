import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { 
  AiOutlineCheckCircle, 
  AiOutlineShoppingCart, 
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCalendar,
  AiOutlineFileText
} from 'react-icons/ai';

const OrderSuccess = ({ orderData }) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  if (!orderData) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="nike-section-title mb-4">No Order Found</h2>
          <Link to="/">
            <motion.button
              className="nike-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GO HOME
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      {/* Success Header */}
      <motion.section
        className="bg-gradient-to-r from-green-50 to-nike-gray-100 dark:from-green-900/20 dark:to-nike-black py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          >
            <AiOutlineCheckCircle className="mx-auto text-green-600 mb-6" size={80} />
          </motion.div>
          
          <motion.h1
            className="nike-hero-text text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Order <span className="text-green-600">Confirmed!</span>
          </motion.h1>
          
          <motion.p
            className="nike-text text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Thank you for your purchase! Your order has been successfully placed and will be processed shortly.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 bg-white dark:bg-nike-gray-800 px-6 py-3 rounded-lg shadow-elegant"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <AiOutlineFileText className="text-nike-red" size={20} />
            <span className="font-semibold text-nike-black dark:text-white">
              Order ID: {orderData.orderId}
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Order Details */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Information */}
            <motion.div
              className="nike-card p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="nike-section-title text-xl mb-6">Order Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AiOutlineCalendar className="text-nike-red flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-nike-gray-600 dark:text-nike-gray-400">Order Date</p>
                    <p className="font-medium text-nike-black dark:text-white">
                      {formatDate(orderData.orderDate)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <AiOutlineFileText className="text-nike-red flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-nike-gray-600 dark:text-nike-gray-400">Order Total</p>
                    <p className="nike-price text-xl">${orderData.total.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <AiOutlineMail className="text-nike-red flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-nike-gray-600 dark:text-nike-gray-400">Email</p>
                    <p className="font-medium text-nike-black dark:text-white">{orderData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <AiOutlinePhone className="text-nike-red flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-nike-gray-600 dark:text-nike-gray-400">Phone</p>
                    <p className="font-medium text-nike-black dark:text-white">{orderData.phone}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Shipping Information */}
            <motion.div
              className="nike-card p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="nike-section-title text-xl mb-6">Shipping Information</h2>
              
              <div className="flex items-start gap-3">
                <AiOutlineHome className="text-nike-red flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-nike-gray-600 dark:text-nike-gray-400 mb-2">Delivery Address</p>
                  <div className="font-medium text-nike-black dark:text-white space-y-1">
                    <p>{orderData.firstName} {orderData.lastName}</p>
                    <p>{orderData.address}</p>
                    <p>{orderData.city}, {orderData.state} {orderData.pincode}</p>
                  </div>
                  
                  {orderData.notes && (
                    <div className="mt-4">
                      <p className="text-sm text-nike-gray-600 dark:text-nike-gray-400 mb-1">Special Instructions</p>
                      <p className="text-sm text-nike-black dark:text-white bg-nike-gray-50 dark:bg-nike-gray-800 p-3 rounded-lg">
                        {orderData.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Order Items */}
          <motion.div
            className="nike-card p-6 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="nike-section-title text-xl mb-6">Order Items</h2>
            
            <div className="space-y-4">
              {orderData.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-nike-gray-50 dark:bg-nike-gray-800 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded bg-white"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-nike-black dark:text-white">{item.title}</h3>
                    <p className="text-nike-gray-600 dark:text-nike-gray-400">
                      Quantity: {item.qty} × ${item.newPrice}
                    </p>
                  </div>
                  <p className="font-semibold text-nike-black dark:text-white">
                    ${(item.qty * parseFloat(item.newPrice)).toFixed(2)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/products">
              <motion.button
                className="nike-btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AiOutlineShoppingCart size={20} />
                CONTINUE SHOPPING
              </motion.button>
            </Link>
            
            <Link to="/">
              <motion.button
                className="nike-btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AiOutlineHome size={20} />
                GO HOME
              </motion.button>
            </Link>
          </motion.div>

          {/* Delivery Information */}
          <motion.div
            className="text-center mt-12 p-6 bg-nike-gray-50 dark:bg-nike-gray-900 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="font-semibold text-nike-black dark:text-white mb-2">What's Next?</h3>
            <p className="nike-text">
              You'll receive an email confirmation shortly with tracking information. 
              Your order will be delivered within 3-5 business days.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OrderSuccess;