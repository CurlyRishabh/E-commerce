import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import static shoe images
import nikeAirMaxSneakers from "../Pages/Home/ShoesImg/Gallery/nike-air-max-sneakers.png";
import nikeAirMaxRed from '../Database/nike-air-max-red.png';
import nikeAirMaxBlue from '../Database/nik-air-max-blue.png';
import airForceYellow from '../Database/air-force-yellow.png';
import nikeAirMax97 from '../Database/Nike-air-max-97.png';

const HeroSection = ({ handleCart }) => {
  const [currentShoe, setCurrentShoe] = useState(0);

  const heroShoes = [
    {
      img: nikeAirMaxRed,
      title: "Nike Air Max Red",
      price: "160",
      color: "Red",
      description: "Bold design for bold athletes"
    },
    {
      img: nikeAirMaxSneakers,
      title: "Nike Air Max Sneakers",
      price: "180",
      color: "Orange",
      description: "Classic comfort meets modern style"
    },
    {
      img: nikeAirMaxBlue,
      title: "Nike Air Max Blue",
      price: "170",
      color: "Blue",
      description: "Cool performance technology"
    },
    {
      img: airForceYellow,
      title: "Nike Air Force Yellow",
      price: "150",
      color: "Yellow",
      description: "Vibrant energy in every step"
    },
    {
      img: nikeAirMax97,
      title: "Nike Air Max 97",
      price: "190",
      color: "Silver",
      description: "Futuristic design meets comfort"
    }
  ];

  const currentProduct = heroShoes[currentShoe];

  const nextShoe = () => {
    setCurrentShoe((prev) => (prev + 1) % heroShoes.length);
  };

  const prevShoe = () => {
    setCurrentShoe((prev) => (prev - 1 + heroShoes.length) % heroShoes.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nike-gray-50 to-nike-gray-100 dark:from-nike-gray-900 dark:to-nike-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e44c2c' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-nike-red/10 text-nike-red rounded-full text-sm font-semibold mb-4">
                NEW COLLECTION
              </span>
            </motion.div>

            <motion.h1
              className="nike-hero-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              key={currentProduct.title}
            >
              JUST DO IT
              <br />
              <span className="text-nike-red">WITH {currentProduct.color.toUpperCase()}</span>
            </motion.h1>

            <motion.p
              className="nike-text text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              key={currentProduct.description}
            >
              {currentProduct.description}. Discover the latest Nike collection featuring cutting-edge technology,
              premium comfort, and iconic style that defines athletic excellence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link to="/products">
                <motion.button
                  className="nike-btn-primary w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SHOP NOW
                </motion.button>
              </Link>

              <motion.button
                onClick={() => handleCart(currentProduct.title, currentProduct.img, currentProduct.price)}
                className="nike-btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ADD TO CART
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-nike-gray-200 dark:border-nike-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="text-center lg:text-left">
                <div className="nike-price text-3xl">50K+</div>
                <div className="nike-text text-sm">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="nike-price text-3xl">200+</div>
                <div className="nike-text text-sm">Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="nike-price text-3xl">4.9★</div>
                <div className="nike-text text-sm">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Fixed Size Container */}
            <div className="relative w-full h-[500px] md:h-[600px]">
              {/* Background Circle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-nike-red/20 to-nike-red/5 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Shoe Images Container - Fixed Size */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                {heroShoes.map((shoe, index) => (
                  <motion.img
                    key={index}
                    src={shoe.img}
                    alt={shoe.title}
                    className="absolute w-full max-w-lg drop-shadow-2xl"
                    style={{
                      transform: 'rotate(-15deg)',
                      maxHeight: '400px',
                      objectFit: 'contain'
                    }}
                    initial={{
                      opacity: index === currentShoe ? 1 : 0,
                      scale: index === currentShoe ? 1 : 0.8,
                      x: index === currentShoe ? 0 : (index < currentShoe ? -100 : 100)
                    }}
                    animate={{
                      opacity: index === currentShoe ? 1 : 0,
                      scale: index === currentShoe ? 1 : 0.8,
                      x: index === currentShoe ? 0 : (index < currentShoe ? -100 : 100),
                      y: index === currentShoe ? [0, -10, 0] : 0
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      scale: { duration: 0.5 },
                      x: { duration: 0.5 },
                      y: index === currentShoe ? {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      } : { duration: 0.5 }
                    }}
                    whileHover={index === currentShoe ? {
                      scale: 1.05,
                      rotate: -10,
                      transition: { duration: 0.3 }
                    } : {}}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <motion.button
                onClick={prevShoe}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 dark:bg-nike-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-elegant hover:bg-white dark:hover:bg-nike-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-nike-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={nextShoe}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 dark:bg-nike-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-elegant hover:bg-white dark:hover:bg-nike-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-nike-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 right-10 z-10 bg-white dark:bg-nike-gray-800 rounded-full p-4 shadow-elegant"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="nike-price text-lg">${currentProduct.price}</div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 z-10 bg-nike-red text-white rounded-full p-3 shadow-nike"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-sm font-semibold">NEW</span>
              </motion.div>
            </div>

            {/* Shoe Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {heroShoes.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentShoe(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentShoe ? 'bg-nike-red' : 'bg-nike-gray-300 dark:bg-nike-gray-600'
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-nike-gray-400 dark:border-nike-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-nike-red rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;