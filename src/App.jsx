import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";

// Pages
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Services from "./pages/Services/services";
import Contact from "./pages/Contact/contact";
import Blog from "./pages/Blog/blog"
import Gallery from "./pages/gallery/gallery";
import Footer from "./Components/Footer/footer";
import ScrollToTop from "./pages/scroll/scroll";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <Router>

      <Navbar />
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* PRODUCTS ROUTES */}

        {/* All Products */}
        <Route path="/products" element={<Products />} />

        {/* Category Products */}
        <Route path="/products/:categorySlug" element={<Products />} />

        {/* Subcategory Products */}
        <Route path="/products/:categorySlug/:subSlug" element={<Products />} />

        <Route path="/services" element={<Services />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </Router>
  );
};

export default App;