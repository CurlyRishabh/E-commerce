import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { ThemeProvider } from "../../contexts/ThemeContext";
import Navigation from "../../components/Navigation";
import ProductGrid from "../../components/ProductGrid";
import Added from "../Cart/Added";
import data from "../../Database/data";
// Import ProductCard component
import ProductCard from "../../components/ProductCard";

// Import icons
import { AiOutlineSearch, AiOutlineFilter, AiOutlineClose } from "react-icons/ai";

function ProductHome() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [sortBy, setSortBy] = useState("featured");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeCompany, setActiveCompany] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Categories and companies
  const categories = ["all", "sneakers", "flats", "heels", "sandals"];
  const companies = ["all", "Nike", "Adidas", "Puma", "Vans"];

  useEffect(() => {
    const cookieValue = Cookies.get("productList");
    if (cookieValue) {
      const parsedData = JSON.parse(cookieValue);
      let c = 0;
      for (let i = 0; i < parsedData.length; i++) {
        c += parsedData[i].qty;
      }
      setCartCount(c);
    }
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [query, activeCategory, activeCompany, priceRange, sortBy, searchTerm]);

  function handleCartCount() {
    setCartCount((prev) => prev + 1);
    setShow((prev) => !prev);
    setTimeout(() => {
      setShow((prev) => !prev);
    }, 2500);
  }

  function handleCart(name, pic, cost) {
    const item = {
      title: name,
      img: pic,
      newPrice: cost,
      qty: 1
    };
    handleCartClick(item);
  }

  function handleCartClick(x) {
    const cookieValue = Cookies.get("productList");
    let temp = [];
    if (cookieValue) {
      temp = JSON.parse(cookieValue);
    }

    const check = temp.findIndex((pr) => pr.title === x.title);
    if (check !== -1) {
      temp[check].qty++;
    } else {
      temp.push(x);
    }
    Cookies.set("productList", JSON.stringify(temp), { expires: 1 });
    handleCartCount();
  }

  function filterAndSortProducts() {
    let filtered = data;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Apply company filter
    if (activeCompany !== "all") {
      filtered = filtered.filter(product => product.company === activeCompany);
    }

    // Apply price range filter
    filtered = filtered.filter(product => {
      const price = parseFloat(product.newPrice);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));
        break;
      case "price-high":
        filtered.sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "company":
        filtered.sort((a, b) => a.company.localeCompare(b.company));
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    setFilteredProducts(filtered);
  }

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveCompany("all");
    setPriceRange([0, 300]);
    setSearchTerm("");
    setSortBy("featured");
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-nike-black">
        {/* Added to Cart Notification */}
        {show && <Added />}

        {/* Navigation */}
        <Navigation cartCount={cartCount} />

        {/* Main Content */}
        <div className="pt-20">
          {/* Header Section */}
          <motion.section
            className="bg-gradient-to-r from-nike-gray-50 to-nike-gray-100 dark:from-nike-gray-900 dark:to-nike-black py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="nike-hero-text text-4xl md:text-5xl mb-4">
                  DISCOVER YOUR
                  <br />
                  <span className="text-nike-red">PERFECT PAIR</span>
                </h1>
                <p className="nike-text text-lg max-w-2xl mx-auto">
                  Explore our complete collection of premium footwear designed for every lifestyle and occasion.
                </p>
              </motion.div>

              {/* Search and Filter Bar */}
              <motion.div
                className="flex flex-col md:flex-row gap-4 items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nike-gray-500" size={20} />
                  <input
                    type="text"
                    placeholder="Search shoes, brands..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="nike-input pl-10 w-full"
                  />
                </div>

                {/* Filter Toggle Button */}
                <motion.button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="nike-btn-secondary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AiOutlineFilter size={20} />
                  FILTERS
                </motion.button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="nike-input min-w-[200px]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="company">Brand: A to Z</option>
                </select>
              </motion.div>
            </div>
          </motion.section>

          {/* Filter Sidebar */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                className="fixed inset-0 z-50 lg:relative lg:inset-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Overlay for mobile */}
                <div
                  className="fixed inset-0 bg-black/50 lg:hidden"
                  onClick={() => setIsFilterOpen(false)}
                />

                {/* Filter Panel */}
                <motion.div
                  className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-nike-gray-900 shadow-elegant-lg lg:relative lg:w-full lg:h-auto lg:shadow-none lg:bg-transparent lg:dark:bg-transparent"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                  <div className="p-6 lg:p-0">
                    {/* Filter Header */}
                    <div className="flex items-center justify-between mb-6 lg:hidden">
                      <h3 className="nike-section-title text-xl">Filters</h3>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="p-2 hover:bg-nike-gray-100 dark:hover:bg-nike-gray-800 rounded-lg"
                      >
                        <AiOutlineClose size={20} />
                      </button>
                    </div>

                    <div className="lg:bg-white lg:dark:bg-nike-gray-900 lg:rounded-xl lg:p-6 lg:shadow-elegant">
                      <div className="hidden lg:flex items-center justify-between mb-6">
                        <h3 className="nike-section-title text-xl">Filters</h3>
                        <button
                          onClick={clearFilters}
                          className="text-nike-red hover:text-nike-red/80 text-sm font-medium"
                        >
                          Clear All
                        </button>
                      </div>

                      {/* Category Filter */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-nike-black dark:text-white mb-3">Category</h4>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <label key={category} className="flex items-center">
                              <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={activeCategory === category}
                                onChange={(e) => setActiveCategory(e.target.value)}
                                className="mr-3 text-nike-red focus:ring-nike-red"
                              />
                              <span className="capitalize nike-text">
                                {category === "all" ? "All Categories" : category}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Brand Filter */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-nike-black dark:text-white mb-3">Brand</h4>
                        <div className="space-y-2">
                          {companies.map((company) => (
                            <label key={company} className="flex items-center">
                              <input
                                type="radio"
                                name="company"
                                value={company}
                                checked={activeCompany === company}
                                onChange={(e) => setActiveCompany(e.target.value)}
                                className="mr-3 text-nike-red focus:ring-nike-red"
                              />
                              <span className="nike-text">
                                {company === "all" ? "All Brands" : company}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Price Range Filter */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-nike-black dark:text-white mb-3">
                          Price Range: ${priceRange[0]} - ${priceRange[1]}
                        </h4>
                        <div className="space-y-4">
                          <input
                            type="range"
                            min="0"
                            max="300"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                            className="w-full accent-nike-red"
                          />
                          <input
                            type="range"
                            min="0"
                            max="300"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            className="w-full accent-nike-red"
                          />
                        </div>
                      </div>

                      {/* Mobile Clear Button */}
                      <button
                        onClick={clearFilters}
                        className="w-full nike-btn-secondary lg:hidden"
                      >
                        Clear All Filters
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Section */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Results Info */}
              <motion.div
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="nike-text">
                  Showing {filteredProducts.length} of {data.length} products
                </p>
                
                {(activeCategory !== "all" || activeCompany !== "all" || searchTerm) && (
                  <button
                    onClick={clearFilters}
                    className="text-nike-red hover:text-nike-red/80 text-sm font-medium"
                  >
                    Clear Filters
                  </button>
                )}
              </motion.div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={`${product.title}-${index}`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ProductCard
                        img={product.img}
                        title={product.title}
                        star={product.star}
                        reviews={product.reviews}
                        prevPrice={product.prevPrice}
                        newPrice={product.newPrice}
                        company={product.company}
                        color={product.color}
                        category={product.category}
                        handleCart={handleCart}
                        index={index}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="nike-text text-lg mb-4">No products found matching your criteria.</div>
                  <motion.button
                    onClick={clearFilters}
                    className="nike-btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    SHOW ALL PRODUCTS
                  </motion.button>
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}



export default ProductHome;
