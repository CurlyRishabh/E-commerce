import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { ThemeProvider } from "../../contexts/ThemeContext";
import Navigation from "../../components/Navigation";
import HeroSection from "../../components/HeroSection";
import ProductGrid from "../../components/ProductGrid";
import Added from "../Cart/Added";

// Import existing components that we'll keep
import Testimonials from "./Testimonials";
import Footer from "./Footer";

// Import static shoe images for collections
import nikeAirMaxSneakers from "./ShoesImg/Gallery/nike-air-max-sneakers.png";
import nikeAirMaxBlue from "../../Database/nik-air-max-blue.png";
import airForceYellow from "../../Database/air-force-yellow.png";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookieValue = Cookies.get("productList");
    if (cookieValue) {
      const parsedData = JSON.parse(cookieValue);
      let c = 0;
      for (let i = 0; i < parsedData.length; i++) {
        c += parsedData[i].qty;
      }
      setCartCount(c);
      setCart(parsedData);
    }
  }, []);

  function handleCartClick(x) {
    const check = cart.findIndex(pr => pr.title === x.title);
    let temp = cart;

    if (check !== -1) {
      temp[check].qty++;
    } else {
      temp = [...cart, x];
    }

    setCartCount((prev) => prev + 1);
    setCart(temp);

    Cookies.set("productList", JSON.stringify(temp), { expires: 1 });
    console.log(temp);
  }

  function handleCart(name, pic, cost) {
    // Show added to cart notification
    setShow((prev) => !prev);
    setTimeout(() => {
      setShow((prev) => !prev);
    }, 2500);

    const item = {
      title: name,
      img: pic,
      newPrice: cost,
      qty: 1
    };
    console.log(item);
    handleCartClick(item);
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-nike-black">
        {/* Added to Cart Notification */}
        {show && <Added />}

        {/* Navigation */}
        <Navigation cartCount={cartCount} />

        {/* Hero Section */}
        <HeroSection handleCart={handleCart} />

        {/* Best Sellers Section */}
        <ProductGrid 
          handleCart={handleCart}
          title="Best Sellers"
          limit={8}
        />

        {/* Featured Collections Section */}
        <motion.section 
          className="py-16 bg-nike-gray-50 dark:bg-nike-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="nike-section-title">Featured Collections</h2>
              <p className="nike-text max-w-2xl mx-auto">
                Explore our handpicked collections featuring the latest trends and timeless classics 
                that define modern athletic style.
              </p>
            </motion.div>

            {/* Collection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Nike Collection */}
              <motion.div
                className="nike-card group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 bg-gradient-to-br from-nike-red/20 to-nike-red/5 overflow-hidden">
                  <motion.img
                    src={nikeAirMaxSneakers}
                    alt="Nike Collection"
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-nike-black dark:text-white mb-2">Nike Collection</h3>
                  <p className="nike-text mb-4">Premium athletic footwear with cutting-edge technology</p>
                  <div className="flex items-center justify-between">
                    <span className="nike-price">From $120</span>
                    <motion.button
                      className="nike-btn-primary text-sm px-4 py-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      EXPLORE
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Lifestyle Collection */}
              <motion.div
                className="nike-card group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-blue-500/5 overflow-hidden">
                  <motion.img
                    src={nikeAirMaxBlue}
                    alt="Lifestyle Collection"
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-nike-black dark:text-white mb-2">Lifestyle</h3>
                  <p className="nike-text mb-4">Casual comfort meets street-ready style</p>
                  <div className="flex items-center justify-between">
                    <span className="nike-price">From $80</span>
                    <motion.button
                      className="nike-btn-primary text-sm px-4 py-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      EXPLORE
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Performance Collection */}
              <motion.div
                className="nike-card group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 bg-gradient-to-br from-green-500/20 to-green-500/5 overflow-hidden">
                  <motion.img
                    src={airForceYellow}
                    alt="Performance Collection"
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-nike-black dark:text-white mb-2">Performance</h3>
                  <p className="nike-text mb-4">Engineered for athletes and peak performance</p>
                  <div className="flex items-center justify-between">
                    <span className="nike-price">From $150</span>
                    <motion.button
                      className="nike-btn-primary text-sm px-4 py-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      EXPLORE
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* New Arrivals Section */}
        <ProductGrid 
          handleCart={handleCart}
          title="New Arrivals"
          limit={4}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
