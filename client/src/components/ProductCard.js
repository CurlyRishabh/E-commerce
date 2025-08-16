import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ProductCard = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
  handleCart,
  index = 0
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleAddToCart = () => {
    if (handleCart) {
      handleCart(title, img, newPrice);
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="nike-card group cursor-pointer overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-nike-gray-50 dark:bg-nike-gray-800 aspect-square">
        {/* Like Button */}
        <motion.button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 z-10 p-2 bg-white/80 dark:bg-nike-gray-800/80 backdrop-blur-sm rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isLiked ? (
            <AiFillHeart className="text-nike-red" size={18} />
          ) : (
            <AiOutlineHeart className="text-nike-gray-600 dark:text-nike-gray-400" size={18} />
          )}
        </motion.button>

        {/* Company Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2 py-1 bg-nike-black/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            {company}
          </span>
        </div>

        {/* Product Image */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center p-6"
          variants={imageVariants}
        >
          <motion.img
            src={img}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            onLoad={() => setIsImageLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-nike-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-nike-black dark:text-white text-sm md:text-base line-clamp-2 group-hover:text-nike-red transition-colors duration-300">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className="text-yellow-400" size={14} />
            ))}
          </div>
          <span className="text-nike-gray-500 text-xs">{reviews}</span>
        </div>

        {/* Category & Color */}
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-nike-gray-100 dark:bg-nike-gray-700 text-nike-gray-600 dark:text-nike-gray-300 text-xs rounded-full capitalize">
            {category}
          </span>
          <div
            className="w-4 h-4 rounded-full border-2 border-nike-gray-300 dark:border-nike-gray-600"
            style={{ backgroundColor: color === 'white' ? '#ffffff' : color }}
            title={color}
          />
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="nike-price">${newPrice}</span>
            {prevPrice && prevPrice !== newPrice && (
              <span className="nike-price-old">${prevPrice}</span>
            )}
          </div>

          {/* Discount Badge */}
          {prevPrice && prevPrice !== newPrice && (
            <span className="px-2 py-1 bg-nike-red text-white text-xs font-semibold rounded-full">
              -{Math.round(((prevPrice - newPrice) / prevPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          className="w-full nike-btn-primary text-sm py-2.5"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ADD TO CART
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;