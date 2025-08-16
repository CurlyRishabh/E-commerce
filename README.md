# E-commerce Website

A modern, responsive e-commerce website built with React, featuring a complete shopping experience with product browsing, cart management, and checkout functionality. This is a static website showcasing a happy flow user experience for online shoe shopping.

## 🚀 Live Demo
Check out the live demo [here](https://curlyrishabh.github.io/E-commerce/).

## ✨ Features

### 🏠 Home Page
- **Hero Section**: Eye-catching banner with featured products
- **Product Showcase**: Curated collection of popular shoes
- **Testimonials**: Customer reviews and feedback section
- **Footer**: Complete site information and links

### 🛍️ Product Catalog
- **Product Grid**: Clean, organized display of all available products
- **Advanced Filtering**: Filter by category, brand, color, and price
- **Product Cards**: Detailed product information with ratings and pricing
- **Responsive Design**: Optimized for all device sizes

### 🛒 Shopping Cart
- **Add to Cart**: Seamless product addition with quantity management
- **Cart Management**: Update quantities, remove items
- **Real-time Updates**: Live cart count and total calculations
- **Notification System**: User-friendly alerts for cart actions
- **Persistent Storage**: Cart data saved using cookies

### 💳 Checkout Process
- **Secure Checkout**: Complete order processing flow
- **Order Summary**: Detailed breakdown of purchase
- **Order Confirmation**: Success page with order details
- **Order ID Generation**: Unique tracking for each purchase

### 🎨 User Experience
- **Dark/Light Theme**: Toggle between themes with context API
- **Smooth Animations**: Framer Motion powered transitions
- **Mobile Responsive**: Tailwind CSS for perfect mobile experience
- **Fast Loading**: Optimized static assets and components

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0**: Modern React with hooks and functional components
- **React Router DOM**: Client-side routing for SPA experience
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Comprehensive icon library
- **React Confetti**: Celebration effects for successful orders

### State Management
- **React Context API**: Theme management and global state
- **JS Cookies**: Persistent cart storage
- **Local State**: Component-level state management

### Backend (Optional)
- **Node.js & Express**: RESTful API server
- **MongoDB & Mongoose**: Database and ODM
- **JWT**: Authentication tokens
- **bcrypt**: Password hashing

## 📁 Project Structure

```
E-commerce/
├── client/                     # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── HeroSection.js
│   │   │   ├── Navigation.js
│   │   │   ├── ProductCard.js
│   │   │   └── ProductGrid.js
│   │   ├── contexts/           # React contexts
│   │   │   └── ThemeContext.js
│   │   ├── Database/           # Static data and images
│   │   │   └── data.js
│   │   ├── Pages/              # Page components
│   │   │   ├── Home/           # Home page components
│   │   │   ├── Product/        # Product catalog
│   │   │   ├── Cart/           # Shopping cart
│   │   │   └── Checkout/       # Checkout process
│   │   └── App.js              # Main app component
├── server/                     # Node.js backend (optional)
│   ├── routes/                 # API routes
│   └── index.js                # Server entry point
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CurlyRishabh/E-commerce.git
   cd E-commerce
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies (optional)**
   ```bash
   cd ../server
   npm install
   ```

### Running the Application

#### Frontend Only (Static Website)
```bash
cd client
npm start
```
The application will open at `http://localhost:3000`

#### Full Stack (with Backend)
1. **Start the server**
   ```bash
   cd server
   npm start
   ```

2. **Start the client**
   ```bash
   cd client
   npm start
   ```

### Building for Production
```bash
cd client
npm run build
```

### Deployment
The project is configured for GitHub Pages deployment:
```bash
cd client
npm run deploy
```

## 🔄 Recent Updates

### Latest Improvements
- ✅ **Revamped Testimonials & Footer**: Enhanced design and user experience
- ✅ **Fixed Cart Page**: Improved cart functionality and UI
- ✅ **Enhanced Product Filtering**: Better filter system for product discovery
- ✅ **Updated Home Banner**: Fresh, modern hero section design
- ✅ **Improved Notification System**: Better user feedback for actions
- ✅ **General UI/UX Fixes**: Overall website improvements and bug fixes

## 🎯 Key Features Implemented

### Shopping Experience
- **Product Browsing**: Easy navigation through product catalog
- **Search & Filter**: Find products by various criteria
- **Cart Management**: Add, remove, and update cart items
- **Checkout Flow**: Complete purchase process
- **Order Tracking**: Order confirmation and details

### Technical Features
- **Responsive Design**: Works on all devices
- **Theme Switching**: Dark and light mode support
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and structure
- **Accessibility**: WCAG compliant design

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**CurlyRishabh**
- GitHub: [@CurlyRishabh](https://github.com/CurlyRishabh)

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- All contributors and testers

---

⭐ Star this repository if you found it helpful!
