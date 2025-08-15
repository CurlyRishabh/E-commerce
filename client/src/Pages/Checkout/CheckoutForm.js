import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  AiOutlineArrowLeft, 
  AiOutlineUser, 
  AiOutlineMail, 
  AiOutlinePhone,
  AiOutlineHome,
  AiOutlineEdit,
  AiOutlineLock
} from 'react-icons/ai';

const CheckoutForm = ({ cartItems, onOrderComplete }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.qty * parseFloat(item.newPrice)), 0);
  const tax = subtotal * 0.08;
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Pincode validation
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onOrderComplete(formData, total);
    setIsSubmitting(false);
  };

  const InputField = ({ icon: Icon, label, name, type = 'text', placeholder, required = true }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-nike-black dark:text-white">
        {label} {required && <span className="text-nike-red">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nike-gray-500" size={20} />
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`nike-input pl-10 ${errors[name] ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
      </div>
      {errors[name] && (
        <motion.p
          className="text-red-500 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {errors[name]}
        </motion.p>
      )}
    </div>
  );

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-nike-gray-50 to-nike-gray-100 dark:from-nike-gray-900 dark:to-nike-black py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/cart">
              <motion.button
                className="p-2 hover:bg-nike-gray-200 dark:hover:bg-nike-gray-800 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineArrowLeft size={24} />
              </motion.button>
            </Link>
            <h1 className="nike-hero-text text-3xl md:text-4xl">
              Secure <span className="text-nike-red">Checkout</span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information */}
                <motion.div
                  className="nike-card p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <AiOutlineUser className="text-nike-red" size={24} />
                    <h2 className="nike-section-title text-xl">Personal Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      icon={AiOutlineUser}
                      label="First Name"
                      name="firstName"
                      placeholder="Enter your first name"
                    />
                    <InputField
                      icon={AiOutlineUser}
                      label="Last Name"
                      name="lastName"
                      placeholder="Enter your last name"
                    />
                    <InputField
                      icon={AiOutlineMail}
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <InputField
                      icon={AiOutlinePhone}
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </motion.div>

                {/* Shipping Address */}
                <motion.div
                  className="nike-card p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <AiOutlineHome className="text-nike-red" size={24} />
                    <h2 className="nike-section-title text-xl">Shipping Address</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <InputField
                      icon={AiOutlineHome}
                      label="Street Address"
                      name="address"
                      placeholder="House number and street name"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <InputField
                        icon={AiOutlineHome}
                        label="City"
                        name="city"
                        placeholder="Enter city"
                      />
                      <InputField
                        icon={AiOutlineHome}
                        label="State"
                        name="state"
                        placeholder="Enter state"
                      />
                      <InputField
                        icon={AiOutlineHome}
                        label="Pincode"
                        name="pincode"
                        placeholder="Enter pincode"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Additional Notes */}
                <motion.div
                  className="nike-card p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <AiOutlineEdit className="text-nike-red" size={24} />
                    <h2 className="nike-section-title text-xl">Additional Notes</h2>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-nike-black dark:text-white">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Special instructions for delivery..."
                      rows={4}
                      className="nike-input resize-none"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  className="nike-card p-6 sticky top-24"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="nike-section-title text-xl mb-6">Order Summary</h3>
                  
                  {/* Order Items */}
                  <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-nike-gray-50 dark:bg-nike-gray-800 rounded-lg">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-12 h-12 object-contain rounded bg-white"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-nike-black dark:text-white line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-nike-gray-600 dark:text-nike-gray-400 text-sm">
                            Qty: {item.qty} × ${item.newPrice}
                          </p>
                        </div>
                        <p className="font-semibold text-nike-black dark:text-white">
                          ${(item.qty * parseFloat(item.newPrice)).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between nike-text">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between nike-text">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between nike-text">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr className="border-nike-gray-200 dark:border-nike-gray-700" />
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-nike-black dark:text-white">Total</span>
                      <span className="nike-price text-2xl">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full nike-btn-primary flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <AiOutlineLock size={20} />
                    {isSubmitting ? 'Processing...' : 'PLACE ORDER'}
                  </motion.button>

                  {/* Security Info */}
                  <div className="mt-6 pt-6 border-t border-nike-gray-200 dark:border-nike-gray-700">
                    <div className="flex items-center justify-center gap-2 nike-text text-sm">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Your payment information is secure
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CheckoutForm;