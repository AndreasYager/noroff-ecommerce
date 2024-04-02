import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/checkoutsuccess/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <CartProvider>
      {" "}
      <Router>
        <Layout>
          <div id="maincontent">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/checkout-success"
                element={<CheckoutSuccessPage />}
              />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
