import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import LoginPage from './components/LoginPage';
import ProductDetails from './components/ProductDetails';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#EFE8C2] font-[Poppins]">
          <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
              <div className="flex justify-center w-full space-x-10">
              {/* <Link to="/" className="text-[#272727] text-xl font-bold mr-10">Logo  </Link> */}
                <Link to="/" className="text-[#272727] text-xl font-bold hover:text-[#00398F] transition-colors duration-300">Home</Link>
                <Link to="/products" className="text-[#272727] text-xl font-bold hover:text-[#00398F] transition-colors duration-300">Shop</Link>
                <Link to="/about" className="text-[#272727] text-xl font-bold hover:text-[#00398F] transition-colors duration-300">Features</Link>
                <Link to="/contact" className="text-[#272727] text-xl font-bold hover:text-[#00398F] transition-colors duration-300">Contact</Link>
              </div>
              <div className="flex items-center">
                <Link to="/login" className="text-[#272727] hover:text-[#00398F] mr-4">Login</Link>
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="bg-[#00398F] hover:bg-[#002a6a] text-white font-bold py-2 px-4 rounded"
                >
                  Cart
                </button>
              </div>
            </div>
          </nav>

          <main className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route
                path="/product/:id"
                element={
                  <ProductDetails
                    product={{
                      id: 1,
                      name: 'Sample Product',
                      price: 29.99,
                      description: 'This is a sample product description.',
                      imageUrl: 'https://example.com/sample-product.jpg',
                    }}
                  />
                }
              />
            </Routes>
          </main>

          {isCartOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <div className="bg-white w-full max-w-md h-full overflow-y-auto">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-[#272727] hover:text-[#00398F] font-bold"
                    >
                      Close
                    </button>
                  </div>
                  <Cart />
                </div>
              </div>
            </div>
          )}

          <footer className="bg-[#224F34] text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">LOGO</h3>
                  <p>Stay up to date</p>
                  <div className="mt-4 flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 rounded-l-md w-full text-[#272727]"
                    />
                    <button className="bg-[#6F6A42] text-white px-4 py-2 rounded-r-md">Submit</button>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Shop</h4>
                  <ul>
                    <li>Products</li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Company</h4>
                  <ul>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>News</li>
                    <li>Support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Social Media</h4>
                  <div className="social-media-links flex space-x-4">
  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-2xl">
    <FaInstagram />
  </a>
  <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-2xl">
    <FaTwitter />
  </a>
  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-2xl">
    <FaFacebook />
  </a>
</div>

                </div>
              </div>
              <div className="mt-8 text-center">
                <p>Terms | Privacy | Cookies</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;














