import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  // Function to add a new notification
  const addNotification = useCallback((message = "Added to cart") => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      message,
      timestamp: Date.now()
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(notification => notification.id !== id));
    }, 3000);
  }, []);

  // Expose the addNotification function globally
  useEffect(() => {
    window.addNotification = addNotification;
    return () => {
      delete window.addNotification;
    };
  }, [addNotification]);

  return (
    <div className="fixed top-24 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{
              opacity: 0,
              x: 300,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              x: 300,
              scale: 0.8,
              transition: { duration: 0.25 }
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8
            }}
            layout
            className="relative w-48 h-12 bg-red-500 text-white rounded-lg shadow-lg border-2 border-red-100 overflow-hidden"
          >
            {/* Notification Content */}
            <div className="flex items-center justify-center h-full px-4 relative z-10">
              <span className="text-sm font-semibold text-center leading-tight">
                {notification.message}
              </span>
            </div>

            {/* Progress Line Background */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-40 h-1 bg-white/30 rounded-full overflow-hidden">
              {/* Progress Line */}
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{
                  duration: 3,
                  ease: "linear"
                }}
                style={{ transformOrigin: "right" }}
              />
            </div>

            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-600/20 pointer-events-none" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationSystem;