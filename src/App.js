import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
// import CartPage from './pages/CartPage';
// import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
// import ContactPage from './pages/ContactPage';
// Import other pages as needed

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
          {/* Define other routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
