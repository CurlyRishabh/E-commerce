import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import data from '../Database/data';

const ProductGrid = ({ handleCart, title = "Featured Products", showFilters = false, limit = 8 }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter categories
  const categories = ['all', 'sneakers', 'flats', 'heels', 'sandals'];
  const companies = ['all', 'Nike', 'Adidas', 'Puma', 'Vans'];

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = data;

    // Apply category filter
    if (activeFilter !== 'all') {
      if (categories.includes(activeFilter)) {
        filtered = filtered.filter(product => product.category === activeFilter);
      } else if (companies.includes(activeFilter)) {
        filtered = filtered.filter(product => product.company === activeFilter);
      }
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return limit ? filtered.slice(0, limit) : filtered;
  };

  const filteredProducts = getFilteredProducts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-nike-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="nike-section-title">{title}</h2>
          <p className="nike-text max-w-2xl mx-auto">
            Discover our curated collection of premium footwear designed for performance, 
            comfort, and style. Each pair represents the pinnacle of athletic innovation.
          </p>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            className="mb-8 space-y-4"
            variants={filterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {[...categories, ...companies.slice(1)].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-nike-red text-white shadow-nike'
                      : 'bg-nike-gray-100 dark:bg-nike-gray-800 text-nike-gray-700 dark:text-nike-gray-300 hover:bg-nike-gray-200 dark:hover:bg-nike-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex justify-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="nike-input max-w-xs"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={`${product.title}-${index}`}
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
          ))}
        </motion.div>

        {/* View All Button */}
        {limit && filteredProducts.length >= limit && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/products">
              <motion.button
                className="nike-btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW ALL PRODUCTS
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="nike-text text-lg">No products found matching your criteria.</div>
            <motion.button
              onClick={() => setActiveFilter('all')}
              className="nike-btn-primary mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SHOW ALL PRODUCTS
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;