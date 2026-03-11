
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo3 from "../../assets/navbar/logo3.png";
const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const toggleProducts = () => {
    setProductOpen(!productOpen);
  };
  return (
    <>
      <nav className="navbar">

        <div className="logo">
          
          <img src={logo3} alt="" />
         
        </div>

        <ul className="nav-links m-3 fs-5 fw-bold" >

          <li><Link to="/">Home</Link></li>

          <li><Link to="/about">About</Link></li>

          {/* PRODUCTS DROPDOWN */}
          <li className="dropdown">

            <div className="dropdown-title" onClick={toggleProducts}>
              Products ▾
            </div>

            {productOpen && (
              <ul className="dropdown-menu">

                <li>
                  <Link to="/products/vegetables" onClick={()=>setProductOpen(false)}>
                    Vegetables
                  </Link>
                </li>

                <li>
                  <Link to="/products/powder" onClick={()=>setProductOpen(false)}>
                    Powder
                  </Link>
                </li>

              

              </ul>
            )}

          </li>

          <li><Link to="/services">Services</Link></li>

          <li><Link to="/gallery">Gallery</Link></li>

          <li><Link to="/blog">Blog</Link></li>

          <li><Link to="/contact">Contact</Link></li>

        </ul>

        <Link
          to="/contact"
          className="contact-btn"
          style={{ marginBottom: "20px", marginRight: "28px" }}
        >
          Get Contact
        </Link>

        <div
          className="hamburger"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </div>

      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>

        <div className="close-btn" onClick={() => setSidebarOpen(false)}>×</div>

        <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>

        <Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link>

        {/* MOBILE PRODUCTS DROPDOWN */}
        <div
          className="mobile-dropdown"
          onClick={() => setProductOpen(!productOpen)}
        >
          Products ▾
        </div>

        {productOpen && (
          <div className="mobile-submenu">

            <Link to="/products/vegetables" onClick={() => setSidebarOpen(false)}>
              Vegetables
            </Link>

            <Link to="/products/powder" onClick={() => setSidebarOpen(false)}>
              Powder 
            </Link>

        

          </div>
        )}

        <Link to="/services" onClick={() => setSidebarOpen(false)}>Services</Link>

        <Link to="/gallery" onClick={() => setSidebarOpen(false)}>Gallery</Link>

        <Link to="/blog" onClick={() => setSidebarOpen(false)}>Blog</Link>

        <Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link>

      </div>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

    </>
  );
};

export default Navbar;