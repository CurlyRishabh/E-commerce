import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineMenu,
    AiOutlineClose,
} from 'react-icons/ai';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const Navigation = ({ cartCount = 0 }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/cart', label: 'Cart' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            className="nike-nav fixed top-0 left-0 right-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <motion.div
                            className="nike-hero-text text-2xl md:text-3xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-nike-red">NIKE</span>
                            <span className="text-nike-black dark:text-white ml-2 font-light">STORE</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative font-medium transition-colors duration-300 ${isActive(item.path)
                                        ? 'text-nike-red'
                                        : 'text-nike-gray-700 dark:text-nike-gray-300 hover:text-nike-red'
                                    }`}
                            >
                                {item.label}
                                {isActive(item.path) && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-nike-red"
                                        layoutId="activeTab"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-4">
                        {/* Dark mode toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-nike-gray-100 dark:bg-nike-gray-800 text-nike-gray-700 dark:text-nike-gray-300 hover:bg-nike-gray-200 dark:hover:bg-nike-gray-700 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isDark ? <CiDark size={20} /> : <CiLight size={20} />}
                        </motion.button>

                        {/* Cart */}
                        <Link to="/cart" className="relative">
                            <motion.div
                                className="p-2 rounded-lg bg-nike-gray-100 dark:bg-nike-gray-800 text-nike-gray-700 dark:text-nike-gray-300 hover:bg-nike-gray-200 dark:hover:bg-nike-gray-700 transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AiOutlineShoppingCart size={20} />
                                {cartCount > 0 && (
                                    <motion.span
                                        className="absolute -top-1 -right-1 bg-nike-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </motion.div>
                        </Link>

                        {/* User */}
                        <motion.button
                            className="p-2 rounded-lg bg-nike-gray-100 dark:bg-nike-gray-800 text-nike-gray-700 dark:text-nike-gray-300 hover:bg-nike-gray-200 dark:hover:bg-nike-gray-700 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AiOutlineUser size={20} />
                        </motion.button>

                        {/* Mobile menu button */}
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-nike-gray-100 dark:bg-nike-gray-800 text-nike-gray-700 dark:text-nike-gray-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white dark:bg-nike-black border-t border-nike-gray-200 dark:border-nike-gray-700"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 py-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-2 font-medium transition-colors duration-300 ${isActive(item.path)
                                            ? 'text-nike-red'
                                            : 'text-nike-gray-700 dark:text-nike-gray-300'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;